export default function Home() {
  return (
    <main>
      {/* SECTION ACCUEIL (HERO) */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-inner">
            <span className="badge">🎓 Étudiant en informatique appliquée à la gestion</span>
            <h1>Quand l'<span>informatique</span> rencontre la gestion d'entreprise</h1>
            <p>
              Lago, c'est la passion de la technologie au service des entreprises :
              des solutions informatiques pensées pour mieux organiser, piloter et
              faire grandir votre activité.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn btn-gold">
                Découvrir mes services
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </a>
              <a href="#contact" className="btn btn-outline">Me contacter</a>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <div className="container highlight-grid">
          <div className="highlight">
            <div className="emoji">💻</div>
            <h3>Informatique</h3>
            <p>Des outils numériques modernes et adaptés à vos besoins.</p>
          </div>
          <div className="highlight">
            <div className="emoji">📊</div>
            <h3>Gestion</h3>
            <p>Une vision claire de l'organisation et des processus de l'entreprise.</p>
          </div>
          <div className="highlight">
            <div className="emoji">🚀</div>
            <h3>Performance</h3>
            <p>Gagnez du temps, réduisez les erreurs et améliorez vos résultats.</p>
          </div>
        </div>
      </div>

      {/* SECTION À PROPOS */}
      <section id="about" className="block">
        <div className="container">
          <span className="eyebrow">À propos</span>
          <h2 className="section-title">Faire connaissance avec <span>Lago</span></h2>
          <p className="section-lead" style={{ marginBottom: '40px' }}>
            Une présentation d'un étudiant en informatique appliquée à la gestion des entreprises.
          </p>

          <div className="about-grid">
            <div className="card">
              <div className="profile">
                <div className="avatar">JL</div>
                <div>
                  <h3>Jonathan Lago</h3>
                  <span>Fondateur de Lago</span>
                </div>
              </div>
              <h2>Mon parcours</h2>
              <p>
                Étudiant en <strong>informatique appliquée à la gestion des entreprises</strong>,
                j'allie deux univers complémentaires : la maîtrise des outils informatiques
                et la compréhension du fonctionnement d'une organisation.
              </p>
              <p>
                Mon objectif : mettre mes compétences au service des entreprises afin de
                simplifier leur quotidien, structurer leurs données et soutenir leur
                développement grâce au numérique.
              </p>
              <a href="#contact" className="btn btn-blue">Travaillons ensemble</a>
            </div>

            <div className="values">
              <div className="value">
                <span className="emoji">🎯</span>
                <div><h4>Rigueur</h4><p>Un travail soigné, structuré et fiable.</p></div>
              </div>
              <div className="value">
                <span className="emoji">💡</span>
                <div><h4>Innovation</h4><p>Des idées modernes pour des problèmes concrets.</p></div>
              </div>
              <div className="value">
                <span className="emoji">🤝</span>
                <div><h4>Proximité</h4><p>Une écoute attentive de vos besoins réels.</p></div>
              </div>
            </div>
          </div>

          <div className="stats">
            <div className="stat"><strong>100%</strong><span>Motivation</span></div>
            <div className="stat"><strong>2 en 1</strong><span>Informatique + Gestion</span></div>
            <div className="stat"><strong>24h</strong><span>Délai de réponse visé</span></div>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES */}
      <section id="services" className="block" style={{ background: '#e6eefb' }}>
        <div className="container">
          <span className="eyebrow">Services</span>
          <h2 className="section-title">Ce que <span>Lago</span> vous propose</h2>
          <p className="section-lead" style={{ marginBottom: '40px' }}>
            L'informatique appliquée à la gestion des entreprises, au cœur de mon activité.
          </p>

          <div className="services-grid">
            <article className="service-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M6 13l3-3 3 2 4-5"/>
                </svg>
              </div>
              <h3>Informatique appliquée à la gestion</h3>
              <p>Mettre la technologie au service de l'organisation, du suivi et de la performance de votre entreprise.</p>
              <ul>
                <li>Analyse de vos besoins</li>
                <li>Organisation des données</li>
                <li>Outils de suivi et de pilotage</li>
              </ul>
            </article>

            <article className="service-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>
                </svg>
              </div>
              <h3>Gestion des données</h3>
              <p>Structurer, centraliser et sécuriser les informations essentielles de votre activité.</p>
              <ul>
                <li>Tableaux et bases de données</li>
                <li>Rapports clairs</li>
              </ul>
            </article>

            <article className="service-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>Optimisation des processus</h3>
              <p>Simplifier et automatiser vos tâches répétitives pour gagner un temps précieux.</p>
              <ul>
                <li>Gain de productivité</li>
                <li>Moins d'erreurs</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" className="block">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Entrons en <span>contact</span></h2>
          <p className="section-lead" style={{ marginBottom: '40px' }}>
            Un appel ou un e-mail suffit pour démarrer. Je vous réponds rapidement.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>
                </svg>
              </div>
              <h3>Appelez-nous</h3>
              <p className="detail">+243 831 936 621</p>
              <a href="tel:+243831936621" className="btn btn-gold">📞 Appeler</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>
                </svg>
              </div>
              <h3>Écrivez-nous</h3>
              <p className="detail">jonathankbl18@gmail.com</p>
              <a href="mailto:jonathankbl18@gmail.com" className="btn btn-blue">✉️ Envoyer un e-mail</a>
            </div>
          </div>
          <p className="hours">⏰ Disponible du lundi au samedi — réponse sous 24 heures.</p>
        </div>
      </section>
    </main>
  );
}