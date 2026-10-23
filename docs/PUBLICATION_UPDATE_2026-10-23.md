# Pembaruan tampilan dan publikasi foto — 23 Oktober 2026

Pemilik website meminta pengumuman periode/sumber pada bagan organisasi dan pengumuman privasi magang dihapus, serta foto magang yang tersedia ditampilkan. Instruksi ini melanjutkan penerimaan risiko foto pada percakapan sebelumnya dan mengubah kebijakan publikasi aplikasi yang dipakai dalam audit 9–11 Oktober. Laporan audit lama tetap menjadi bukti historis, bukan status publikasi aktif.

## Hasil perubahan

- Kotak pengumuman pada bagan organisasi dihapus. Informasi pendirian tetap berasal dari data historis; tidak dibuat klaim bahwa struktur 2014 telah diverifikasi sebagai struktur terkini. Pembina/Pengawas ditata dalam alur layout normal agar tidak bergantung pada tinggi kotak yang sudah dihapus.
- Kotak pengumuman privasi pada halaman magang dihapus. Galeri kini memuat seluruh tujuh foto, termasuk dua foto yang sebelumnya terpotong oleh batas lima gambar. Preview kegiatan/beranda mengikuti persetujuan publikasi yang sama.
- Tujuh WebP lama dipulihkan byte-for-byte dari Git history ke `media/published/magang/`, dengan manifest SHA-256. Foto ini sengaja dipublikasikan dalam repository publik dan function server sesuai instruksi pemilik; folder tersebut bukan storage privat. Dokumen mentah/JPEG asli tidak dipulihkan. Tidak ada metadata EXIF/XMP/IPTC tersemat pada tujuh WebP yang diperiksa.
- `publicationAuthorizedByOwner` mencatat instruksi pemilik secara terpisah. `publicationConsentVerified` tetap false: tidak ada catatan izin peserta yang dibuat seolah-olah sudah diverifikasi. Publication approval, enabled per foto, feature flag dan whitelist tetap diperiksa oleh handler pada setiap request.
- Handler membaca hanya tujuh nama di manifest pada mode publikasi pemilik. Mode storage privat tetap terpisah, memakai gateway HTTPS dan token server sesudah consent, tanpa fallback lokal. Jalur source/private, traversal, nama tidak terdaftar dan optimizer tetap ditolak. Respons media tetap no-store untuk browser/CDN/Vercel dan memakai nosniff.
- Next tracing memasukkan tujuh foto ke function media. Pemeriksaan aset memvalidasi checksum/manifest, dan pemeriksaan build memastikan foto publikasi terpaket sambil tetap melarang sumber privat dan source map browser.
- Tanggal editorial beranda, kegiatan, tentang dan magang diperbarui ke 23 Oktober 2026.

## Perbaikan dependency yang diperlukan untuk CI

Audit terbaru menemukan advisory Next.js pada versi 16.3.8 (GHSA-2464-fhr4-w9xw, GHSA-p3m5-59mp-jv5r, GHSA-673q-mjm6-r5xr). Dependency dipin ke versi perbaikan 16.4.2 yang direkomendasikan audit; lockfile diperbarui tanpa force/legacy-peer-deps. Audit setelah clean install melaporkan 0 advisory.

## Verifikasi lokal

Clean install, audit, asset check (20 referensi), Biome (64 berkas), ESLint, TypeScript strict, production build dan 21 trace lulus. Seluruh tujuh foto terdaftar di trace deployment. **53 tes Playwright lulus tanpa gagal/skip/flaky** pada Next 16.4.2, termasuk gambar ber-checksum benar, tujuh gambar di galeri, hilangnya kedua pengumuman, akses privat, CSP, aksesibilitas dan responsive. **12 pemeriksaan build fitur alternatif lulus**, konfigurasi flags/tsconfig dipulihkan.

Pemeriksaan visual lokal pada viewport 390/768/1440 memastikan dua pengumuman hilang, tujuh gambar ter-load, tidak ada overflow dan 0 error console/page. Peninjauan komponen mengikuti checklist React: komponen tetap server-rendered, key stabil, alt/sizes gambar tersedia, tidak ada state/request credential di client, dan pembacaan file dibatasi ke handler server.

Bukti JSON: [verification/publication-2026-10-23](verification/publication-2026-10-23/summary.json). Screenshot lokal tidak diunggah sebagai artifact tambahan. Status CI dan deployment commit baru dicatat pada PR setelah push; hasil lokal tidak disamakan dengan hasil deployment. Tidak dilakukan rewrite history, force push, atau penghapusan backup.
