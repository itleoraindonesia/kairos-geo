import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../../lib/supabase';
import {
  readFields,
  slugify,
  uniqueSlug,
  htmlToText,
  readingTime,
  uploadCover,
  deleteCover,
} from '../../../lib/articles';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const action = String(form.get('_action') ?? 'create');
  const id = Number(form.get('id'));
  const hasId = Number.isInteger(id) && id > 0;

  const formUrl = hasId ? `/admin/artikel/${id}` : '/admin/artikel/baru';
  const back = (msg: string) => redirect(`${formUrl}?error=${encodeURIComponent(msg)}`);
  const toList = (key: string, msg: string) =>
    redirect(`/admin/artikel?${key}=${encodeURIComponent(msg)}`);

  // ---------- HAPUS ----------
  if (action === 'delete') {
    if (!hasId) return toList('error', 'ID artikel tidak valid.');
    const { data: old } = await supabaseAdmin
      .from('articles')
      .select('cover_image')
      .eq('id', id)
      .single();
    const { error } = await supabaseAdmin.from('articles').delete().eq('id', id);
    if (error) return toList('error', 'Gagal menghapus: ' + error.message);
    await deleteCover(old?.cover_image);
    return redirect('/admin/artikel?deleted=1');
  }

  // ---------- SIMPAN BARU / PERBARUI ----------
  const f = readFields(form);
  if (!f.title) return back('Judul wajib diisi.');
  if (!htmlToText(f.content)) return back('Konten wajib diisi.');

  const cover = form.get('cover_image');
  const hasNewCover = cover instanceof File && cover.size > 0;
  const now = new Date().toISOString();

  if (action === 'update') {
    if (!hasId) return toList('error', 'ID artikel tidak valid.');
    const { data: existing } = await supabaseAdmin
      .from('articles')
      .select('cover_image, published_at')
      .eq('id', id)
      .single();
    if (!existing) return toList('error', 'Artikel tidak ditemukan.');

    let coverUrl: string | null = existing.cover_image;
    if (hasNewCover) {
      const up = await uploadCover(cover as File);
      if (up.error) return back(up.error);
      coverUrl = up.url ?? null;
    }

    const slug = await uniqueSlug(slugify(f.slug || f.title), id);
    const { error } = await supabaseAdmin
      .from('articles')
      .update({
        ...f,
        slug,
        cover_image: coverUrl,
        reading_time: readingTime(f.content),
        published_at: f.is_published ? existing.published_at ?? now : existing.published_at,
        updated_at: now,
      })
      .eq('id', id);

    if (error) {
      if (hasNewCover) await deleteCover(coverUrl);
      return back('Gagal menyimpan: ' + error.message);
    }
    if (hasNewCover) await deleteCover(existing.cover_image);
    return redirect('/admin/artikel?saved=1');
  }

  // create
  if (!hasNewCover) return back('Cover image wajib diunggah.');
  const up = await uploadCover(cover as File);
  if (up.error) return back(up.error);

  const slug = await uniqueSlug(slugify(f.slug || f.title));
  const { error } = await supabaseAdmin.from('articles').insert({
    ...f,
    slug,
    cover_image: up.url,
    reading_time: readingTime(f.content),
    published_at: f.is_published ? now : null,
  });

  if (error) {
    await deleteCover(up.url);
    return back('Gagal menyimpan: ' + error.message);
  }
  return redirect('/admin/artikel?saved=1');
};