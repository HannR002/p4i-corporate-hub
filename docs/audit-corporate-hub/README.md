# Laporan audit P4I Corporate Hub

## Laporan terbaru — setelah perbaikan

**9 Oktober 2026:** [baca laporan terbaru](2026-10-09-pasca-perbaikan/laporan-sistem-terbaru.md), [PDF 28 halaman](2026-10-09-pasca-perbaikan/laporan-sistem-terbaru.pdf), [Word](2026-10-09-pasca-perbaikan/laporan-sistem-terbaru.docx), atau [paket lengkap ZIP](2026-10-09-pasca-perbaikan/paket-laporan-terbaru.zip).

Versi terbaru menganalisis commit `f77e0f8795e56ed8701cd0751d5d20c3ff2c6431` pada branch `fix/corporate-hub-audit` sesudah perbaikan A01–A16. PR #1 masih draft dan belum merged saat laporan dibuat. Enam diagram dan bukti verifikasi disertakan; rekomendasi pengembangan tidak dimasukkan ke laporan terbaru. Lihat [panduan paket](2026-10-09-pasca-perbaikan/README.md).

## Arsip audit awal

Audit kode branch main pada commit `2e6ae709edaa1e21b4b71d15c7f8d43431296f57`, 8 Oktober 2026.

## Dokumen

- [Laporan PDF](laporan-audit.pdf)
- [Laporan Word](laporan-audit.docx)
- [Laporan lengkap Markdown](laporan-audit.md)
- [HTML mandiri](laporan-audit.html)
- [Paket lengkap ZIP](paket-laporan-corporate-hub.zip)

Untuk mengunduh file biner, buka file lalu pilih **Download raw file** di GitHub. Login dengan akun yang memiliki akses jika repositori privat.

Folder ini berisi dokumentasi dan bukti audit; kode aplikasi tidak diubah. Model data implementasi dipisahkan dari usulan database/CMS. Temuan advisory tidak berarti eksploitasi sudah dibuktikan. Platform eksternal OJS/e-book dan hosting produksi belum diaudit.

## Bukti dan sumber

`http-checks.json`, `npm-audit.json`, diagram PNG/SVG/DOT, dan `generate_documents.py` disertakan. Sumber utama laporan adalah `laporan-audit.md`.

Regenerasi dokumen membutuhkan Python dengan python-docx, ReportLab, Pillow, serta Pandoc, Graphviz, dan font DejaVu Sans. Jalankan `python generate_documents.py` dari folder ini. File yang dihasilkan akan diperbarui; jangan menjalankan regenerasi tanpa menyimpan perubahan lokal.
