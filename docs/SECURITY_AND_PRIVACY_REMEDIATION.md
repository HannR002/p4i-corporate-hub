# Remediasi keamanan dan privasi

Tanggal: 10 Oktober 2026 (WIB). Baseline kode: `f77e0f8795e56ed8701cd0751d5d20c3ff2c6431`. Branch: `fix/corporate-hub-audit`, PR #1. Dokumen ini tidak menyertakan foto, kredensial, identitas peserta, atau URL objek yang sedang terekspos.

Commit source final yang diuji: `a8527832775f03ce597abddfd1aef79e8e6b76d8`. Commit dokumentasi berikutnya tidak mengubah source aplikasi.

## Insiden yang terkonfirmasi

Folder bernama `private` bukan kontrol akses repository. Tujuh WebP dan tujuh JPEG asli masih tracked pada baseline. Pemeriksaan raw GitHub mengunduh tujuh turunan dengan checksum yang cocok. Pemeriksaan read-only produksi juga memperoleh tujuh foto dengan HTTP 200 dan checksum cocok. Ini paparan yang nyata, bukan hanya kemungkinan konfigurasi.

Ketiga branch remote yang diperiksa (`main`, branch perbaikan, branch dokumentasi) mengandung masing-masing tujuh foto asli dan tujuh turunan pada snapshot awal. Inventaris history mengidentifikasi 15 blob foto unik; jumlah ini berbeda dari 14 berkas pada satu snapshot karena riwayat dapat memuat versi tambahan. Tujuh WebP juga disertakan dalam trace build server lama. GitHub Actions pada run baseline tidak memiliki artifact tersimpan. Ketiadaan artifact pada run tersebut tidak membuktikan seluruh penyimpanan/provider bebas salinan.

Preview lama mengembalikan halaman autentikasi Vercel, bukan bytes foto yang cocok. HTTP 200 halaman login tidak dihitung sebagai keberhasilan aplikasi atau bukti media tersedia. Deployment produksi yang diperiksa tetap menggunakan baseline `main`; finalisasi ini tidak menggantinya.

## Preservasi dan penghapusan tracking

Sebelum menghapus tracking, 45 berkas dari `_source` dan `private` disalin ke direktori di luar checkout, seluruh SHA-256 dicocokkan, direktori dibatasi 0700 dan berkas 0600. Manifest, inventaris history, serta daftar 15 blob sensitif disimpan di lokasi privat yang sama. Tidak ada foto/backup yang diunggah ke layanan eksternal. Berkas lokal asal juga tidak dihapus oleh `git rm --cached`.

Seluruh `_source` dikeluarkan dari tracking karena merupakan kumpulan dokumen sumber, ekstraksi, dan gambar mentah, bukan sumber aplikasi yang dibutuhkan build. Aset arsip yang memang dipakai aplikasi tetap berada di `public`. Ini mengurangi peluang salinan mentah tertinggal pada jalur alternatif. `_source` dan `private` diabaikan Git dan Vercel serta dikecualikan dari output tracing. Asset check menolak keduanya bila kembali tracked; build check memeriksa setiap trace dan memastikan foto magang/source map browser tidak ada dalam keluaran.

**Preservasi workspace bukan backup off-site yang telah diverifikasi pemilik.** Pemilik harus menerima salinan melalui kanal privat, mengenkripsi bila dipindahkan, menetapkan retensi/akses, dan memverifikasi manifest. Jangan mengunggah backup ke GitHub, PR, Actions artifact, atau chat publik. Tidak ada backup yang dihapus pada finalisasi ini.

## Sistem media yang diimplementasikan

Alur aktual: request media → validasi dua persetujuan, feature flag, enabled, dan whitelist filename → adapter server → gateway HTTPS berautentikasi → validasi respons → bytes media dengan larangan cache. Penolakan terjadi sebelum storage diakses jika izin publikasi tidak memenuhi syarat.

`lib/private-media-store.ts` hanya membaca dari gateway objek privat melalui `MEDIA_STORAGE_BASE_URL` dan bearer `MEDIA_STORAGE_READ_TOKEN`, keduanya environment server. Tidak ada upload otomatis, URL storage di client, redirect ke bucket, atau fallback membaca media checkout/build. Endpoint media hanya menerima filename yang dikurasi; path traversal/query/object key lain ditolak. Token dari pengunjung/cookie tidak diteruskan ke gateway.

Adapter mensyaratkan HTTPS tanpa userinfo, query atau fragment; redirect ditolak, fetch tidak di-cache, timeout 10 detik, objek dibatasi 8 MiB termasuk streaming, MIME harus WebP dan signature RIFF/WEBP cocok. Penolakan provider, konfigurasi kosong, timeout, MIME/payload salah dan error jaringan menjadi 404 generik tanpa rincian provider/log rahasia. Sukses maupun 404 mempunyai `private, no-store`, larangan cache CDN/Vercel, `nosniff`, serta `noindex, noarchive`. Optimizer tetap menolak jalur foto; foto yang kelak mendapat izin memakai `unoptimized`.

Izin di sini adalah **izin publikasi** objek yang akan menjadi konten publik setelah consent; bukan login/RBAC untuk peserta. Hub tidak membuat akun pengguna baru. Dua persetujuan global, enabled per item, whitelist dan flag diperiksa pada setiap request. Consent asli tetap false. Pengujian positif hanya memakai gambar sintetis 2×2 dan gateway mock; tidak mengubah catatan izin atau menggunakan foto peserta sebagai fixture.

Gateway nyata belum dikonfigurasi: tidak ditemukan binding storage yang sesuai. Saat ini konfigurasi kosong aman karena menolak semua media, termasuk jika metadata approval salah diaktifkan. Sebelum penggunaan media yang disetujui, pemilik harus menyediakan gateway/bucket privat yang menolak akses anonim, token read-only terbatas pada objek yang diperlukan, dan environment server yang terpisah untuk Preview/Production. Jangan gunakan bucket publik atau URL bertoken/query; jangan gunakan `NEXT_PUBLIC_*`. Uji akses gateway tanpa token (harus 401/403/404), dengan read token, revokasi token dan log/retensi. Penyediaan dan pengujian layanan nyata belum dilakukan, dan foto tidak dipindahkan tanpa otorisasi.

## CSP, cache dan pemeriksaan lain

Root layout sudah membaca header request sehingga HTML dinamis; belum ditemukan bukti nonce reuse pada source/server lokal. Finalisasi memperjelas larangan cache bersama melalui Cache-Control, CDN-Cache-Control dan Vercel-CDN-Cache-Control pada proxy. Tes memeriksa empat request bersamaan, nonce unik, nonce script cocok, dan spoof header pengunjung tidak dipakai. Aset ber-fingerprint tetap dapat di-cache. Aturan CDN eksternal yang mengabaikan no-store tetap harus diperiksa pemilik; source tidak dapat memaksa provider yang salah konfigurasi.

Pencarian pola token/private key pada 70 berkas teks tracked awal finalisasi dan 455 objek teks historis tidak menemukan format kredensial berkeyakinan tinggi. Ini pemeriksaan pola terbatas, bukan jaminan semua format rahasia terdeteksi. Tidak ditemukan penggunaan unsafe HTML/eval langsung, SQL/command injection dari request, API login, atau database pada aplikasi. JSON-LD meng-escape `<`; tes query HTML memastikan input tidak dieksekusi. Error storage tidak mengungkap konfigurasi. Audit dependency final mencakup development; bukti hasil ada di TEST_REPORT.

Kontras teks yang gagal axe dan area carousel tanpa entry point keyboard diperbaiki. Script logo juga diperbaiki: uji sintetis membuktikan alias output symlink sebelumnya dapat mengubah input dengan exit 0; sekarang symlink/hardlink ke inode input ditolak dengan exit 1 dan input tetap utuh.

## Runbook pembersihan history — belum dijalankan

**Perintah rewrite/push di bawah hanya boleh dijalankan setelah persetujuan eksplisit pemilik, backup privat yang tahan lama terverifikasi, koordinasi kontributor, dan freeze push.** Runbook bukan otorisasi. Finalisasi tidak melakukan force push, rewrite, perubahan visibilitas, penghapusan deployment/cache/backup, atau deployment produksi.

1. Terima dan verifikasi preservasi lokal; simpan daftar blob sensitif di kanal privat. Inventaris ulang seluruh refs/branches/tags, forks, PR refs dan deployment. Koordinasikan periode freeze supaya tidak ada commit baru hilang.
2. Buat mirror untuk rewrite di direktori privat baru. Simpan backup mirror asli secara terenkripsi **sebelum** filter; mirror/bundle masih mengandung foto sehingga tidak boleh dipublikasikan.
3. Dengan `git-filter-repo` versi yang mendukung `--sensitive-data-removal`, gunakan path removal ditambah daftar blob agar alias/versioned object juga dibersihkan:

```sh
umask 077
# Tentukan lokasi privat dan daftar blob dari preservasi; jangan gunakan direktori publik.
git clone --mirror https://github.com/HannR002/p4i-corporate-hub.git "$P4I_REWRITE_DIR"
cd "$P4I_REWRITE_DIR"
# Backup mirror ini dahulu melalui proses enkripsi/retensi yang disetujui pemilik.
git filter-repo --sensitive-data-removal \
  --path _source/ --path private/ --path public/archive/p4i/magang/ \
  --invert-paths --strip-blobs-with-ids "$P4I_PRIVATE_BLOB_IDS"
```

4. Verifikasi seluruh refs hasil filter: path privat tidak ditemukan; blob sensitif tidak reachable; aplikasi/dokumen tetap benar. Catat old→new commit map secara privat. Minta review hasil sebelum menulis remote. Filter dapat menghapus `origin`; bila perlu tambahkan kembali URL repository yang benar. Publikasikan **hanya refs yang diinventaris dan disetujui**, mengikuti koordinasi branch protection. Jangan memakai `git push --mirror` tanpa review karena dapat menghapus refs yang tidak dimaksud. Force push terhadap refs yang ditulis ulang tetap membutuhkan izin pemilik yang terpisah dari izin push biasa.
5. Minta GitHub Support membersihkan cached views/unreachable objects dan refs PR sesuai kebijakan sensitive-data removal. Ref PR/fork/cache bukan sesuatu yang otomatis hilang dengan filter atau force push. Pastikan kontributor melakukan fresh clone dan tidak mengembalikan history lama.
6. Pemilik hosting harus menghapus/menonaktifkan deployment lama yang mengandung foto serta membersihkan cache CDN/optimizer dan custom-domain alias. Deploy perbaikan produksi hanya setelah persetujuan. Periksa ulang direct media, optimizer dan URL deployment lama menggunakan daftar privat; catat status tanpa menyebarkan URL foto. Salinan pihak ketiga yang sudah diunduh tidak bisa dijamin tercabut.

Keadaan eksternal masih kritis sampai langkah containment/history/cache terverifikasi. Lihat [REMAINING_ISSUES](REMAINING_ISSUES.md) dan [PRODUCTION_READINESS](PRODUCTION_READINESS.md).
