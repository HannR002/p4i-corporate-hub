# Kesiapan produksi

> Pembaruan terbaru: verifikasi ulang 11 Oktober 2026 ada pada bagian akhir dokumen; bagian 10 Oktober adalah snapshot historis.

Tanggal: 10 Oktober 2026 (WIB). PR yang dipakai: [#1](https://github.com/HannR002/p4i-corporate-hub/pull/1). Tidak dibuat PR duplikat; finalisasi berada pada branch perbaikan yang sama.

Commit source final yang diuji: `a8527832775f03ce597abddfd1aef79e8e6b76d8`. Commit dokumentasi berikutnya tidak mengubah source aplikasi.

**Keputusan: NO-GO untuk persetujuan merge final dan NO-GO untuk deployment produksi pada keadaan sekarang. PR tetap draft.** Source dapat direview, tetapi insiden paparan data pada produksi dan Git history belum ditutup. Merge/deploy sebagai tindakan containment dapat diputuskan secara terpisah oleh pemilik setelah menilai runbook; dokumen ini bukan izin melakukan tindakan tersebut.

| Gate | Status | Bukti/batas |
|---|---|---|
| Implementasi source media | Siap review | Tidak membaca bytes dari checkout; storage server berautentikasi; policy sebelum fetch; gagal tertutup. |
| Install/audit/lint/type/build/tes | Hasil lokal pada TEST_REPORT | Jangan mengganti hasil CI remote dengan hasil lokal. |
| A01–A16 | Status per temuan tersedia | A04 selesai pada mekanisme kode, belum selesai sebagai insiden eksternal. |
| Media dalam Git/build branch PR | Dikeluarkan/dicegah | Pemeriksaan Git index dan trace build; bukan pembersihan history. |
| Consent | Belum terverifikasi, false | Foto harus tetap tidak tampil; tidak ada perubahan catatan izin. |
| Hosting Vercel | Konfigurasi source kompatibel Node 24/Next Node runtime | Environment storage server, CDN/provider config dan protected preview perlu verifikasi pemilik. |
| Preview nyata | Belum terverifikasi secara fungsional | Halaman autentikasi menghalangi pengujian aplikasi dari akses publik. |
| Produksi/cache lama | Tidak siap dinyatakan aman | Tujuh foto terunduh dengan bytes cocok; tidak ada deployment/purge pada finalisasi. |
| History dan backup tahan lama | Memerlukan pemilik | R01/R05 dan runbook history. |

## Kondisi menjalankan portal tanpa foto

Consent tetap false, storage boleh tidak dikonfigurasi, endpoint menolak media. Tidak ada database atau secret aplikasi yang dibutuhkan untuk fungsi portal informasi saat ini. Ini kondisi aman dari **implementasi source baru**, bukan bukti domain produksi sudah memakainya.

Sebelum memakai media yang disetujui, konfigurasi storage harus diuji sungguhan dan bukti consent dikaji penanggung jawab. Token tidak boleh berada dalam `NEXT_PUBLIC_*`, source Git, CLI argumen, PR atau artifact. Pengujian positif lokal memakai gateway mock dan gambar sintetis.

## Verifikasi setelah pemilik memberi akses/izin

1. Pastikan SHA deployment sama dengan commit source final yang disetujui, bukan hanya alias Preview atau label “Ready”.
2. Jalankan helper read-only `node scripts/verify-deployment.mjs "$P4I_PREVIEW_ORIGIN"`; origin HTTPS biasa tanpa path/query/kredensial. Jika deployment terlindungi, automation bypass secret boleh diikat melalui environment server lokal yang aman; jangan memasukkan nilainya pada argumen atau chat. Helper tidak mencetak origin/token atau payload media.
3. Periksa fungsi dan tampilan dengan browser pada desktop/tablet/mobile, navigasi, dialog/fokus, font/gambar, dan script tanpa pelanggaran CSP. Helper HTTP tidak menggantikan pemeriksaan browser.
4. Pastikan request HTML biasa menghasilkan nonce baru, cocok dengan script, tidak berupa CDN HIT, dan tidak di-cache bersama. Aset ber-fingerprint boleh di-cache. Jangan menggunakan ISR/PPR/static export atau rule provider yang menimpa no-store untuk HTML dengan nonce.
5. Pastikan semua jalur media tanpa consent, optimizer, salinan/deployment lama, source/file internal, dan cache sudah ditangani. Catat pemeriksaan tanpa membagikan URL foto.

Pemilik perlu memutuskan containment produksi, proses history/GitHub Support, preservasi tahan lama, dan akses Preview. Tidak ada merge, deploy produksi, purge, rewrite atau perubahan visibilitas yang dilakukan otomatis.

## Verifikasi ulang 11 Oktober 2026 (WIB)

Source commit: `192acb6c988c3c94e9c7b87e4891d27228afcc4a`. Bukti terbaru: [verification/recheck-2026-10-11](verification/recheck-2026-10-11/README.md). Pemeriksaan ulang memakai branch PR yang sama; `main` tidak berubah.

Source audit dan guard tambahan lulus pemeriksaan lokal lengkap: 52 tes dan 12 checks build fitur, dependency 0 advisory. PR dapat ditinjau, tetapi tetap draft. Seluruh gate eksternal pada tabel di atas masih berlaku. Portal dapat berjalan tanpa storage/consent karena endpoint fail-closed; penyediaan storage nyata hanya wajib sebelum publikasi foto yang disetujui.

Produksi/raw main hari ini masih menyediakan tujuh foto dengan checksum cocok dan Preview masih protected (302). Karena itu **NO-GO untuk merge final dan NO-GO deployment produksi** sampai pemilik memutuskan containment, memastikan backup privat tahan lama, memberi akses Preview yang sah serta menangani history/deployment/cache. Push ke branch audit hanya menghasilkan update PR/Preview yang dikonfigurasi provider; tidak melakukan merge atau perintah deployment produksi.
