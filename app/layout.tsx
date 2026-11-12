import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
 metadataBase: new URL("https://tp-seo-nextjs-tawny.vercel.app"),
  title: "Lago | Informatique appliquée à la gestion des entreprises",
  description: "Découvrez Lago : intégration de solutions informatiques et gestion d'entreprise par Jonathan Lago à Goma.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Lago | Informatique appliquée à la gestion des entreprises",
    description: "Des solutions technologiques pour organiser, piloter et développer votre entreprise.",
    type: "website",
    locale: "fr_CD",
    siteName: "Lago",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {/* NAVBAR */}
        <header className="navbar">
          <div className="container nav-inner">
            <a href="#home" className="logo">
              <span className="logo-mark">L</span> Lago
            </a>

            <ul className="nav-links">
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </header>

        {children}

        {/* FOOTER */}
        <footer>
          <div className="container">
            <div className="footer-grid">
              <div>
                <a href="#home" className="logo"><span className="logo-mark">L</span> Lago</a>
                <p style={{ marginTop: '10px' }}>Informatique appliquée à la gestion des entreprises.</p>
              </div>
              <div>
                <h4>Navigation</h4>
                <ul>
                  <li><a href="#home">Accueil</a></li>
                  <li><a href="#about">À propos</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4>Contact</h4>
                <ul>
                  <li>📞 <a href="tel:+243831936621">+243 831 936 621</a></li>
                  <li>✉️ <a href="mailto:jonathankbl18@gmail.com">jonathankbl18@gmail.com</a></li>
                </ul>
              </div>
            </div>
            <p className="copyright">© 2026 Lago — Jonathan Lago. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}