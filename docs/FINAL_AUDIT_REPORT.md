# Final audit P4I Corporate Hub

Tanggal: 10 Oktober 2026 (WIB). Repository: `HannR002/p4i-corporate-hub`. Baseline perbaikan: `f77e0f8795e56ed8701cd0751d5d20c3ff2c6431`; baseline main: `2e6ae709edaa1e21b4b71d15c7f8d43431296f57`. Pekerjaan menggunakan `fix/corporate-hub-audit` dan [PR #1](https://github.com/HannR002/p4i-corporate-hub/pull/1) yang tetap draft.

Commit source final yang diuji: `a8527832775f03ce597abddfd1aef79e8e6b76d8`. Commit dokumentasi berikutnya tidak mengubah source aplikasi.

## Kesimpulan

Implementasi source sudah diperbaiki dan diuji ulang. A04 sebelumnya belum menyelesaikan privasi repository: tujuh WebP serta tujuh JPEG asli masih tersedia melalui GitHub publik dan tujuh turunan masih disajikan produksi. Finalisasi memisahkan bytes media dari repository/deployment dan menyediakan adapter storage HTTPS server berautentikasi yang gagal tertutup. **History, branch yang belum menerima perbaikan, serta produksi/cache lama belum dibersihkan.** Karena risiko eksternal tersebut masih kritis, keputusan saat ini NO-GO untuk persetujuan merge final/deployment produksi; source siap ditinjau, bukan insiden dinyatakan selesai.

Tidak dibuat database, login/RBAC, CMS atau fitur bisnis baru. Tidak dilakukan merge, produksi deploy, rewrite/force push, perubahan visibilitas, upload foto, atau penghapusan backup. Persetujuan consent asli tetap false.

## Inspeksi awal dan metode

Branch remote, seluruh commit/diff PR, komentar/review, workflow CI, `docs/perbaikan-audit.md` dan tiga bukti verifikasi lama diperiksa. PR masih satu commit perbaikan pada baseline saat inspeksi, tanpa review/komentar manusia baru; Vercel memiliki komentar Preview dan CI baseline berhasil. Tidak ditemukan perubahan pengembang lain pada remote branch PR/main saat inspeksi.

Pemeriksaan source meliputi route/flags, pola unsafe HTML/eksekusi, nonce/rendering/cache, media/trace, assets, dialog/carousel, metadata, font, analytics, TypeScript dan helper logo. Buktinya mencakup instalasi lockfile bersih, audit semua dependency, Biome/ESLint, typecheck strict, production build, Playwright/axe, build fitur alternatif, inventaris Git/history, download read-only dengan checksum, dan pemeriksaan Preview. Status source, lokal, CI, Preview, produksi dan layanan storage nyata dibedakan.

## Temuan tambahan yang ditangani

| Temuan | Penyebab dan implementasi | Bukti / risiko residual |
|---|---|---|
| F01: media tersedia di repository publik | Folder privat hanya membatasi HTTP aplikasi. Semua `_source`/`private` dikeluarkan dari index setelah preservasi terverifikasi; CI melarang tracking kembali. | 45 berkas dipreservasi; 14 foto pada snapshot; 15 blob unik pada history. Commit/refs/cache lama belum dihapus. |
| F02: foto ikut bundle server | `outputFileTracingIncludes` memasukkan tujuh foto. Diganti exclusions; `.vercelignore` menolak sumber mentah/media lokal; handler tidak membaca filesystem. | Build privacy memeriksa seluruh trace; tidak ada media privat. Artifact lama di provider belum dipurge. |
| F03: boundary storage/error | Pembacaan lokal tidak memisahkan bytes dari source/deploy. Adapter server menggunakan gateway HTTPS dan token read-only, policy sebelum fetch, whitelist, timeout/size/MIME/signature, redirect ditolak, error generik dan no-store konsisten. | Gateway mock/synthetic fixture diuji; storage nyata belum tersedia. |
| F04: kontras dan keyboard carousel | Axe menemukan teks kurang kontras serta region scroll tanpa fokus. Hanya kelas teks yang gagal diubah; carousel memakai labelled section dengan entry point keyboard. | WCAG A/AA otomatis pada 10 halaman/kedua dialog dan ArrowRight/filter reset; bukan sertifikasi aksesibilitas menyeluruh. |
| F05: alias output logo dapat mengubah input | Perbandingan path tidak mendeteksi symlink/hardlink. Stat device/inode ditambahkan sebelum output diproses. | Reproduksi sintetis baseline exit 0 dengan input berubah; sesudah fix alias ditolak exit 1, input tetap sama. |

Cache proxy diperjelas dengan larangan cache CDN/Vercel. Rendering dinamis dan no-store default Next sudah ada; **tidak ditemukan bukti nonce reuse pada server lokal**. Tambahan header dan tes konkurensi/spoof adalah penguatan kebijakan yang diverifikasi, bukan klaim insiden nonce reuse terjadi sebelumnya.

## Status A01–A16

| ID | Status source terbaru | Dasar verifikasi / batas |
|---|---|---|
| A01 | Terverifikasi | Next 16.3.8 dan Sharp 0.35.5; audit dependency final, build. Advisory dapat berubah kemudian. |
| A02 | Terverifikasi | Tailwind 4.3.3/PostCSS; asset, audit, 360/768/1440 viewport. |
| A03 | Terverifikasi | 20 referensi aset valid, gambar publik dimuat oleh browser. Media privat adalah object key dan bukan file wajib checkout. |
| A04 | Source diperbaiki; insiden eksternal masih terbuka | Policy sebelum storage, direct/optimizer/alternate path denial, mock positif, tracking/trace bersih. History dan produksi lama masih kritis. |
| A05 | Terverifikasi | Policy matrix per flag dan build alternatif route/menu/sitemap/platform/media; konfigurasi normal dipulihkan. |
| A06 | Terverifikasi | Default konsultasi 404; build alternatif true 200 dan konten/menu/sitemap benar. |
| A07 | Terverifikasi | Label historis/tambahan dan filter tetap benar; bukan verifikasi identitas/kredensial orang. |
| A08 | Terverifikasi dan diperluas | Fokus awal, trap, Escape, backdrop, kembali ke pemicu; axe; keyboard carousel. |
| A09 | Terverifikasi | Canonical/OG per route, sitemap/tanggal stabil, robots/OG smoke. |
| A10 | Terverifikasi | Tidak ada request GA/cookie GA; Maps tetap pihak ketiga. Akun GA tidak diubah. |
| A11 | Terverifikasi lokal, deployment belum lengkap | Nonce cocok pada script, berbeda per request/konkurensi, spoof ditimpa, script policy ketat, no-store/CDN headers. Preview protected; provider cache belum disahkan. |
| A12 | Terverifikasi, pipeline diperluas | Clean install, audit, Biome, ESLint 10, strict typecheck, build/trace check, Playwright/axe, CI dan matriks fitur otomatis. CI remote dilaporkan terpisah. |
| A13 | Terverifikasi | Satu galeri aktif dan sumber config bersama; lint/typecheck/browser tidak menunjukkan regresi. |
| A14 | Terverifikasi | Strict true; generated files ignored; source/media privat tidak tracked. |
| A15 | Terverifikasi | Font lokal/checksum, tanpa GA/Google Fonts, hero terlihat tanpa JS/reduced motion, responsive. |
| A16 | Terverifikasi dan diperkuat | Sharp langsung, invalid input/alias exit 1, output transparan dan input preservation termasuk hardlink/symlink. |

## Berkas yang berubah

Server media: `lib/private-media-store.ts`, `app/archive/p4i/magang/[filename]/route.ts`, `next.config.mjs`, `.env.example`, `.gitignore`, `.vercelignore`. Cache: `proxy.ts`. Accessibility: `app/page.tsx`, `app/rekam-jejak/page.tsx`, Footer, OrganizationChart, ContactLauncher, ExpertCarousel. Logo: `scripts/process-logo.js`.

Validasi: package/lockfile, `eslint.config.mjs`, Playwright config, tests policy/media/security/browser, asset/build-privacy/matrix/deployment scripts, workflow checks. Dokumentasi: README, penanda historis pada laporan lama, lima dokumen final dan bukti redacted `docs/verification/final/`. Bytes `_source`/`private` dikeluarkan dari tracking; bukan dihapus dari backup atau history.

ESLint Next config dievaluasi tetapi tidak dipertahankan karena membawa advisory transitif dan parser yang tidak mendukung API TS 7. Final memakai ESLint 10/Babel syntax/React Hooks/security rules, Biome untuk mutu/aksesibilitas source, dan axe untuk DOM. Compiler strict tetap TS 7; tidak menggunakan peer dependency override/legacy-peer-deps atau mematikan audit untuk memperoleh hasil lulus.

## Bukti dan keputusan

[TEST_REPORT](TEST_REPORT.md) memuat hasil runner/command yang benar-benar dijalankan. [SECURITY_AND_PRIVACY_REMEDIATION](SECURITY_AND_PRIVACY_REMEDIATION.md) memuat storage contract, preservasi dan runbook history; [REMAINING_ISSUES](REMAINING_ISSUES.md) mencatat pekerjaan yang memerlukan pemilik. [PRODUCTION_READINESS](PRODUCTION_READINESS.md) menjelaskan gate dan NO-GO. Runbook sudah konkret untuk review tetapi tindakan destruktif/produksi belum diotorisasi.

Hal yang belum dapat disahkan: bukti consent, protected storage nyata, pengujian browser Preview di balik autentikasi, konfigurasi CDN/retensi/provider, penghapusan deployment/cache/refs/fork lama, dan backup tahan lama milik pemilik. Tidak ada hasil lokal yang dipakai sebagai pengganti fakta-fakta eksternal tersebut.
