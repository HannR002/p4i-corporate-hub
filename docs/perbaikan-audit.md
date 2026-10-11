# Laporan penyelesaian temuan audit P4I Corporate Hub

> Catatan finalisasi 10 Oktober 2026: dokumen ini menyimpan bukti historis pemeriksaan 9 Oktober. A04 dibuka kembali karena foto dan sumbernya masih tracked pada repository publik, dan trace lama menyertakan tujuh foto. Kondisi kode terbaru dan risiko eksternal ada di [FINAL_AUDIT_REPORT.md](FINAL_AUDIT_REPORT.md) serta [SECURITY_AND_PRIVACY_REMEDIATION.md](SECURITY_AND_PRIVACY_REMEDIATION.md). Bukti lama tidak dipakai sebagai pengesahan final.

Tanggal: 9 Oktober 2026. Repository: `HannR002/p4i-corporate-hub`. Dasar perubahan: `main` pada commit `2e6ae709edaa1e21b4b71d15c7f8d43431296f57`. Branch perbaikan: `fix/corporate-hub-audit`.

Laporan ini menindaklanjuti temuan A01–A16 dari [laporan audit sebelumnya](https://github.com/HannR002/p4i-corporate-hub/blob/docs/corporate-hub-audit/docs/audit-corporate-hub/laporan-audit.md). Ruang lingkupnya adalah memperbaiki temuan pada implementasi repository. Tahap rekomendasi pengembangan sistem belum dilaksanakan.

## Perubahan per temuan

| ID | Penyelesaian pada kode | Bukti pemeriksaan |
|---|---|---|
| A01 | Next.js diperbarui dari 16.3.0 ke 16.3.8; Sharp dari versi transitif 0.35.3 menjadi dependensi langsung 0.35.5. | Audit npm untuk seluruh dependensi, termasuk development, tidak melaporkan advisory; build produksi berhasil. |
| A02 | Toolchain Tailwind 3 yang membawa dependensi rentan diganti dengan Tailwind 4.3.3 dan plugin PostCSS resminya. Autoprefixer lama dilepas; utility shadow/radius/blur/outline dimigrasikan. | Audit dependency dan lint lulus; halaman, gambar, dan ukuran viewport diuji di browser. Migrasi versi mayor diperlukan karena toolchain lama masih membawa `braces` yang terkena advisory. |
| A03 | Path hero kegiatan dan rekam jejak diarahkan ke subfolder arsip yang benar. Kualitas gambar 80 didaftarkan pada konfigurasi Next.js. | Pemeriksaan 20 referensi aset tidak menemukan berkas hilang; semua gambar pada 10 halaman publik berhasil dimuat. |
| A04 | Foto magang dipindah dari `public` ke media server privat. Persetujuan publikasi, verifikasi consent, flag magang, dan `enabled` per foto diperiksa. Preview aktivitas juga menggunakan filter yang sama. Optimizer menolak path foto magang. | Tujuh URL langsung menghasilkan 404; tujuh permintaan optimizer menghasilkan 400. Fixture tes persetujuan valid menghasilkan bytes yang benar, sementara foto disabled, filename tak terdaftar, dan traversal ditolak. Header endpoint memakai `private, no-store`. Status consent asli tetap false. |
| A05 | Registry route menjadi sumber guard halaman, navigasi, sitemap, serta tautan. Platform eksternal memakai registry URL/status dan flag. Flag yang belum memiliki implementasi dihapus. | Matriks fungsi dan build produksi dengan fitur dinonaktifkan memeriksa 404, hilangnya menu/kartu/tautan, sitemap, serta penonaktifan redirect jurnal. |
| A06 | Cabang konsultasi yang sebelumnya `return null` kini mempunyai halaman informasi dan tautan kontak resmi. Tidak ada pendaftaran atau transaksi baru. Flag default tetap false. | URL default 404. Build pengujian dengan consulting true menghasilkan 200, judul dan isi terlihat, menu serta sitemap memuatnya. |
| A07 | Judul menjadi “Jejaring Keahlian P4I”. Setiap kartu menampilkan “Arsip 2014” atau “Jejaring digital tambahan”, beserta sumbernya. Data filter diturunkan langsung dari pilihan pengguna. | Filter digital menampilkan satu profil tambahan; filter Wilayah & Tata Ruang menampilkan empat profil arsip. Tidak ada verifikasi kredensial profesional baru yang diklaim. |
| A08 | Lightbox dan panel kontak memakai native dialog, fokus awal setelah pembukaan, pembatasan Tab/Shift+Tab, Escape, serta pengembalian fokus ke pemicu. Target `contact-panel` tersedia meski dialog tertutup. | Pengujian browser memeriksa fokus awal, siklus keyboard, penutupan, backdrop kontak, dan kembali ke tombol yang tepat. Ini bukan sertifikasi WCAG menyeluruh. |
| A09 | Semua halaman memiliki metadata/canonical/Open Graph sesuai route. Sitemap mengikuti registry dan tanggal editorial yang tetap. Metadata dipasang pada server page; interaksi arsip berada pada komponen kecil. | Metadata 10 halaman, sitemap, tanggal publikasi, dan gambar Open Graph diperiksa. Next.js menormalisasi canonical beranda; pemeriksaan membandingkan URL yang telah dinormalisasi. |
| A10 | GA beserta dependensi/integrasinya dilepas dari portal. Kebijakan privasi disesuaikan dengan keadaan ini dan tetap menjelaskan Google Maps, kanal komunikasi, serta log hosting. | Tidak ada request GA/Tag Manager atau cookie `_ga` pada pengujian beranda. Pengaturan akun GA eksternal tidak diubah atau diklaim telah diverifikasi. |
| A11 | CSP script produksi memakai nonce unik dan `strict-dynamic`, tanpa `unsafe-eval`/`unsafe-inline`. Next.js menerima nonce melalui header request. Permissions-Policy, HSTS, nosniff, frame denial, dan referrer policy dikonfigurasi. | Browser dapat menjalankan script Next.js tanpa pelanggaran CSP; nonce request berbeda dan cocok dengan script nyata. `unsafe-eval` hanya untuk development. Inline CSS tetap diizinkan karena dipakai layout/gambar. TLS dan header pada domain produksi belum diuji setelah deployment. |
| A12 | Ditambahkan README operasi, pemeriksaan aset, lint Biome, typecheck strict, pengujian kebijakan/browser, dan workflow CI. | Rangkaian lokal `npm run check` mencakup lint, typecheck, build, dan tes produksi. CI memakai Node 24, install dari lockfile, audit dependency, serta Chromium. Status CI remote dilaporkan terpisah dari hasil lokal. |
| A13 | Duplikasi `historyGallery` dihapus. ExpertNetwork, HistoricalGallery placeholder, dan ThemeProvider yang tidak dipakai dilepas. URL platform, email Gmail, dan kontak halaman legal mengacu ke sumber konfigurasi. | Pencarian source memastikan satu galeri aktif; lint tidak menyisakan import yang tidak dipakai; navigasi/halaman tetap bekerja. |
| A14 | TypeScript strict diaktifkan, byte NUL `.gitignore` dibersihkan, dan `next-env.d.ts` dikeluarkan dari tracking. | Typecheck/build berhasil. File generated tetap dibuat secara lokal dan diabaikan Git. `_source` yang sudah tracked tidak dihapus dari sejarah repository. |
| A15 | Inter 4.1 disajikan lokal dengan lisensi OFL dan checksum. Hero tidak lagi mulai dengan opacity 0. Beranda/rekam jejak menjadi server page; animasi JS lama dan dependensinya dilepas. Reduced motion dihormati; carousel digeser secara manual. | Hero tetap terlihat tanpa JavaScript dan dengan reduced motion; font dimuat dari domain aplikasi, tanpa request Google Fonts. Tidak ada klaim peningkatan performa numerik tanpa benchmark. |
| A16 | Script logo memakai Sharp langsung, menerima input/output, menolak input=output, dan mengembalikan exit code 1 pada kegagalan. | Fixture input hilang gagal; fixture valid menghasilkan PNG transparan, tidak mengubah input, dan tidak menimpa logo repository. |

## Hasil verifikasi akhir

- `npm ci --no-fund`: berhasil dari lockfile, tanpa resolusi peer yang dipaksakan.
- `npm audit --json`: **0 advisory**, termasuk dependensi development, pada waktu pemeriksaan.
- `npm run check:assets`: **20 referensi aset** tersedia dan checksum font cocok.
- `npm run lint`: **55 berkas** diperiksa, tanpa error/warning.
- `npm run typecheck` dan `npm run build`: berhasil dengan TypeScript strict.
- `npm test`: **23 tes lulus**, mencakup 10 route publik, metadata, gambar, privasi media, dialog, filter ahli, tampilan mobile, reduced motion/tanpa JavaScript, redirect, sitemap, script logo, serta nonce script sebenarnya.
- Build matriks alternatif: **11 pemeriksaan lulus** dengan seluruh fitur dinonaktifkan kecuali konsultasi. Source flag dikembalikan ke konfigurasi normal sesudah pengujian, termasuk `consulting: false`.
- Trace bundle server menyertakan **7 berkas media privat**; media tetap tidak berada pada `public`.
- Smoke development: beranda menghasilkan 200, dialog kontak bekerja, dan koneksi HMR terbuat tanpa error console.
- Pemeriksaan visual: beranda dibandingkan dengan snapshot sebelum migrasi; label kartu ahli ditinjau langsung.
- `git diff --check`: lulus. Status CI GitHub dilaporkan pada pull request; hasil lokal di atas tidak disamakan dengan hasil CI remote.

Bukti audit npm dan matriks fitur tersedia pada [folder verification](verification). Semua status adalah hasil pada snapshot ini, bukan jaminan tidak akan ada advisory baru di masa depan.

## Dampak yang perlu diketahui

- Foto magang belum dipublikasikan karena consent belum terverifikasi. Perubahan ini menerapkan kontrol, bukan menciptakan atau mengesahkan bukti izin.
- Google Analytics dinonaktifkan pada portal. Iframe Google Maps tetap tersedia dan tunduk pada kebijakan Google.
- Nonce per request membuat halaman HTML dirender oleh server; aset statis tetap dapat di-cache. Cache bersama untuk HTML perlu memperhitungkan nonce.
- Tailwind 4 menetapkan kebutuhan browser modern: Chrome 111+, Safari 16.4+, atau Firefox 128+.
- File media pada folder `private` tidak disajikan sebagai aset publik oleh aplikasi; akses repository mengikuti pengaturan GitHub. Salinan atau cache foto dari deployment lama tidak dapat dicabut hanya dengan perubahan source.

## Batas verifikasi dan pekerjaan

Perbaikan dilakukan dan diuji pada repository serta server produksi lokal. Bukti persetujuan foto, kredensial orang dalam arsip, pengaturan GA/hosting, TLS domain produksi, retensi log, dan cache deployment lama bukan fakta yang bisa diverifikasi dari source saja. Tidak ada status izin atau konfigurasi eksternal yang dibuat seolah-olah sudah diverifikasi.

Pekerjaan tidak mencakup implementasi rekomendasi CMS, database, login/roles aplikasi, transaksi, pendaftaran daring, atau layanan bisnis tambahan. Branch `main` tidak digabungkan oleh pekerjaan ini.
