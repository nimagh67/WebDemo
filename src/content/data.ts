/**
 * AROUSHA GLOBAL — structured data layer.
 * CMS-ready: every entity below is shaped so a future admin panel / AI bot
 * can read & write it without touching the UI code.
 * NOTE: stats & certificate list are CLIENT-APPROVED PLACEHOLDERS for now.
 */

export interface SectorVars {
  t1: string;
  t2: string;
  glow: string;
  acc: string;
}

export interface SectorDef {
  id: string;
  icon: string; // lucide icon name
  vars: SectorVars;
  productCount: number; // placeholder until client confirms
  available: boolean; // has a dedicated page?
}

export const SECTORS: SectorDef[] = [
  {
    id: "oil",
    icon: "Fuel",
    vars: { t1: "#161B22", t2: "#080A0F", glow: "#E8961E", acc: "#F2A94F" },
    productCount: 38,
    available: true,
  },
  {
    id: "petrochemical",
    icon: "FlaskConical",
    vars: { t1: "#073038", t2: "#04222A", glow: "#2FE0DC", acc: "#54E6DC" },
    productCount: 36,
    available: false,
  },
  {
    id: "food",
    icon: "Wheat",
    vars: { t1: "#0C2E20", t2: "#071F15", glow: "#46D68B", acc: "#67E09E" },
    productCount: 34,
    available: false,
  },
  {
    id: "metals",
    icon: "Anvil",
    vars: { t1: "#2C190E", t2: "#180D07", glow: "#E08D4C", acc: "#E89A5E" },
    productCount: 33,
    available: false,
  },
  {
    id: "stones",
    icon: "Gem",
    vars: { t1: "#1D152E", t2: "#110B1C", glow: "#9D7BEA", acc: "#B79CF3" },
    productCount: 31,
    available: false,
  },
  {
    id: "general",
    icon: "Container",
    vars: { t1: "#151739", t2: "#0B0C22", glow: "#7D8CFF", acc: "#9AA6FF" },
    productCount: 38,
    available: false,
  },
];

/* ---------------- products (sector: oil — phase 1 preview) ---------------- */

export type OilCategory = "bitumen" | "lubricants" | "petrochemical" | "fuels";

export interface Spec {
  k: string; // key into dict.specLabels
  v: string; // value (language-neutral, shown with LTR numbers)
}

export interface ProductDef {
  id: string;
  sector: "oil";
  category: OilCategory;
  img: string;
  badges: string[];
  specs: Spec[];
  packingKey?: string; // dict key
}

export const OIL_PRODUCTS: ProductDef[] = [
  {
    id: "bitumen-60-70",
    sector: "oil",
    category: "bitumen",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/bitumen.jpg`,
    badges: ["ASTM D946", "AASHTO M20"],
    specs: [
      { k: "penetration", v: "60 – 70 (0.1 mm)" },
      { k: "softeningPoint", v: "49 – 56 °C" },
      { k: "ductility", v: "≥ 100 cm" },
      { k: "flashPoint", v: "≥ 232 °C" },
      { k: "solubility", v: "≥ 99.0 %" },
      { k: "specificGravity", v: "1.01 – 1.06" },
    ],
    packingKey: "packingDrums",
  },
  {
    id: "bitumen-80-100",
    sector: "oil",
    category: "bitumen",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/bitumen-80.jpg`,
    badges: ["ASTM D946"],
    specs: [
      { k: "penetration", v: "80 – 100 (0.1 mm)" },
      { k: "softeningPoint", v: "45 – 52 °C" },
      { k: "ductility", v: "≥ 100 cm" },
      { k: "flashPoint", v: "≥ 220 °C" },
      { k: "solubility", v: "≥ 99.0 %" },
      { k: "specificGravity", v: "1.01 – 1.05" },
    ],
    packingKey: "packingDrums",
  },
  {
    id: "vacuum-bottom",
    sector: "oil",
    category: "bitumen",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/vacuum-bottom.jpg`,
    badges: ["Feedstock"],
    specs: [
      { k: "penetration", v: "40 – 120 (0.1 mm)" },
      { k: "softeningPoint", v: "40 – 50 °C" },
      { k: "specificGravity", v: "1.00 – 1.06" },
      { k: "sulfurContent", v: "3.0 – 4.5 %" },
      { k: "flashPoint", v: "≥ 220 °C" },
    ],
    packingKey: "packingBulk",
  },
  {
    id: "base-oil-sn500",
    sector: "oil",
    category: "lubricants",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/baseoil.jpg`,
    badges: ["Group I", "Virgin"],
    specs: [
      { k: "viscosity40", v: "95 – 110 cSt" },
      { k: "viscosity100", v: "10.8 – 11.5 cSt" },
      { k: "viscosityIndex", v: "≥ 95" },
      { k: "flashPoint", v: "≥ 220 °C" },
      { k: "pourPoint", v: "≤ −9 °C" },
      { k: "density", v: "0.880 – 0.890 g/cm³" },
    ],
    packingKey: "packingDrums",
  },
  {
    id: "granular-sulfur",
    sector: "oil",
    category: "petrochemical",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/sulfur.jpg`,
    badges: ["99.9%"],
    specs: [
      { k: "purity", v: "≥ 99.9 %" },
      { k: "ash", v: "≤ 0.05 %" },
      { k: "moisture", v: "≤ 0.5 %" },
      { k: "carbon", v: "≤ 0.05 %" },
      { k: "granularity", v: "2 – 6 mm (≥ 90 %)" },
    ],
    packingKey: "packingJumbo",
  },
  {
    id: "naphtha",
    sector: "oil",
    category: "petrochemical",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/naphtha.jpg`,
    badges: ["Full Range"],
    specs: [
      { k: "density", v: "0.670 – 0.730 g/cm³" },
      { k: "rvp", v: "0.4 – 0.8 bar" },
      { k: "sulfurContent", v: "≤ 0.1 %" },
      { k: "appearance", v: "Clear & bright" },
    ],
    packingKey: "packingBulk",
  },
  {
    id: "fuel-oil-cst180",
    sector: "oil",
    category: "fuels",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/fuel-oil.jpg`,
    badges: ["CST 180"],
    specs: [
      { k: "viscosity50", v: "≤ 180 cSt" },
      { k: "density", v: "≤ 0.991 g/cm³" },
      { k: "flashPoint", v: "≥ 66 °C" },
      { k: "sulfurContent", v: "≤ 3.5 %" },
      { k: "water", v: "≤ 0.5 %" },
      { k: "ash", v: "≤ 0.1 %" },
    ],
    packingKey: "packingBulk",
  },
];

export const OIL_CATEGORIES: { id: OilCategory | "all"; icon: string }[] = [
  { id: "all", icon: "LayoutGrid" },
  { id: "bitumen", icon: "Route" },
  { id: "lubricants", icon: "Droplet" },
  { id: "petrochemical", icon: "FlaskConical" },
  { id: "fuels", icon: "Fuel" },
];

/* ---------------- contacts (confirmed) ---------------- */

export const CONTACTS = {
  email: "info@aroushaglobal.com",
  whatsappPrimary: "989002810097", // Tehran — Mr. Nazari (confirmed)
  offices: [
    { id: "tehran", name: "Mahdi Nazari", phone: "+989002810097", country: "ir" },
    { id: "antalya", name: "Mustafa Çatalçam", phone: "+905358971454", country: "tr" },
    { id: "ankara", name: "Özkan Özşahin", phone: "+905317927930", country: "tr" },
  ],
  addressEn: "No. 12, Shahid Beheshti St., Tehran, Iran",
};

/* ---------------- stats (PLACEHOLDERS — client to confirm) ---------------- */

export const STATS = [
  { id: "years", value: 20, suffix: "+" }, // "twenty years" — client-approved copy
  { id: "countries", value: 30, suffix: "+" },
  { id: "products", value: 200, suffix: "+" },
  { id: "clients", value: 500, suffix: "+" },
];

/* ---------------- certificates (PREVIEW placeholders) ---------------- */

export const CERTIFICATES = [
  { id: "c1", title: "ISO 9001" },
  { id: "c2", title: "ISO 45001" },
  { id: "c3", title: "SGS" },
  { id: "c4", title: "Halal" },
  { id: "c5", title: "ISIRI" },
  { id: "c6", title: "COA" },
];

/* ---------------- brand ---------------- */

export const BRAND = {
  name: "AROUSHA",
  sub: "GLOBAL",
  sloganEn: "BRIDGING MARKETS · BUILDING FUTURES",
  tagline: "Connecting Markets. Delivering Value.",
  domain: "aroushaglobal.com",
};
