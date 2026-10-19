import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/constants/site";

const clash = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const DESCRIPTION = "Consultora IT de Córdoba, Argentina, con más de 30 años: software a medida, certificados de origen digitales (S-COD), firma digital (S-FiDE) e infraestructura."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sauken | Desarrollo de Software, Certificados de Origen",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "es_AR",
    url: "/",
    title: "Sauken | Desarrollo de Software, Certificados de Origen",
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sauken" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sauken | Desarrollo de Software, Certificados de Origen",
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${clash.variable} ${dmSans.variable} font-clash`}>
        <div className="overflow-x-clip">
        {children}
        </div>
      </body>
    </html>
  );
}
