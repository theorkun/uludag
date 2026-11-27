# Bilal Uludağ · Kişisel web sitesi

Sarıçam Belediye Başkanı Bilal Uludağ için hazırlanmış çok sayfalı tasarım önizlemesi. Statik HTML/CSS/JavaScript kullanır; ek paket kurulumu gerektirmez. Bağımsız proje klasörüdür.

## GitHub üzerinden yayın

Kaynak depo: https://github.com/theorkun/uludag

İçerikleri `src/*.html`, ortak üst/alt düzeni `src/layout.html`, sayfa bilgilerini `scripts/build-site.cjs` dosyasında düzenleyin. Stiller ve etkileşimler `dist/` içindedir. `node scripts/build-pages.cjs` komutu dokuz bağımsız HTML sayfasını oluşturur ve `docs/` klasörüne kopyalar. Değişen kaynakları, `dist/` ve `docs/` dosyalarını birlikte commit edin. GitHub Settings → Pages kaynağı `main` dalı ve `/docs` klasörüdür. Yayın adresi https://theorkun.github.io/uludag/.

## Dosyalar

- `src/`: altı sayfanın içerik parçaları ve ortak sayfa şablonu.
- `dist/index.html`: kısa tanıtım ve seçili haberlerle ana sayfa.
- `dist/baskanimiz.html`, `calismalar.html`, `gundem.html`, `album.html`, `iletisim.html`: bağımsız iç sayfalar.
- `dist/style.css`: beyaz zemin, koyu yeşil ve turkuaz vurgu renkleri, mobil düzenler.
- `dist/pages.css`, `dist/assets/selcuklu-serit.svg`: iç sayfa düzenleri ve Selçuklu geometrisinden esinlenen dekoratif menü motifleri.
- `dist/app.js`: mobil menü, kategori filtreleri, haber ayrıntıları ve fotoğraf görüntüleyici.
- `dist/assets/`: resmî yayınlardan alınan görseller; belediye logosu değiştirilmemiştir.
- `dist/assets/fonts/`: Poppins fontları, Türkçe karakter alt kümeleri ve SIL OFL lisansı. Gövde metni yerel Poppins ailesini, başlıklar sistemdeki Cambria/Georgia serif ailesini kullanır.

## Önizleme

Node.js kurulu bilgisayarda `ONIZLEME.cmd` veya `node preview.cjs` çalıştırın. `http://127.0.0.1:8097/` adresini açın. Statik dosyalar başka bir web sunucusunda da `dist/` klasöründen sunulabilir.

## İşlevler ve içerik

Sayfalar JavaScript kapalıyken de doğrudan açılır ve normal bağlantılarla gezilebilir. Gündem sayfasındaki haber kategorileri, üç haber ayrıntı penceresi ve klavye destekli fotoğraf albümü çalışır. Biyografi, Başkanımız sayfasında açık biçimde sunulur. İletişim bağlantıları belediyenin mevcut sayfasına, telefon/e-posta uygulamasına veya doğrulanmış sosyal medya hesaplarına yönlendirir. Bu sürümde kişisel bilgi toplayan form, kullanıcı hesabı, yönetim paneli, çerezle takip veya harici analiz servisi yoktur. Haber içerikleri canlı bir akış değildir; kaynaklarıyla birlikte editoryal olarak güncellenmelidir.

Veri toplama, haber yönetimi veya alan adı eklendiğinde ilgili entegrasyonlar ayrıca yapılandırılmalıdır. Yayımlanan tasarım onaylı resmî içerik yayını olarak tanımlanmamıştır; sayfa altındaki tasarım önizlemesi notu korunmuştur.

Kaynak ve görsel dökümü [SOURCES.md](SOURCES.md) içindedir. Bilgiler 27 Kasım 2026 tarihinde resmî kaynaklardan kontrol edilmiştir.

## Yeni görsel düzen

Ana sayfa, koyu yeşil ve turkuaz renkler, serif başlıklar ve tam genişlikte iki eşit alandan oluşan açılış kullanır. Ortalanmış kurum logoları ve Selçuklu geometrisinden esinlenen bölüm geçişleri korunur. Biyografi, çalışmalar, gündem, albüm ve iletişim ana sayfada birlikte yer alır; mevcut bağımsız sayfalar da kullanılabilir. Üç haber sayfasının içerikleri `src/news.json` dosyasından üretilir.
