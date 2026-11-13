// All site copy and product data lives here.
// To use real photography, set `image` on any item to an image URL or an
// imported asset (e.g. "/images/manteau-aurore.jpg" placed in /public/images).

export const ticker = [
  "Haute Couture",
  "Prêt-à-Porter",
  "Paris",
  "Milano",
  "New York",
  "Tōkyō",
];

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Collections", href: "#collections" },
  { label: "Women", href: "#best-sellers" },
  { label: "Men", href: "#collections" },
  { label: "New Arrivals", href: "#new-arrival" },
  { label: "About", href: "#story" },
  { label: "Contact", href: "#footer" },
];

export const collections = [
  {
    id: "femme",
    no: "01",
    kicker: "Women's Collection",
    meta: "64 pieces",
    title: "Femme",
    tagline: "Soft power, sculpted.",
    tone: "bone",
    image: null,
  },
  {
    id: "couture",
    no: "03",
    kicker: "Made by hand, for one",
    title: "Haute Couture",
    tagline: "",
    tone: "gold",
    image: null,
  },
  {
    id: "homme",
    no: "02",
    kicker: "Men's Collection",
    title: "Homme",
    tagline: "Quiet authority.",
    tone: "ink",
    image: null,
  },
  {
    id: "soiree",
    no: "04",
    kicker: "Evening wear after dark",
    title: "Soirée",
    tagline: "",
    tone: "night",
    image: null,
  },
  {
    id: "ete",
    no: "05",
    kicker: "Summer Riviera",
    title: "Été",
    tagline: "Linen, light & sun.",
    tone: "sand",
    image: null,
  },
  {
    id: "accessoires",
    no: "06",
    kicker: "Accessories · 51 pieces",
    title: "Accessoires",
    tagline:
      "Calf leather, sculpted gold and silk carré — the finishing gesture of every Maison silhouette.",
    tone: "cream",
    image: null,
  },
];

export const editorial = {
  issue: "Editorial Issue N° 04 · Printemps–Été 2025",
  quote:
    "Chapitre IV — Lumière is a study of light on cloth: how silk catches dawn, how cashmere holds dusk.",
  body: "Forty-two looks composed between our Paris atelier and the dunes of Merzouga. Fluid columns, sculpted outerwear and a palette drawn from sand, bone and gold.",
  looks: 42,
  photographer: "Inès Valmont",
  available: "14 March 2025",
  caption: "Look 12 — Robe Colonne, silk crêpe",
  badge: "N° 1 few left",
};

export const products = [
  {
    id: "manteau-aurore",
    name: "Manteau Aurore",
    desc: "Double-faced cashmere wrap coat",
    price: 3450,
    category: "Ready-to-wear",
    tone: "camel",
    image: null,
  },
  {
    id: "chemise-lumiere",
    name: "Chemise Lumière",
    desc: "Silk crêpe de chine blouse",
    price: 1180,
    category: "Ready-to-wear",
    tone: "cream",
    image: null,
  },
  {
    id: "pantalon-atelier",
    name: "Pantalon Atelier",
    desc: "Wide-leg virgin wool trousers",
    price: 1290,
    category: "Ready-to-wear",
    tone: "ink",
    image: null,
  },
  {
    id: "escarpin-nuit",
    name: "Escarpin Nuit",
    desc: "Patent slingback, 85 mm",
    price: 950,
    category: "Shoes",
    tone: "night",
    image: null,
  },
];

export const productFilters = ["All", "Ready-to-wear", "Shoes"];

export const bag = {
  id: "sac-lune",
  name: "Le Sac Lune",
  price: 2850,
  kicker: "Leather goods — New season",
  desc: "A crescent of hand-burnished calf leather, cut from a single hide and closed with our sculpted gold Lune clasp. Shaped over three days by one artisan in our Florence atelier.",
  colours: [
    { name: "Ivoire", hex: "#efe7d6" },
    { name: "Sable", hex: "#c8ad86" },
    { name: "Cognac", hex: "#8a5a36" },
    { name: "Nuit", hex: "#1c1a18" },
  ],
  sizes: [
    { id: "mini", label: "Mini", dims: "18 × 12 × 7 cm" },
    { id: "moyen", label: "Moyen", dims: "24 × 16 × 9 cm" },
    { id: "grand", label: "Grand", dims: "30 × 20 × 11 cm" },
  ],
  perks: ["Complimentary delivery", "Signature packaging", "Made in Firenze"],
  accordions: [
    {
      title: "Details & dimensions",
      body: "Hand-burnished calf leather, silk twill lining, sculpted gold-plated Lune clasp. Interior slip pocket and a detachable chain strap.",
    },
    {
      title: "Craftsmanship",
      body: "Cut from a single hide and shaped over three days by one artisan in our Florence atelier. Each bag is numbered and signed on the inner lining.",
    },
    {
      title: "Delivery & returns",
      body: "Complimentary insured delivery in 2–4 working days. Returns accepted within 30 days in original packaging.",
    },
  ],
  views: [
    { id: "front", label: "Front", angle: 0 },
    { id: "side", label: "Side", angle: 90 },
    { id: "back", label: "Back", angle: 180 },
    { id: "top", label: "Top", angle: 270 },
  ],
};

export const craft = {
  intro:
    "Every Maison piece begins with a material chosen by hand — then entrusted to artisans whose gestures have been refined over generations.",
  stats: [
    { value: "240", label: "Hours per gown" },
    { value: "18", label: "Hands per coat" },
    { value: "100%", label: "Traceable fibres" },
  ],
  materials: [
    {
      name: "Double-faced cashmere",
      origin: "Biella, Italy — hand-split at the seams",
    },
    { name: "Silk crêpe de chine", origin: "Como, Italy — 22 momme weight" },
    {
      name: "Gold-thread embroidery",
      origin: "Paris — 40,000 stitches per bodice",
    },
  ],
};

export const steps = [
  {
    no: "01",
    title: "The Sketch",
    body: "Élise draws every silhouette by hand in charcoal. Of 400 sketches each season, forty become looks.",
    tone: "bone",
  },
  {
    no: "02",
    title: "The Toile",
    body: "Each line is cut in muslin and pinned on the form, then refined until the drape is exact.",
    tone: "cream",
  },
  {
    no: "03",
    title: "The Atelier",
    body: "Artisans in Paris, Firenze and Biella cut, sew and finish every piece entirely by hand.",
    tone: "sand",
  },
  {
    no: "04",
    title: "The Final Fitting",
    body: "A last fitting in the salon, where every hem and shoulder is adjusted to the wearer.",
    tone: "camel",
  },
];

export const sizes = ["34", "36", "38", "40", "42", "44"];

export const story = {
  text: "Founded in Paris in 1987, Maison Élégance believes true luxury is quiet. It lives in the weight of a cashmere, the line of a shoulder, the patience of a hand that sews for seven hundred hours. We design for those who choose to go beyond the ordinary.",
  founder: "Élise Marchand",
  role: "Founder & Creative Director",
  stats: [
    { value: "1987", label: "Founded in Paris" },
    { value: "32", label: "Maisons worldwide" },
    { value: "214", label: "Artisans in our ateliers" },
    { value: "3", label: "Ateliers — Paris, Firenze, Biella" },
  ],
};

export const exclusive = {
  kicker: "Exclusive Collection · By appointment only",
  title: "L'Exclusive",
  text: "Fifty numbered pieces, hand-finished in our Paris atelier. Never to be reproduced.",
  remaining: 17,
  total: 50,
  coords: "Collection Privée N° IV · 48.8656°N — 2.3046°E",
};

export const footer = {
  blurb:
    "Haute couture and ready-to-wear, designed in Paris and made by hand in our ateliers since 1987.",
  columns: [
    {
      title: "Client Services",
      links: ["Book an appointment", "Shipping & returns", "Size guide", "Care guide"],
    },
    {
      title: "The Maison",
      links: ["Our story", "Craftsmanship", "Behind the design", "Boutiques"],
    },
  ],
  contact: {
    phone: "+33 1 40 00 25 87",
    email: "clientservices@maison-elegance.com",
    address: "42 Avenue Montaigne, 75008 Paris",
    hours: "Mon–Sat, 10:00 – 19:00 CET",
  },
};

export const formatPrice = (n) =>
  "€" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
