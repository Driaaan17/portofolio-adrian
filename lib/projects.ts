export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  year: string;
  /** Kosongkan jika belum ada demo publik; tombolnya akan disembunyikan. */
  demoLink?: string;
  /** Kosongkan jika repo privat/belum ada; tombolnya akan disembunyikan. */
  githubLink?: string;
  challenges: string;
  learnings: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'sibi-learn',
    title: 'SIBI Learn — Web App Pengenalan Alfabet Bahasa Isyarat BISINDO',
    description:
      'Project tugas akhir skripsi saya yang mengembangkan rule-based classification system dengan 21 titik koordinat landmark tangan untuk mengklasifikasikan 26 alfabet secara real-time langsung melalui browser tanpa server eksternal.',
    longDescription:
      'Merupakan proyek tugas akhir skripsi S1 saya untuk membangun aplikasi web edukasi pengenalan alfabet Bahasa Isyarat Indonesia (BISINDO) yang berjalan sepenuhnya secara client-side. Aplikasi ini menggunakan MediaPipe Hands untuk menangkap landmark tangan secara real-time dan mengklasifikasikan 26 alfabet menggunakan algoritma klasifikasi berbasis aturan (rule-based).',
    tags: ['JavaScript', 'MediaPipe', 'HTML', 'CSS', 'Rule-based AI'],
    year: '2025',
    // TODO: isi demoLink dan githubLink setelah SIBI Learn dipublikasikan.
    challenges:
      'Mengembangkan rule-based classification system menggunakan 21 titik koordinat landmark tangan agar dapat mendeteksi dan membedakan 26 variasi alfabet BISINDO secara presisi dan cepat langsung di sisi client (browser) tanpa mengandalkan server eksternal.',
    learnings:
      'Memahami implementasi computer vision real-time menggunakan MediaPipe, pengolahan koordinat spasial tangan, serta perancangan logika klasifikasi berbasis aturan (rule-based) yang efisien untuk web.',
    featured: true,
  },
  {
    slug: 'cerita-rakyat-bilingual',
    title: 'Cerita Rakyat Bilingual — Platform Edukasi Interaktif',
    description:
      'Project komersial yang dibeli oleh seorang tenaga pendidik. Membangun web application edukasi bilingual (Indonesia–Inggris) menggunakan Next.js (App Router) dan Framer Motion untuk menampilkan koleksi cerita rakyat interaktif.',
    longDescription:
      'Platform edukasi interaktif berbasis web untuk menyajikan koleksi cerita rakyat dalam dua bahasa (Indonesia dan Inggris). Proyek ini merupakan project komersial yang dipesan dan dibeli oleh seorang tenaga pendidik untuk keperluan pembelajaran interaktif. Aplikasi ini dirancang dengan Next.js App Router untuk performa rendering optimal serta integrasi database Supabase untuk pengelolaan data konten cerita.',
    tags: ['Next.js', 'React', 'Framer Motion', 'Supabase', 'Tailwind CSS'],
    year: '2026',
    demoLink: 'https://ceritarakyatbilingual.vercel.app/',
    githubLink: 'https://github.com/Driaaan17/ceritarakyatbilingual',
    challenges:
      'Menerapkan animasi UI/UX yang interaktif dan dinamis menggunakan Framer Motion pada konten cerita rakyat tanpa mengorbankan performa kecepatan load halaman, serta merancang struktur bilingual yang mudah diakses.',
    learnings:
      'Menguasai optimasi rendering pada Next.js App Router, integrasi backend-as-a-service dengan Supabase, dan implementasi teknik animasi transisi tingkat lanjut dengan Framer Motion.',
    featured: true,
  },
];
