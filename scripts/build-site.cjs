const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const source = path.join(root, 'src');
const pages = [
  { file: 'index.html', label: 'Ana Sayfa', description: 'Sarıçam Belediye Başkanı Bilal Uludağ. Çalışmalar, buluşmalar ve kent yaşamından notlar.' },
  { file: 'baskanimiz.html', label: 'Başkanımız', description: 'Av. Bilal Uludağ’ın yaşamı, eğitimi ve kamu hizmeti yolculuğu.' },
  { file: 'calismalar.html', label: 'Çalışmalar', description: 'Sarıçam’ın geleceğine yönelik çalışmalardan seçili başlıklar.' },
  { file: 'gundem.html', label: 'Gündem', description: 'Sarıçam’dan haberler, kültür buluşmaları ve kent yaşamından gelişmeler.' },
  { file: 'album.html', label: 'Fotoğraf Albümü', description: 'Bilal Uludağ’ın çalışmalarından ve buluşmalarından fotoğraflar.' },
  { file: 'iletisim.html', label: 'İletişim', description: 'Görüş ve talepleriniz için Sarıçam Belediyesi iletişim kanalları.' }
];
const news = JSON.parse(fs.readFileSync(path.join(source, 'news.json'), 'utf8'));
for (const [key, item] of Object.entries(news)) {
  pages.push({ file: `haber-${key}.html`, label: item.title, description: item.paragraphs[0], news: item });
}
const escape = value => value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// Two intersecting squares create a restrained eight-point geometric star.
const star = '<svg class="nav-motif" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 1.5l3.08 3.08h4.34v4.34L22.5 12l-3.08 3.08v4.34h-4.34L12 22.5l-3.08-3.08H4.58v-4.34L1.5 12l3.08-3.08V4.58h4.34z"/><path d="M12 8l4 4-4 4-4-4z"/></svg>';
const layout = fs.readFileSync(path.join(source, 'layout.html'), 'utf8');
for (const page of pages) {
  const home = page.file === 'index.html';
  const heading = home || page.news ? '' : `<header class="page-intro container"><nav class="breadcrumbs" aria-label="Sayfa yolu"><a href="index.html">Ana Sayfa</a><span aria-hidden="true">/</span><span aria-current="page">${page.label}</span></nav><div class="page-heading"><span class="heading-motif" aria-hidden="true">${star}</span><div><h1>${page.label}</h1><p>${page.description}</p></div></div></header>`;
  const item = page.news;
  const content = item ? `<article class="article-page container"><nav class="breadcrumbs" aria-label="Sayfa yolu"><a href="index.html">Ana Sayfa</a><span aria-hidden="true">/</span><a href="gundem.html">Gündem</a></nav><header><p class="eyebrow">${escape(item.category)} · ${escape(item.date)}</p><h1>${escape(item.title)}</h1></header><img class="article-cover" src="${item.image}" alt="${escape(item.alt)}" width="800" height="533" fetchpriority="high"><div class="article-body">${item.paragraphs.map(p => `<p>${escape(p)}</p>`).join('')}<a class="text-link" href="${item.source}" target="_blank" rel="noopener noreferrer">Belediye kaynağında okuyun</a><div class="article-back"><a class="button button-dark" href="gundem.html">Tüm haberlere dönün</a></div></div></article>` : fs.readFileSync(path.join(source, page.file), 'utf8');
  const title = home ? 'Bilal Uludağ · Sarıçam Belediye Başkanı' : page.label + ' · Bilal Uludağ';
  const html = layout.replaceAll('{{TITLE}}', escape(title)).replaceAll('{{DESCRIPTION}}', escape(page.description)).replace('{{BODY_CLASS}}', home ? 'home-page' : 'inner-page').replace('{{MAIN}}', heading + content).replace(/<button\b([^>]*\bdata-news="([^"]+)"[^>]*)>([\s\S]*?)<\/button>/g, (_, attributes, key, body) => `<a href="haber-${key}.html"${attributes.replace(/\s*(?:data-news|type)="[^"]*"/g, '')}>${body}</a>`);
  fs.writeFileSync(path.join(root, 'dist', page.file), html.replace(/[ \t]+$/gm, ''));
}
console.log(`Built ${pages.length} static pages.`);
