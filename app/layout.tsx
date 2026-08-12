import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mwta.com.br"),
  title: "MWTA Segurança em Laranjal Paulista | Monitoramento e Alarmes",
  description:
    "Há 14 anos, a MWTA oferece portaria, alarmes monitorados, câmeras, cerca elétrica, concertina, ronda e rastreamento em Laranjal Paulista.",
  keywords: [
    "segurança eletrônica Laranjal Paulista",
    "alarme monitorado",
    "câmeras de segurança",
    "cerca elétrica",
    "MWTA",
  ],
  openGraph: {
    title: "MWTA | Segurança e tranquilidade",
    description:
      "Soluções completas de segurança para residências e empresas em Laranjal Paulista.",
    images: [
      {
        url: "/og-gold.png",
        width: 1774,
        height: 887,
        alt: "Central de monitoramento e segurança da MWTA",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MWTA | Segurança e tranquilidade",
    description: "Soluções completas de segurança em Laranjal Paulista.",
    images: ["/og-gold.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
