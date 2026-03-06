import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "webuilder.gm — Microsaas & Produtos IA",
  description:
    "Portfólio de microsaas por Guilherme Muoio. Produtos digitais focados, com IA onde faz sentido.",
  metadataBase: new URL("https://webuildergm.com.br"),
  openGraph: {
    title: "webuilder.gm — Microsaas & Produtos IA",
    description:
      "Portfólio de microsaas por Guilherme Muoio. Produtos digitais focados, com IA onde faz sentido.",
    url: "https://webuildergm.com.br",
    siteName: "webuilder.gm",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "webuilder.gm — Microsaas & Produtos IA",
    description:
      "Portfólio de microsaas por Guilherme Muoio. Produtos digitais focados, com IA onde faz sentido.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
