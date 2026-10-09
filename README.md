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

`check` menjalankan pemeriksaan aset, lint Biome, TypeScript strict, build produksi, dan tes Playwright. Tes memulai server produksi sendiri pada `127.0.0.1:3100`; port tersebut harus tersedia. Build harus sudah dibuat sebelum menjalankan `npm test` secara terpisah. Chromium sistem `/usr/bin/chromium` dapat digunakan; lokasi lain dapat diatur lewat `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`. CI menjalankan rangkaian yang sama pada pull request dan perubahan `main`.

Lint menggunakan Biome agar toolchain tidak membawa kembali dependensi `braces` yang terkena advisory. Fokus awal dua dialog modal diatur setelah `showModal()`; Escape, klik backdrop, pembatasan Tab, dan pengembalian fokus diuji dengan keyboard. Overrides animasi pada preferensi reduced motion disengaja.

## Mengelola konten

- `lib/site-config.ts`: identitas, kontak, alamat, domain canonical.
- `data/platforms.ts`: URL serta status platform jurnal/e-book. Gunakan `getPlatform`, jangan menduplikasi URL.
- `data/`: program, aktivitas, ahli, organisasi, timeline, dan media arsip; data historis diberi periode/sumber.
- `lib/features.ts`: visibilitas fitur yang sudah memiliki implementasi. Perubahan flag memerlukan build/deploy ulang.
- `lib/routes.ts`: registry route, digunakan untuk guard halaman, navigasi, sitemap, dan tautan internal.
- `data/content-updates.ts`: tanggal editorial per route; ubah hanya ketika konten route benar-benar diperbarui. Tanggal tidak dihitung dari waktu request/build.

`publisher`, `history`, `activities`, `internship`, dan `consulting` mengontrol halaman masing-masing. `training` mengontrol halaman program dan kartu pelatihan. `research` mengontrol kartu bidang riset beranda. `journal` dan `ebook` mengontrol kanal eksternal, kartu, serta tautan terkait; flag jurnal juga mengontrol redirect lama `/journal/**`. Konten arsip historis mengikuti flag `history`, bukan klaim bahwa layanan operasional sedang aktif. Konsultasi tetap `false`; halaman informasi kontaknya sudah memiliki isi apabila kelak diaktifkan.

### Persetujuan media magang

Foto magang hanya boleh tampil ketika **keduanya** benar pada `data/internship.ts`:

1. `publicationConsentVerified`: bukti persetujuan publikasi telah diverifikasi oleh penanggung jawab.
2. `publicationApprovedForWebsite`: penanggung jawab menyetujui publikasi di website.

Setiap foto juga harus `enabled: true` dan fitur `internship` aktif. Jangan mengubah status verifikasi tanpa bukti. Pada keadaan saat ini consent belum terverifikasi, sehingga foto tidak dipublikasikan.

Foto berada di `private/media/magang`, diakses melalui route server yang memeriksa persetujuan serta daftar filename. Semua preview memakai data yang sudah difilter. Endpoint menggunakan `private, no-store`; pemroses gambar Next.js menolak path magang untuk mencegah cache melewati kontrol. Foto yang disetujui memakai `unoptimized` agar akses tetap melalui guard. Konfigurasi tracing menyertakan media privat pada bundle server.

Folder `private` bukan kontrol akses GitHub: akses repository tetap mengikuti pengaturan GitHub. Salinan yang pernah dipublikasikan atau disimpan pihak lain tidak dapat dicabut oleh perubahan source ini. Bila hosting/CDN lama memiliki cache foto, penanggung jawab deployment perlu menghapus cache tersebut saat menerapkan perubahan. Repository tidak mengubah pengaturan hosting atau bukti izin.

### Keamanan dan privasi

Google Analytics dinonaktifkan; portal tidak memuat library/script GA. Google Maps pada halaman kontak tetap merupakan iframe pihak ketiga dan dijelaskan dalam kebijakan privasi.

`proxy.ts` membuat nonce unik per request dan meneruskannya ke Next.js. CSP script produksi tidak memakai `unsafe-inline`/`unsafe-eval`. Development mengizinkan eval untuk tooling Next.js. CSS tetap mengizinkan inline style yang dipakai komponen gambar/layout. Penggunaan nonce membuat halaman HTML dirender di server per request; jangan menerapkan cache bersama untuk HTML dengan nonce lama. Aset statis tetap dapat di-cache. Header keamanan berlaku melalui `next.config.mjs`; konfigurasi TLS, log, retensi, cache CDN, dan akun pihak ketiga perlu dikelola di hosting masing-masing.

Tailwind 4 memerlukan browser modern: Chrome 111+, Safari 16.4+, atau Firefox 128+. Utility yang berubah namanya dimigrasikan untuk menjaga tampilan lama. Font, hero, serta konten halaman tetap tersedia tanpa JavaScript; dialog dan filter memerlukan JavaScript.

## Script logo

```bash
npm run process:logo -- path/input.png path/output.png
```

Tanpa argumen, script menggunakan `public/p4i-logo.png` dan menghasilkan `public/brand/p4i-logo-transparent.png`. Input dan output harus berbeda. Sharp merupakan dependensi langsung; kegagalan mengembalikan exit code 1. Tes menggunakan fixture sementara, bukan menimpa logo repository.

## Batas pekerjaan perbaikan

Rincian penyelesaian temuan A01–A16 dan bukti verifikasi tersedia pada `docs/perbaikan-audit.md`. Pekerjaan ini tidak melaksanakan roadmap rekomendasi seperti CMS, database, autentikasi, atau fitur bisnis baru.
