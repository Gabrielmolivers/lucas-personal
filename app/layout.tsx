import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const title = "Lucas Santos Personal | Treinos personalizados e acompanhamento profissional";
const description =
  "Treinos personalizados, resultados reais e acompanhamento direto com Lucas Santos, personal trainer.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Lucas Santos Personal",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} antialiased`}>
      <body className="bg-slate-950 text-white selection:bg-brand-300/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
