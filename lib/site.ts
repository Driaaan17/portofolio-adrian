export const SITE = {
  name: 'Adrian Anggara Faturrahman',
  role: 'Frontend Web Developer',
  // Ganti lewat env NEXT_PUBLIC_SITE_URL saat memakai domain sendiri.
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portofolio-adrian-sepia.vercel.app'
  ).replace(/\/$/, ''),
  description:
    'Portfolio Adrian Anggara Faturrahman, Frontend Web Developer lulusan Teknik Informatika. Membangun aplikasi web dengan Next.js dan React, dari web app computer vision untuk skripsi hingga platform edukasi komersial.',
  github: 'https://github.com/Driaaan17',
  linkedin: 'https://linkedin.com/in/adrian-anggara-faturrahman',
} as const;
