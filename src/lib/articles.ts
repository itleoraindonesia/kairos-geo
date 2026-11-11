import { supabaseAdmin } from './supabase';

export const COVER_BUCKET = 'article-covers';
const MAX_COVER_BYTES = 2 * 1024 * 1024;
const ALLOWED: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120);
}

export function htmlToText(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

export function readingTime(html: string): number {
  const words = htmlToText(html).split(' ').filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function uniqueSlug(base: string, excludeId?: number): Promise<string> {
  const root = base || 'artikel';
  let slug = root;
  for (let n = 2; n < 50; n++) {
    let q = supabaseAdmin.from('articles').select('id').eq('slug', slug).limit(1);
    if (excludeId) q = q.neq('id', excludeId);
    const { data, error } = await q;
    if (error) return `${root}-${Date.now()}`;
    if (!data || data.length === 0) return slug;
    slug = `${root}-${n}`;
  }
  return `${root}-${Date.now()}`;
}

export function readFields(form: FormData) {
  const str = (k: string) => String(form.get(k) ?? '').trim();
  const categoryRaw = str('category_id');
  return {
    title: str('title'),
    slug: str('slug'),
    content: String(form.get('content') ?? ''),
    category_id: categoryRaw ? Number(categoryRaw) : null,
    is_published: form.get('is_published') === '1',
    focus_keyword: str('focus_keyword') || null,
    meta_title: str('meta_title') || null,
    meta_description: str('meta_description') || null,
    excerpt: str('excerpt') || null,
    thumbnail_alt: str('thumbnail_alt') || null,
    canonical_url: str('canonical_url') || null,
    is_indexable: form.get('is_indexable') === '1',
  };
}

export async function uploadCover(file: File): Promise<{ url?: string; error?: string }> {
  const ext = ALLOWED[file.type];
  if (!ext) return { error: 'Format gambar harus JPG, PNG, atau WEBP.' };
  if (file.size > MAX_COVER_BYTES) return { error: 'Ukuran gambar maksimal 2MB.' };

  const path = `covers/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const bytes = new Uint8Array(await file.arrayBuffer());
  const opts = { contentType: file.type, upsert: false };

  let { error } = await supabaseAdmin.storage.from(COVER_BUCKET).upload(path, bytes, opts);

  // Kalau bucket belum ada, buat otomatis lalu coba lagi
  if (error && /not found/i.test(error.message)) {
    await supabaseAdmin.storage.createBucket(COVER_BUCKET, { public: true });
    ({ error } = await supabaseAdmin.storage.from(COVER_BUCKET).upload(path, bytes, opts));
  }
  if (error) return { error: 'Gagal upload gambar: ' + error.message };

  const { data } = supabaseAdmin.storage.from(COVER_BUCKET).getPublicUrl(path);
  return { url: data.publicUrl };
}

export async function deleteCover(url?: string | null) {
  if (!url) return;
  const marker = `/${COVER_BUCKET}/`;
  const i = url.indexOf(marker);
  if (i === -1) return;
  await supabaseAdmin.storage.from(COVER_BUCKET).remove([url.slice(i + marker.length)]);
}