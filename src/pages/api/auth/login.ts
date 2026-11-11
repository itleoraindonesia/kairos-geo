import type { APIRoute } from 'astro';
import { supabasePublic, supabaseAdmin } from '../../../lib/supabase';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const email = String(form.get('email') ?? '').trim();
  const password = String(form.get('password') ?? '');

  const { data, error } = await supabasePublic.auth.signInWithPassword({ email, password });
  if (error || !data.session) return redirect('/admin/login?error=invalid');

  const { data: profile } = await supabaseAdmin
    .from('profiles')
    .select('role')
    .eq('id', data.user.id)
    .single();
  if (profile?.role !== 'admin') return redirect('/admin/login?error=forbidden');

  const opts = { path: '/', httpOnly: true, secure: import.meta.env.PROD, sameSite: 'lax' as const };
  cookies.set('sb-access-token', data.session.access_token, { ...opts, maxAge: 3600 });
  cookies.set('sb-refresh-token', data.session.refresh_token, { ...opts, maxAge: 60 * 60 * 24 * 30 });
  return redirect('/admin');
};