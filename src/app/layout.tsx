import type { Metadata } from "next";
import { Inter, Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/ui/shared/Preloader";
import { PreloaderProvider } from "@/components/ui/shared/PreloaderContext";
import { ReducedMotionProvider } from "@/components/ui/utils/ReducedMotionProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jusocialz.jecrcu.edu.in";
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: {
    default: "JU Socialz — NCR Campus, Alwar | Creative Community",
    template: "%s | JU Socialz — NCR Campus, Alwar",
  },
  description: "JU Socialz at NCR Campus, Alwar is a student-driven creative and media community. Explore the verticals, find your creative space, and be part of the community.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JU Socialz — NCR Campus, Alwar | Creative Community",
    description: "A student-driven creative and media community at NCR Campus, Alwar. Different skills. One creative community.",
    url: siteUrl,
    siteName: "JU Socialz — NCR Campus, Alwar",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "JU Socialz — NCR Campus, Alwar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JU Socialz — NCR Campus, Alwar | Creative Community",
    description: "A student-driven creative and media community at NCR Campus, Alwar. Your ideas belong here.",
    images: ["/logo.png"],
  },
  verification: {
    google: googleSiteVerification,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable} ${fraunces.variable}`}>
      <body className="bg-obsidian-dark text-ivory-light antialiased selection:bg-slate-blue selection:text-ivory-light">
        <ReducedMotionProvider>
          <PreloaderProvider>
            <Preloader />
            {children}
          </PreloaderProvider>
        </ReducedMotionProvider>
      </body>
    </html>
  );
}
