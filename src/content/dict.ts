/**
 * AROUSHA GLOBAL — professional 5-language dictionary.
 * Trade terminology reviewed; NOT machine translation.
 * fa فارسی · en English · ar العربية · ru Русский · tr Türkçe
 */

export type Lang = "fa" | "en" | "ar" | "ru" | "tr";

type SectorId = "oil" | "petrochemical" | "food" | "metals" | "stones" | "general";
type ProductId =
  | "bitumen-60-70"
  | "bitumen-80-100"
  | "vacuum-bottom"
  | "base-oil-sn500"
  | "granular-sulfur"
  | "naphtha"
  | "fuel-oil-cst180";
type CatId = "all" | "bitumen" | "lubricants" | "petrochemical" | "fuels";
type PackingId = "packingDrums" | "packingBulk" | "packingJumbo";

export interface Dict {
  topbar: { hq: string; emailLabel: string };
  nav: {
    home: string;
    sectors: string;
    about: string;
    certificates: string;
    contact: string;
    quote: string;
    menu: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  stats: {
    years: string;
    countries: string;
    products: string;
    clients: string;
  };
  sectors: {
    kicker: string;
    title: string;
    subtitle: string;
    productCount: string;
    explore: string;
    soon: string;
    items: Record<SectorId, { name: string; desc: string }>;
  };
  about: {
    kicker: string;
    title: string;
    body1: string;
    body2: string;
    advantages: { t: string; d: string }[];
    consulting: {
      kicker: string;
      title: string;
      intro: string;
      items: { t: string; d: string }[];
      cta: string;
      ctaBtn: string;
    };
    sigTitle: string;
    sigRole: string;
  };
  certs: { title: string; subtitle: string; preview: string };
  cta: {
    quoteTitle: string;
    quoteDesc: string;
    quoteBtn: string;
    supplierTitle: string;
    supplierDesc: string;
    supplierBtnHint: string;
    disclaimer: string;
  };
  footer: {
    about: string;
    quick: string;
    sectorsTitle: string;
    contact: string;
    offices: Record<"tehran" | "antalya" | "ankara", string>;
    emailLabel: string;
    hqLabel: string;
    address: string;
    rights: string;
  };
  modal: {
    title: string;
    sub: string;
    name: string;
    company: string;
    phone: string;
    email: string;
    qty: string;
    dest: string;
    msg: string;
    submit: string;
    close: string;
    successTitle: string;
    successMsg: string;
    demoNote: string;
  };
  oil: {
    crumbHome: string;
    crumbSector: string;
    back: string;
    heroBadge: string;
    heroTitle: string;
    heroDesc: string;
    chip1: string;
    chip2: string;
    chip3: string;
    filters: string;
    productsTitle: string;
    productsSub: string;
    count: string;
    quoteThis: string;
    specs: string;
    specNote: string;
    soon: string;
    cats: Record<CatId, string>;
    packing: Record<PackingId, string>;
    items: Record<ProductId, { name: string; short: string; desc: string }>;
  };
  specLabels: Record<string, string>;
  common: {
    whatsapp: string;
    backTop: string;
    language: string;
  };
}

/* ============================ فارسی ============================ */
const fa: Dict = {
  topbar: { hq: "دفتر مرکزی تهران", emailLabel: "ایمیل رسمی" },
  nav: {
    home: "خانه",
    sectors: "حوزه‌های فعالیت",
    about: "درباره ما",
    certificates: "گواهینامه‌ها",
    contact: "تماس",
    quote: "درخواست استعلام",
    menu: "منو",
  },
  hero: {
    badge: "INTERNATIONAL TRADE & INVESTMENT",
    title1: "بازارها را پیوند می‌زنیم",
    title2: "آینده را می‌سازیم",
    subtitle:
      "بازرگانی بین‌المللی آروشا؛ تأمین‌کنندهٔ مطمئن مشتقات نفتی، پتروشیمی، روغن‌های خوراکی و مواد غذایی، فلزات، سنگ و کالاهای عمومی — از مبدأ معتبر تا مقصد شما، با مستندسازی کامل و لجستیک یکپارچه.",
    ctaPrimary: "درخواست استعلام قیمت",
    ctaSecondary: "حوزه‌های فعالیت",
    scroll: "اسکرول کنید",
  },
  stats: {
    years: "سال تجربه",
    countries: "کشور در شبکهٔ تجاری",
    products: "محصول فعال",
    clients: "مشتری و تأمین‌کننده",
  },
  sectors: {
    kicker: "WHAT WE DO",
    title: "شش حوزهٔ تخصصی فعالیت",
    subtitle:
      "شبکهٔ تأمین یکپارچه در ایران، ترکیه و بازارهای جهانی — یک استاندارد، یک قرارداد، یک نقطهٔ پاسخگویی.",
    productCount: "محصول",
    explore: "مشاهدهٔ حوزه",
    soon: "به‌زودی",
    items: {
      oil: {
        name: "نفت، قیر و مشتقات نفتی",
        desc: "قیرهای راه‌سازی، وکیوم باتم، روغن پایه، گوگرد، نفتا و سوخت‌های سنگین — با مستندات استاندارد و تأمین پایدار از پالایشگاه‌های معتبر.",
      },
      petrochemical: {
        name: "پتروشیمی و مواد شیمیایی صنعتی",
        desc: "پلیمرها و مواد شیمیایی پایه و تخصصی برای صنایع تولیدی، ساختمان و کشاورزی — با آنالیز معتبر و بسته‌بندی استاندارد.",
      },
      food: {
        name: "روغن‌های خوراکی و محصولات غذایی",
        desc: "روغن‌های خوراکی تصفیه‌شده و کالاهای اساسی غذایی با مستندات بهداشتی کامل و زنجیرهٔ تأمین مطمئن.",
      },
      metals: {
        name: "فلزات و شمش آلومینیوم",
        desc: "شمش آلومینیوم، فولاد و فلزات صنعتی از کارخانه‌های معتبر — با آنالیز ذوب و بارگیری نظارت‌شده.",
      },
      stones: {
        name: "سنگ و معادن",
        desc: "تراورتن، مرمریت و گرانیت — برش‌خورده، صیقلی و آمادهٔ صادرات، مستقیماً از معادن معتبر.",
      },
      general: {
        name: "کالاهای عمومی",
        desc: "تأمین و ترانزیت کالاهای عمومی و مصرفی بر اساس درخواست سفارشی — با ترخیص گمرکی و لجستیک کامل.",
      },
    },
  },
  about: {
    kicker: "دربارهٔ آروشا",
    title: "پلی میان مبدأ و مقصد، بر پایهٔ اعتماد",
    body1:
      "بازرگانی بین‌المللی آروشا با تکیه بر شبکهٔ تأمین در ایران و ترکیه، تأمین‌کنندهٔ مطمئن برای واردکنندگان و صنایع در سراسر جهان است. هر محموله از مبدأ تا مقصد مستندسازی می‌شود؛ از آنالیز و بازرسی تا حمل، ترخیص و تحویل.",
    body2:
      "فلسفهٔ ما ساده است: شفافیت در اطلاعات، تعهد به زمان‌بندی و کیفیت مستند. به همین دلیل مستقیماً با پالایشگاه‌ها، پتروشیمی‌ها و تولیدکنندگان معتبر همکاری می‌کنیم و برای هر استعلام، پیشنهاد دقیق و قابل اجرا ارائه می‌دهیم.",
    advantages: [
      { t: "تأمین مطمئن", d: "ارتباط مستقیم با پالایشگاه‌ها و تولیدکنندگان معتبر در ایران و ترکیه؛ بدون واسطهٔ غیرضروری." },
      { t: "کیفیت مستند", d: "هر محموله با آنالیز معتبر، گواهی بازرسی و مدارک ترخیص کامل ارائه می‌شود." },
      { t: "لجستیک کامل", d: "از انبار مبدأ تا بندر مقصد: حمل زمینی، دریایی و ریلی با مدیریت یکپارچه." },
      { t: "پشتیبانی چندزبانه", d: "تیم فارسی، انگلیسی، عربی، روسی و ترکی — پاسخ حرفه‌ای در هر ساعت کاری." },
    ],
    consulting: {
      kicker: "خدمات مشاوره",
      title: "مشاورهٔ تخصصی کسب‌وکار",
      intro:
        "آروشا گلوبال بیست سال است که به شرکت‌ها، هلدینگ‌ها و استارتاپ‌ها کمک می‌کند برنامه‌ها را به کسب‌وکارهای فعال تبدیل کنند. دامنهٔ خدمات مشاورهٔ ما:",
      items: [
        { t: "تأسیس و راه‌اندازی شرکت", d: "ساختاردهی، مسیر اخذ مجوز، امکان‌سنجی و طرح کسب‌وکار، و عملیات سال اول." },
        { t: "مشاورهٔ بازرگانی و تجارت", d: "ورود به بازار، استراتژی تأمین و فروش، واردات و صادرات، و تشریفات گمرکی." },
        { t: "مشاورهٔ هلدینگ و شرکتی", d: "بازنگری پرتفوی، بازسازی و استراتژی رشد برای گروه‌های تثبیت‌شده." },
        { t: "مشاورهٔ اکتشاف و منابع", d: "ارزیابی و پشتیبانی توسعهٔ فرصت‌های معدنی و منابع طبیعی." },
        { t: "مطالعات سرمایه‌گذاری و امکان‌سنجی", d: "تحلیل مستقل برای پشتیبانی از تصمیم‌های درست." },
        { t: "مشاورهٔ صنعت و پروژه", d: "اتوماسیون، خطوط تولید، ساخت و زیرساخت." },
        { t: "مشاورهٔ فناوری و مدیریت", d: "راهکارهای فناوری اطلاعات و توانمندسازی مدیریت." },
      ],
      cta: "بیایید دربارهٔ گام بعدی شما صحبت کنیم.",
      ctaBtn: "تماس با ما",
    },
    sigTitle: "پیام مدیرعامل",
    sigRole: "مدیرعامل آروشا گلوبال",
  },
  certs: {
    title: "گواهینامه‌ها و استانداردها",
    subtitle: "قالب پیش‌نمایش گواهینامه‌ها — مدارک رسمی پس از تأیید جایگزین می‌شود.",
    preview: "پیش‌نمایش",
  },
  cta: {
    quoteTitle: "درخواست استعلام قیمت",
    quoteDesc:
      "کالا، تعداد/حجم و کشور مقصد را ثبت کنید؛ کارشناسان ما حداکثر ظرف یک روز کاری پیشنهاد دقیق ارائه می‌دهند.",
    quoteBtn: "ثبت درخواست استعلام",
    supplierTitle: "همکاری با تأمین‌کنندگان",
    supplierDesc:
      "تولیدکنندگان و دارندگان کالا می‌توانند رزومهٔ تأمین و شرایط همکاری خود را مستقیماً برای تیم تأمین آروشا ارسال کنند.",
    supplierBtnHint: "ارسال به تیم تأمین",
    disclaimer:
      "موجودی کالا، مشخصات، قیمت‌ها و شرایط تحویل، منوط به تأیید برای هر استعلام است.",
  },
  footer: {
    about:
      "بازرگانی بین‌المللی آروشا — پلی میان بازارهای ایران، ترکیه و جهان؛ متعهد به کیفیت مستند، شفافیت و تحویل به‌موقع.",
    quick: "دسترسی سریع",
    sectorsTitle: "حوزه‌های فعالیت",
    contact: "اطلاعات تماس",
    offices: {
      tehran: "دفتر مرکزی تهران",
      antalya: "دفتر آنتالیا",
      ankara: "دفتر آنکارا",
    },
    emailLabel: "ایمیل",
    hqLabel: "دفتر مرکزی",
    address: "ایران، تهران، خیابان شهید بهشتی، پلاک ۱۲",
    rights: "© ۲۰۲۵ آروشا گلوبال — تمامی حقوق محفوظ است.",
  },
  modal: {
    title: "درخواست استعلام قیمت",
    sub: "فرم زیر را تکمیل کنید؛ پاسخ حداکثر ظرف یک روز کاری ارسال می‌شود.",
    name: "نام و نام خانوادگی",
    company: "شرکت / کسب‌وکار",
    phone: "تلفن / واتساپ",
    email: "ایمیل",
    qty: "تعداد / حجم تقریبی",
    dest: "کشور مقصد",
    msg: "توضیحات (کالا، گرید، بسته‌بندی…)",
    submit: "ارسال درخواست",
    close: "بستن",
    successTitle: "درخواست شما ثبت شد",
    successMsg:
      "کارشناسان آروشا در اولین فرصت با شما تماس می‌گیرند. برای پیگیری فوری، از واتساپ استفاده کنید.",
    demoNote:
      "این فرم در نسخهٔ آزمایشی است و پس از میزبانی، به سامانهٔ ایمیل/بک‌اند متصل می‌شود.",
  },
  oil: {
    crumbHome: "خانه",
    crumbSector: "حوزهٔ فعالیت",
    back: "بازگشت به خانه",
    heroBadge: "OIL · BITUMEN & DERIVATIVES",
    heroTitle: "نفت، قیر و مشتقات نفتی",
    heroDesc:
      "تأمین مستقیم قیرهای راه‌سازی، وکیوم باتم، روغن پایه، گوگرد، نفتا و سوخت‌های سنگین از پالایشگاه‌های معتبر — با آنالیز معتبر، بسته‌بندی استاندارد و برنامه‌ریزی دقیق بارگیری.",
    chip1: "تأمین از پالایشگاه‌های معتبر",
    chip2: "آنالیز و مدارک معتبر",
    chip3: "درام · فله · جامبو",
    filters: "فیلتر محصولات",
    productsTitle: "محصولات",
    productsSub:
      "گریدهای فعال این حوزه — برای آنالیز کامل و قیمت‌گذاری، استعلام ثبت کنید.",
    count: "محصول",
    quoteThis: "استعلام این کالا",
    specs: "مشخصات فنی",
    specNote: "مقادیر تیپیکال؛ برای هر محموله بر اساس آنالیز رسمی آزمایشگاه تأیید می‌شود.",
    soon: "این حوزه به‌زودی راه‌اندازی می‌شود — فعلاً از فرم استعلام استفاده کنید.",
    cats: {
      all: "همه",
      bitumen: "قیر و آسفالت",
      lubricants: "روغن و روانکار",
      petrochemical: "پتروشیمی",
      fuels: "سوخت‌ها",
    },
    packing: {
      packingDrums: "بسته‌بندی: درام فولادی نو ۱۸۰ کیلویی / فله / جامبو",
      packingBulk: "بسته‌بندی: فله / تانکر / بیتوترین",
      packingJumbo: "بسته‌بندی: جامبو بگ یک‌تنی / فله",
    },
    items: {
      "bitumen-60-70": {
        name: "قیر نفتی ۶۰/۷۰",
        short: "Bitumen 60/70",
        desc: "قیر استاندارد راه‌سازی برای اقلیم گرم؛ مطابق ASTM D946.",
      },
      "bitumen-80-100": {
        name: "قیر نفتی ۸۰/۱۰۰",
        short: "Bitumen 80/100",
        desc: "گرید نرم‌تر برای اقلیم معتدل؛ مطابق ASTM D946.",
      },
      "vacuum-bottom": {
        name: "وکیوم باتم",
        short: "Vacuum Bottom",
        desc: "پسماند پالایشگاهی و خوراک اصلی تولید قیر و سوخت.",
      },
      "base-oil-sn500": {
        name: "روغن پایه SN500",
        short: "Base Oil SN500",
        desc: "روغن پایهٔ ویرجین گروه یک برای روانکار، گریس و مخلوط‌های صنعتی.",
      },
      "granular-sulfur": {
        name: "گوگرد گرانیوله",
        short: "Granular Sulphur",
        desc: "گوگرد ۹۹٫۹٪ خالص برای کشاورزی و صنایع شیمیایی.",
      },
      naphtha: {
        name: "نفتا (فول رنج)",
        short: "Naphtha Full Range",
        desc: "خوراک کرکرها و واحدهای ریفرمینگ پتروشیمی.",
      },
      "fuel-oil-cst180": {
        name: "فویول اویل CST180",
        short: "Fuel Oil CST 180",
        desc: "سوخت سنگین بونکری برای شناورها و مشعل‌های صنعتی.",
      },
    },
  },
  specLabels: {
    penetration: "درجه نفوذ (۲۵°C)",
    softeningPoint: "نقطهٔ نرم‌شدگی",
    ductility: "کشش (Ductility)",
    flashPoint: "نقطهٔ اشتعال",
    solubility: "حل‌شوندگی در TCE",
    specificGravity: "وزن مخصوص",
    viscosity40: "ویسکوزیته (۴۰°C)",
    viscosity100: "ویسکوزیته (۱۰۰°C)",
    viscosityIndex: "شاخص ویسکوزیته",
    pourPoint: "نقطهٔ ریزش",
    density: "چگالی (۱۵°C)",
    purity: "خلوص",
    ash: "خاکستر",
    moisture: "رطوبت",
    carbon: "کربن",
    granularity: "دانه‌بندی",
    rvp: "فشار بخار (RVP)",
    sulfurContent: "محتوای گوگرد",
    appearance: "ظاهر",
    water: "آب",
    viscosity50: "ویسکوزیته (۵۰°C)",
  },
  common: { whatsapp: "گفتگوی واتساپ", backTop: "بازگشت به بالا", language: "زبان" },
};

/* ============================ English ============================ */
const en: Dict = {
  topbar: { hq: "Tehran HQ", emailLabel: "Official email" },
  nav: {
    home: "Home",
    sectors: "Sectors",
    about: "About",
    certificates: "Certificates",
    contact: "Contact",
    quote: "Request a Quote",
    menu: "Menu",
  },
  hero: {
    badge: "INTERNATIONAL TRADE & INVESTMENT",
    title1: "We Bridge Markets",
    title2: "We Build Futures",
    subtitle:
      "AROUSHA GLOBAL is an international trading house supplying oil derivatives, petrochemicals, edible oils & food, metals, stone and general cargo — from verified origins to your destination, fully documented, with integrated logistics.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "Explore Our Sectors",
    scroll: "Scroll",
  },
  stats: {
    years: "Years of Experience",
    countries: "Countries in Trade Network",
    products: "Active Product Lines",
    clients: "Clients & Suppliers",
  },
  sectors: {
    kicker: "WHAT WE DO",
    title: "Six Core Business Lines",
    subtitle:
      "An integrated supply network across Iran, Türkiye and global markets — one standard, one contract, one point of accountability.",
    productCount: "products",
    explore: "Explore",
    soon: "Coming soon",
    items: {
      oil: {
        name: "Oil, Bitumen & Derivatives",
        desc: "Paving-grade bitumen, vacuum bottom, base oils, sulphur, naphtha and heavy fuels — standard-documented, sourced from reputable refineries.",
      },
      petrochemical: {
        name: "Petrochemicals & Industrial Chemicals",
        desc: "Polymers, base and specialty chemicals for manufacturing, construction and agriculture — certified analysis and standard packaging.",
      },
      food: {
        name: "Edible Oils & Food Products",
        desc: "Refined edible oils and food staples with full health documentation and a reliable supply chain.",
      },
      metals: {
        name: "Metals & Aluminium Ingots",
        desc: "Aluminium ingots, steel and industrial metals from established smelters — with melt analysis and supervised loading.",
      },
      stones: {
        name: "Stone & Mining",
        desc: "Travertine, marble and granite — cut, polished and export-ready, sourced directly from reputable quarries.",
      },
      general: {
        name: "General Goods",
        desc: "Sourcing and transit of general and consumer cargo on request — customs clearance and end-to-end logistics included.",
      },
    },
  },
  about: {
    kicker: "ABOUT AROUSHA",
    title: "A Bridge Between Origin and Destination, Built on Trust",
    body1:
      "AROUSHA GLOBAL is an international trading company built on a supply network across Iran and Türkiye, serving importers and industries worldwide. Every consignment is documented from origin to destination — from analysis and inspection to freight, clearance and delivery.",
    body2:
      "Our philosophy is simple: transparency in information, commitment to schedule and documented quality. That is why we work directly with refineries, petrochemical plants and reputable manufacturers, delivering precise, executable offers for every enquiry.",
    advantages: [
      { t: "Verified Sourcing", d: "Direct relationships with reputable refineries and manufacturers in Iran and Türkiye — no unnecessary middlemen." },
      { t: "Documented Quality", d: "Every shipment comes with certified analysis, inspection certificates and complete clearance documents." },
      { t: "End-to-End Logistics", d: "From origin warehouse to destination port: land, sea and rail under one integrated plan." },
      { t: "Multilingual Support", d: "Persian, English, Arabic, Russian and Turkish — professional answers within working hours." },
    ],
    consulting: {
      kicker: "CONSULTING SERVICES",
      title: "Consulting Services",
      intro:
        "For twenty years, AROUSHA Global has helped companies, holdings and start-ups turn plans into working businesses. Our advisory practice covers:",
      items: [
        { t: "Company Formation & Launch", d: "Structure, licensing path, feasibility and business plan, and first-year operations." },
        { t: "Commercial & Trade Consulting", d: "Market entry, sourcing and sales strategy, import and export, and customs procedures." },
        { t: "Holding & Corporate Advisory", d: "Portfolio review, restructuring and growth strategy for established groups." },
        { t: "Exploration & Resource Consulting", d: "Evaluation and development support for mineral and natural-resource opportunities." },
        { t: "Investment & Feasibility Studies", d: "Independent analysis to support sound decisions." },
        { t: "Industrial & Project Consulting", d: "Automation, production lines, construction and infrastructure." },
        { t: "Technology & Management Consulting", d: "IT solutions and management empowerment." },
      ],
      cta: "Let's discuss your next step.",
      ctaBtn: "Contact us",
    },
    sigTitle: "A Message from the CEO",
    sigRole: "Chief Executive Officer, AROUSHA GLOBAL",
  },
  certs: {
    title: "Certificates & Standards",
    subtitle: "Template preview — official documents will replace placeholders once approved.",
    preview: "Preview",
  },
  cta: {
    quoteTitle: "Request a Price Quotation",
    quoteDesc:
      "Share the product, quantity and destination country — our experts reply with a precise offer within one business day.",
    quoteBtn: "Submit a Request",
    supplierTitle: "Suppliers & Manufacturers",
    supplierDesc:
      "Producers and cargo owners are welcome to send their company profile and supply terms directly to the AROUSHA sourcing team.",
    supplierBtnHint: "Write to our sourcing team",
    disclaimer:
      "Stock availability, specifications, prices and delivery terms are subject to confirmation for each enquiry.",
  },
  footer: {
    about:
      "AROUSHA GLOBAL — an international trading house bridging the markets of Iran, Türkiye and the world; committed to documented quality, transparency and on-time delivery.",
    quick: "Quick Links",
    sectorsTitle: "Sectors",
    contact: "Contact Info",
    offices: {
      tehran: "Tehran HQ",
      antalya: "Antalya Office",
      ankara: "Ankara Office",
    },
    emailLabel: "Email",
    hqLabel: "Head Office",
    address: "No. 12, Shahid Beheshti St., Tehran, Iran",
    rights: "© 2025 AROUSHA GLOBAL. All rights reserved.",
  },
  modal: {
    title: "Request a Price Quotation",
    sub: "Fill in the form below — you will receive a reply within one business day.",
    name: "Full Name",
    company: "Company / Business",
    phone: "Phone / WhatsApp",
    email: "Email",
    qty: "Quantity / Volume (approx.)",
    dest: "Destination Country",
    msg: "Notes (product, grade, packaging…)",
    submit: "Send Request",
    close: "Close",
    successTitle: "Your request has been received",
    successMsg:
      "An AROUSHA expert will contact you shortly. For urgent follow-up, message us on WhatsApp.",
    demoNote: "Demo form — it will be connected to the email/backend after hosting.",
  },
  oil: {
    crumbHome: "Home",
    crumbSector: "Sector",
    back: "Back to Home",
    heroBadge: "OIL · BITUMEN & DERIVATIVES",
    heroTitle: "Oil, Bitumen & Derivatives",
    heroDesc:
      "Direct supply of paving-grade bitumen, vacuum bottom, base oils, sulphur, naphtha and heavy fuels from reputable refineries — certified analysis, standard packaging and precise loading schedules.",
    chip1: "Reputable refinery sources",
    chip2: "Certified analysis & documents",
    chip3: "Drums · Bulk · Jumbo",
    filters: "Filter Products",
    productsTitle: "Products",
    productsSub: "Active grades of this sector — request a quote for full analysis and pricing.",
    count: "products",
    quoteThis: "Quote This Product",
    specs: "Technical Specifications",
    specNote: "Typical values — confirmed per shipment against official laboratory analysis.",
    soon: "This sector is launching soon — please use the quote form in the meantime.",
    cats: {
      all: "All",
      bitumen: "Bitumen & Asphalt",
      lubricants: "Oils & Lubricants",
      petrochemical: "Petrochemical",
      fuels: "Fuels",
    },
    packing: {
      packingDrums: "Packaging: 180 kg new steel drums / bulk / jumbo",
      packingBulk: "Packaging: bulk / tank / bitutainer",
      packingJumbo: "Packaging: 1 MT jumbo bags / bulk",
    },
    items: {
      "bitumen-60-70": {
        name: "Penetration Bitumen 60/70",
        short: "Bitumen 60/70",
        desc: "Standard paving-grade bitumen for hot climates, compliant with ASTM D946.",
      },
      "bitumen-80-100": {
        name: "Penetration Bitumen 80/100",
        short: "Bitumen 80/100",
        desc: "Softer paving grade for temperate climates, ASTM D946 compliant.",
      },
      "vacuum-bottom": {
        name: "Vacuum Bottom (VB)",
        short: "Vacuum Bottom",
        desc: "Refinery residue and primary feedstock for bitumen production and fuel blending.",
      },
      "base-oil-sn500": {
        name: "Base Oil SN500",
        short: "Base Oil SN500",
        desc: "Group I virgin base oil for lubricants, greases and industrial blending.",
      },
      "granular-sulfur": {
        name: "Granular Sulphur",
        short: "Granular Sulphur",
        desc: "99.9% pure granular sulphur for agriculture and chemical industries.",
      },
      naphtha: {
        name: "Naphtha (Full Range)",
        short: "Naphtha Full Range",
        desc: "Full-range naphtha feedstock for petrochemical crackers and reformers.",
      },
      "fuel-oil-cst180": {
        name: "Fuel Oil CST 180",
        short: "Fuel Oil CST 180",
        desc: "Bunker-grade heavy fuel oil for marine and industrial burners.",
      },
    },
  },
  specLabels: {
    penetration: "Penetration @25°C",
    softeningPoint: "Softening Point (R&B)",
    ductility: "Ductility @25°C",
    flashPoint: "Flash Point",
    solubility: "Solubility in TCE",
    specificGravity: "Specific Gravity",
    viscosity40: "Viscosity @40°C",
    viscosity100: "Viscosity @100°C",
    viscosityIndex: "Viscosity Index",
    pourPoint: "Pour Point",
    density: "Density @15°C",
    purity: "Purity (dry basis)",
    ash: "Ash Content",
    moisture: "Moisture",
    carbon: "Carbon (wt%)",
    granularity: "Granulometry",
    rvp: "Reid Vapour Pressure",
    sulfurContent: "Sulphur Content",
    appearance: "Appearance",
    water: "Water Content",
    viscosity50: "Viscosity @50°C",
  },
  common: { whatsapp: "WhatsApp Chat", backTop: "Back to top", language: "Language" },
};

/* ============================ العربية ============================ */
const ar: Dict = {
  topbar: { hq: "المقر الرئيسي — طهران", emailLabel: "البريد الرسمي" },
  nav: {
    home: "الرئيسية",
    sectors: "مجالات النشاط",
    about: "من نحن",
    certificates: "الشهادات",
    contact: "تواصل",
    quote: "طلب استفسار",
    menu: "القائمة",
  },
  hero: {
    badge: "INTERNATIONAL TRADE & INVESTMENT",
    title1: "نربط الأسواق",
    title2: "ونبني المستقبل",
    subtitle:
      "آروشا جلوبال — بيت أعمال دولي يوّن المشتقات النفطية والبتروكيماويات والزيوت الغذائية والمعادن والأحجار والبضائع العامة — من مصادر موثوقة إلى وجهتك، بتوثيق كامل ولوجستيات متكاملة.",
    ctaPrimary: "طلب استفسار سعر",
    ctaSecondary: "مجالات نشاطنا",
    scroll: "مرّر للأسفل",
  },
  stats: {
    years: "سنة من الخبرة",
    countries: "دولة في الشبكة التجارية",
    products: "خط إنتاج نشط",
    clients: "عميل ومورّد",
  },
  sectors: {
    kicker: "ما نقدمه",
    title: "ستة مجالات تخصصية",
    subtitle:
      "شبكة توريد متكاملة عبر إيران وتركيا والأسواق العالمية — معيار واحد، عقد واحد، جهة مسؤولية واحدة.",
    productCount: "منتج",
    explore: "استكشف",
    soon: "قريباً",
    items: {
      oil: {
        name: "النفط والقار والمشتقات النفطية",
        desc: "قار الطرق والمخلفات المفرغة والزيوت الأساسية والكبريت والنافثا والوقود الثقيل — بتوثيق قياسي من مصافي موثوقة.",
      },
      petrochemical: {
        name: "البتروكيماويات والكيماويات الصناعية",
        desc: "البوليمرات والكيماويات الأساسية والمتخصصة للصناعة والبناء والزراعة — بتحليل معتمد وتغليف قياسي.",
      },
      food: {
        name: "الزيوت الغذائية والمنتجات الغذائية",
        desc: "زيوت غذائية مكررة وسلع غذائية أساسية بوثائق صحية كاملة وسلسلة توريد موثوقة.",
      },
      metals: {
        name: "المعادن وسبائك الألمنيوم",
        desc: "سبائك الألمنيوم والفولاذ والمعادن الصناعية من مصانع موثوقة — بتحليل مصهور وتحميل خاضع للإشراف.",
      },
      stones: {
        name: "الأحجار والمناجم",
        desc: "ترافرتين ومرمر وغرينيت — مقطوعة ومصقولة وجاهزة للتصدير مباشرةً من محاجر موثوقة.",
      },
      general: {
        name: "البضائع العامة",
        desc: "توفير وترانزيت البضائع العامة والاستهلاكية حسب الطلب — مع التخليص الجمركي واللوجستيات الكاملة.",
      },
    },
  },
  about: {
    kicker: "عن آروشا",
    title: "جسر بين المصدر والوجهة، مبني على الثقة",
    body1:
      "آروشا جلوبال شركة تجارية دولية تعتمد على شبكة توريد في إيران وتركيا وتخدم المستوردين والصناعات حول العالم. تُوثَّق كل شحنة من المصدر حتى الوجهة — من التحليل والفحص إلى النقل والتخليص والتسليم.",
    body2:
      "فلسفتنا بسيطة: شفافية في المعلومات، والتزام بالمواعيد، وجودة موثّقة. لهذا نتعاون مباشرةً مع المصافي وشركات البتروكيماويات والمصنّعين الموثوقين ونقدم عرضاً دقيقاً وقابلاً للتنفيذ لكل استفسار.",
    advantages: [
      { t: "توريد موثوق", d: "علاقات مباشرة مع مصافي ومصنّعين موثوقين في إيران وتركيا — دون وسطاء غير ضروريين." },
      { t: "جودة موثّقة", d: "كل شحنة تُرفق بتحليل معتمد وشهادات فحص ووثائق تخليص كاملة." },
      { t: "لوجستيات متكاملة", d: "من مستودع المصدر إلى ميناء الوجهة: براً وبحراً وسكك حديدية بخطة واحدة متكاملة." },
      { t: "دعم متعدد اللغات", d: "فريق يتحدث الفارسية والإنجليزية والعربية والروسية والتركية — رد احترافي خلال ساعات العمل." },
    ],
    consulting: {
      kicker: "خدمات الاستشارية",
      title: "الخدمات الاستشارية",
      intro:
        "منذ عشرين عاماً وتساعد آروشا جلوبال الشركات والشركات القابضة والناشئة على تحويل الخطط إلى أعمال قائمة فعلاً. تشمل ممارساتنا الاستشارية:",
      items: [
        { t: "تأسيس الشركات وإطلاقها", d: "الهيكلة ومسار التراخيص ودراسة الجدوى وخطة العمل، وأعمال السنة الأولى." },
        { t: "الاستشارات التجارية", d: "دخول الأسواق واستراتيجية التوريد والبيع والاستيراد والتصدير والإجراءات الجمركية." },
        { t: "استشارات القابضة والشركات", d: "مراجعة المحفظة وإعادة الهيكلة واستراتيجية النمو للمجموعات القائمة." },
        { t: "استشارات الاستكشاف والموارد", d: "تقييم ودعم تطوير الفرص المعدنية والموارد الطبيعية." },
        { t: "دراسات الاستثمار والجدوى", d: "تحليل مستقل لدعم القرارات السليمة." },
        { t: "الاستشارات الصناعية والمشاريع", d: "الأتمتة وخطوط الإنتاج والبناء والبنية التحتية." },
        { t: "استشارات التقنية والإدارة", d: "حلول تقنية المعلومات وتمكين الإدارة." },
      ],
      cta: "لنناقش خطوتك القادمة.",
      ctaBtn: "تواصل معنا",
    },
    sigTitle: "كلمة الرئيس التنفيذي",
    sigRole: "الرئيس التنفيذي — آروشا جلوبال",
  },
  certs: {
    title: "الشهادات والمعايير",
    subtitle: "معاينة القالب — ستُستبدل الوثائق الرسمية بعد الاعتماد.",
    preview: "معاينة",
  },
  cta: {
    quoteTitle: "طلب استفسار سعر",
    quoteDesc:
      "سجّل المنتج والكمية وبلد الوجهة — يقدم خبراؤنا عرضاً دقيقاً خلال يوم عمل واحد على الأكثر.",
    quoteBtn: "إرسال الطلب",
    supplierTitle: "التعاون مع المورّدين",
    supplierDesc:
      "يمكن للمصنّعين وأصحاب البضائع إرسال ملفهم التوريدية وشروط التعاون مباشرةً إلى فريق التوريد في آروشا.",
    supplierBtnHint: "راسل فريق التوريد",
    disclaimer:
      "يخضع توفر البضاعة والمواصفات والأسعار وشروط التسليم للتأكيد لكل استفسار.",
  },
  footer: {
    about:
      "آروشا جلوبال — بيت أعمال دولي يربط أسواق إيران وتركيا والعالم؛ ملتزم بالجودة الموثّقة والشفافية والتسليم في الوقت المحدد.",
    quick: "روابط سريعة",
    sectorsTitle: "مجالات النشاط",
    contact: "بيانات التواصل",
    offices: {
      tehran: "المقر الرئيسي — طهران",
      antalya: "مكتب أنطاليا",
      ankara: "مكتب أنقرة",
    },
    emailLabel: "البريد الإلكتروني",
    hqLabel: "المقر الرئيسي",
    address: "إيران، طهران، شارع الشهيد بهشتي، رقم 12",
    rights: "© 2025 آروشا جلوبال — جميع الحقوق محفوظة.",
  },
  modal: {
    title: "طلب استفسار سعر",
    sub: "أكمل النموذج التالي — يصلك الرد خلال يوم عمل واحد على الأكثر.",
    name: "الاسم الكامل",
    company: "الشركة / النشاط",
    phone: "الهاتف / واتساب",
    email: "البريد الإلكتروني",
    qty: "الكمية / الحجم التقريبي",
    dest: "بلد الوجهة",
    msg: "ملاحظات (المنتج، الدرجة، التغليف…)",
    submit: "إرسال الطلب",
    close: "إغلاق",
    successTitle: "تم استلام طلبك",
    successMsg:
      "سيتواصل معك أحد خبراء آروشا في أقرب وقت. للمتابعة العاجلة، راسلنا على واتساب.",
    demoNote: "نموذج تجريبي — سيُربط بالنظام البريدي/الخلفي بعد الاستضافة.",
  },
  oil: {
    crumbHome: "الرئيسية",
    crumbSector: "مجال النشاط",
    back: "العودة إلى الرئيسية",
    heroBadge: "OIL · BITUMEN & DERIVATIVES",
    heroTitle: "النفط والقار والمشتقات النفطية",
    heroDesc:
      "توريد مباشر لقار الطرق والمخلفات المفرغة والزيوت الأساسية والكبريت والنافثا والوقود الثقيل من مصافي موثوقة — بتحليل معتمد وتغليف قياسي وجدولة تحميل دقيقة.",
    chip1: "توريد من مصافي موثوقة",
    chip2: "تحليل ووثائق معتمدة",
    chip3: "براميل · صهاريج · جامبو",
    filters: "تصفية المنتجات",
    productsTitle: "المنتجات",
    productsSub: "الدرجات النشطة في هذا المجال — اطلب استفساراً للتحليل الكامل والتسعير.",
    count: "منتج",
    quoteThis: "استفسار عن هذا المنتج",
    specs: "المواصفات الفنية",
    specNote: "قيم نموذجية — تُعتمد لكل شحنة وفق تحليل المختبر الرسمي.",
    soon: "سيُطلق هذا المجال قريباً — استخدم نموذج الاستفسار في الوقت الحالي.",
    cats: {
      all: "الكل",
      bitumen: "القار والإسفلت",
      lubricants: "الزيوت والتشحيم",
      petrochemical: "البتروكيماويات",
      fuels: "الوقود",
    },
    packing: {
      packingDrums: "التغليف: براميل فولاذية جديدة 180 كغم / صهريج / جامبو",
      packingBulk: "التغليف: صهريج / بضاعة سائبة / بيتووتينر",
      packingJumbo: "التغليف: أكياس جامبو طن / سائب",
    },
    items: {
      "bitumen-60-70": {
        name: "قار نفطي 60/70",
        short: "Bitumen 60/70",
        desc: "قار طرق قياسي للمناخ الحار وفقاً لمعيار ASTM D946.",
      },
      "bitumen-80-100": {
        name: "قار نفطي 80/100",
        short: "Bitumen 80/100",
        desc: "درجة أنعم للمناخ المعتدل وفقاً لمعيار ASTM D946.",
      },
      "vacuum-bottom": {
        name: "فاكيوم باتم",
        short: "Vacuum Bottom",
        desc: "مخلفات المصفاة والخوراك الأساسي لإنتاج القار والوقود.",
      },
      "base-oil-sn500": {
        name: "زيت أساسي SN500",
        short: "Base Oil SN500",
        desc: "زيت أساسي بكر من المجموعة الأولى للتشحيم والشحوم والمزج الصناعي.",
      },
      "granular-sulfur": {
        name: "كبريت حبيبي",
        short: "Granular Sulphur",
        desc: "كبريت حبيبي بنقاوة 99.9% للزراعة والصناعات الكيميائية.",
      },
      naphtha: {
        name: "نافثا (فول رينج)",
        short: "Naphtha Full Range",
        desc: "خوراك نافثا كامل المدى لوحدات التكسير وإصلاح البتروكيماويات.",
      },
      "fuel-oil-cst180": {
        name: "فيول أويل CST180",
        short: "Fuel Oil CST 180",
        desc: "وقود ثقيل بحري لصناعة الشحن ومواقد المصانع.",
      },
    },
  },
  specLabels: {
    penetration: "درجة النفاذية (25°C)",
    softeningPoint: "نقطة التليين",
    ductility: "القابلية للسحب",
    flashPoint: "نقطة الوميض",
    solubility: "الذوبانية في TCE",
    specificGravity: "الوزن النوعي",
    viscosity40: "اللزوجة (40°C)",
    viscosity100: "اللزوجة (100°C)",
    viscosityIndex: "دليل اللزوجة",
    pourPoint: "نقطة الانسكاب",
    density: "الكثافة (15°C)",
    purity: "النقاء",
    ash: "الرماد",
    moisture: "الرطوبة",
    carbon: "الكربون",
    granularity: "الحبيبات",
    rvp: "ضغط البخار (RVP)",
    sulfurContent: "محتوى الكبريت",
    appearance: "المظهر",
    water: "الماء",
    viscosity50: "اللزوجة (50°C)",
  },
  common: { whatsapp: "محادثة واتساب", backTop: "العودة للأعلى", language: "اللغة" },
};

/* ============================ Русский ============================ */
const ru: Dict = {
  topbar: { hq: "Головной офис — Тегеран", emailLabel: "Официальная почта" },
  nav: {
    home: "Главная",
    sectors: "Направления",
    about: "О компании",
    certificates: "Сертификаты",
    contact: "Контакты",
    quote: "Запросить цену",
    menu: "Меню",
  },
  hero: {
    badge: "INTERNATIONAL TRADE & INVESTMENT",
    title1: "Соединяем рынки",
    title2: "Создаём будущее",
    subtitle:
      "AROUSHA GLOBAL — международная торговая компания: нефтепродукты, нефтехимия, пищевые масла и продукты, металлы, камень и генеральные грузы — от проверенных поставщиков до пункта назначения, с полным документальным сопровождением и интегрированной логистикой.",
    ctaPrimary: "Запросить предложение",
    ctaSecondary: "Наши направления",
    scroll: "Прокрутите",
  },
  stats: {
    years: "лет опыта",
    countries: "стран в торговой сети",
    products: "активных товарных позиций",
    clients: "клиентов и поставщиков",
  },
  sectors: {
    kicker: "НАШИ НАПРАВЛЕНИЯ",
    title: "Шесть ключевых бизнес-направлений",
    subtitle:
      "Единая сеть снабжения в Иране, Турции и на мировых рынках — один стандарт, один договор, единая ответственность.",
    productCount: "товаров",
    explore: "Подробнее",
    soon: "Скоро",
    items: {
      oil: {
        name: "Нефть, битум и нефтепродукты",
        desc: "Дорожные битумы, вакуумный остаток, базовые масла, сера, нафта и тяжёлые топлива — со стандартной документацией от надёжных НПЗ.",
      },
      petrochemical: {
        name: "Нефтехимия и промышленная химия",
        desc: "Полимеры, базовые и специализированные химикаты для промышленности, строительства и сельского хозяйства — с сертифицированным анализом и стандартной упаковкой.",
      },
      food: {
        name: "Пищевые масла и продукты питания",
        desc: "Рафинированные растительные масла и продовольственные товары с полными санитарными документами и надёжной логистикой.",
      },
      metals: {
        name: "Металлы и алюминиевые слитки",
        desc: "Алюминиевые слитки, сталь и промышленные металлы с проверенных заводов — с анализом плавки и контролируемой отгрузкой.",
      },
      stones: {
        name: "Камень и горнодобывающая отрасль",
        desc: "Травертин, мрамор и гранит — распиленные, полированные и готовые к экспорту, напрямую с надёжных карьеров.",
      },
      general: {
        name: "Генеральные грузы",
        desc: "Подбор и транзит широкого спектра товаров по запросу — с таможенным оформлением и полной логистикой.",
      },
    },
  },
  about: {
    kicker: "О AROUSHA",
    title: "Мост между источником и назначением, построенный на доверии",
    body1:
      "AROUSHA GLOBAL — международная торговая компания с сетью снабжения в Иране и Турции, обслуживающая импортёров и промышленность по всему миру. Каждая партия документируется от источника до назначения — от анализа и инспекции до фрахта, таможни и доставки.",
    body2:
      "Наша философия проста: прозрачность информации, соблюдение сроков и документально подтверждённое качество. Поэтому мы работаем напрямую с НПЗ, нефтехимическими заводами и надёжными производителями и по каждому запросу даём точное, исполнимое предложение.",
    advantages: [
      { t: "Проверенное снабжение", d: "Прямые связи с надёжными НПЗ и производителями в Иране и Турции — без лишних посредников." },
      { t: "Документальное качество", d: "Каждая партия с сертифицированным анализом, инспекционными сертификатами и полным пакетом документов." },
      { t: "Комплексная логистика", d: "От склада отправителя до порта назначения: авто, море и ж/д в едином плане." },
      { t: "Многоязычная поддержка", d: "Фарси, английский, арабский, русский и турецкий — профессиональные ответы в рабочие часы." },
    ],
    consulting: {
      kicker: "КОНСУЛЬТАЦИОННЫЕ УСЛУГИ",
      title: "Консалтинговые услуги",
      intro:
        "Двадцать лет AROUSHA Global помогает компаниям, холдингам и стартапам превращать планы в работающий бизнес. Наша консалтинговая практика охватывает:",
      items: [
        { t: "Регистрация и запуск компаний", d: "Структура, лицензирование, технико-экономическое обоснование и бизнес-план, операционная деятельность первого года." },
        { t: "Торговый консалтинг", d: "Выход на рынок, стратегия закупок и продаж, импорт и экспорт, таможенные процедуры." },
        { t: "Консалтинг для холдингов и корпораций", d: "Обзор портфеля, реструктуризация и стратегия роста для сформированных групп." },
        { t: "Консалтинг по разведке и ресурсам", d: "Оценка и сопровождение развития минеральных и природных ресурсов." },
        { t: "Инвестиционные и технико-экономические исследования", d: "Независимый анализ для взвешенных решений." },
        { t: "Промышленный и проектный консалтинг", d: "Автоматизация, производственные линии, строительство и инфраструктура." },
        { t: "Технологический и управленческий консалтинг", d: "IT-решения и усиление менеджмента." },
      ],
      cta: "Обсудим ваш следующий шаг.",
      ctaBtn: "Связаться с нами",
    },
    sigTitle: "Слово генерального директора",
    sigRole: "Генеральный директор AROUSHA GLOBAL",
  },
  certs: {
    title: "Сертификаты и стандарты",
    subtitle: "Предварительный шаблон — официальные документы будут загружены после утверждения.",
    preview: "Предпросмотр",
  },
  cta: {
    quoteTitle: "Запрос коммерческого предложения",
    quoteDesc:
      "Укажите товар, объём и страну назначения — наши специалисты дадут точное предложение в течение одного рабочего дня.",
    quoteBtn: "Отправить запрос",
    supplierTitle: "Сотрудничество с поставщиками",
    supplierDesc:
      "Производители и владельцы грузов могут направить профиль компании и условия поставки напрямую в отдел снабжения AROUSHA.",
    supplierBtnHint: "Написать в отдел снабжения",
    disclaimer:
      "Наличие товара, характеристики, цены и условия поставки уточняются для каждого запроса.",
  },
  footer: {
    about:
      "AROUSHA GLOBAL — международная торговая компания, соединяющая рынки Ирана, Турции и мира; приверженность документированному качеству, прозрачности и поставкам в срок.",
    quick: "Навигация",
    sectorsTitle: "Направления",
    contact: "Контактная информация",
    offices: {
      tehran: "Головной офис — Тегеран",
      antalya: "Офис в Анталье",
      ankara: "Офис в Анкаре",
    },
    emailLabel: "Эл. почта",
    hqLabel: "Головной офис",
    address: "Иран, Тегеран, ул. Шахида Бехешти, 12",
    rights: "© 2025 AROUSHA GLOBAL. Все права защищены.",
  },
  modal: {
    title: "Запрос коммерческого предложения",
    sub: "Заполните форму ниже — ответ поступит в течение одного рабочего дня.",
    name: "Имя и фамилия",
    company: "Компания",
    phone: "Телефон / WhatsApp",
    email: "Эл. почта",
    qty: "Количество / объём (примерно)",
    dest: "Страна назначения",
    msg: "Примечания (товар, марка, упаковка…)",
    submit: "Отправить запрос",
    close: "Закрыть",
    successTitle: "Ваш запрос получен",
    successMsg:
      "Специалист AROUSHA свяжется с вами в ближайшее время. Для срочного вопроса напишите нам в WhatsApp.",
    demoNote: "Демо-форма — будет подключена к почте/бэкенду после размещения на хостинге.",
  },
  oil: {
    crumbHome: "Главная",
    crumbSector: "Направление",
    back: "На главную",
    heroBadge: "OIL · BITUMEN & DERIVATIVES",
    heroTitle: "Нефть, битум и нефтепродукты",
    heroDesc:
      "Прямые поставки дорожных битумов, вакуумного остатка, базовых масел, серы, нафты и тяжёлых топлив с надёжных НПЗ — сертифицированный анализ, стандартная упаковка и точное планирование отгрузки.",
    chip1: "Поставки с надёжных НПЗ",
    chip2: "Сертифицированный анализ и документы",
    chip3: "Бочки · Навал · Джамбо",
    filters: "Фильтр товаров",
    productsTitle: "Товары",
    productsSub: "Активные марки этого направления — запросите предложение для полного анализа и цен.",
    count: "товаров",
    quoteThis: "Запросить этот товар",
    specs: "Технические характеристики",
    specNote: "Типовые значения — подтверждаются по официальному лабораторному анализу для каждой партии.",
    soon: "Это направление скоро будет запущено — пока воспользуйтесь формой запроса.",
    cats: {
      all: "Все",
      bitumen: "Битум и асфальт",
      lubricants: "Масла и смазочные материалы",
      petrochemical: "Нефтехимия",
      fuels: "Топливо",
    },
    packing: {
      packingDrums: "Упаковка: новые стальные бочки 180 кг / навал / джамбо",
      packingBulk: "Упаковка: навал / цистерна / битутейнер",
      packingJumbo: "Упаковка: биг-бэги 1 т / навал",
    },
    items: {
      "bitumen-60-70": {
        name: "Битум 60/70",
        short: "Bitumen 60/70",
        desc: "Стандартный дорожный битум для жаркого климата, по ASTM D946.",
      },
      "bitumen-80-100": {
        name: "Битум 80/100",
        short: "Bitumen 80/100",
        desc: "Более мягкая марка для умеренного климата, по ASTM D946.",
      },
      "vacuum-bottom": {
        name: "Вакуум батам",
        short: "Vacuum Bottom",
        desc: "Остаток переработки и основное сырьё для производства битума и топлива.",
      },
      "base-oil-sn500": {
        name: "Базовое масло SN500",
        short: "Base Oil SN500",
        desc: "Виргинское базовое масло группы I для смазок и промышленных смесей.",
      },
      "granular-sulfur": {
        name: "Гранулированная сера",
        short: "Granular Sulphur",
        desc: "Гранулированная сера чистотой 99,9% для сельского хозяйства и химпрома.",
      },
      naphtha: {
        name: "Нафта (широкая фракция)",
        short: "Naphtha Full Range",
        desc: "Нафтовое сырьё для крекинга и риформинга нефтехимии.",
      },
      "fuel-oil-cst180": {
        name: "Мазут CST 180",
        short: "Fuel Oil CST 180",
        desc: "Тяжёлое бункерное топливо для судов и промышленных горелок.",
      },
    },
  },
  specLabels: {
    penetration: "Глубина проникновения (25°C)",
    softeningPoint: "Температура размягчения",
    ductility: "Растяжимость",
    flashPoint: "Температура вспышки",
    solubility: "Растворимость в TCE",
    specificGravity: "Удельный вес",
    viscosity40: "Вязкость (40°C)",
    viscosity100: "Вязкость (100°C)",
    viscosityIndex: "Индекс вязкости",
    pourPoint: "Температура застывания",
    density: "Плотность (15°C)",
    purity: "Чистота",
    ash: "Зольность",
    moisture: "Влажность",
    carbon: "Углерод",
    granularity: "Гранулометрия",
    rvp: "Давление насыщ. паров (RVP)",
    sulfurContent: "Содержание серы",
    appearance: "Внешний вид",
    water: "Содержание воды",
    viscosity50: "Вязкость (50°C)",
  },
  common: { whatsapp: "Чат в WhatsApp", backTop: "Наверх", language: "Язык" },
};

/* ============================ Türkçe ============================ */
const tr: Dict = {
  topbar: { hq: "Tahran Merkez Ofis", emailLabel: "Resmi e-posta" },
  nav: {
    home: "Anasayfa",
    sectors: "Faaliyet Alanları",
    about: "Hakkımızda",
    certificates: "Sertifikalar",
    contact: "İletişim",
    quote: "Fiyat Talebi",
    menu: "Menü",
  },
  hero: {
    badge: "INTERNATIONAL TRADE & INVESTMENT",
    title1: "Pazarları Birleştiriyoruz",
    title2: "Geleceği İnşa Ediyoruz",
    subtitle:
      "AROUSHA GLOBAL; petrol türevleri, petrokimya, yemeklik yağlar ve gıda, metaller, doğal taş ve genel yük alanlarında güvenilir tedarik sağlar — doğrulanmış kaynaklardan varış noktanıza kadar, eksiksiz belgelendirme ve entegre lojistikle.",
    ctaPrimary: "Fiyat Teklifi Alın",
    ctaSecondary: "Faaliyet Alanlarımız",
    scroll: "Kaydırın",
  },
  stats: {
    years: "Yıllık Deneyim",
    countries: "Ülkede Tedarik Ağı",
    products: "Aktif Ürün Hattı",
    clients: "Müşteri ve Tedarikçi",
  },
  sectors: {
    kicker: "NE YAPIYORUZ",
    title: "Altı Uzman İş Hattı",
    subtitle:
      "İran, Türkiye ve dünya pazarlarında entegre tedarik ağı — tek standart, tek sözleşme, tek sorumluluk noktası.",
    productCount: "ürün",
    explore: "Keşfet",
    soon: "Yakında",
    items: {
      oil: {
        name: "Petrol, Bitüm ve Türevleri",
        desc: "Yol bitümü, vakum bütanı, baz yağlar, kükürt, nafta ve ağır yakıtlar — güvenilir rafinerilerden standart belgelerle.",
      },
      petrochemical: {
        name: "Petrokimya ve Endüstriyel Kimyasallar",
        desc: "Üretim, inşaat ve tarım için polimerler, baz ve özel kimyasallar — sertifikalı analiz ve standart ambalajla.",
      },
      food: {
        name: "Yemeklik Yağlar ve Gıda Ürünleri",
        desc: "Rafine yemeklik yağlar ve temel gıda ürünleri — eksiksiz sağlık belgeleri ve güvenilir tedarik zinciriyle.",
      },
      metals: {
        name: "Metaller ve Alüminyum Külçeler",
        desc: "Saygın dökümhanelerden alüminyum külçe, çelik ve endüstriyel metaller — ergitme analizi ve denetimli yüklemeyle.",
      },
      stones: {
        name: "Doğal Taş ve Madencilik",
        desc: "Traverten, mermer ve granit — kesilmiş, cilalanmış ve ihracata hazır, doğrudan ocaklardan.",
      },
      general: {
        name: "Genel Yükler",
        desc: "Talebe göre genel ve tüketici malları tedariki ve transit taşımacılık — gümrükleme ve uçtan uca lojistik dahil.",
      },
    },
  },
  about: {
    kicker: "AROUSHA HAKKINDA",
    title: "Kaynak ile Varış Arasında Güvene Dayalı Bir Köprü",
    body1:
      "AROUSHA GLOBAL, İran ve Türkiye'deki tedarik ağı üzerine kurulu, dünya genelinde ithalatçılara ve sanayiye hizmet veren uluslararası bir ticaret şirketidir. Her sevkiyat kaynaktan varış noktasına kadar belgelenir — analiz ve denetimden navlun, gümrükleme ve teslimata kadar.",
    body2:
      "Felsefemiz basit: bilgide şeffaflık, programa bağlılık ve belgelenmiş kalite. Bu nedenle rafineriler, petrokimya tesisleri ve saygın üreticilerle doğrudan çalışır; her talep için kesin ve uygulanabilir bir teklif sunarız.",
    advantages: [
      { t: "Güvenilir Tedarik", d: "İran ve Türkiye'deki saygın rafineri ve üreticilerle doğrudan ilişki — gereksiz aracısız." },
      { t: "Belgelenmiş Kalite", d: "Her sevkiyat; sertifikalı analiz, denetim belgeleri ve eksiksiz gümrük evraklarıyla gelir." },
      { t: "Uçtan Uca Lojistik", d: "Kaynak deposundan varış limanına: kar, deniz ve demiryolu tek entegre planla." },
      { t: "Çok Dilli Destek", d: "Farsça, İngilizce, Arapça, Rusça ve Türkçe — mesai saatlerinde profesyonel yanıt." },
    ],
    consulting: {
      kicker: "DANIŞMANLIK HİZMETLERİ",
      title: "Danışmanlık Hizmetleri",
      intro:
        "AROUSHA Global yirmi yıldır şirketlerin, holdinglerin ve girişimlerin planlarını faal işletmelere dönüştürmesine yardımcı oluyor. Danışmanlık uygulamamız şunları kapsar:",
      items: [
        { t: "Şirket Kuruluşu ve Faaliyete Geçiş", d: "Yapılandırma, lisans süreci, fizibilite ve iş planı ile ilk yıl operasyonları." },
        { t: "Ticari ve Ticaret Danışmanlığı", d: "Pazara giriş, tedarik ve satış stratejisi, ithalat-ihracat ve gümrük prosedürleri." },
        { t: "Holding ve Kurumsal Danışmanlık", d: "Yerleşik gruplar için portföy incelemesi, yeniden yapılandırma ve büyüme stratejisi." },
        { t: "Arama ve Kaynak Danışmanlığı", d: "Maden ve doğal kaynak fırsatlarının değerlendirilmesi ve geliştirilmesine destek." },
        { t: "Yatırım ve Fizibilite Çalışmaları", d: "Sağlam kararlar için bağımsız analiz." },
        { t: "Endüstri ve Proje Danışmanlığı", d: "Otomasyon, üretim hatları, inşaat ve altyapı." },
        { t: "Teknoloji ve Yönetim Danışmanlığı", d: "BT çözümleri ve yönetim güçlendirme." },
      ],
      cta: "Bir sonraki adımınızı konuşalım.",
      ctaBtn: "Bize ulaşın",
    },
    sigTitle: "CEO'nun Mesajı",
    sigRole: "AROUSHA GLOBAL Genel Müdürü",
  },
  certs: {
    title: "Sertifikalar ve Standartlar",
    subtitle: "Şablon önizlemesi — onay sonrası resmi belgeler yerleşecektir.",
    preview: "Önizleme",
  },
  cta: {
    quoteTitle: "Fiyat Teklifi Talebi",
    quoteDesc:
      "Ürün, miktar ve varış ülkesini iletin — uzmanlarımız bir iş günü içinde kesin teklifle yanıt verir.",
    quoteBtn: "Talebi Gönder",
    supplierTitle: "Tedarikçilerle İş Birliği",
    supplierDesc:
      "Üreticiler ve mal sahipleri; şirket profillerini ve tedarik koşullarını doğrudan AROUSHA tedarik ekibine iletebilir.",
    supplierBtnHint: "Tedarik ekibine yazın",
    disclaimer:
      "Stok durumu, teknik özellikler, fiyatlar ve teslim şartları her talep için teyide tabidir.",
  },
  footer: {
    about:
      "AROUSHA GLOBAL — İran, Türkiye ve dünya pazarlarını birbirine bağlayan uluslararası ticaret evi; belgelenmiş kalite, şeffaflık ve zamanında teslimata bağlı.",
    quick: "Hızlı Erişim",
    sectorsTitle: "Faaliyet Alanları",
    contact: "İletişim Bilgileri",
    offices: {
      tehran: "Merkez Ofis — Tahran",
      antalya: "Antalya Ofisi",
      ankara: "Ankara Ofisi",
    },
    emailLabel: "E-posta",
    hqLabel: "Merkez Ofis",
    address: "No. 12, Şehid Behişti Cad., Tahran, İran",
    rights: "© 2025 AROUSHA GLOBAL. Tüm hakları saklıdır.",
  },
  modal: {
    title: "Fiyat Teklifi Talebi",
    sub: "Aşağıdaki formu doldurun — yanıt bir iş günü içinde iletilir.",
    name: "Ad Soyad",
    company: "Şirket / İşletme",
    phone: "Telefon / WhatsApp",
    email: "E-posta",
    qty: "Miktar / Hacim (yaklaşık)",
    dest: "Varış Ülkesi",
    msg: "Notlar (ürün, grad, ambalaj…)",
    submit: "Talebi Gönder",
    close: "Kapat",
    successTitle: "Talebiniz alındı",
    successMsg:
      "AROUSHA uzmanı kısa süre içinde sizinle iletişime geçecek. Acil takip için WhatsApp'tan yazın.",
    demoNote: "Demo form — hosting sonrası e-posta/backend sistemine bağlanacaktır.",
  },
  oil: {
    crumbHome: "Anasayfa",
    crumbSector: "Faaliyet Alanı",
    back: "Anasayfaya Dön",
    heroBadge: "OIL · BITUMEN & DERIVATIVES",
    heroTitle: "Petrol, Bitüm ve Türevleri",
    heroDesc:
      "Saygın rafinerilerden yol bitümü, vakum bütanı, baz yağ, kükürt, nafta ve ağır yakıt tedariki — sertifikalı analiz, standart ambalaj ve hassas yükleme planlamasıyla.",
    chip1: "Güvenilir rafineri kaynakları",
    chip2: "Sertifikalı analiz ve belgeler",
    chip3: "Fıçı · Dökme · Jumbo",
    filters: "Ürün Filtresi",
    productsTitle: "Ürünler",
    productsSub: "Bu alandaki aktif gradlar — tam analiz ve fiyat için teklif talep edin.",
    count: "ürün",
    quoteThis: "Bu Ürünü Sorgula",
    specs: "Teknik Özellikler",
    specNote: "Tipik değerler — her sevkiyat için resmi laboratuvar analizine göre teyit edilir.",
    soon: "Bu alan yakında açılacak — şimdilik teklif formunu kullanın.",
    cats: {
      all: "Tümü",
      bitumen: "Bitüm ve Asfalt",
      lubricants: "Yağlar ve Yağlayıcılar",
      petrochemical: "Petrokimya",
      fuels: "Yakıtlar",
    },
    packing: {
      packingDrums: "Ambalaj: 180 kg yeni çelik fıçı / dökme / jumbo",
      packingBulk: "Ambalaj: dökme / tank / bituteyner",
      packingJumbo: "Ambalaj: 1 ton jumbo big-bag / dökme",
    },
    items: {
      "bitumen-60-70": {
        name: "Penetrasyon Bitümü 60/70",
        short: "Bitumen 60/70",
        desc: "Sıcak iklimler için standart yol bitümü, ASTM D946 uygun.",
      },
      "bitumen-80-100": {
        name: "Penetrasyon Bitümü 80/100",
        short: "Bitumen 80/100",
        desc: "Ilıman iklimler için daha yumuşak grad, ASTM D946 uygun.",
      },
      "vacuum-bottom": {
        name: "Vakum Bottom",
        short: "Vacuum Bottom",
        desc: "Rafineri artığı; bitüm üretimi ve yakıt harmanının ana hammaddesi.",
      },
      "base-oil-sn500": {
        name: "Baz Yağ SN500",
        short: "Base Oil SN500",
        desc: "Yağlayıcı, gres ve endüstriyel harmanlar için Group I virjin baz yağ.",
      },
      "granular-sulfur": {
        name: "Granül Kükürt",
        short: "Granular Sulphur",
        desc: "Tarım ve kimya endüstrisi için %99,9 saflıkta granül kükürt.",
      },
      naphtha: {
        name: "Nafta (Full Range)",
        short: "Naphtha Full Range",
        desc: "Petrokimya kraker ve reformer üniteleri için nafta hammaddesi.",
      },
      "fuel-oil-cst180": {
        name: "Fuel Oil CST 180",
        short: "Fuel Oil CST 180",
        desc: "Deniz ve endüstriyel brülörler için bunker sınıfı ağır yakıt.",
      },
    },
  },
  specLabels: {
    penetration: "Penetrasyon (25°C)",
    softeningPoint: "Yumuşama Noktası",
    ductility: "Dütilite",
    flashPoint: "Parlama Noktası",
    solubility: "TCE Çözünürlüğü",
    specificGravity: "Özgül Ağırlık",
    viscosity40: "Viskozite (40°C)",
    viscosity100: "Viskozite (100°C)",
    viscosityIndex: "Viskozite İndeksi",
    pourPoint: "Akma Noktası",
    density: "Yoğunluk (15°C)",
    purity: "Saflık",
    ash: "Kül",
    moisture: "Nem",
    carbon: "Karbon",
    granularity: "Granülometri",
    rvp: "Buhar Basıncı (RVP)",
    sulfurContent: "Kükürt İçeriği",
    appearance: "Görünüm",
    water: "Su İçeriği",
    viscosity50: "Viskozite (50°C)",
  },
  common: { whatsapp: "WhatsApp Sohbet", backTop: "Yukarı dön", language: "Dil" },
};

export const DICTS: Record<Lang, Dict> = { fa, en, ar, ru, tr };
