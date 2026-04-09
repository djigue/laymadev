import ButtonB from "@/components/buttons/ButtonB";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

export const metadata = {
  title: "À propos | LAYMAdev - Développeur Web Béziers",

  description:
    "Découvrez LAYMAdev, développeur web basé à Béziers. Spécialisé en création de sites internet, SEO et applications web pour les entreprises de l’Hérault et des Hauts-Cantons.",

  keywords: [
    "LAYMAdev développeur web Béziers",
    "développeur web Hérault freelance",
    "création site internet Béziers",
    "expert web Hauts-Cantons",
    "développeur application web Occitanie",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "À propos de LAYMAdev",
    description:
      "Développeur web à Béziers spécialisé en création de sites et applications web.",
    url: "https://www.laymadev.com/about",
    siteName: "LAYMAdev",
    images: [
      {
        url: "images/og-about.png",
        width: 1200,
        height: 630,
        alt: "LAYMAdev développeur web Béziers",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "À propos de LAYMAdev",
    description: "Découvrez le développeur web derrière LAYMAdev à Béziers.",
    images: ["/logoBlack.png"],
  },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yannick Maubrun",
    jobTitle: "Développeur web freelance",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Béziers",
      addressRegion: "Hérault",
      addressCountry: "FR",
    },
    url: "https://www.laymadev.com/about",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* HERO */}
      <section className="relative py-32 px-6 text-center overflow-hidden text-white">
        {/* Light directionnelle */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
        </div>

        <MotionTitle>
          À propos – Développeur web freelance à Béziers
        </MotionTitle>
        <MotionP>
          Développeur web freelance à Béziers (Hérault), spécialisé dans la
          conception de solutions web modernes, performantes et évolutives.
          J’accompagne entreprises et indépendants avec une approche claire,
          technique et orientée résultats.
        </MotionP>
      </section>

      {/* VISION / MISSION */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">
            Ma vision du développement web
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Le digital ne devrait jamais être standardisé. Chaque projet mérite
            une solution réellement alignée avec votre activité, votre
            positionnement et vos objectifs.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">
            Mon approche en tant que développeur freelance
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Concevoir des produits numériques robustes, maintenables et
            évolutifs. La qualité technique et la clarté d’exécution sont au
            cœur de chaque collaboration.
          </p>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="bg-white/5 backdrop-blur-sm border-y border-white/10 py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12 tracking-tight text-white">
            Une méthode claire et structurée
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-gray-300 text-lg">
            <div>
              <h3 className="text-white font-semibold mb-4">01 — Analyse</h3>
              <p>
                Compréhension précise de votre besoin, de votre environnement et
                de vos contraintes afin de poser des bases solides.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">02 — Conception</h3>
              <p>
                Définition d’une architecture technique et d’une expérience
                utilisateur cohérentes, pensées pour la performance et
                l’évolutivité.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">
                03 — Déploiement
              </h3>
              <p>
                Développement rigoureux, mise en production optimisée et
                accompagnement dans le temps si nécessaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-semibold text-center mb-16 text-white">
          Mes engagements professionnels
        </h2>

        <div className="grid md:grid-cols-2 gap-16 text-gray-300 text-lg">
          <div>
            <h3 className="text-white font-semibold mb-4">
              Excellence technique
            </h3>
            <p>
              Code propre, architecture solide, choix technologiques réfléchis
              et durables.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Transparence</h3>
            <p>
              Communication directe et claire, sans intermédiaire, avec des
              décisions techniques expliquées et assumées.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Performance</h3>
            <p>
              Optimisation continue, attention aux détails et exigence sur la
              qualité finale.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Vision long terme</h3>
            <p>
              Des solutions conçues pour évoluer avec votre activité et vos
              ambitions.
            </p>
          </div>
        </div>
      </section>
      {/* CTA FINAL */}
      <section className="text-center py-24 border-t border-white/10">
        <p className="text-xl text-gray-400 mb-8">
          Vous avez un projet en tête ?
        </p>
        <ButtonB text="Discutons-en" />
      </section>
    </>
  );
}
