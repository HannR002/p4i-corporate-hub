from pathlib import Path
import subprocess, json, html, re
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parent
diagrams = {
'diagram-arsitektur': '''digraph G {
rankdir=LR;
user [label="Pengunjung\nBrowser publik",fillcolor="#dbeafe"];
next [label="Next.js App Router\nHTML / CSS / JavaScript\nMetadata, headers, redirect",fillcolor="#bfdbfe"];
data [label="Konten repository\ndata/*.ts dan lib/*.ts\nNarasi dalam TSX",fillcolor="#dcfce7"];
assets [label="Aset public/\nLogo, arsip, foto",fillcolor="#dcfce7"];
ext [label="Platform eksternal\nOJS / E-Book\nWhatsApp / Email / Instagram",fillcolor="#fef3c7"];
google [label="Google Maps / Analytics\nIntegrasi browser",fillcolor="#fef3c7"];
font [label="Google Fonts\nUnduhan saat build",fillcolor="#fef3c7"];
user -> next [label="HTTP"];
data -> next [label="import / build"];
assets -> next [label="aset / image optimization"];
user -> ext [label="klik tautan"];
user -> google [label="iframe / script"];
font -> next [label="Inter"];
note [label="Tidak ada database, login,\nRBAC, atau API bisnis di Hub",shape=note,fillcolor="#f1f5f9"];
next -> note [style=dashed,arrowhead=none];
}''',
'diagram-workflow': '''digraph G {
rankdir=TB;
start [label="Pengunjung membuka portal",fillcolor="#dbeafe"];
read [label="Membaca profil / program / kegiatan\natau menjelajah arsip dan tenaga ahli",fillcolor="#dbeafe"];
choice [label="Tujuan berikutnya",shape=diamond,fillcolor="#fef3c7"];
gallery [label="Arsip -> lightbox\nFilter ahli -> carousel",fillcolor="#dcfce7"];
contact [label="Kontak / CTA program\nWhatsApp, mailto, Gmail",fillcolor="#fef3c7"];
pub [label="Publikasi\nTautan OJS / E-Book",fillcolor="#fef3c7"];
outside [label="Proses selanjutnya pada kanal eksternal\nHub tidak menyimpan pendaftaran atau pesan",fillcolor="#f1f5f9"];
start -> read -> choice;
choice -> gallery [label="dokumentasi"];
choice -> contact [label="komunikasi"];
choice -> pub [label="jurnal / literatur"];
contact -> outside; pub -> outside;
subgraph cluster_ops {label="Alur pengelolaan konten melalui kode (di luar UI)";color="#94a3b8";
curate [label="Kurasi materi dan izin",fillcolor="#e0e7ff"];
edit [label="Ubah data / TSX / aset di repository",fillcolor="#e0e7ff"];
check [label="Review -> install -> typecheck -> build\n-> smoke check -> deployment",fillcolor="#e0e7ff"];
curate -> edit -> check;
}
}''',
'diagram-erd-konten': '''digraph G {
rankdir=TB;
site [label="SITE_CONFIG\nname, legalName, url, metadataBase",fillcolor="#dbeafe"];
location [label="LOCATION\nid, type, address, mapQuery",fillcolor="#dcfce7"];
contact [label="CONTACT\nwhatsapp, email, link",fillcolor="#dcfce7"];
category [label="PROGRAM_CATEGORY\nid, title, description",fillcolor="#dbeafe"];
program [label="PROGRAM_NAME\nstring, bukan tabel",fillcolor="#dcfce7"];
org [label="ORGANIZATION_STRUCTURE\nperiod, historical, source",fillcolor="#dbeafe"];
member [label="ORG_MEMBER\nname, title, portraitVerified",fillcolor="#dcfce7"];
division [label="BIDANG\nname, members",fillcolor="#dcfce7"];
intern [label="INTERNSHIP_PROGRAM\nyear, count, approval flags",fillcolor="#dbeafe"];
photo [label="GALLERY_ITEM\nimage, caption, enabled",fillcolor="#dcfce7"];
expert [label="EXPERT\nid, category, historical, portrait",fillcolor="#fef3c7"];
journal [label="JOURNAL\nid, url, active",fillcolor="#fef3c7"];
activity [label="ACTIVITY\nid, slug, year, image, historical",fillcolor="#fef3c7"];
media [label="HISTORICAL_MEDIA\nid, image, source, verification",fillcolor="#fef3c7"];
milestone [label="TIMELINE / MILESTONE\nyear, title, category (historical)",fillcolor="#fef3c7"];
site -> location [label="1 ke banyak, nested"];
site -> contact [label="1 ke 1, nested"];
category -> program [label="1 ke banyak, string[]"];
org -> member [label="pembina / pengurus / pengawas"];
org -> division [label="1 ke banyak"];
division -> member [label="members[]"];
intern -> photo [label="1 ke banyak"];
milestone -> media [style=dashed,label="asosiasi kode tertentu"];
note [label="Model konten TypeScript, bukan SQL\nTidak ada PK/FK database\nKoleksi kuning berdiri sendiri",shape=note,fillcolor="#f1f5f9"];
}''',
'diagram-erd-usulan': '''digraph G {
rankdir=LR;
users [label="USERS\nid PK, email UNIQUE",fillcolor="#dbeafe"];
roles [label="ROLES\nid PK, code UNIQUE",fillcolor="#dbeafe"];
ur [label="USER_ROLES\nuser_id FK, role_id FK\ncomposite PK",fillcolor="#dcfce7"];
content [label="CONTENT_ITEMS\nid PK, author_id FK\nkind, slug UNIQUE, status",fillcolor="#dbeafe"];
rev [label="REVISIONS\nid PK, content_id FK\neditor_id FK, snapshot",fillcolor="#dcfce7"];
cm [label="CONTENT_MEDIA\ncontent_id FK, media_id FK\ncomposite PK, sort_order",fillcolor="#dcfce7"];
media [label="MEDIA_ASSETS\nid PK, storage_key UNIQUE\nverification, approved",fillcolor="#dbeafe"];
consent [label="MEDIA_CONSENTS\nid PK, media_id FK\nreference, verified/revoked",fillcolor="#dcfce7"];
logs [label="AUDIT_LOGS\nid PK, actor_id FK\naction, entity, timestamp",fillcolor="#dcfce7"];
users -> ur [label="1:N"]; roles -> ur [label="1:N"];
users -> content [label="1:N author"];
content -> rev [label="1:N"]; users -> rev [label="1:N editor"];
content -> cm [label="1:N"]; media -> cm [label="1:N"];
media -> consent [label="1:N"]; users -> logs [label="1:N"];
note [label="USULAN CMS, belum diimplementasikan\nDiagram memuat inti CMS; tabel domain\ntambahan dijelaskan di laporan",shape=note,fillcolor="#fef3c7"];
}'''
}
for name, body in diagrams.items():
    body = body.replace('digraph G {', 'digraph G {\ngraph [bgcolor="white",pad="0.25",nodesep="0.35",ranksep="0.65",dpi=140];\nnode [shape=box,style="rounded,filled",fontname="DejaVu Sans",fontsize=11,color="#94a3b8",margin="0.15,0.12"];\nedge [fontname="DejaVu Sans",fontsize=9,color="#64748b"];', 1)
    if name == 'diagram-erd-konten':
        body = body.replace('rankdir=TB;', 'rankdir=TB;\ngraph [pack=true,packmode="array_u3"];')
    dot = ROOT / (name+'.dot')
    dot.write_text(body)
    subprocess.run(['dot','-Tpng',str(dot),'-o',str(ROOT/(name+'.png'))],check=True)
    subprocess.run(['dot','-Tsvg',str(dot),'-o',str(ROOT/(name+'.svg'))],check=True)

subprocess.run(['pandoc','laporan-audit.md','--standalone','--toc','--toc-depth=2','--embed-resources','--css=report.css','-o','laporan-audit.html'],cwd=ROOT,check=True)
subprocess.run(['pandoc','laporan-audit.md','--standalone','--toc','--toc-depth=2','-o','laporan-audit.docx'],cwd=ROOT,check=True)
ast=json.loads(subprocess.check_output(['pandoc','laporan-audit.md','-t','json'],cwd=ROOT))

fontroot=Path('/usr/share/fonts/truetype/dejavu')
for name, file in [('DV','DejaVuSans.ttf'),('DV-Bold','DejaVuSans-Bold.ttf'),('DV-Italic','DejaVuSans-Oblique.ttf'),('DV-BoldItalic','DejaVuSans-BoldOblique.ttf'),('DVM','DejaVuSansMono.ttf')]:
    pdfmetrics.registerFont(TTFont(name,str(fontroot/file)))
pdfmetrics.registerFontFamily('DV',normal='DV',bold='DV-Bold',italic='DV-Italic',boldItalic='DV-BoldItalic')
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='Text',fontName='DV',fontSize=9,leading=14,spaceAfter=7))
styles.add(ParagraphStyle(name='SmallText',parent=styles['Text'],fontSize=7,leading=10,spaceAfter=3))
styles.add(ParagraphStyle(name='CodeText',fontName='DVM',fontSize=7,leading=10,spaceAfter=8))
for k,size in [('Heading1',17),('Heading2',12),('Heading3',10)]:
    styles[k].fontName='DV-Bold';styles[k].fontSize=size;styles[k].leading=size+5;styles[k].spaceBefore=12;styles[k].spaceAfter=8

def inline(items):
    out=[]
    for it in items:
        t,c=it['t'],it.get('c')
        if t=='Str': out.append(html.escape(c))
        elif t in ['Space','SoftBreak']: out.append(' ')
        elif t=='LineBreak': out.append('<br/>')
        elif t=='Strong': out.append('<b>'+inline(c)+'</b>')
        elif t=='Emph': out.append('<i>'+inline(c)+'</i>')
        elif t=='Code': out.append('<font name="DVM">'+html.escape(c[1])+'</font>')
        elif t=='Link': out.append(inline(c[1]))
        elif t=='Image': out.append(inline(c[1]))
        elif t=='Quoted': out.append('“'+inline(c[1])+'”')
    return ''.join(out)

story=[]
story.append(Paragraph('Laporan Audit dan Analisis Sistem',styles['Heading1']))
story.append(Paragraph('P4I Corporate Hub',styles['Heading1']))
story.append(Paragraph('HannR002/p4i-corporate-hub · main<br/>8 Oktober 2026 — Asia/Jakarta<br/>Commit 2e6ae709edaa1e21b4b71d15c7f8d43431296f57',styles['Text']))
story.append(Spacer(1,16))
story.append(Paragraph('Arsitektur • Workflow • Peran • Use Case • Model Data<br/>Fitur • Struktur Kode • Audit Teknis • Rekomendasi',styles['Text']))
story.append(Spacer(1,20))
story.append(Paragraph('Dokumen berbasis inspeksi kode dan pengujian produksi lokal. Model database masa depan dipisahkan dari model konten yang ada.',styles['Text']))
story.append(PageBreak())
story.append(Paragraph('Daftar isi',styles['Heading1']))
for block in ast['blocks']:
    if block['t']=='Header' and block['c'][0]==1:
        story.append(Paragraph(inline(block['c'][2]),styles['Text']))
story.append(PageBreak())

width=A4[0]-84
def render_blocks(blocks,small=False):
    result=[]
    for b in blocks:
        t,c=b['t'],b.get('c')
        st=styles['SmallText'] if small else styles['Text']
        if t=='Header':
            if c[0]==1 and result: result.append(Spacer(1,6))
            result.append(Paragraph(inline(c[2]),styles['Heading'+str(min(c[0],3))]))
        elif t in ['Para','Plain']:
            if len(c)==1 and c[0]['t']=='Image':
                from PIL import Image as PILImage
                file=ROOT/c[0]['c'][2][0]
                with PILImage.open(file) as im: iw,ih=im.size
                factor=min(width/iw,390/ih)
                result.append(Image(str(file),width=iw*factor,height=ih*factor))
                result.append(Paragraph(inline(c[0]['c'][1]),styles['SmallText']))
                result.append(Spacer(1,8))
            else: result.append(Paragraph(inline(c),st))
        elif t in ['BulletList','OrderedList']:
            items=c if t=='BulletList' else c[1]
            for idx,item in enumerate(items,1):
                for j,sub in enumerate(item):
                    if sub['t'] in ['Para','Plain']:
                        prefix=('• ' if t=='BulletList' else str(idx)+'. ') if j==0 else ''
                        result.append(Paragraph(prefix+inline(sub['c']),st))
                    else: result.extend(render_blocks([sub],small))
        elif t=='Figure':
            result.extend(render_blocks(c[2],small))
        elif t=='CodeBlock':
            for line in c[1].splitlines():
                result.append(Paragraph(html.escape(line).replace(' ','&#160;') or '&#160;',styles['CodeText']))
        elif t=='Table':
            rows=[]
            tablehead=c[3][1]
            allrows=list(tablehead)
            for body in c[4]: allrows.extend(body[2]+body[3])
            allrows.extend(c[5][1])
            for row in allrows:
                cells=[]
                for cell in row[1]:
                    content=cell[4]
                    txt='<br/>'.join(inline(x['c']) for x in content if x['t'] in ['Plain','Para'])
                    cells.append(Paragraph(txt,styles['SmallText']))
                rows.append(cells)
            if rows:
                n=len(rows[0])
                if n==2: weights=[0.26,0.74]
                elif n==3: weights=[0.22,0.45,0.33]
                elif n==4: weights=[0.19,0.31,0.22,0.28]
                else: weights=[1/n]*n
                table=Table(rows,colWidths=[width*w for w in weights],repeatRows=1,hAlign='LEFT')
                table.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor('#dbeafe')),('VALIGN',(0,0),(-1,-1),'TOP'),('GRID',(0,0),(-1,-1),0.3,colors.HexColor('#cbd5e1')),('LEFTPADDING',(0,0),(-1,-1),5),('RIGHTPADDING',(0,0),(-1,-1),5),('TOPPADDING',(0,0),(-1,-1),6),('BOTTOMPADDING',(0,0),(-1,-1),6),('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.white,colors.HexColor('#f8fafc')])]))
                result.extend([table,Spacer(1,10)])
        elif t=='BlockQuote': result.extend(render_blocks(c,small))
    return result

story+=render_blocks(ast['blocks'])
def footer(canvas,doc):
    canvas.saveState();canvas.setFont('DV',7);canvas.setFillColor(colors.HexColor('#64748b'))
    canvas.drawString(42,25,'P4I Corporate Hub · Audit kode main · 8 Oktober 2026')
    canvas.drawRightString(A4[0]-42,25,str(doc.page));canvas.restoreState()
doc=SimpleDocTemplate(str(ROOT/'laporan-audit.pdf'),pagesize=A4,rightMargin=42,leftMargin=42,topMargin=42,bottomMargin=42,title='Laporan Audit dan Analisis Sistem P4I Corporate Hub',author='Audit berbasis repositori')
doc.build(story,onFirstPage=footer,onLaterPages=footer)
print('Generated HTML, DOCX, PDF, and four diagrams.')

from zipfile import ZipFile, ZIP_DEFLATED
with ZipFile(ROOT / "paket-laporan-corporate-hub.zip", "w", ZIP_DEFLATED) as archive:
    for file in sorted(ROOT.iterdir()):
        if file.is_file() and file.suffix in [".pdf", ".docx", ".md", ".html", ".png", ".svg", ".json", ".dot", ".css", ".py"]:
            archive.write(file, file.name)
print("ZIP bundle updated.")
