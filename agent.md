# agent.md

## Project Overview
Kairos Geo adalah website company profile berbasis Astro untuk menampilkan solusi geosintetik dan environmental solutions. Fokus utamanya saat ini adalah landing page, listing produk, dan halaman detail produk.

## Tech Stack
- Astro 6
- TailwindCSS 3
- PNPM
- TypeScript untuk data sederhana

## Run Commands
- Install dependencies: `pnpm install`
- Start dev server: `pnpm dev`
- Build production: `pnpm build`
- Preview build: `pnpm preview`

## Project Structure
- `src/pages/index.astro`: landing page utama
- `src/pages/produk/index.astro`: daftar produk
- `src/pages/produk/[slug].astro`: detail produk statis berdasarkan slug
- `src/layouts/BaseLayout.astro`: layout HTML dasar, metadata, font, favicon
- `src/data/products.ts`: sumber data produk sementara
- `src/styles/global.css`: styling global dan utility visual dasar
- `public/`: aset statis jika dibutuhkan

## Current Architecture
- Situs memakai static routes Astro.
- Detail produk dibangkitkan dari `products` di `src/data/products.ts` lewat `getStaticPaths()`.
- Styling mayoritas dilakukan langsung di komponen `.astro` dengan utility class Tailwind.
- `BaseLayout.astro` menangani title, description, font Google, dan favicon.

## Conventions
- Pertahankan pola Astro sederhana, jangan menambah abstraksi kalau belum perlu.
- Untuk halaman baru, gunakan `BaseLayout.astro`.
- Untuk data katalog sementara, simpan di `src/data/products.ts`.
- Gunakan bahasa Indonesia untuk copy halaman agar konsisten dengan isi situs saat ini.
- Ikuti gaya visual yang sudah ada: rounded cards, gradient aksen, warna brand `kairos-*`, dan layout marketing-style.

## Content Notes
- Beberapa konten masih scaffold atau placeholder.
- Gambar produk dan hero saat ini memakai URL eksternal.
- Data produk belum terhubung ke CMS atau backend.
- CTA utama mengarah ke section `#kontak` di homepage.

## Safe Change Guidelines
- Untuk tambah produk baru, update `src/data/products.ts`.
- Untuk ubah metadata halaman, edit props `title` dan `description` di file page terkait.
- Untuk ubah style global, edit `src/styles/global.css`.
- Untuk perubahan struktur halaman besar, cek dulu apakah anchor seperti `#produk`, `#solusi`, `#kontak` masih dipakai.

## Known Gaps
- Belum ada testing setup.
- Belum ada CMS atau integrasi backend.
- Belum ada form handling nyata untuk inquiry.
- README masih sangat minimal dan bisa diperluas.

## Suggested Next Improvements
- Rapikan README agar onboarding lebih jelas.
- Tambahkan data produk yang lebih lengkap.
- Tambahkan form kontak yang benar-benar mengirim inquiry.
- Optimalkan SEO per halaman produk.
- Pindahkan image penting ke aset lokal atau image pipeline yang lebih stabil.
