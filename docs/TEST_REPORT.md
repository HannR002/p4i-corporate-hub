# Laporan pengujian final

Tanggal: 10 Oktober 2026 (WIB). Source baseline sebelum finalisasi: `f77e0f8`. Bukti run final lokal disimpan di `docs/verification/final/`; waktu mesin pada JSON dinyatakan UTC. Rangkaian lengkap dijalankan ulang setelah perubahan kode dan pemilihan toolchain final.

Commit source final yang diuji: `a8527832775f03ce597abddfd1aef79e8e6b76d8`. Commit dokumentasi berikutnya tidak mengubah source aplikasi.

## Hasil yang benar-benar dijalankan

| Pemeriksaan | Hasil lokal | Ruang lingkup |
|---|---|---|
| `npm ci --no-fund` dari lockfile final | Lulus | Node 24.19.0/npm 11.9.0; tanpa `--force` atau `--legacy-peer-deps`. |
| `npm audit --json` | 0 advisory | Seluruh dependency termasuk development, pada waktu pemeriksaan. |
| `npm run check:assets` | 20 referensi valid | Aset publik/checksum Inter, tidak ada `_source`/`private` tracked atau foto di public. |
| `npm run lint` | Lulus, 62 berkas | Biome, tanpa warning/error. |
| `npm run lint:eslint` | Lulus | ESLint 10.12.0, React Hooks dan aturan eksekusi JavaScript; `--max-warnings=0`. |
| `npm run typecheck` | Lulus | Next typegen dan TypeScript 7 strict. |
| `npm run build` | Lulus | Build produksi; halaman HTML dinamis untuk nonce; metadata statis sesuai Next. |
| `npm run check:build-privacy` | Lulus, 21 trace | Tidak memuat media/sumber privat, berkas foto magang, atau source map browser pada artifact. |
| `npm test` | **48 lulus; 0 gagal, skip, flaky** | Chromium produksi lokal; durasi runner 37,4 detik pada run final. |
| `npm run test:feature-matrix` | **12 pemeriksaan lulus** | Build terpisah: fitur dimatikan, konsultasi diaktifkan; route/menu/sitemap/platform/media. Flag dan tsconfig dipulihkan byte-for-byte. |
| Development smoke | Lulus | Beranda 200, 0 console error, satu koneksi HMR, dialog kontak bekerja; eval hanya development. |
| Git diff whitespace | Lulus | Source/dokumen dan staged changes diperiksa sebelum commit. |

Seluruh 23 tes baseline dipertahankan. Tes handler lama diadaptasi untuk membaca fixture sintetis melalui gateway mock karena pembacaan foto nyata dari repository sengaja dihapus. 25 tes baru meliputi boundary storage, denial/error, nonce/cache, jalur alternatif, query HTML, responsive, axe dan keyboard carousel. Tidak ada tes consent yang menggunakan foto peserta atau mengubah source consent.

## Cakupan regresi

- Media: dua persetujuan, enabled, feature flag, whitelist, traversal/encoding, HTTP GET/HEAD/POST, direct URL, filesystem/source paths, optimizer lokal/remote, dan no-store pada penolakan.
- Storage: konfigurasi kosong/invalid, token kosong/CRLF, bearer yang hanya dikirim server, redirect/network/provider 401/403/404/500, HTML/MIME/signature salah, batas bytes deklarasi/streaming, serta tidak ada fallback lokal.
- CSP/cache: empat request bersamaan dengan nonce berbeda, header spoof ditimpa, script nyata/JSON-LD cocok, tanpa eval/inline script produksi, Cache-Control/CDN/Vercel no-store dan HTTP security headers.
- Halaman: 10 route publik, canonical/OG/sitemap/dates, nonaktif konsultasi 404, redirect jurnal, OG PNG, font lokal, semua gambar publik termuat dan tidak ada error console/page.
- UI: viewport 360/768/1440 px untuk seluruh route publik, menu mobile, filter ahli, dialog native/focus trap/Escape/backdrop/return focus, hero tanpa JS/reduced motion, GA/cookie tidak termuat, carousel ArrowRight dan reset posisi setelah filter.
- Accessibility: axe WCAG 2 A/AA pada 10 halaman dan kedua dialog; kontras serta focusable scrolling diperbaiki. Tidak ada aturan axe yang dimatikan. Ini cakupan otomatis terukur, bukan sertifikasi WCAG/assistive technology menyeluruh.
- Logo: input hilang, output transparan, input=output, symlink/hardlink alias, exit code nonzero dan input preservation.

Build alternatif mempunyai 8 denial route/redirect, konten konsultasi 200, sitemap, navigation/cards/platform links, dan media denial: total 12 checks. Policy test per flag juga dijalankan dalam suite utama. `.next` normal dipertahankan dan konfigurasi normal dipulihkan setelah matriks.

## Pemeriksaan eksternal dan batas

Pemeriksaan produksi read-only sebelum perubahan menemukan tujuh respons foto 200 dengan checksum cocok. Raw GitHub pada snapshot main/perbaikan juga memberi tujuh turunan yang cocok. Bukti tersebut dicatat secara redacted, tanpa URL foto atau bytes. Preview yang tersedia menampilkan autentikasi Vercel; helper read-only dengan jaringan proxy memperoleh 302 dan status **blocked**, bukan lulus. Tidak ada bypass protection secret yang tersedia atau dicoba dengan nilai buatan.

**Belum dijalankan:** tes fungsi/tampilan/CSP/CDN browser pada aplikasi Preview yang dilindungi, tes terhadap storage privat nyata, pengujian runtime produksi yang sudah memakai kode final, serta verifikasi purge/history cleanup. Tidak ada deployment/purge/rewrite yang dilakukan sehingga tes atas hasil tindakan itu belum mungkin dijalankan. Firefox, WebKit, audit performa numerik, dan pengujian screen reader manual tidak dijalankan; suite wajib browser menggunakan Chromium.

CI remote untuk commit final harus dibaca terpisah dari run lokal. Status dan SHA dicatat pada PR/bukti CI setelah push. Label Vercel “Ready” tidak membuktikan aplikasi dapat diperiksa di balik protection.

## Menjalankan ulang

```sh
npm ci --no-fund
npm audit --audit-level=low
npx playwright install --with-deps chromium
npm run check
npm run test:feature-matrix
```

Gunakan Node dari `.nvmrc`; pastikan port 3100/3101 tersedia. JSON/HTML hasil Playwright dan trace kegagalan berada pada folder yang diabaikan Git. Jangan menjalankan matriks bersamaan dengan edit `lib/features.ts`/`tsconfig.json`. Jangan menambahkan foto asli sebagai fixture atau mempublikasikan backup privat melalui artifact.
