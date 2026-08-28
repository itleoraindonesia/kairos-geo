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
    slug: "geomembran",
    name: "Geomembran",
    marketplaceTitle: "Geomembran HDPE - Solusi Kedap Air untuk Perlindungan Jangka Panjang",
    categoryLabel: "Geosynthetics",
    summary: "Solusi kedap air untuk kolam, tambak, tempat pembuangan akhir, area limbah, dan kebutuhan penampungan lainnya.",
    description:
      "Geomembran KAIROS GEO merupakan lapisan kedap berbahan HDPE/LLDPE yang dirancang untuk membantu mencegah rembesan cairan, melindungi tanah, dan menjaga kestabilan sistem containment / penampungan pada berbagai kebutuhan proyek. Dengan karakter kedap air, tahan terhadap paparan lingkungan dan bahan kimia, serta fleksibel mengikuti kondisi lapangan, geomembran menjadi solusi efektif untuk proyek infrastruktur, lingkungan, pertambangan, perikanan, dan industri.",
    heroImageUrl: "https://images.pexels.com/photos/8314514/pexels-photo-8314514.jpeg?cs=srgb&dl=pexels-altaf-shah-3143825-8314514.jpg&fm=jpg",
    images: [
      "https://images.pexels.com/photos/8314514/pexels-photo-8314514.jpeg?cs=srgb&dl=pexels-altaf-shah-3143825-8314514.jpg&fm=jpg",
      "https://images.pexels.com/photos/12815284/pexels-photo-12815284.jpeg?cs=srgb&dl=pexels-lio-voo-262755153-12815284.jpg&fm=jpg",
      "https://images.pexels.com/photos/10530994/pexels-photo-10530994.jpeg?cs=srgb&dl=pexels-alexeydemidov-10530994.jpg&fm=jpg",
      "/product/geogrid.jpeg",
    ],
    bullets: ["Perlindungan dari kebocoran", "Tahan UV & bahan kimia", "Kuat untuk penggunaan jangka panjang", "Mudah diaplikasikan di lapangan"],
    features: [
      "Punya daya kedap yang kuat untuk kebutuhan containment.",
      "Tahan terhadap suhu panas, sinar UV, dan banyak bahan kimia.",
      "Instalasinya cepat dan efisien di lapangan.",
      "Cocok untuk proyek industri, lingkungan, dan pengelolaan air.",
    ],
    applications: ["Kolam limbah", "Tambak", "Danau buatan", "TPA", "Coal ash pond", "Heap leach tambang emas"],
    specs: [
      { label: "Material", value: "HDPE / LLDPE" },
      { label: "Ketebalan", value: "0,30 mm - 3,00 mm" },
      { label: "Lebar Roll", value: "±7 meter untuk varian utama" },
      { label: "Panjang Roll", value: "Menyesuaikan ketebalan" },
      { label: "Diameter Roll", value: "Menyesuaikan ketebalan" },
      { label: "Warna", value: "Hitam" },
    ],
    ratingLabel: "(4.9)",
    soldLabel: "Terjual 500+",
    priceLabel: "Rp Hubungi Kami",
    stockLabel: "Tersedia",
    trustNote: "Jaminan kualitas & pengiriman aman ke seluruh Indonesia.",
    reasons: [
      "Material HDPE murni dan performa konsisten.",
      "Tahan UV, bahan kimia, dan kondisi lapangan.",
      "Fleksibel untuk berbagai kebutuhan proyek.",
      "Konsultasi teknis sebelum checkout.",
    ],
    orderNote: "Klik beli untuk langsung ke Mayar.id atau gunakan konsultasi produk jika ingin cek kebutuhan dulu.",
    reviews: [
      { name: "Andi", rating: "★★★★★", text: "Material rapi, respon cepat, dan penjelasan teknisnya jelas." },
      { name: "Sari", rating: "★★★★★", text: "Sangat cocok untuk kebutuhan proyek kolam dan containment." },
      { name: "Budi", rating: "★★★★★", text: "Alur checkout mudah, konsultasi WA juga membantu banget." },
    ],
    checkoutUrl: buildCheckoutUrl("geomembran"),
    whatsappUrl: buildWhatsappUrl("Geomembran"),
  },
  {
    slug: "geotekstil-woven",
    name: "Geotekstil Woven",
    marketplaceTitle: "Geotekstil Woven - Solusi Perkuatan & Separasi Tanah",
    categoryLabel: "Geosynthetics",
    summary: "Geotekstil woven dengan kuat tarik tinggi untuk perkuatan tanah dasar, jalan, dan timbunan.",
    description:
      "Geotekstil Woven adalah material geosintetik anyaman berbahan dasar Polypropylene (PP) atau Polyester (PET) yang memiliki kuat tarik (tensile strength) sangat tinggi. Sangat efektif untuk separasi dan perkuatan struktur tanah lunak.",
    heroImageUrl: "https://images.pexels.com/photos/19208579/pexels-photo-19208579.jpeg?cs=srgb&dl=pexels-jean-paul-wettstein-677916508-19208579.jpg&fm=jpg",
    images: [
      "https://images.pexels.com/photos/19208579/pexels-photo-19208579.jpeg?cs=srgb&dl=pexels-jean-paul-wettstein-677916508-19208579.jpg&fm=jpg",
      "https://images.pexels.com/photos/36936624/pexels-photo-36936624.jpeg?cs=srgb&dl=pexels-peter-dyllong-2158803154-36936624.jpg&fm=jpg",
      "/product/geotextile-woven.jpeg",
    ],
    bullets: ["Kuat tarik tinggi", "Separasi tanah dasar", "Stabilisasi jalan"],
    features: [
      "Kuat tarik tinggi untuk menahan beban lateral dan vertikal.",
      "Mencegah percampuran antara tanah dasar lunak dan agregat pondasi.",
      "Meningkatkan stabilitas konstruksi jalan dan timbunan.",
      "Tahan terhadap erosi serta zat kimia alami tanah.",
    ],
    applications: ["Konstruksi jalan raya", "Perkuatan timbunan tanah", "Lahan parkir & pelabuhan", "Jalur kereta api"],
    specs: [
      { label: "Material", value: "Polypropylene (PP) / Polyester (PET)" },
      { label: "Kuat Tarik", value: "15 kN/m - 100+ kN/m" },
      { label: "Lebar Roll", value: "4 m - 6 m" },
      { label: "Fungsi Utama", value: "Perkuatan (Reinforcement) & Separasi" },
    ],
    ratingLabel: "(4.8)",
    soldLabel: "Terjual 350+",
    priceLabel: "Rp Hubungi Kami",
    stockLabel: "Tersedia",
    trustNote: "Konsultasi teknis dan pengiriman aman ke seluruh Indonesia.",
    reasons: [
      "Sangat efektif untuk perkuatan struktur tanah lunak.",
      "Material tahan lama dengan ketahanan terhadap mikroorganisme.",
      "Mengurangi ketebalan agregat yang dibutuhkan.",
      "Konsultasi teknis gratis sebelum pembelian.",
    ],
    orderNote: "Klik beli untuk langsung ke Mayar.id atau gunakan konsultasi produk jika ingin cek kebutuhan dulu.",
    reviews: [
      { name: "Rina", rating: "★★★★★", text: "Kualitas sesuai untuk kebutuhan stabilisasi jalan." },
      { name: "Dedi", rating: "★★★★★", text: "Kuat tariknya oke banget untuk tanah lunak." },
      { name: "Lina", rating: "★★★★★", text: "Respon cepat dan bantu banget untuk proyek sipil." },
    ],
    checkoutUrl: buildCheckoutUrl("geotekstil-woven"),
    whatsappUrl: buildWhatsappUrl("Geotekstil Woven"),
  },
  {
    slug: "geotekstil-non-woven",
    name: "Geotekstil Non Woven",
    marketplaceTitle: "Geotekstil Non Woven - Filtrasi, Drainase & Proteksi",
    categoryLabel: "Geosynthetics",
    summary: "Geotekstil non woven untuk fungsi filtrasi, drainase, separasi, dan proteksi geomembran.",
    description:
      "Geotekstil Non Woven adalah lembaran tidak teranyam yang dibuat melalui proses needle-punched. Material ini memiliki permeabilitas tinggi yang ideal untuk fungsi filtrasi air, sistem drainase, serta proteksi lapis geomembran dari tusukan.",
    heroImageUrl: "https://images.pexels.com/photos/26742948/pexels-photo-26742948.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-26742948.jpg&fm=jpg",
    images: [
      "https://images.pexels.com/photos/26742948/pexels-photo-26742948.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-26742948.jpg&fm=jpg",
      "https://images.pexels.com/photos/33650475/pexels-photo-33650475.jpeg?cs=srgb&dl=pexels-nschalll-33650475.jpg&fm=jpg",
      "/product/geotextile-non-woven.jpeg",
    ],
    bullets: ["Filtrasi & drainase", "Proteksi geomembran", "Permeabilitas tinggi"],
    features: [
      "Meloloskan air dengan baik sekaligus menahan partikel halus tanah.",
      "Melindungi geomembran dari gesekan dan tusukan benda tajam.",
      "Fleksibel dan mudah dipotong sesuai kondisi lapangan.",
      "Tahan terhadap pembusukan dan zat kimia lingkungan.",
    ],
    applications: ["Sistem drainase bawah tanah", "Pelapis proteksi geomembran", "Filter retaining wall", "Pengendalian erosi"],
    specs: [
      { label: "Material", value: "Polyester (PET) / Polypropylene (PP)" },
      { label: "Gramasi", value: "150 gr/m² - 600 gr/m²" },
      { label: "Tipe", value: "Needle Punched Non Woven" },
      { label: "Fungsi Utama", value: "Filtrasi, Drainase, & Proteksi" },
    ],
    ratingLabel: "(4.9)",
    soldLabel: "Terjual 280+",
    priceLabel: "Rp Hubungi Kami",
    stockLabel: "Tersedia",
    trustNote: "Suplai material berkualitas tinggi untuk proyek infrastruktur.",
    reasons: [
      "Lolos air optimal tanpa resiko tersumbat partikel tanah.",
      "Efektif memperpanjang umur geomembran.",
      "Mudah dipasang pada berbagai medan.",
      "Ready stock berbagai varian gramasi.",
    ],
    orderNote: "Klik beli untuk langsung ke Mayar.id atau gunakan konsultasi produk jika ingin cek kebutuhan dulu.",
    reviews: [
      { name: "Fajar", rating: "★★★★★", text: "Gramasi sesuai dan seratnya padat." },
      { name: "Novi", rating: "★★★★★", text: "Bagus banget buat proteksi geomembran kolam." },
      { name: "Adit", rating: "★★★★★", text: "Pengiriman cepat dan CS sangat kooperatif." },
    ],
    checkoutUrl: buildCheckoutUrl("geotekstil-non-woven"),
    whatsappUrl: buildWhatsappUrl("Geotekstil Non Woven"),
  },
  {
    slug: "geobag",
    name: "Geobag",
    marketplaceTitle: "Geobag - Kantong Geosintetik Pelindung Erosi & Pantai",
    categoryLabel: "Erosion Control",
    summary: "Kantong geotekstil pengisi pasir/tanah untuk proteksi erosi, dinding penahan, dan pengaman pantai.",
    description:
      "Geobag adalah kantong yang terbuat dari bahan geotekstil kuat (woven atau non woven) yang diisi dengan pasir atau tanah lokal. Digunakan sebagai tanggul darurat, pelindung erosi tebing sungai, dan pemecah gelombang pantai.",
    heroImageUrl: "https://images.pexels.com/photos/10186718/pexels-photo-10186718.jpeg?cs=srgb&dl=pexels-olenkabohovyk-10186718.jpg&fm=jpg",
    images: [
      "https://images.pexels.com/photos/10186718/pexels-photo-10186718.jpeg?cs=srgb&dl=pexels-olenkabohovyk-10186718.jpg&fm=jpg",
      "https://images.pexels.com/photos/12633631/pexels-photo-12633631.jpeg?cs=srgb&dl=pexels-luciana-povoa-255743161-12633631.jpg&fm=jpg",
      "/product/geobag.jpeg",
    ],
    bullets: ["Pelindung erosi", "Dinding penahan instan", "Tahan UV & abrasi"],
    features: [
      "Material jahitan ganda yang kuat menahan beban isian.",
      "Mampu menahan gelombang air dan abrasi pantai secara efektif.",
      "Dapat diisi menggunakan tanah atau pasir di lokasi proyek.",
      "Ramah lingkungan dan mendukung tumbuhnya vegetasi.",
    ],
    applications: ["Proteksi tebing sungai", "Pengaman pantai & breakwater", "Tanggul penahan banjir", "Stabilisasi lereng"],
    specs: [
      { label: "Material", value: "Geotextile Non Woven / Woven Polypropylene" },
      { label: "Ukuran Standard", value: "1.05m x 0.7m, 2.4m x 1.4m (Customable)" },
      { label: "Daya Tahan", value: "UV Resistant & Anti Abrasi" },
      { label: "Fungsi Utama", value: "Proteksi Erosi & Containment" },
    ],
    ratingLabel: "(4.8)",
    soldLabel: "Terjual 200+",
    priceLabel: "Rp Hubungi Kami",
    stockLabel: "Tersedia",
    trustNote: "Kantong geotekstil standar industri dengan jaminan kualitas jahitan.",
    reasons: [
      "Sangat praktis dengan memanfaatkan tanah/pasir setempat.",
      "Jahitan kuat dan teruji di berbagai proyek pesisir.",
      "Alternatif ekonomis untuk struktur retaining wall konvensional.",
      "Siap kirim ke seluruh wilayah Indonesia.",
    ],
    orderNote: "Klik beli untuk langsung ke Mayar.id atau gunakan konsultasi produk jika ingin cek kebutuhan dulu.",
    reviews: [
      { name: "Hendra", rating: "★★★★★", text: "Jahitannya sangat kuat, tidak robek saat diisi penuh pasir." },
      { name: "Tika", rating: "★★★★★", text: "Sangat membantu untuk proyek penahan erosi tebing." },
      { name: "Rizky", rating: "★★★★★", text: "Kualitas geobag mantap, pengiriman tepat waktu." },
    ],
    checkoutUrl: buildCheckoutUrl("geobag"),
    whatsappUrl: buildWhatsappUrl("Geobag"),
  },
  {
    slug: "geocell",
    name: "Geocell",
    marketplaceTitle: "Geocell - Stabilitas Tanah & Lereng",
    categoryLabel: "Soil Stabilization",
    summary: "Sistem sel tiga dimensi untuk stabilisasi tanah, lereng, dan perkuatan permukaan.",
    description:
      "Geocell adalah material geosintetik tiga dimensi berbentuk sarang lebah yang disusun dari lembaran atau strip HDPE. Struktur ini membantu menahan erosi, mengunci agregat, dan meningkatkan stabilitas tanah.",
    heroImageUrl: "https://images.pexels.com/photos/4784827/pexels-photo-4784827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    images: [
      "https://images.pexels.com/photos/4784827/pexels-photo-4784827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/18354699/pexels-photo-18354699.jpeg?cs=srgb&dl=pexels-andromeda99-18354699.jpg&fm=jpg",
      "https://images.pexels.com/photos/18151669/pexels-photo-18151669.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "/product/geocell.jpeg",
    ],
    bullets: ["Stabilisasi tanah", "Menahan erosi", "Mudah dipasang"],
    features: [
      "Struktur sel membantu mengunci material pengisi.",
      "Efektif untuk perkuatan lereng dan badan jalan.",
      "Membantu mengurangi pergerakan material di lapangan.",
      "Cocok untuk area dengan kebutuhan stabilisasi tinggi.",
    ],
    applications: ["Lereng", "Badan jalan", "Proteksi saluran air", "Area dengan tanah lunak"],
    specs: [
      { label: "Material", value: "HDPE" },
      { label: "Bentuk", value: "Struktur sarang lebah / honeycomb" },
      { label: "Fungsi", value: "Stabilisasi dan perkuatan tanah" },
    ],
    ratingLabel: "(4.8)",
    soldLabel: "Terjual 110+",
    priceLabel: "Rp Hubungi Kami",
    stockLabel: "Tersedia",
    trustNote: "Cocok untuk area dengan kebutuhan stabilisasi tinggi.",
    reasons: [
      "Struktur sel membantu mengunci material pengisi.",
      "Efektif untuk perkuatan lereng dan badan jalan.",
      "Membantu mengurangi pergerakan material di lapangan.",
      "Cocok untuk area dengan kebutuhan stabilisasi tinggi.",
    ],
    orderNote: "Klik beli untuk langsung ke Mayar.id atau gunakan konsultasi produk jika ingin cek kebutuhan dulu.",
    reviews: [
      { name: "Yoga", rating: "★★★★★", text: "Stabilitas lerengnya jauh lebih baik." },
      { name: "Sinta", rating: "★★★★★", text: "Pemasangan gampang dan rapi." },
      { name: "Arif", rating: "★★★★★", text: "Pas untuk proyek badan jalan kami." },
    ],
    checkoutUrl: buildCheckoutUrl("geocell"),
    whatsappUrl: buildWhatsappUrl("Geocell"),
  },
];