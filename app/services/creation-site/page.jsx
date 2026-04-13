import ButtonB from "@/components/buttons/ButtonB";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

export const metadata = {
  title: "Création site internet Béziers | Développeur web freelance",

  description:
    "Création de sites internet professionnels à Béziers, Hérault et Hauts-Cantons. Sites vitrines, e-commerce et solutions sur mesure.",

  keywords: [
    "création site internet Béziers",
    "site vitrine Hérault",
    "site e-commerce Béziers",
    "développeur site web Hauts-Cantons",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/services/creation-site",
  },

  openGraph: {
    title: "Création site internet Béziers",
    description: "Création de sites web professionnels dans l’Hérault.",
    url: "https://www.laymadev.com/services/creation-site",
    siteName: "LAYMAdev",
    images: [
      {
        url: "/og-creationSite.png",
        width: 1200,
        height: 630,
        alt: "Création site web Béziers",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Création site Béziers",
    description: "Création de sites internet professionnels.",
    images: ["/og-creationSite.png"],
  },
};

export default function CreationSitePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Création de site internet",
    areaServed: {
      "@type": "Place",
      name: "Béziers",
    },
    provider: {
      "@type": "Person",
      name: "Yannick Maubrun",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="py-28 text-white">
        {/* HERO */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <MotionTitle>
            Création de site internet à Béziers (Hérault) Développeur web
            freelance spécialisé en création de sites internet professionnels
          </MotionTitle>

          <MotionP>
            LAYMA.dev est un studio web indépendant basé à Béziers dans
            l’Hérault, spécialisé dans la création de sites internet et
            d’applications sur mesure. Vous souhaitez développer votre présence
            en ligne ? Je conçois des sites internet modernes, performants et
            évolutifs pour les entreprises et indépendants à Béziers et dans
            l’Hérault.
          </MotionP>
        </div>

        {/* SECTION 1 */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Un site internet pensé pour votre activité
            </h2>

            <p className="text-gray-400">
              Chaque projet de création de site web débute par une analyse de
              vos besoins. L’objectif est de concevoir une solution digitale
              adaptée à votre activité, capable de renforcer votre visibilité et
              de soutenir votre développement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Développement web moderne
            </h2>

            <p className="text-gray-400">
              Les sites sont développés avec des technologies modernes afin
              d’assurer performance, sécurité et évolutivité. Une attention
              particulière est portée à l’expérience utilisateur et à la qualité
              du code.
            </p>
          </div>
        </div>

        <section className="max-w-5xl mx-auto my-24">
          <h2 className="text-2xl font-semibold mb-6">
            Création de site internet à Béziers pour les entreprises
          </h2>

          <p className="text-gray-400 leading-relaxed">
            La création de site internet à Béziers permet aux entreprises
            locales de développer leur visibilité en ligne et d’attirer de
            nouveaux clients. Un site web professionnel est aujourd’hui un
            levier essentiel pour se démarquer dans un environnement
            concurrentiel. En tant que développeur web freelance basé à Béziers,
            je conçois des sites internet sur mesure adaptés à votre activité, à
            vos objectifs et à votre cible.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center">
          <ButtonB />
        </div>
      </div>
    </>
  );
}
