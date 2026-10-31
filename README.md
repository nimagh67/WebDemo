# AROUSHA GLOBAL — وب‌سایت رسمی

<div dir="rtl">

وب‌سایت رسمی شرکت بین‌المللی **آروشا گلوبال** (AROUSH GLOBAL) — تأمین‌کنندهٔ مطمئن مشتقات نفتی و خدمات بازرگانی.

**شعار:** BRIDGING MARKETS · BUILDING FUTURES

</div>

---

## ✨ امکانات

- طراحی لوکس مشکی-طلایی با پس‌زمینهٔ زندهٔ نقشهٔ جهان (Canvas)
- **۵ زبان:** فارسی، English، العربية، Русский، Türkçe
- راست‌چین کامل (RTL) برای فارسی و عربی با اعداد فارسی
- ۶ حوزهٔ کاری با رنگ اختصاصی: مشتقات نفتی، بیتومن، روغن پایه، نفتا، سولفور، مشاوره
- فرم درخواست استعلام قیمت (Quote Modal)
- کاملاً واکنش‌گرا (موبایل و دسکتاپ)
- لوگوی رسمی استخراج‌شده از فایل برند

## 🚀 اجرای محلی (Local)

پیش‌نیاز: [Node.js نسخه ۲۰ به بالا](https://nodejs.org)

```bash
npm install
npm run dev
```

سپس مرورگر را باز کنید: `http://localhost:3000`

## 🌐 انتشار روی GitHub Pages

این پروژه یک workflow آماده دارد: `.github/workflows/deploy-pages.yml`

1. کد را به شاخهٔ `main` پوش کنید
2. در گیت‌هاب به **Settings → Pages** بروید
3. در بخش **Source** گزینهٔ **GitHub Actions** را انتخاب کنید
4. ساختهٔ خودکار انجام می‌شود و آدرس سایت به شکل `https://USERNAME.github.io/REPO-NAME/` فعال می‌شود

> نکته: آدرس پایه (basePath) به‌صورت خودکار از نام ریپازیتوری ساخته می‌شود؛ نام ریپازیتوری را فقط با حروف انگلیسی، عدد و خط تیره بنویسید.

## 📦 بیلد دستی

```bash
# بیلد استاتیک برای هاست‌های معمولی (خروجی در پوشهٔ out/)
NEXT_STATIC_EXPORT=1 npm run build:static

# بیلد استاندارد Next.js (standalone)
npm run build
```

## 🗂 ساختار پروژه

```
src/
├── app/                 # صفحهٔ اصلی و layout
├── components/site/     # بخش‌های سایت (Hero, About, Sectors, ...)
├── components/ui/       # کامپوننت‌های shadcn/ui
├── content/
│   ├── dict.ts          # ترجمه‌های ۵ زبانه (محل مدیریت محتوا)
│   ├── data.ts          # اطلاعات تماس، محصولات، مدارک
│   └── map-data.json    # دادهٔ نقشهٔ جهان
└── lib/i18n.tsx         # سیستم چندزبانه (localStorage)
```

## 🛳 فناوری‌ها

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui · Canvas API

## 📞 تماس

**AROUSH GLOBAL** — دفتر مرکزی: تهران، خیابان نظاری
برای تغییر محتوا (متن‌ها، محصولات، تماس) فایل‌های `src/content/dict.ts` و `src/content/data.ts` را ویرایش کنید.
