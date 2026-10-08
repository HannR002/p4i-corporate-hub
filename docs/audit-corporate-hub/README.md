# Laporan audit P4I Corporate Hub

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
