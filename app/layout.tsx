import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio — Fresh Graduate Teknik Informatika",
    template: "%s | Portfolio",
  },
  description:
    "Portfolio profesional seorang Fresh Graduate Teknik Informatika yang passionate dalam web development dan teknologi modern. Menampilkan projects, skills, dan pengalaman.",
  keywords: [
    "portfolio",
    "web developer",
    "fresh graduate",
    "teknik informatika",
    "next.js",
    "react",
    "full-stack developer",
    "frontend developer",
    "indonesia",
  ],
  authors: [{ name: "Portfolio Owner" }],
  creator: "Portfolio Owner",
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Portfolio — Fresh Graduate Teknik Informatika",
    description:
      "Portfolio profesional seorang Fresh Graduate Teknik Informatika yang passionate dalam web development dan teknologi modern.",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Fresh Graduate Teknik Informatika",
    description:
      "Portfolio profesional seorang Fresh Graduate Teknik Informatika yang passionate dalam web development dan teknologi modern.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen" suppressHydrationWarning>
        <ThemeProvider>
          <Preloader />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
