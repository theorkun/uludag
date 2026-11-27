# Bilal Uludağ · Kişisel web sitesi

Sarıçam Belediye Başkanı Bilal Uludağ için hazırlanmış tasarım önizlemesi. Statik HTML/CSS/JavaScript kullanır; ek paket kurulumu veya derleme gerektirmez. Bağımsız proje klasörüdür.

## GitHub üzerinden yayın

Kaynak depo: https://github.com/theorkun/uludag

Sayfa dosyalarının aslı `dist/` klasöründedir. Değişikliklerden sonra `node scripts/build-pages.cjs` komutunu çalıştırıp güncellenen `docs/` klasörünü de commit edin. GitHub Settings → Pages bölümünde kaynak olarak `main` dalı ve `/docs` klasörü seçilir. GitHub Pages hesabınızda kullanılabiliyorsa önizleme adresi https://theorkun.github.io/uludag/ olur. Özel depolarda GitHub planının Pages desteği gerekir.

## Dosyalar

- `dist/index.html`: ana sayfa, biyografi, çalışmalar, gündem, albüm ve iletişim.
- `dist/style.css`: beyaz zemin, koyu lacivert ve turkuaz vurgu renkleri, mobil düzenler.
- `dist/app.js`: mobil menü, kategori filtreleri, haber ayrıntıları ve fotoğraf görüntüleyici.
- `dist/assets/`: resmî yayınlardan alınan görseller; belediye logosu değiştirilmemiştir.
- `dist/assets/fonts/`: Poppins fontları, Türkçe karakter alt kümeleri ve SIL OFL lisansı. Başlıklar ve gövde metni yerel Poppins ailesini kullanır.

## Önizleme

Node.js kurulu bilgisayarda `ONIZLEME.cmd` veya `node preview.cjs` çalıştırın. `http://127.0.0.1:8097/` adresini açın. Statik dosyalar başka bir web sunucusunda da `dist/` klasöründen sunulabilir.

## İşlevler ve içerik

Mobil menü, haber kategorileri, üç haber ayrıntı penceresi, klavye destekli fotoğraf albümü ve biyografi ayrıntısı çalışır. İletişim bağlantıları belediyenin mevcut sayfasına, telefon/e-posta uygulamasına veya doğrulanmış sosyal medya hesaplarına yönlendirir. Bu sürümde kişisel bilgi toplayan form, kullanıcı hesabı, yönetim paneli, çerezle takip veya harici analiz servisi yoktur. Haber içerikleri canlı bir akış değildir; kaynaklarıyla birlikte editoryal olarak güncellenmelidir.

Veri toplama, haber yönetimi veya alan adı eklendiğinde ilgili entegrasyonlar ayrıca yapılandırılmalıdır. Yayımlanan tasarım onaylı resmî içerik yayını olarak tanımlanmamıştır; sayfa altındaki tasarım önizlemesi notu korunmuştur.

Kaynak ve görsel dökümü [SOURCES.md](SOURCES.md) içindedir. Bilgiler 27 Kasım 2026 tarihinde resmî kaynaklardan kontrol edilmiştir.
