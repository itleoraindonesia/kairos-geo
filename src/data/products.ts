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
    marketplaceTitle: "Geomembran HDPE - Lembaran Kedap Air High Performance",
    categoryLabel: "Geosynthetics",
    summary: "Lembaran HDPE kedap air untuk kolam, tambak, TPA, dan area containment.",
    description:
      "Geomembrane adalah lembaran HDPE dengan tingkat impermeabilitas yang sangat tinggi. Material ini dipakai sebagai lapis kedap air untuk membantu menekan rembesan, menjaga performa sistem, dan mendukung umur layanan struktur.",
    heroImageUrl: "https://images.pexels.com/photos/8314514/pexels-photo-8314514.jpeg?cs=srgb&dl=pexels-altaf-shah-3143825-8314514.jpg&fm=jpg",
    images: [
      "https://images.pexels.com/photos/8314514/pexels-photo-8314514.jpeg?cs=srgb&dl=pexels-altaf-shah-3143825-8314514.jpg&fm=jpg",
      "https://images.pexels.com/photos/12815284/pexels-photo-12815284.jpeg?cs=srgb&dl=pexels-lio-voo-262755153-12815284.jpg&fm=jpg",
      "https://images.pexels.com/photos/10530994/pexels-photo-10530994.jpeg?cs=srgb&dl=pexels-alexeydemidov-10530994.jpg&fm=jpg",
      "/product/geogrid.jpeg",
    ],
    bullets: ["Kedap air tinggi", "Tahan UV & kimia", "Instalasi cepat"],
    features: [
      "Punya daya kedap yang kuat untuk kebutuhan containment.",
      "Tahan terhadap suhu panas, sinar UV, dan banyak bahan kimia.",
      "Instalasinya cepat dan efisien di lapangan.",
      "Cocok untuk proyek industri, lingkungan, dan pengelolaan air.",
    ],
    applications: ["Kolam limbah", "Tambak", "Danau buatan", "TPA", "Coal ash pond", "Heap leach tambang emas"],
    specs: [
      { label: "Material", value: "HDPE (High Density Polyethylene)" },
      { label: "Ketebalan", value: "0.5 mm, 0.75 mm, 1 mm, 1.5 mm, 2 mm, 2.5 mm, 3 mm" },
      { label: "Lebar Roll", value: "6 m - 8 m" },
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
    slug: "geotextile",
    name: "Geotextile",
    marketplaceTitle: "Geotextile Woven & Non Woven",
    categoryLabel: "Geosynthetics",
    summary: "Geotextile woven dan non woven untuk filtrasi, separasi, drainase, dan stabilisasi.",
    description:
      "Geotextile adalah material geosintetik yang hadir dalam dua varian utama, woven dan non woven. Kombinasi keduanya dipakai untuk penguatan tanah, pemisahan lapisan, pengendalian erosi, dan dukungan drainase pada proyek infrastruktur.",
    heroImageUrl: "https://images.pexels.com/photos/19208579/pexels-photo-19208579.jpeg?cs=srgb&dl=pexels-jean-paul-wettstein-677916508-19208579.jpg&fm=jpg",
    images: [
      "https://images.pexels.com/photos/19208579/pexels-photo-19208579.jpeg?cs=srgb&dl=pexels-jean-paul-wettstein-677916508-19208579.jpg&fm=jpg",
      "https://images.pexels.com/photos/36936624/pexels-photo-36936624.jpeg?cs=srgb&dl=pexels-peter-dyllong-2158803154-36936624.jpg&fm=jpg",
      "https://images.pexels.com/photos/1451368/pexels-photo-1451368.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "/product/geotextile-woven.jpeg",
    ],
    bullets: ["Woven & non woven", "Filtrasi dan separasi", "Stabilisasi tanah"],
    features: [
      "Membantu memisahkan tanah dan agregat supaya lapisan tetap stabil.",
      "Menguatkan daya dukung tanah dasar pada jalan, tanggul, dan dinding penahan tanah.",
      "Mendukung aliran air sekaligus menahan partikel tanah.",
      "Menahan erosi pada lereng, saluran air, dan area pantai.",
    ],
    applications: ["Konstruksi jalan", "Drainase", "Timbunan tanah", "Tanggul", "Area reklamasi"],
    specs: [
      { label: "Jenis", value: "Woven dan non woven" },
      { label: "Material", value: "Polypropylene (PP) / Polyester (PET)" },
      { label: "Gramasi", value: "150 gr - 600 gr" },
      { label: "Fungsi", value: "Filtrasi, separasi, drainase, stabilisasi" },
    ],
    ratingLabel: "(4.8)",
    soldLabel: "Terjual 320+",
    priceLabel: "Rp Hubungi Kami",
    stockLabel: "Tersedia",
    trustNote: "Konsultasi teknis dan pengiriman aman ke seluruh Indonesia.",
    reasons: [
      "Membantu memisahkan tanah dan agregat supaya lapisan tetap stabil.",
      "Menguatkan daya dukung tanah dasar pada jalan, tanggul, dan dinding penahan tanah.",
      "Mendukung aliran air sekaligus menahan partikel tanah.",
      "Menahan erosi pada lereng, saluran air, dan area pantai.",
    ],
    orderNote: "Klik beli untuk langsung ke Mayar.id atau gunakan konsultasi produk jika ingin cek kebutuhan dulu.",
    reviews: [
      { name: "Rina", rating: "★★★★★", text: "Kualitas sesuai untuk kebutuhan stabilisasi jalan." },
      { name: "Dedi", rating: "★★★★★", text: "Penjelasan tipe woven dan non woven jelas." },
      { name: "Lina", rating: "★★★★★", text: "Respon cepat dan bantu banget untuk proyek sipil." },
    ],
    checkoutUrl: buildCheckoutUrl("geotextile"),
    whatsappUrl: buildWhatsappUrl("Geotextile"),
  },
  {
    slug: "hydroseeding",
    name: "Hydroseeding",
    marketplaceTitle: "Hydroseeding - Revegetasi Cepat",
    categoryLabel: "Revegetation",
    summary: "Metode revegetasi cepat untuk stabilisasi lereng dan pengendalian erosi.",
    description:
      "Hydroseeding adalah metode penanaman dengan campuran benih, pupuk, air, dan media tanam yang disemprotkan ke permukaan tanah. Teknik ini membantu mempercepat tumbuhnya vegetasi dan menjaga lereng tetap stabil.",
    heroImageUrl: "https://images.pexels.com/photos/26742948/pexels-photo-26742948.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-26742948.jpg&fm=jpg",
    images: [
      "https://images.pexels.com/photos/26742948/pexels-photo-26742948.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-26742948.jpg&fm=jpg",
      "https://images.pexels.com/photos/33650475/pexels-photo-33650475.jpeg?cs=srgb&dl=pexels-nschalll-33650475.jpg&fm=jpg",
      "https://images.pexels.com/photos/18215389/pexels-photo-18215389.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "/product/geomat.jpeg",
    ],
    bullets: ["Revegetasi cepat", "Kontrol erosi", "Cocok area luas"],
    features: [
      "Mendukung pertumbuhan vegetasi dengan distribusi benih yang merata.",
      "Efektif untuk area lereng, reklamasi, dan lahan terbuka.",
      "Membantu menekan erosi permukaan secara cepat.",
      "Cocok untuk penanganan area luas dalam waktu singkat.",
    ],
    applications: ["Lereng jalan", "Reklamasi lahan", "Area tambang", "Taman dan landscape", "Area terbuka"],
    specs: [
      { label: "Metode", value: "Spray application" },
      { label: "Media", value: "Benih, air, pupuk, dan soil amendment" },
      { label: "Fungsi", value: "Revegetasi dan kontrol erosi" },
    ],
    ratingLabel: "(4.7)",
    soldLabel: "Terjual 140+",
    priceLabel: "Rp Hubungi Kami",
    stockLabel: "Tersedia",
    trustNote: "Layanan revegetasi untuk proyek skala kecil sampai besar.",
    reasons: [
      "Mendukung pertumbuhan vegetasi dengan distribusi benih yang merata.",
      "Efektif untuk area lereng, reklamasi, dan lahan terbuka.",
      "Membantu menekan erosi permukaan secara cepat.",
      "Cocok untuk penanganan area luas dalam waktu singkat.",
    ],
    orderNote: "Klik beli untuk langsung ke Mayar.id atau gunakan konsultasi produk jika ingin cek kebutuhan dulu.",
    reviews: [
      { name: "Fajar", rating: "★★★★★", text: "Hasil vegetasinya rapi dan cepat terlihat." },
      { name: "Novi", rating: "★★★★★", text: "Cocok untuk area reklamasi dan lereng." },
      { name: "Adit", rating: "★★★★★", text: "Timnya ngerti kondisi lapangan." },
    ],
    checkoutUrl: buildCheckoutUrl("hydroseeding"),
    whatsappUrl: buildWhatsappUrl("Hydroseeding"),
  },
  {
    slug: "batu-kapur",
    name: "Batu Kapur",
    marketplaceTitle: "Batu Kapur - Material Mineral Proyek",
    categoryLabel: "Mineral Supply",
    summary: "Material mineral untuk stabilisasi, penetralan, dan kebutuhan proyek sipil.",
    description:
      "Batu kapur digunakan dalam berbagai kebutuhan konstruksi dan lingkungan, mulai dari stabilisasi material dasar, penyesuaian kondisi tanah tertentu, sampai suplai material proyek.",
    heroImageUrl: "https://images.pexels.com/photos/10186718/pexels-photo-10186718.jpeg?cs=srgb&dl=pexels-olenkabohovyk-10186718.jpg&fm=jpg",
    images: [
      "https://images.pexels.com/photos/10186718/pexels-photo-10186718.jpeg?cs=srgb&dl=pexels-olenkabohovyk-10186718.jpg&fm=jpg",
      "https://images.pexels.com/photos/12633631/pexels-photo-12633631.jpeg?cs=srgb&dl=pexels-luciana-povoa-255743161-12633631.jpg&fm=jpg",
      "https://images.pexels.com/photos/16644281/pexels-photo-16644281.jpeg?cs=srgb&dl=pexels-budget-bizar-92378004-16644281.jpg&fm=jpg",
      "/product/gabion.jpeg",
    ],
    bullets: ["Material mineral serbaguna", "Mudah disuplai", "Cocok untuk sipil"],
    features: [
      "Bisa dipakai untuk kebutuhan proyek sipil dan lingkungan.",
      "Mendukung stabilisasi material dasar pada kebutuhan tertentu.",
      "Praktis untuk suplai material proyek.",
    ],
    applications: ["Stabilisasi material dasar", "Proyek sipil", "Pengolahan lingkungan"],
    specs: [
      { label: "Material", value: "Limestone / batu kapur" },
      { label: "Fungsi", value: "Stabilisasi dan penyesuaian kondisi material" },
      { label: "Sumber", value: "Suplai proyek" },
    ],
    ratingLabel: "(4.7)",
    soldLabel: "Terjual 90+",
    priceLabel: "Rp Hubungi Kami",
    stockLabel: "Tersedia",
    trustNote: "Suplai material untuk kebutuhan proyek sipil dan lingkungan.",
    reasons: [
      "Bisa dipakai untuk kebutuhan proyek sipil dan lingkungan.",
      "Mendukung stabilisasi material dasar pada kebutuhan tertentu.",
      "Praktis untuk suplai material proyek.",
    ],
    orderNote: "Klik beli untuk langsung ke Mayar.id atau gunakan konsultasi produk jika ingin cek kebutuhan dulu.",
    reviews: [
      { name: "Hendra", rating: "★★★★★", text: "Pas untuk kebutuhan material proyek kami." },
      { name: "Tika", rating: "★★★★★", text: "Kirimannya aman dan jelas koordinasinya." },
      { name: "Rizky", rating: "★★★★★", text: "Harga dan speknya gampang dipahami." },
    ],
    checkoutUrl: buildCheckoutUrl("batu-kapur"),
    whatsappUrl: buildWhatsappUrl("Batu Kapur"),
  },
  {
    slug: "modular-tank",
    name: "Modular Tank",
    marketplaceTitle: "Modular Tank - Tangki Modular Fleksibel",
    categoryLabel: "Water Storage",
    summary: "Tangki modular untuk penyimpanan air dan sistem drainase bawah tanah.",
    description:
      "Modular tank merupakan tangki penyimpanan air yang dirakit dari panel-panel modular. Sistem ini fleksibel, cepat dipasang, dan cocok untuk area terbatas maupun proyek drainase.",
    heroImageUrl: "https://images.pexels.com/photos/6961082/pexels-photo-6961082.jpeg?cs=srgb&dl=pexels-sashmere-6961082.jpg&fm=jpg",
    images: [
      "https://images.pexels.com/photos/6961082/pexels-photo-6961082.jpeg?cs=srgb&dl=pexels-sashmere-6961082.jpg&fm=jpg",
      "https://images.pexels.com/photos/34980269/pexels-photo-34980269.jpeg?cs=srgb&dl=pexels-v-d-2154519497-34980269.jpg&fm=jpg",
      "https://images.pexels.com/photos/10900759/pexels-photo-10900759.jpeg?cs=srgb&dl=pexels-magda-ehlers-pexels-10900759.jpg&fm=jpg",
      "/product/geo-pipe-single-wall.jpeg",
    ],
    bullets: ["Instalasi cepat", "Kapasitas fleksibel", "Cocok untuk area terbatas"],
    features: [
      "Panel modular membuat pemasangan lebih cepat dan efisien.",
      "Cocok untuk penyimpanan air bersih maupun air hujan.",
      "Mendukung sistem resapan dan drainase bawah tanah.",
      "Bisa disesuaikan dengan kebutuhan volume proyek.",
    ],
    applications: ["Sumur resapan", "Drainase bawah tanah", "Penyimpanan air", "Area proyek terbatas"],
    specs: [
      { label: "Material", value: "Polypropylene modular panel" },
      { label: "Fungsi", value: "Penyimpanan air dan resapan" },
      { label: "Karakter", value: "Ringan, fleksibel, dan cepat dirakit" },
    ],
    ratingLabel: "(4.8)",
    soldLabel: "Terjual 75+",
    priceLabel: "Rp Hubungi Kami",
    stockLabel: "Tersedia",
    trustNote: "Solusi tangki modular untuk proyek dengan kebutuhan volume fleksibel.",
    reasons: [
      "Panel modular membuat pemasangan lebih cepat dan efisien.",
      "Cocok untuk penyimpanan air bersih maupun air hujan.",
      "Mendukung sistem resapan dan drainase bawah tanah.",
      "Bisa disesuaikan dengan kebutuhan volume proyek.",
    ],
    orderNote: "Klik beli untuk langsung ke Mayar.id atau gunakan konsultasi produk jika ingin cek kebutuhan dulu.",
    reviews: [
      { name: "Maya", rating: "★★★★★", text: "Sistemnya fleksibel dan cepat dipasang." },
      { name: "Fikri", rating: "★★★★★", text: "Cocok untuk kebutuhan penyimpanan air proyek." },
      { name: "Dina", rating: "★★★★★", text: "Konsultasinya membantu untuk sizing." },
    ],
    checkoutUrl: buildCheckoutUrl("modular-tank"),
    whatsappUrl: buildWhatsappUrl("Modular Tank"),
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
  {
    slug: "pipa",
    name: "Pipa",
    marketplaceTitle: "Pipa HDPE - Drainase & Irigasi",
    categoryLabel: "Drainage System",
    summary: "Pipa HDPE untuk drainase, irigasi, dan pengaliran bawah tanah.",
    description:
      "Pipa HDPE digunakan untuk sistem drainase, pengumpulan aliran air, irigasi, dan aplikasi bawah tanah lain. Varian corrugated, spiral, dan perforated bisa disesuaikan dengan kebutuhan proyek.",
    heroImageUrl: "https://images.pexels.com/photos/36054384/pexels-photo-36054384.jpeg?cs=srgb&dl=pexels-peter-dyllong-2158803154-36054384.jpg&fm=jpg",
    images: [
      "https://images.pexels.com/photos/36054384/pexels-photo-36054384.jpeg?cs=srgb&dl=pexels-peter-dyllong-2158803154-36054384.jpg&fm=jpg",
      "https://images.pexels.com/photos/29301874/pexels-photo-29301874.jpeg?cs=srgb&dl=pexels-sejio402-29301874.jpg&fm=jpg",
      "https://images.pexels.com/photos/26087503/pexels-photo-26087503.jpeg?cs=srgb&dl=pexels-juan-ernesto-briceno-diaz-1238188342-26087503.jpg&fm=jpg",
      "/product/geo-pipe.jpeg",
    ],
    bullets: ["Drainase efisien", "Varian lengkap", "Instalasi fleksibel"],
    features: [
      "Tersedia opsi corrugated, spiral, dan perforated.",
      "Mendukung aliran air pada drainase bawah tanah.",
      "Fleksibel untuk kebutuhan irigasi dan utilitas proyek.",
      "Cocok untuk aplikasi dengan beban kerja tinggi.",
    ],
    applications: ["Drainase bawah tanah", "Irigasi", "Retaining wall", "Jalan raya", "Lapangan dan utilitas"],
    specs: [
      { label: "Material", value: "HDPE (High Density Polyethylene)" },
      { label: "Tipe", value: "Corrugated, spiral, perforated" },
      { label: "Fungsi", value: "Drainase dan pengaliran air" },
    ],
    ratingLabel: "(4.7)",
    soldLabel: "Terjual 150+",
    priceLabel: "Rp Hubungi Kami",
    stockLabel: "Tersedia",
    trustNote: "Solusi pipa untuk drainase, irigasi, dan utilitas proyek.",
    reasons: [
      "Tersedia opsi corrugated, spiral, dan perforated.",
      "Mendukung aliran air pada drainase bawah tanah.",
      "Fleksibel untuk kebutuhan irigasi dan utilitas proyek.",
      "Cocok untuk aplikasi dengan beban kerja tinggi.",
    ],
    orderNote: "Klik beli untuk langsung ke Mayar.id atau gunakan konsultasi produk jika ingin cek kebutuhan dulu.",
    reviews: [
      { name: "Iwan", rating: "★★★★★", text: "Pipa sesuai untuk drainase bawah tanah." },
      { name: "Nanda", rating: "★★★★★", text: "Pilihan tipe pipa lengkap." },
      { name: "Rani", rating: "★★★★★", text: "Respon penawaran cepat." },
    ],
    checkoutUrl: buildCheckoutUrl("pipa"),
    whatsappUrl: buildWhatsappUrl("Pipa"),
  },
];
