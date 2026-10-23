# P4I Corporate Hub

Portal informasi kelembagaan P4I berbasis Next.js App Router, React, TypeScript, dan Tailwind CSS. Konten dikelola dalam source repository. Jurnal OJS dan katalog e-book adalah sistem eksternal; portal ini tidak menyediakan login, database, CMS, ataupun transaksi.

## Menjalankan

Gunakan Node.js 24 (`.nvmrc`) dan npm 11. Dari root repository:

```bash
npm ci
npm run dev
```

Buka http://localhost:3000. Build produksi:

```bash
npm run build
npm run start
```

Font Inter tersedia secara lokal; tidak memerlukan akses Google Fonts. Untuk verifikasi Google Search Console, `GOOGLE_SITE_VERIFICATION` boleh diatur pada environment hosting. Jangan commit berkas `.env`.

## Memeriksa perubahan

```bash
npx playwright install --with-deps chromium
npm audit --audit-level=low
npm run check
```

`check` menjalankan pemeriksaan aset/Git, lint Biome dan ESLint, TypeScript strict, build produksi, pemeriksaan privasi artifact, dan tes Playwright (termasuk axe WCAG A/AA). Tes memulai server produksi sendiri pada `127.0.0.1:3100`; port tersebut harus tersedia. Build harus sudah dibuat sebelum menjalankan `npm test` secara terpisah. Chromium sistem `/usr/bin/chromium` dapat digunakan; lokasi lain dapat diatur lewat `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`. CI menjalankan rangkaian yang sama pada pull request dan perubahan `main`, lalu `npm run test:feature-matrix` pada port 3101.

Lint memakai Biome serta ESLint 10 dengan React Hooks dan aturan keamanan eksekusi JavaScript. Babel hanya memparse sintaks TS untuk ESLint; typecheck strict tetap memakai TypeScript 7. Konfigurasi ini menghindari ketidakcocokan API TypeScript pada config ESLint Next dan dependensi rentan yang ditemukan saat evaluasi config tersebut. Aksesibilitas diperiksa oleh Biome dan tes axe/keyboard. Pengecualian Biome hanya pada keyboard entry point section yang dapat digeser; perilakunya diuji langsung. Fokus awal dua dialog modal diatur setelah `showModal()`; Escape, klik backdrop, pembatasan Tab, dan pengembalian fokus diuji dengan keyboard. Overrides animasi pada preferensi reduced motion disengaja.

Matriks fitur membangun konfigurasi alternatif di `.next-feature-matrix`, menonaktifkan fitur dan mengaktifkan konsultasi untuk menguji route, menu, sitemap, platform, dan penolakan media. Script mengembalikan `lib/features.ts` dan `tsconfig.json` pada blok `finally`; jangan menjalankannya bersamaan dengan pekerjaan yang mengedit kedua berkas tersebut. Build normal di `.next` dipertahankan.

## Mengelola konten

- `lib/site-config.ts`: identitas, kontak, alamat, domain canonical.
- `data/platforms.ts`: URL serta status platform jurnal/e-book. Gunakan `getPlatform`, jangan menduplikasi URL.
- `data/`: program, aktivitas, ahli, organisasi, timeline, dan media arsip; data historis diberi periode/sumber.
- `lib/features.ts`: visibilitas fitur yang sudah memiliki implementasi. Perubahan flag memerlukan build/deploy ulang.
- `lib/routes.ts`: registry route, digunakan untuk guard halaman, navigasi, sitemap, dan tautan internal.
- `data/content-updates.ts`: tanggal editorial per route; ubah hanya ketika konten route benar-benar diperbarui. Tanggal tidak dihitung dari waktu request/build.

`publisher`, `history`, `activities`, `internship`, dan `consulting` mengontrol halaman masing-masing. `training` mengontrol halaman program dan kartu pelatihan. `research` mengontrol kartu bidang riset beranda. `journal` dan `ebook` mengontrol kanal eksternal, kartu, serta tautan terkait; flag jurnal juga mengontrol redirect lama `/journal/**`. Konten arsip historis mengikuti flag `history`, bukan klaim bahwa layanan operasional sedang aktif. Konsultasi tetap `false`; halaman informasi kontaknya sudah memiliki isi apabila kelak diaktifkan.

### Publikasi media magang

Pada 23 Oktober 2026, pemilik website meminta dua pengumuman dihapus dan tujuh foto magang lama ditampilkan kembali. `publicationAuthorizedByOwner: true` mencatat instruksi publikasi tersebut secara terpisah; `publicationConsentVerified` tetap false karena tidak ada klaim baru bahwa dokumen izin peserta telah diverifikasi.

Foto dapat tampil bila `publicationApprovedForWebsite` benar dan salah satu dari verifikasi consent atau instruksi publikasi pemilik aktif. Setiap foto juga harus `enabled: true` dan fitur `internship` aktif. Galeri menampilkan seluruh tujuh foto; kartu kegiatan/beranda memakai filter yang sama.

Tujuh WebP yang memang diminta untuk dipublikasikan disimpan pada `media/published/magang/` dengan manifest SHA-256. Berkas ini sengaja masuk Git publik dan paket server berdasarkan instruksi pemilik; jangan menyebutnya penyimpanan privat. Handler `/archive/p4i/magang/[filename]` memeriksa persetujuan publikasi, flag, enabled, whitelist data dan manifest sebelum membaca berkas. Folder tersebut tidak menjadi URL statis. Next tracing memasukkan tujuh foto ke function terkait; build checker memastikan seluruh foto terpaket. Nama yang tidak terdaftar tetap ditolak.

Mode media privat terpisah tetap memakai gateway HTTPS dengan `MEDIA_STORAGE_BASE_URL` dan `MEDIA_STORAGE_READ_TOKEN` pada environment server. Jika instruksi publikasi pemilik dinonaktifkan, mode privat tetap memerlukan consent dan tidak melakukan fallback ke berkas lokal. Token tidak boleh berada dalam source, `NEXT_PUBLIC_*`, atau artifact. Respons media sukses/ditolak tetap memakai no-store browser/CDN/Vercel dan nosniff. Optimizer menolak jalur magang; halaman memakai `unoptimized`.

`_source`/`private` tetap tidak tracked, diabaikan Vercel, dan dikecualikan dari tracing. Jangan membuat `public/archive/p4i/magang`, `public/private`, atau `public/_source`: asset checker tetap menolak semua jalur tersebut, termasuk file tidak tracked/symlink. Checker juga memastikan foto publikasi cocok dengan manifest serta tidak ada berkas tambahan. Dokumen mentah dan foto JPEG asli tidak dipulihkan.

Laporan 9–11 Oktober pada `docs/` adalah bukti historis audit sebelum instruksi publikasi ini. Lihat [pembaruan publikasi 23 Oktober](docs/PUBLICATION_UPDATE_2026-10-23.md) untuk kebijakan aktif. Tidak dilakukan rewrite history, force push, atau penghapusan backup.

### Keamanan dan privasi

Google Analytics dinonaktifkan; portal tidak memuat library/script GA. Google Maps pada halaman kontak tetap merupakan iframe pihak ketiga dan dijelaskan dalam kebijakan privasi.

`proxy.ts` membuat nonce unik per request dan meneruskannya ke Next.js. CSP script produksi tidak memakai `unsafe-inline`/`unsafe-eval`. Development mengizinkan eval untuk tooling Next.js. CSS tetap mengizinkan inline style yang dipakai komponen gambar/layout. Penggunaan nonce membuat halaman HTML dirender di server per request; jangan menerapkan cache bersama untuk HTML dengan nonce lama. Aset statis tetap dapat di-cache. Header keamanan berlaku melalui `next.config.mjs`; konfigurasi TLS, log, retensi, cache CDN, dan akun pihak ketiga perlu dikelola di hosting masing-masing.

Proxy menetapkan `Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate`, `CDN-Cache-Control: no-store`, dan `Vercel-CDN-Cache-Control: no-store` untuk respons dengan nonce. Jangan mengaktifkan ISR/PPR/static export/cache rule yang menimpa kebijakan ini. Kesesuaian hosting harus diverifikasi pada deployment yang benar-benar mengandung commit final.

Tailwind 4 memerlukan browser modern: Chrome 111+, Safari 16.4+, atau Firefox 128+. Utility yang berubah namanya dimigrasikan untuk menjaga tampilan lama. Font, hero, serta konten halaman tetap tersedia tanpa JavaScript; dialog dan filter memerlukan JavaScript.

## Script logo

```bash
npm run process:logo -- path/input.png path/output.png
```

Tanpa argumen, script menggunakan `public/p4i-logo.png` dan menghasilkan `public/brand/p4i-logo-transparent.png`. Input dan output harus berbeda. Sharp merupakan dependensi langsung; kegagalan mengembalikan exit code 1. Tes menggunakan fixture sementara, bukan menimpa logo repository.

## Batas pekerjaan perbaikan

Rincian penyelesaian temuan A01–A16 dan bukti verifikasi tersedia pada `docs/perbaikan-audit.md`. Pekerjaan ini tidak melaksanakan roadmap rekomendasi seperti CMS, database, autentikasi, atau fitur bisnis baru.
