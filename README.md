# Bugün Ne Oldu? - Admin Paneli

Bu depo, **Bugün Ne Oldu?** sisteminin yönetim arayüzüdür. Sistem yöneticilerinin içerikleri kontrol etmesi, eklemesi veya düzenlemesi için oluşturulmuş güvenli bir kontrol panelidir.

## 🔗 Proje Ekosistemi

Bu proje, üç parçalı mimarinin yönetim merkezidir. Ekosistemin diğer repolarına aşağıdan ulaşabilirsiniz:

* **Frontend:** [kopyabugunneoldu](https://github.com/burakaltinbicak/kopyabugunneoldu)
* **API / Backend:** [kopyabugunneoldu-api](https://github.com/burakaltinbicak/kopyabugunneoldu-api)
* **Admin Paneli (Şu an buradasınız):** [kopyabugunneoldu-admin](https://github.com/burakaltinbicak/kopyabugunneoldu-admin)

## 💻 Kullanılan Teknolojiler

* **Framework:** Next.js (v16.2.1)
* **Kütüphane:** React (v19.2.4)
* **Dil:** TypeScript
* **Stilleme:** Tailwind CSS (v4)
* **HTTP İstemcisi:** Axios

## 🚀 Kurulum ve Çalıştırma

**1. Repoyu Klonlayın**
```bash
git clone [https://github.com/burakaltinbicak/kopyabugunneoldu-admin.git](https://github.com/burakaltinbicak/kopyabugunneoldu-admin.git)
cd kopyabugunneoldu-admin
2. Bağımlılıkları Yükleyin

Bash
npm install
3. Çevresel Değişkenleri Ayarlayın
Projenin ana dizininde bulunan .env.example dosyasını kopyalayarak bir .env dosyası oluşturun ve admin giriş bilgilerinizi tanımlayın:

Kod snippet'i
NEXT_PUBLIC_ADMIN_USERNAME=sizin_belirleyeceginiz_kullanici_adi
NEXT_PUBLIC_ADMIN_PASSWORD=sizin_belirleyeceginiz_sifre
4. Geliştirme Sunucusunu Başlatın

Bash
npm run dev
Tarayıcınızda http://localhost:3000 (veya port çakışması varsa terminalde belirtilen port) adresine giderek yönetim panelini görüntüleyebilirsiniz.

🛠️ Kullanılabilir Komutlar
npm run dev: Geliştirme sunucusunu başlatır.

npm run build: Projeyi prodüksiyon için derler.

npm run start: Derlenmiş projeyi başlatır.

npm run lint: ESLint ile kod denetimi yapar.
