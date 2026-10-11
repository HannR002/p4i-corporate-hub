# Isu yang masih tersisa

> Pembaruan terbaru: verifikasi ulang 11 Oktober 2026 ada pada bagian akhir dokumen; bagian 10 Oktober adalah snapshot historis.

Tanggal: 10 Oktober 2026 (WIB). Source perbaikan dipersiapkan di PR #1; `main` tidak digabungkan atau dideploy oleh finalisasi.

Commit source final yang diuji: `a8527832775f03ce597abddfd1aef79e8e6b76d8`. Commit dokumentasi berikutnya tidak mengubah source aplikasi.

| ID | Kondisi terkonfirmasi / batas bukti | Tingkat / penanggung jawab | Syarat penyelesaian |
|---|---|---|---|
| R01 | History publik memuat 15 blob foto unik. `main` dan branch dokumentasi masih memiliki 14 foto pada snapshot awal; menghapus tracking pada branch PR tidak mencabut refs/commit lama. | Kritis, pemilik repository/GitHub | Backup tahan lama terverifikasi, persetujuan rewrite/force push atau containment alternatif, pembersihan seluruh refs terkait dan cache GitHub/fork yang dapat ditangani. |
| R02 | Produksi masih menyajikan tujuh foto: HTTP 200 dengan checksum cocok pada pemeriksaan read-only. Deployment/cache lama belum dihapus/dipurge. | Kritis, pemilik hosting | Persetujuan containment/deployment produksi, penonaktifan salinan lama, purge cache/optimizer, verifikasi ulang bytes dan jalur alternatif. |
| R03 | Gateway storage privat nyata dan token server belum tersedia; adapter gagal tertutup dan consent tetap false. | Persyaratan sebelum publikasi media, pemilik storage/konten | Storage menolak anonim, token read-only, secret binding server, uji provider nyata, serta bukti consent/approval. Tidak wajib menyediakan storage hanya untuk menjalankan portal tanpa foto. |
| R04 | Preview Vercel terlindungi autentikasi; respons login tidak merupakan HTML aplikasi. Pengujian fungsi/tampilan/CSP/cache preview belum dapat diselesaikan melalui akses publik. | Gate verifikasi deployment, pemilik Vercel | Akses Preview yang sah atau secret automation melalui environment aman; jalankan smoke serta browser/visual checks pada SHA final. |
| R05 | Preservasi 45 berkas hanya terverifikasi di workspace, bukan backup off-site milik pemilik yang sudah diuji pemulihannya. | Gate tindakan destruktif, pemilik data | Terima salinan via kanal privat, verifikasi manifest, enkripsi dan retensi sebelum rewrite/penghapusan salinan lain. |

Daftar ini bukan backlog CMS/database/fitur bisnis baru. Semua poin berkaitan dengan akses eksternal, consent, atau tindakan yang secara eksplisit membutuhkan persetujuan. Tidak ada tindakan destruktif, upload foto, perubahan visibilitas repository, merge, atau deployment produksi yang dilakukan.

Source menolak publikasi tanpa consent dan menghindari bundling bytes foto. Hal tersebut tidak menghapus insiden produksi/history. PR tetap draft; status finalisasi teknis dibedakan dari penutupan insiden. Runbook siap direview ada di [SECURITY_AND_PRIVACY_REMEDIATION](SECURITY_AND_PRIVACY_REMEDIATION.md).

## Verifikasi ulang 11 Oktober 2026 (WIB)

Source commit: `192acb6c988c3c94e9c7b87e4891d27228afcc4a`. Bukti terbaru: [verification/recheck-2026-10-11](verification/recheck-2026-10-11/README.md). Pemeriksaan ulang memakai branch PR yang sama; `main` tidak berubah.

R01–R05 tetap terbuka. R02 kembali terkonfirmasi: tujuh foto produksi masih HTTP 200 dengan checksum cocok; raw main juga demikian. Branch audit tidak memiliki foto tracked, sedangkan main dan branch dokumentasi masing-masing masih memiliki 14 foto pada snapshotnya. Inventaris bernama magang pada 27 commit mengidentifikasi 14 blob; bukti historis 15 dan daftar privat lama harus direkonsiliasi sebelum removal, bukan dikurangi secara otomatis.

R04 tetap blocked oleh 302 protection. Storage nyata/consent (R03) dan backup tahan lama yang diverifikasi pemilik (R05) belum tersedia untuk disahkan. F06 pada guard aset telah diperbaiki dan tidak ditinggalkan sebagai TODO. Tidak ada pekerjaan source baru yang diketahui dapat diselesaikan tetapi ditunda; pekerjaan tersisa memerlukan keputusan/akses eksternal pemilik sesuai runbook. Push biasa ke branch PR sudah diotorisasi; tindakan produksi/destruktif tetap berada di luar izin tersebut.
