import { Footer, Header } from "@/layouts";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { fontVariables } from "@/libs/fonts";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Portfolio - Développeur Web",
  description:
    "Portfolio professionnel présentant mes projets et compétences en développement web.",
  keywords: ["portfolio", "développeur web", "développeur", "web", "projets"],
  authors: [{ name: "Tyron Morcel" }],
  openGraph: {
    title: "Portfolio - Développeur Web",
    description:
      "Portfolio professionnel présentant mes projets et compétences en développement web.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="fr">
        <body className={`${fontVariables} font-montserrat`}>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
