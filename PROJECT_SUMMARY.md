# 🚀 Project Summary & Agent Guide (Token Saver)

Dokumen ini berisi rangkuman arsitektur, konvensi kode, konfigurasi tema, dan struktur proyek untuk membantu AI Agent berikutnya memahami basis kode secara instan dan menghemat penggunaan token konteks.

---

## 🛠️ Stack & Ketentuan Versi
* **Core:** Next.js 16.2.6 (Turbopack), React 19, TypeScript
* **Styling:** Tailwind CSS v4 (@import "tailwindcss" + `@theme inline` di CSS), Custom CSS Variables untuk theming.
* **Icons:** `react-icons/si`, `react-icons/fa`, `react-icons/vsc`
* **Fonts:** Inter (Sans-serif) & JetBrains Mono (Monospace) diatur via Next.js Font Variables.

---

## 📂 Peta File & Komponen Inti

* **`app/globals.css`**
  * Berisi token desain CSS Variables untuk Light Mode (`:root`) dan Dark Mode (`[data-theme="dark"]`).
  * Menyediakan utilitas `.glass`, `.glass-card`, `.btn-primary`, `.btn-outline`.
  * Memiliki daftar keyframe animasi (`fadeInUp`, `fadeInDown`, `float`, dll).
* **`app/layout.tsx`**
  * Layout utama. Dibungkus `<ThemeProvider>`, `<Preloader />`, `<Navbar />`, dan `<Footer />`.
  * Memiliki *inline script* di `<head>` untuk deteksi & inisialisasi tema instan sebelum hidrasi untuk mencegah *flash of theme*.
  * Menambahkan `suppressHydrationWarning` pada tag `<script>` dan `<body>` untuk mencegah error dari ekstensi browser (misal Brave Shield).
* **`components/ThemeProvider.tsx`**
  * Menyediakan `useTheme` hook dan `toggleTheme` function.
  * Murni bertindak sebagai Context Provider tanpa manipulasi wrapper DOM bersyarat untuk menghindari *hydration mismatch*.
* **`components/ScrollReveal.tsx`**
  * Komponen pembungkus animasi berbasis viewport menggunakan `IntersectionObserver`.
  * Menerima prop: `direction` (`up` | `down` | `left` | `right` | `scale`), `delay` (ms), dan `children`.
* **`components/Preloader.tsx`**
  * Tampilan loading awal per sesi browser (menggunakan `sessionStorage` agar hanya muncul 1x per kunjungan).

---

## 🎨 Token Desain & Tema Utama
Gunakan variabel berikut untuk layout atau komponen baru agar konsisten dan mendukung Light/Dark mode secara otomatis:

| CSS Variable | Kegunaan |
| :--- | :--- |
| `var(--bg-primary)` | Warna latar belakang utama (putih / hitam pekat) |
| `var(--bg-secondary)` | Warna latar belakang sekunder (abu-abu sangat terang / abu-abu gelap) |
| `var(--text-primary)` | Warna teks utama (hitam pekat / putih terang) |
| `var(--text-secondary)` | Warna teks sekunder (abu-abu sedang) |
| `var(--text-tertiary)` | Warna teks tersier (abu-abu muda) |
| `var(--border-primary)` | Garis batas komponen biasa |
| `var(--border-secondary)` | Garis batas komponen tebal/hover |
| `var(--glass-bg)` | Warna background efek glassmorphic |
| `var(--glass-border)` | Warna border efek glassmorphic |

---

## 📝 Konvensi Pengembangan

### 1. Menambahkan Detail Project Baru
* Project dinamis di-render melalui `app/projects/[slug]/page.tsx`.
* Parameter `params` di dalam `generateMetadata` dan komponen halaman utama bertipe `Promise<{ slug: string }>` dan wajib di-`await` sebelum digunakan:
  ```typescript
  const { slug } = await params;
  ```

### 2. Integrasi Form Kontak
* Form kontak berada di `components/Contact.tsx`.
* Saat ini menggunakan status simulasi sukses/gagal kirim. Untuk integrasi nyata, pasang kredensial **EmailJS** pada method submit.

### 3. Ikon VS Code
* Jangan gunakan `SiVisualstudiocode` atau `SiVscode` dari `react-icons/si`. Gunakan **`VscVscode`** dari **`react-icons/vsc`** demi kompatibilitas build production.
