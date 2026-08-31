export type Product = {
  slug: string;
  name: string;
  marketplaceTitle?: string;
  categoryLabel?: string;
  summary: string;
  description: string;
  heroImageUrl: string;
  images: string[];
  bullets: string[];
  features: string[];
  applications: string[];
  specs: { label: string; value: string }[];
  ratingLabel?: string;
  soldLabel?: string;
  priceLabel?: string;
  stockLabel?: string;
  trustNote?: string;
  reasons?: string[];
  companyPoints?: { number: string; title: string; desc: string }[]; // <-- Ditambahkan di tipe
  orderNote?: string;
  reviews?: { name: string; rating: string; text: string }[];
  checkoutUrl: string;
  whatsappUrl: string;
};

const buildCheckoutUrl = (slug: string) => `https://mayar.id/${slug}`;

const buildWhatsappUrl = (productName: string) =>
  `https://wa.me/6281292499946?text=${encodeURIComponent(`Halo Kairos Geo, saya ingin konsultasi ${productName}.`)}`;

export const products: Product[] = [
  {
    // [1] IDENTITAS
    slug: "geomembran",
    name: "Geomembran", 

    // [2] JUDUL & KATEGORI
    marketplaceTitle: "Geomembran HDPE - Solusi Kedap Air untuk Perlindungan Jangka Panjang", 
    categoryLabel: "Geosynthetics",

    // [3] DESKRIPSI
    summary: "Solusi kedap air untuk kolam, tambak, tempat pembuangan akhir, area limbah, dan kebutuhan penampungan lainnya.",
    description: `Geomembran KAIROS GEO merupakan material geosintetik berbahan HDPE/LLDPE yang berfungsi sebagai lapisan kedap untuk mengendalikan pergerakan cairan dan mencegah rembesan ke dalam tanah. Material ini dirancang untuk digunakan pada berbagai sistem containment / penampungan dan kebutuhan teknik sipil.
                  Karakteristiknya yang kedap air, fleksibel, tahan terhadap paparan UV dan bahan kimia membuat geomembran sesuai untuk kondisi proyek yang membutuhkan perlindungan jangka panjang. Material dapat mengikuti bentuk area kerja dan diaplikasikan melalui proses penyambungan khusus sesuai kebutuhan lapangan.
                  Dengan pemilihan ketebalan dan spesifikasi yang tepat, geomembran dapat membantu meningkatkan keandalan sistem, mengurangi risiko kebocoran, sekaligus mendukung efisiensi pemeliharaan. KAIROS GEO membantu Anda menentukan spesifikasi berdasarkan fungsi, kondisi lapangan, dan kebutuhan proyek.
                  Geomembran dapat menjadi solusi penampungan yang efektif dan ekonomis dibandingkan metode konvensional tertentu.`,

    // [4] GAMBAR & GALERI
    heroImageUrl: "/product/geomembran1.jpg",
    images: [
      "/product/geomembran1.jpg",
      "/product/geomembran2.jpg",
      "/product/geomembran3.jpg",
      "/product/geomembran4.jpg",
      "/product/geomembran5.jpg",
    ],

    // [5] BULLET POINTS
    bullets: [
      "Perlindungan dari kebocoran", 
      "Tahan UV & bahan kimia", 
      "Kuat untuk penggunaan jangka panjang", 
      "Mudah diaplikasikan di lapangan",
      "Umur layanan panjang, investasi lebih ekonomis"
    ],
    features: [
      "Punya daya kedap yang kuat untuk kebutuhan containment.",
      "Tahan terhadap suhu panas, sinar UV, dan banyak bahan kimia.",
      "Instalasinya cepat dan efisien di lapangan.",
      "Cocok untuk proyek industri, lingkungan, dan pengelolaan air.",
    ],

    // [6] APLIKASI UTAMA
    applications: [
      "Kolam ikan & tambak", 
      "Kolam penampungan air", 
      "Kolam limbah & IPAL", 
      "TPA / landfill", 
      "Pertambangan", 
      "Reservoir & embung", 
      "Irigasi & kanal", 
      "Bendungan", 
      "Floating cover", 
      "Biogas", 
      "Coal ash & stockpile", 
      "Industri & manufaktur", 
      "Oil tank", 
      "Secondary containment", 
      "Proyek lingkungan & infrastruktur"
    ],

    // [7] SPESIFIKASI TEKNIK
    specs: [
      { label: "Material", value: "HDPE / LLDPE" },
      { label: "Ketebalan", value: "0,30 mm - 3,00 mm" },
      { label: "Lebar Roll", value: "±7 meter untuk varian utama" },
      { label: "Panjang Roll", value: "Menyesuaikan ketebalan" },
      { label: "Diameter Roll", value: "Menyesuaikan ketebalan" },
      { label: "Warna", value: "Hitam" },
    ],

    // [8] HARGA & PENJUALAN
    ratingLabel: "(4.9)",
    soldLabel: "Terjual 500+",
    priceLabel: "",
    stockLabel: "Tersedia",
    trustNote: "Jaminan kualitas & pengiriman aman ke seluruh Indonesia.",

    // [9] KENAPA PRODUK INI COCOK (KEUNGGULAN PRODUK)
    reasons: [
      "Kedap optimal untuk sistem containment.",
      "Fleksibel mengikuti bentuk area proyek.",
      "Tahan kimia untuk lingkungan ekstrem.",
      "Efisien untuk proyek skala besar.",
    ],

    // [10] KENAPA MEMILIH KAMI? (KEUNGGULAN KAIROS GEO / COMPANY POINTS DITAMBAHKAN DI SINI)
    companyPoints: [
      {
        number: "01",
        title: "Konsultasi Teknis",
        desc: "Tidak sekadar menjual material. KAIROS GEO membantu menentukan jenis dan spesifikasi geomembran berdasarkan fungsi aplikasi, kondisi lapangan, risiko kebocoran, serta kebutuhan proyek."
      },
      {
        number: "02",
        title: "Spesifikasi Lebih Terarah",
        desc: "Pembeli tidak harus menentukan sendiri ketebalan material. Tim KAIROS GEO dapat membantu mengarahkan pilihan berdasarkan kebutuhan teknis proyek."
      },
      {
        number: "03",
        title: "Supply untuk Proyek",
        desc: "Mendukung kebutuhan pengadaan material untuk proyek dengan volume dan spesifikasi yang disesuaikan, termasuk kebutuhan pengiriman ke berbagai wilayah Indonesia."
      },
      {
        number: "04",
        title: "Dukungan Instalasi",
        desc: "Geomembran membutuhkan penanganan dan penyambungan yang tepat. Karena itu, KAIROS GEO dapat diposisikan sebagai partner yang memahami kebutuhan material hingga proses aplikasinya."
      },
      {
        number: "05",
        title: "QC & Dokumentasi",
        desc: "Website KAIROS GEO sudah memiliki positioning QC terdokumentasi dan dokumentasi proyek. Ini sangat bagus untuk pasar B2B karena memberikan nilai lebih dibandingkan supplier yang hanya mengirim barang."
      },
      {
        number: "06",
        title: "Pendampingan Proyek",
        desc: "Produk + spesifikasi + konsultasi + support. Ini yang harus menjadi pesan utama KAIROS GEO."
      }
    ],

    orderNote: "Klik beli untuk langsung ke Mayar.id atau gunakan konsultasi produk jika ingin cek kebutuhan dulu.",

    // [11] REVIEWS
    reviews: [
      { name: "Andi", rating: "★★★★★", text: "Material rapi, respon cepat, dan penjelasan teknisnya jelas." },
      { name: "Sari", rating: "★★★★★", text: "Sangat cocok untuk kebutuhan proyek kolam dan containment." },
      { name: "Budi", rating: "★★★★★", text: "Alur checkout mudah, konsultasi WA juga membantu banget." },
    ],

    // [12] LINK
    checkoutUrl: buildCheckoutUrl("geomembran"),
    whatsappUrl: buildWhatsappUrl("Geomembran"),
  },
  {
    // [1] IDENTITAS
    slug: "geotekstil-woven",
    name: "Geotekstil Woven",

    // [2] JUDUL & KATEGORI
    marketplaceTitle: "Geotekstil Woven - Solusi perkuatan Tanah untuk Infrastruktur yang Lebih Andal",
    categoryLabel: "Geosynthetics",

    // [3] DESKRIPSI
    summary: "Solusi perkuatan tanah untuk konstruksi yang lebih stabil dan andal.",
    description: `Dalam aplikasinya, woven geotekstil dapat berfungsi sebagai separator, stabilisasi, load support, perkuatan, dan filtrasi. Material membantu memisahkan lapisan tanah yang berbeda, mengurangi pencampuran material, serta membantu mendistribusikan beban dan menahan pergerakan lateral tanah. 
                  Dengan pilihan material dan variasi kuat tarik yang tersedia, woven geotekstil dapat disesuaikan dengan kebutuhan proyek mulai dari konstruksi jalan, rel kereta api, timbunan tanah, dinding penahan, bendungan/tanggul, hingga perlindungan area tertentu dari longsoran dan erosi. Brosur sumber menyebut rentang kuat tarik produk mulai dari 35 kN/m hingga 1.000 kN/m.
                  5 Fungsi Utama Woven Geotextile Separasi Memisahkan dua lapisan material agar tidak bercampur dan tetap menjalankan fungsi masing-masing.
                  Stabilisasi & Load Support Membantu meratakan beban pada tanah serta mengurangi pergerakan lateral tanah.
                  Perkuatan Meningkatkan kemampuan sistem tanah dalam menahan beban dan mendukung kestabilan struktur. Filtrasi Memungkinkan aliran air melewati material sekaligus membantu menahan butiran tanah. Kontrol Pergerakan Tanah
                  Membantu meningkatkan stabilitas struktur pada area dengan kondisi tanah yang membutuhkan dukungan tambahan.`,

    // [4] GAMBAR & GALERI
    heroImageUrl: "/product/geotekstilwoven1.webp",
    images: [
      "/product/geotekstilwoven1.webp",
      "/product/geotekstilwoven2.webp",
      "/product/geotekstilwoven3.webp",
      "/product/geotekstilwoven4.webp",
    ],

    // [5] BULLET POINTS (DITAMBAHKAN MENJADI 5 ITEM PLACEHOLDER)
    bullets: [
      "Kuat menahan beban", 
      "Stabilkan struktur tanah", 
      "Cegah pencampuran lapisan",
      "Cocok untuk berbagai proyek",
    ],
    features: [
      "Kuat tarik tinggi untuk menahan beban lateral dan vertikal.",
      "Mencegah percampuran antara tanah dasar lunak dan agregat pondasi.",
      "Meningkatkan stabilitas konstruksi jalan dan timbunan.",
      "Tahan terhadap erosi serta zat kimia alami tanah.",
    ],

    // [6] APLIKASI UTAMA
    applications: [
      "Konstruksi jalan raya", 
      "Kontruksi rel kereta api", 
      "Timbunan tanah", 
      "Dinding penahan tanah",
      "Bendungan & tanggul tanah",
      "Lereng & area rawan longsor",
      "Revetment / Riprap Pantai"
    ],

    // [7] SPESIFIKASI TEKNIK
    specs: [
      { label: "Material", value: "Polypropylene (PP) & Polyester (PET)" },
      { label: "Kuat Tarik", value: "±35 kN/m hingga ±1.000 kN/m" },
      { label: "Ketebalan", value: "Tersedia dalam berbagai spesifikasi sesuai tipe produk" },
      { label: "Panjang Roll", value: "Menyesuaikan tipe dan spesifikasi produk." },
      { label: "Lebar Roll", value: "Menyesuaikan tipe dan spesifikasi produk." },
      { label: "Diameter Roll", value: "Menyesuaikan spesifikasi dan konfigurasi produksi." },
      { label: "Warna", value: "Hitam / sesuai tipe produk." },
    ],

    // [8] HARGA & PENJUALAN
    ratingLabel: "(4.8)",
    soldLabel: "Terjual 350+",
    priceLabel: "",
    stockLabel: "Tersedia",
    trustNote: "Konsultasi teknis dan pengiriman aman ke seluruh Indonesia.",

    // [9] KENAPA PRODUK INI COCOK
    reasons: [
      "Perkuat tanah, stabilkan struktur proyek.",
      "Kurangi pergerakan lapisan tanah.",
      "Distribusikan beban lebih merata.",
      "Bangun struktur lebih stabil dan tahan.",
    ],

    // [10] KENAPA MEMILIH KAMI? (DITAMBAHKAN COMPANY POINTS PLACEHOLDER)
    companyPoints: [
      {
        number: "01",
        title: "Konsultasi Teknis",
        desc: "Setiap proyek memiliki kondisi tanah, beban, fungsi, dan kebutuhan yang berbeda. KAIROS GEO membantu Anda menentukan spesifikasi woven geotextile berdasarkan kebutuhan proyek sehingga pemilihan material tidak hanya berdasarkan harga, tetapi juga mempertimbangkan fungsi dan performanya."
      },
      {
        number: "02",
        title: "Pilihan Spesifikasi Lebih Fleksibel",
        desc: "Woven geotekstil tersedia dengan pilihan material dan variasi kuat tarik. KAIROS GEO membantu mengarahkan pilihan sesuai kebutuhan aplikasi sehingga material dapat digunakan secara lebih efektif."
      },
      {
        number: "03",
        title: "Supply untuk Berbagai Proyek",
        desc: "KAIROS GEO dapat diposisikan sebagai partner pengadaan untuk kebutuhan proyek di berbagai wilayah Indonesia. "
      },
      {
        number: "04",
        title: "Dukungan Instalasi",
        desc: "Untuk proyek yang membutuhkan dukungan lapangan, KAIROS GEO dapat memberikan dukungan instalasi sesuai cakupan pekerjaan."
      },
      {
        number: "05",
        title: "QC & Dokumentasi",
        desc: "KAIROS GEO dapat memberikan dokumentasi pekerjaan yang membantu proses monitoring, pelaporan, dan evaluasi proyek."
      },
      {
        number: "06",
        title: "Dukungan dari Tahap Awal",
        desc: "KAIROS GEO mendukung dari tahap ide dan perencanaan, serta membantu menyesuaikan kebutuhan konsumen dari awal"
      }
    ],

    orderNote: `Siapkan Data Proyek Anda
      Agar kami dapat memberikan rekomendasi dan penawaran yang lebih tepat, informasikan:
      1. Jenis proyek
      Contoh: jalan, tambang, rel, timbunan, lereng, reklamasi, atau proyek lainnya.
      2. Fungsi geotextile
      Separator, stabilisasi, perkuatan, filtrasi, atau kombinasi kebutuhan.
      3. Luas area pekerjaan
      Panjang × lebar atau estimasi total area.
      4. Kondisi lapangan
      Jenis tanah, kondisi permukaan, kemiringan, dan kondisi khusus lainnya bila tersedia.
      5. Kebutuhan kuat tarik
      Jika sudah ditentukan oleh engineer atau spesifikasi proyek.
      6. Lokasi proyek
      Digunakan untuk menghitung kebutuhan logistik dan estimasi pengiriman.
      7. Kebutuhan supply
      Material saja atau supply + instalasi.

      Belum tahu spesifikasinya? Tidak masalah.
      Kirim data proyek Anda, tim KAIROS GEO akan membantu menentukan kebutuhan material yang sesuai.`,

    // [11] REVIEWS
    reviews: [
      { name: "Rina", rating: "★★★★★", text: "Kualitas sesuai untuk kebutuhan stabilisasi jalan." },
      { name: "Dedi", rating: "★★★★★", text: "Kuat tariknya oke banget untuk tanah lunak." },
      { name: "Lina", rating: "★★★★★", text: "Respon cepat dan bantu banget untuk proyek sipil." },
    ],

    // [12] LINK
    checkoutUrl: buildCheckoutUrl("geotekstil-woven"),
    whatsappUrl: buildWhatsappUrl("Geotekstil Woven"),
  },
  {
    // [1] IDENTITAS
    slug: "geotekstil-non-woven",
    name: "Geotekstil Non Woven",

    // [2] JUDUL & KATEGORI
    marketplaceTitle: "Geotekstil Non Woven - Solusi Filtrasi, Separasi, dan Drainase untuk Proyek Lebih Stabil",
    categoryLabel: "Geosynthetics",

    // [3] DESKRIPSI
    summary: "Solusi Filtrasi, Separasi, dan Drainase untuk Proyek Lebih Stabil",
    description: `Geotekstil Non-Woven KAIROS GEO merupakan material geosintetik berbahan polyester (PET) atau polypropylene (PP) yang tersusun dari serat-serat yang saling terikat membentuk lembaran fleksibel. Material ini dirancang untuk membantu memisahkan lapisan tanah, mengendalikan aliran air, serta mendukung sistem filtrasi dan drainase pada berbagai konstruksi. 
                  Struktur non-woven memungkinkan air melewati material sekaligus membantu menahan butiran tanah agar tidak ikut terbawa aliran. Karakteristik ini membuatnya sesuai untuk berbagai kebutuhan yang membutuhkan filtrasi, separasi, drainase, dan perlindungan lapisan konstruksi. 
                  Dengan pilihan berat material yang beragam, non-woven geotextile dapat disesuaikan dengan kebutuhan aplikasi. Brosur menunjukkan pilihan berat mulai dari 150 gsm hingga 2.200 gsm, sehingga pengguna dapat menentukan material berdasarkan fungsi dan kondisi proyek.`,

    // [4] GAMBAR & GALERI
    heroImageUrl: "/product/geotekstilnonwoven7.webp",
    images: [
      "/product/geotekstilnonwoven7.webp",
      "/product/geotekstilnonwoven.webp",
      "/product/geotekstilnonwoven2.webp",
      "/product/geotekstilnonwoven3.webp",
      "/product/geotekstilnonwoven4.webp",
      "/product/geotekstilnonwoven5.webp",
      "/product/geotekstilnonwoven6.webp",
      "/product/geotekstilnonwoven8.webp",
      "/product/geotekstilnonwoven9.png",
    ],

    // [5] BULLET POINTS (5 ITEM PLACEHOLDER)
    bullets: [
      "Kuat menahan beban", 
      "Stabilkan struktur tanah", 
      "Cegah pencampuran lapisan",
      "Cocok untuk berbagai proyek"
    ],
    features: [
      "Meloloskan air dengan baik sekaligus menahan partikel halus tanah.",
      "Melindungi geomembran dari gesekan dan tusukan benda tajam.",
      "Fleksibel dan mudah dipotong sesuai kondisi lapangan.",
      "Tahan terhadap pembusukan dan zat kimia lingkungan.",
    ],

    // [6] APLIKASI UTAMA
    applications: [
      "Drainase & Filtrasi", 
      "Pekerjaan Hidrolik", 
      "Pengelolaan Limbah", 
      "Pekerjaan Jalan",
      "Konstruksi"
    ],

    // [7] SPESIFIKASI TEKNIK
    specs: [
      { label: "Tipe serat", value: "PP (Polypropylene) / PET (Polyester)" },
      { label: "Gramatur", value: "PP (100–600 GSM) / PET (100–600 GSM)" },
      { label: "Warna Standar", value: "Putih (pertanian & otomotif: abu & hitam)" },
      { label: "Lebar roll", value: "2 m – 6 m (custom)" },
      { label: "Panjang roll", value: "50 m – 100 m (custom)" },
      { label: "Standar", value: "SNI / ASTM / ISO (sesuai kebutuhan)" },
    ],

    // [8] HARGA & PENJUALAN
    ratingLabel: "(4.9)",
    soldLabel: "Terjual 280+",
    priceLabel: "",
    stockLabel: "Tersedia",
    trustNote: "Suplai material berkualitas tinggi untuk proyek infrastruktur.",

    // [9] KENAPA PRODUK INI COCOK
    reasons: [
      "Pisahkan lapisan, cegah pencampuran material.",
      "Saring air, tahan partikel tanah.",
      "Alirkan air, kurangi risiko genangan.",
      "Lindungi struktur dari tekanan lingkungan.",
    ],

    // [10] KENAPA MEMILIH KAMI? (COMPANY POINTS PLACEHOLDER)
    companyPoints: [
      {
        number: "01",
        title: "Konsultasi Teknis",
        desc: "Tidak semua proyek membutuhkan jenis dan berat geotextile yang sama. KAIROS GEO membantu mengarahkan pemilihan material berdasarkan fungsi, kondisi lapangan, jenis konstruksi, dan kebutuhan proyek."
      },
      {
        number: "02",
        title: "Spesifikasi Lebih Terarah",
        desc: "Non-woven tersedia dalam berbagai pilihan berat. Dengan rentang 150–2.200 gsm yang tercantum dalam brosur, kebutuhan material dapat diarahkan berdasarkan fungsi dan kondisi aplikasi."
      },
      {
        number: "03",
        title: "Supply untuk Proyek",
        desc: "KAIROS GEO dapat diposisikan sebagai partner pengadaan untuk kebutuhan proyek, bukan sekadar penjualan satuan."
      },
      {
        number: "04",
        title: "Dukungan Instalasi",
        desc: "Untuk proyek yang membutuhkan dukungan lapangan, KAIROS GEO dapat membantu kebutuhan instalasi sesuai lingkup pekerjaan."
      },
      {
        number: "05",
        title: "QC & Dokumentasi",
        desc: "Untuk pasar kontraktor dan pemilik proyek, dokumentasi bukan sekadar tambahan. Dokumentasi dapat membantu untuk monitoring pekerjaan, laporan proyek, kontrol kualitas, dokumentasi progres, dan kebutuhan administrasi proyek."
      },
      {
        number: "06",
        title: "Pendampingan Proyek",
        desc: "Placeholder deskripsi Pendampingan Proyek."
      }
    ],

    // [11] CATATAN PEMESANAN
    orderNote: `Siapkan Data Proyek Anda
                Untuk mendapatkan rekomendasi dan penawaran yang lebih tepat, informasikan:
                1. Jenis proyek
                Jalan, drainase, landfill, bendungan, pelabuhan, tambang, atau proyek lainnya.

                2. Fungsi geotextile
                Filtrasi, separasi, drainase, proteksi, atau kombinasi.

                3. Luas area
                Panjang × lebar atau estimasi total kebutuhan.

                4. Kondisi lapangan
                Jenis tanah, kondisi permukaan, elevasi, dan kondisi khusus jika tersedia.

                5. Spesifikasi yang dibutuhkan
                Jika sudah ditentukan oleh konsultan atau engineer.
                6. Berat geotextile
                Jika sudah ditentukan, misalnya 150 gsm, 300 gsm, 500 gsm, dan seterusnya.

                7. Lokasi proyek
                Untuk perhitungan kebutuhan logistik dan pengiriman.

                8. Kebutuhan layanan
                Supply Only atau
                Supply + Instalasi

                Belum tahu spesifikasinya? Tidak masalah.
                Kirim data proyek Anda, tim KAIROS GEO akan membantu menentukan kebutuhan material yang sesuai.`,

    // [12] REVIEWS
    reviews: [
      { name: "Fajar", rating: "★★★★★", text: "Gramasi sesuai dan seratnya padat." },
      { name: "Novi", rating: "★★★★★", text: "Bagus banget buat proteksi geomembran kolam." },
      { name: "Adit", rating: "★★★★★", text: "Pengiriman cepat dan CS sangat kooperatif." },
    ],

    // [13] LINK
    checkoutUrl: buildCheckoutUrl("geotekstil-non-woven"),
    whatsappUrl: buildWhatsappUrl("Geotekstil Non Woven"),
  },
  {
    // [1] IDENTITAS
    slug: "geobag",
    name: "Geobag",

    // [2] JUDUL & KATEGORI
    marketplaceTitle: "Geobag - Perkuat Struktur, Kendalikan Erosi, Lindungi Area Proyek",
    categoryLabel: "Erosion Control",

    // [3] DESKRIPSI
    summary: "Perkuat Struktur, Kendalikan Erosi, Lindungi Area Proyek",
    description: `Geobag untuk Perlindungan dan Stabilisasi
                  Geobag KAIROS GEO merupakan wadah berbahan geotekstil non woven yang dirancang untuk diisi dengan material lokal seperti pasir, tanah, kerikil, atau sirtu. Material geobag tersedia dalam pilihan Polypropylene (PP) atau Polyester (PET) dan menggunakan konstruksi woven untuk menghasilkan struktur yang kuat sekaligus tetap memiliki permeabilitas tinggi.
                  Setelah diisi, geobag dapat disusun membentuk struktur perlindungan yang mengikuti kontur area dan membantu menahan pengaruh air, arus, gelombang, maupun pergerakan material. Air dapat melewati material geotextile, sementara material pengisi tetap tertahan di dalam geobag sehingga membentuk struktur yang stabil dan adaptif.
                  Geobag dapat digunakan untuk membantu mengendalikan erosi, melindungi pantai dan tepian sungai, menstabilkan lereng, mengendalikan banjir, serta mendukung pekerjaan konstruksi dan pengendalian sedimen. Penggunaan material lokal sebagai isi juga membantu meningkatkan efisiensi logistik dan biaya pekerjaan.`,

    // [4] GAMBAR & GALERI
    heroImageUrl: "/product/geobag.png",
    images: [
      "/product/geobag.png",
      "/product/geobag2.png",
      "/product/geobag3.png",
      "/product/geobag4.png",
      "/product/geobag5.png",
      "/product/geobag6.png",
    ],

    // [5] BULLET POINTS (5 ITEM PLACEHOLDER)
    bullets: [
      "Perlindungan Pantai", 
      "Pengendalian Banjir", 
      "Stabilisasi Lereng & Timbunan",
      "Perlindungan Galian & Cofferdam",
      "Pengendalian Sedimen & Sungai",
      "Perlindungan Air & Irigasi"
    ],
    features: [
      "Material jahitan ganda yang kuat menahan beban isian.",
      "Mampu menahan gelombang air dan abrasi pantai secara efektif.",
      "Dapat diisi menggunakan tanah atau pasir di lokasi proyek.",
      "Ramah lingkungan dan mendukung tumbuhnya vegetasi.",
    ],

    // [6] APLIKASI UTAMA
    applications: [
      "Perlindungan pantai", 
      "Pengendalian banjir", 
      "Stabilisasi lereng & timbunan", 
      "Perlindungan galian & cofferdam",
      "Pengendalian sedimen & sungai",
      "Sistem perlindungan air & irigasi"
    ],

    // [7] SPESIFIKASI TEKNIK
    specs: [
      { label: "Material", value: "PP / PET" },
      { label: "Tipe Anyaman", value: "Woven" },
      { label: "Gramatur Standar", value: "600 GSM" },
      { label: "Ukuran Standar 1", value: "1,45 × 2,40 m" },
      { label: "Ukuran Standar 2", value: "1 × 1,30 m" },
      { label: "Ukuran Custom", value: "Dapat disesuaikan kebutuhan" },
      { label: "Warna", value: "Putih" },
      { label: "Kuat Tarik PP", value: "≥ 30 kN/m" },
      { label: "Kuat Tarik PET", value: "≥ 45 kN/m" },
      { label: "Permeabilitas", value: "Tinggi" },
      { label: "Tahan UV", value: "Tersedia" },
      { label: "Tahan Kimia", value: "Tersedia" },
      { label: "Kualitas Teruji", value: "ISO 9001:2015, CE, ASTM, UV Resistant, dan High Strength." },
      { label: "Material Isi", value: "Pasir, tanah, kerikil, sirtu/batu pecah kecil" },
    ],

    // [8] HARGA & PENJUALAN
    ratingLabel: "(4.8)",
    soldLabel: "Terjual 200+",
    priceLabel: "",
    stockLabel: "Tersedia",
    trustNote: "Kantong geotekstil standar industri dengan jaminan kualitas jahitan.",

    // [9] KENAPA PRODUK INI COCOK
    reasons: [
      "Kuat menghadapi tekanan air dan gelombang.",
      "Fleksibel mengikuti kontur area proyek.",
      "Permeabel, memungkinkan air tetap mengalir.",
      "Efisien menggunakan material isi lokal.",
    ],

    // [10] KENAPA MEMILIH KAMI? (COMPANY POINTS PLACEHOLDER)
    companyPoints: [
      {
        number: "01",
        title: "Konsultasi Teknis",
        desc: "Setiap lokasi memiliki kondisi tanah, arus, gelombang, kemiringan, dan kebutuhan perlindungan yang berbeda. KAIROS GEO membantu memahami kondisi proyek sebelum menentukan spesifikasi produk."
      },
      {
        number: "02",
        title: "Pilihan Material PP & PET",
        desc: "KAIROS GEO menyediakan pilihan material PP dan PET sehingga produk dapat diarahkan berdasarkan kebutuhan performa dan kondisi lingkungan. PP untuk kebutuhan umum dan efisiensi. PET untuk kebutuhan dengan tuntutan kekuatan dan kondisi lebih ekstrem."
      },
      {
        number: "03",
        title: "Material Isi Lebih Fleksibel",
        desc: "Geobag dapat menggunakan material lokal seperti: pasir, tanah, kerikil, dan sirtu/batu pecah kecil. Artinya, proyek tidak selalu harus mendatangkan material pengisi dari lokasi yang jauh. Benefit: Logistik lebih sederhana, pekerjaan lebih efisien."
      },
      {
        number: "04",
        title: "Supply & Instalasi",
        desc: "KAIROS GEO tidak berhenti pada pengadaan material. Untuk kebutuhan proyek, layanan dapat diarahkan pada: Konsultasi → Supply → Instalasi → QC → Dokumentasi. Ini membuat KAIROS GEO lebih cocok diposisikan sebagai solution partner, bukan sekadar supplier."
      },
      {
        number: "05",
        title: "QC & Dokumentasi",
        desc: "Untuk pekerjaan infrastruktur, kualitas dan dokumentasi sangat penting. KAIROS GEO dapat mengkomunikasikan: spesifikasi material, kontrol kualitas, dokumentasi pekerjaan, dokumentasi progres, serta kebutuhan administrasi proyek."
      }
    ],

    // [11] CATATAN PEMESANAN
    orderNote: `Siapkan Data Proyek Anda
      Agar kami dapat memberikan rekomendasi yang tepat, informasikan:
      1. Jenis proyek
      Pantai, sungai, banjir, lereng, bendungan, irigasi, galian, atau lainnya.
      2. Fungsi Geobag
      Perlindungan erosi, stabilisasi, pengendalian banjir, cofferdam, pengendalian sedimen, atau kebutuhan lainnya.
      3. Dimensi area
      Panjang × lebar area pekerjaan.
      4. Kondisi lapangan
      Kemiringan, kondisi tanah, arus, gelombang, elevasi, dan kondisi lainnya bila tersedia.
      5. Ukuran Geobag
      Jika sudah ditentukan oleh engineer atau spesifikasi proyek.
      6. Material
      PP atau PET jika sudah ditentukan.
      7. Material isi
      Pasir, tanah, kerikil, sirtu, atau material lokal lainnya.
      8. Lokasi proyek
      Untuk menghitung kebutuhan logistik dan pengiriman.
      9. Kebutuhan layanan
      Supply Only
      atau
      Supply + Instalasi

      Belum tahu spesifikasinya? Tidak masalah.
      Kirim data proyek Anda, tim KAIROS GEO akan membantu menentukan kebutuhan material yang sesuai.`,

    // [12] REVIEWS
    reviews: [
      { name: "Hendra", rating: "★★★★★", text: "Jahitannya sangat kuat, tidak robek saat diisi penuh pasir." },
      { name: "Tika", rating: "★★★★★", text: "Sangat membantu untuk proyek penahan erosi tebing." },
      { name: "Rizky", rating: "★★★★★", text: "Kualitas geobag mantap, pengiriman tepat waktu." },
    ],

    // [13] LINK
    checkoutUrl: buildCheckoutUrl("geobag"),
    whatsappUrl: buildWhatsappUrl("Geobag"),
  },
  {
    // [1] IDENTITAS
    slug: "geocell",
    name: "Geocell",

    // [2] JUDUL & KATEGORI
    marketplaceTitle: "Geocell - Perkuat Tanah, Kendalikan Erosi, Stabilkan Struktur",
    categoryLabel: "Soil Stabilization",

    // [3] DESKRIPSI
    summary: "Sistem sel tiga dimensi (honeycomb) untuk perkuatan tanah, perlindungan lereng, pengendalian erosi, dan penahan beban.",
    description: `Geocell KAIROS GEO merupakan panel geosintetik tiga dimensi berbentuk honeycomb yang ringan dan fleksibel. Material utamanya adalah High Density Polyethylene (HDPE) yang disambung menggunakan teknologi ultrasonik untuk menghasilkan konfigurasi sel yang kuat. 
                  Struktur sel tiga dimensinya bekerja dengan memberikan confinement pada material pengisi seperti tanah, agregat, pasir, maupun beton. Sistem ini membantu meningkatkan kestabilan material, membatasi pergerakan lateral, serta mendukung distribusi beban pada permukaan tanah. 
                  Geocell dapat digunakan untuk berbagai kebutuhan, mulai dari pengendalian erosi, perkuatan lereng, stabilisasi tanah, load support, retaining wall, perlindungan saluran, jalan, area parkir, hingga struktur hidraulik. Sistemnya juga memungkinkan sel diisi material yang sesuai dengan kondisi proyek dan dapat mengakomodasi pertumbuhan vegetasi pada aplikasi tertentu.`,

    // [4] GAMBAR & GALERI
    heroImageUrl: "/product/geocell 1.png",
    images: [
      "/product/geocell 1.png",
      "/product/Geocell 2.png",
      "/product/Geocell 3.png",
      "/product/Geocell 4.png",
      "/product/Geocell 5.png",
    ],

    // [5] BULLET POINTS & FEATURES
    bullets: [
      "Ringan dan Mudah Digelar", 
      "Pemasangan Cepat dan Praktis", 
      "Kuat Menahan Beban Tanah",
      "Mengendalikan Erosi pada Lereng",
      "Fleksibel Mengikuti Kontur Permukaan",
      "Hemat Waktu dan Biaya"
    ],
    features: [
      "Erosion Control: Melindungi permukaan lereng dari pelepasan tanah akibat hujan, aliran air, dan angin.",
      "Reinforcement: Memberikan confinement material pengisi untuk membentuk struktur perkuatan / retaining wall.",
      "Load Support: Membatasi pergerakan lateral material dan mendistribusikan beban ke area yang lebih luas.",
      "Sistem Confinement: Mengunci material pengisi agar tanah tetap stabil dan tidak mudah tergeser."
    ],

    // [6] APLIKASI UTAMA
    applications: [
      "Perlindungan Lereng", 
      "Retaining Wall (Dinding Penahan Tanah)", 
      "Jalan (Jalan Akses, Permanen & Sementara)", 
      "Area Parkir & Trotoar",
      "Lapangan Golf",
      "Saluran Air & Drainase",
      "Tanggul & Struktur Hidraulik",
      "Perlindungan Area Sungai",
      "Reinforcement & Stabilisasi Tanah"
    ],

    // [7] SPESIFIKASI TEKNIK
    specs: [
      { label: "Material Utama", value: "High Density Polyethylene (HDPE)" },
      { label: "Bentuk / Struktur", value: "Sarang lebah / Honeycomb 3D" },
      { label: "Metode Sambungan", value: "Ultrasonic Welding" },
      { label: "Tipe Permukaan", value: "Smooth (Halus) & Textured (Kasar)" },
      { label: "Cell Depth (Tinggi Sel)", value: "7,5 cm – 20 cm" },
      { label: "Warna Standar", value: "Hitam" },
      { label: "Material Pengisi", value: "Tanah, Agregat, Pasir, Beton" },
      { label: "Dimensi Panel", value: "Menyesuaikan tipe & kebutuhan proyek" },
      { label: "Ketebalan", value: "Sesuai tipe dan spesifikasi produk" },
      { label: "Fungsi Utama", value: "Confinement, Stabilisasi Tanah, Erosion Control & Load Support" },
    ],

    // [8] HARGA & PENJUALAN
    ratingLabel: "(4.8)",
    soldLabel: "Terjual 110+",
    priceLabel: "",
    stockLabel: "Tersedia",
    trustNote: "Cocok untuk area dengan kebutuhan stabilisasi dan perkuatan tanah tinggi.",

    // [9] KENAPA PRODUK INI COCOK
    reasons: [
      "Perkuat tanah, kendalikan erosi lebih efektif.",
      "Stabilkan permukaan dengan sistem confinement.",
      "Tahan beban, kurangi pergerakan material.",
      "Fleksibel mengikuti kontur permukaan tanah.",
    ],

    // [10] KENAPA MEMILIH KAIROS GEO?
    companyPoints: [
      {
        number: "01",
        title: "Konsultasi Berbasis Kebutuhan Proyek",
        desc: "Setiap proyek memiliki kondisi tanah, kemiringan, beban, material pengisi, dan lingkungan yang berbeda. KAIROS GEO membantu menentukan: fungsi → cell depth → tipe permukaan → material pengisi → metode aplikasi."
      },
      {
        number: "02",
        title: "Spesifikasi Dapat Disesuaikan",
        desc: "Geocell tersedia dengan cell depth 7,5–20 cm dan dua tipe permukaan (smooth dan textured) sehingga pemilihan produk dapat disesuaikan dengan kebutuhan teknis lapangan."
      },
      {
        number: "03",
        title: "Multi-Aplikasi",
        desc: "Satu sistem fleksibel untuk berbagai kebutuhan: jalan, lereng, retaining wall, drainase, saluran, area parkir, hingga lapangan golf."
      },
      {
        number: "04",
        title: "Material Pengisi Fleksibel",
        desc: "Dapat diisi dengan tanah, agregat, pasir, maupun beton sesuai ketersediaan material lokal dan target perkuatan proyek."
      },
      {
        number: "05",
        title: "Instalasi Lebih Praktis",
        desc: "Mudah digelar dan dipasang dengan cepat di lapangan sehingga mempercepat progress pekerjaan."
      },
      {
        number: "06",
        title: "Efisiensi Waktu dan Biaya",
        desc: "Membantu mengoptimalkan waktu pelaksanaan dan efisiensi biaya konstruksi tanpa mengorbankan kualitas perkuatan."
      }
    ],

    // [11] CATATAN PEMESANAN
    orderNote: `SIAPKAN DATA PROYEK ANDA
      Agar KAIROS GEO dapat memberikan rekomendasi yang lebih tepat, kirimkan:

      1. Jenis Proyek
        Jalan, lereng, retaining wall, saluran, drainase, parkir, tanggul, atau lainnya.

      2. Fungsi Geocell
        Erosi, reinforcement, load support, slope protection, atau kombinasi.

      3. Luas Area
        Panjang × lebar area yang akan diaplikasikan.

      4. Kemiringan Area
        Khusus untuk pekerjaan lereng dan slope protection.

      5. Cell Depth
        Jika sudah ditentukan oleh engineer (7,5–20 cm).

      6. Material Pengisi
        Tanah, pasir, agregat, beton, atau material lainnya.

      7. Kondisi Tanah
        Jenis dan kondisi tanah dasar jika tersedia.

      8. Lokasi Proyek
        Untuk kebutuhan logistik dan pengiriman.

      9. Kebutuhan Layanan
        SUPPLY ONLY atau SUPPLY + INSTALASI

      Belum tahu spesifikasinya? Tidak masalah.
      Kirim data proyek Anda, tim KAIROS GEO akan membantu menentukan kebutuhan material yang sesuai.`,

    // [12] REVIEWS
    reviews: [
      { name: "Yoga", rating: "★★★★★", text: "Stabilitas lerengnya jauh lebih baik." },
      { name: "Sinta", rating: "★★★★★", text: "Pemasangan gampang dan rapi." },
      { name: "Arif", rating: "★★★★★", text: "Pas untuk proyek badan jalan kami." },
    ],

    // [13] LINK
    checkoutUrl: buildCheckoutUrl("geocell"),
    whatsappUrl: buildWhatsappUrl("Geocell"),
},
];