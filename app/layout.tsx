import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tp-seo-nextjs-six.vercel.app"),
  title: "Lago - Informatique Appliquée à la Gestion",
  description: "Vitrine professionnelle pour le projet de fin d'année IT Management",
  verification: {
    google: "mQGwq0VOBeVhXFLxbYXcjFNaSXK1pnu1gW30xEzVXEQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId="GTM-WQT3QVLP" />
    </html>
  );
}