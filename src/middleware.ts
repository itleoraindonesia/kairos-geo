import { defineMiddleware } from 'astro:middleware';
import { supabasePublic, supabaseAdmin } from './lib/supabase';

const cookieOpts = {
  path: '/',
  httpOnly: true,
  secure: import.meta.env.PROD,
  sameSite: 'lax' as const,
};

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const isAdminPage = pathname.startsWith('/admin') && pathname !== '/admin/login';
  const isAdminApi = pathname.startsWith('/api/admin');
  if (!isAdminPage && !isAdminApi) return next();

  const deny = () =>
    isAdminApi
      ? new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        })
      : context.redirect('/admin/login');

  const access = context.cookies.get('sb-access-token')?.value;
  const refresh = context.cookies.get('sb-refresh-token')?.value;

  let user = null;
  if (access) {
    const { data } = await supabasePublic.auth.getUser(access);
    user = data.user;
  }
  if (!user && refresh) {
    const { data } = await supabasePublic.auth.refreshSession({ refresh_token: refresh });
    if (data.session) {
      context.cookies.set('sb-access-token', data.session.access_token, { ...cookieOpts, maxAge: 3600 });
      context.cookies.set('sb-refresh-token', data.session.refresh_token, { ...cookieOpts, maxAge: 60 * 60 * 24 * 30 });
      user = data.session.user;
    }
  }
  if (!user) return deny();

  const { data: profile } = await supabaseAdmin
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (profile?.role !== 'admin') return deny();

  context.locals.user = { id: user.id, email: user.email ?? '' };
  return next();
});