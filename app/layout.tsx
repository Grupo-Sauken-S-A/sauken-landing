import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clash = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
});

export const metadata: Metadata = {
  title: "Sauken - Desarrollo de Software a medida",
  description: "Con una amplia trayectoria en el desarrollo de aplicaciones y la provisión de servicios de soporte y consultoría, somos expertos en software para optimizar tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${clash.variable} font-clash`}>
        <div className="overflow-x-clip">
        {children}
        </div>
      </body>
    </html>
  );
}
