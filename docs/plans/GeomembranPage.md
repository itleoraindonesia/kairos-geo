---
plan name: GeomembranPage
plan description: Detail produk ecommerce
plan status: done
---

## Idea
Membangun satu halaman detail produk untuk Geomembran di dalam situs Kairos Geo dengan mengikuti visual language halaman utama. Halaman akan bergaya ecommerce seperti Shopee: galeri foto 4-6 gambar, informasi produk yang menonjol, CTA checkout via Mayar.id, CTA WhatsApp, dan tetap konsisten dengan struktur Astro + Tailwind yang sudah ada. Implementasi idealnya memanfaatkan route produk yang sudah tersedia di `src/pages/produk/[slug].astro` dan memperkaya model data produk di `src/data/products.ts` agar nanti mudah dipakai ulang untuk produk lain.

## Implementation
- Audit komponen dan pola visual dari homepage yang perlu diwarisi ke halaman detail produk.
- Definisikan struktur data produk yang dibutuhkan untuk detail ecommerce Geomembran, termasuk galeri foto, CTA checkout, CTA WhatsApp, highlight, dan spesifikasi/deskripsi.
- Rancang layout halaman produk dengan dua kolom: galeri media di kiri dan panel pembelian/CTA di kanan, lalu siapkan fallback mobile yang tetap nyaman.
- Petakan section konten tambahan yang relevan untuk Geomembran seperti deskripsi, keunggulan, aplikasi, dan informasi teknis singkat tanpa keluar dari design system yang ada.
- Implementasikan halaman Geomembran melalui route produk yang sudah ada dengan prioritas perubahan minimal dan reusable untuk produk lain.
- Validasi hasil pada viewport desktop dan mobile, lalu cek bahwa tautan Mayar.id dan WhatsApp bekerja sesuai format yang diberikan user.

## Required Specs
<!-- SPECS_START -->
<!-- SPECS_END -->