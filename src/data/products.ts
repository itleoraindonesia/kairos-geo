export type Product = {
  slug: string;
  name: string;
  summary: string;
  heroImageUrl: string;
  bullets: string[];
};

export const products: Product[] = [
  {
    slug: "geomembran",
    name: "Geomembran",
    summary: "Lembaran kedap air performa tinggi untuk aplikasi containment.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80",
    bullets: ["Tahan kimia & sinar UV", "Kedap air & fleksibel", "Umur layanan panjang"],
  },
  {
    slug: "geotextile",
    name: "Geotextile",
    summary: "Non woven & woven geotextile untuk filtrasi, separasi, dan stabilisasi.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    bullets: ["Filtrasi & separasi efektif", "Perkuatan tanah & stabilisasi", "Berbagai gramasi tersedia"],
  },
];
