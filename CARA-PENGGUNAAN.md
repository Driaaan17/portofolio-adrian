# Portfolio Website - Fresh Graduate Teknik Informatika

Portfolio website modern dengan desain minimalis hitam-putih, dibangun menggunakan Next.js 16, TypeScript, dan Tailwind CSS.

## 🚀 Quick Start

### Menjalankan Development Server

```bash
npm run dev
```

Buka browser dan akses: `http://localhost:3000`

### Build untuk Production

```bash
npm run build
npm start
```

## 📝 Cara Kustomisasi

### 1. Informasi Pribadi

Edit file berikut untuk mengubah informasi pribadi Anda:

#### **Hero Section** (`components/Hero.tsx`)
- Ganti "Nama Anda" dengan nama lengkap
- Update link GitHub, LinkedIn, dan Email

#### **About Section** (`components/About.tsx`)
- Edit deskripsi tentang diri Anda
- Update informasi pendidikan (IPK, tahun)
- Sesuaikan lokasi dan availability

#### **Contact Section** (`components/Contact.tsx`)
- Update email, LinkedIn, dan GitHub username

### 2. Skills & Technologies

Edit `components/Skills.tsx`:
- Tambah/hapus skills sesuai keahlian Anda
- Kelompokkan berdasarkan kategori

### 3. Projects

Edit `components/Projects.tsx`:
- Tambah project Anda sendiri
- Update title, description, tags, dan links
- Ganti `#` dengan link demo dan GitHub yang sebenarnya

### 4. Metadata & SEO

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Portfolio - Nama Anda",
  description: "Deskripsi portfolio Anda",
  keywords: ["keywords", "yang", "relevan"],
};
```

## 🎨 Desain & Warna

Portfolio ini menggunakan skema warna hitam-putih minimalis:
- **Background**: Black (#000) & White (#FFF)
- **Text**: White, Gray-400, Gray-600
- **Accent**: Monospace font untuk detail

Untuk mengubah warna, edit class Tailwind CSS di setiap component.

## 📁 Struktur Project

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx          # Root layout dengan Navbar
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   └── Contact.tsx         # Contact form & footer
└── public/                 # Static files
```

## 🌐 Deploy ke Production

### Vercel (Recommended)
1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis!

### Netlify
1. Push code ke GitHub
2. Connect repository di [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📸 Screenshots

Portfolio terdiri dari 5 section:
1. **Hero** - Intro dengan nama dan CTA buttons
2. **About** - Informasi tentang diri Anda
3. **Skills** - Tech stack yang dikuasai
4. **Projects** - Portfolio project
5. **Contact** - Form kontak dan social links

## ⚡ Tips

- **Mobile Responsive**: Sudah responsive untuk semua device
- **SEO Friendly**: Metadata sudah dioptimasi
- **Performance**: Next.js image optimization & code splitting
- **Accessibility**: Semantic HTML dan aria-labels

## 🔧 Troubleshooting

### Port 3000 sudah digunakan?
```bash
npm run dev -- -p 3001
```

### Error saat build?
```bash
rm -rf .next
npm install
npm run build
```

## 📚 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Font**: Geist (Next.js default)

## 📞 Support

Jika ada pertanyaan atau issue, silakan buat issue di GitHub repository atau hubungi via email.

---

**Made with ❤️ using Next.js & Tailwind CSS**
