# Isu yang masih tersisa

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
