import Link from "next/link";
import PremiumSectionCard from "@/components/anims/PremiumSectionCard";
import ButtonB from "@/components/buttons/ButtonB";
import MotionTitle from "@/components/anims/MotionTitle";
import MotionP from "@/components/anims/MotionP";

export const metadata = {
  title: "Création site internet Béziers | Développeur Web Hérault",

  description:
    "Création de sites internet pour entreprises locales à Béziers, Hérault et Hauts-Cantons. Développeur web freelance.",

  keywords: [
    "création site internet Béziers",
    "développeur web Béziers",
    "site internet Hérault",
    "développeur freelance Hérault",
    "création site Hauts-Cantons",
    "SEO Béziers",
    "référencement naturel Hérault",
    "développement web sur mesure",
    "application web Béziers",
    "agence web Béziers",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Création site internet Béziers",
    description:
      "Développeur web à Béziers. Création de sites, SEO et applications web dans l’Hérault et les Hauts-Cantons.",
    url: "https://www.laymadev.com/",
    siteName: "LAYMAdev",
    images: [
      {
        url: "/images/og-home.png",
        width: 1200,
        height: 630,
        alt: "LAYMA.dev |devleoppeur web et création de site à Béziers, Hauts-Cantons, Hérault",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Développeur Web Béziers",
    description: "Création de site internet à Béziers et dans l’Hérault.",
    images: ["/logoBlack.png"],
  },
};

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "LAYMAdev",
    description:
      "Développeur web freelance à Béziers spécialisé en création de sites internet et applications web.",
    url: "https://www.laymadev.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Béziers",
      addressRegion: "Hérault",
      addressCountry: "FR",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="ml-22">
        {/* HERO (SEO + DESIGN) */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[140px]" />
          </div>

          <div className="relative z-10 px-6 max-w-5xl">
            <MotionTitle className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-8">
              Développeur web freelance à Béziers
              <br />
              Applications & Sites sur mesure
            </MotionTitle>

            <MotionP className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Développeur web freelance à Béziers, je conçois des sites internet
              et des applications web performantes, modernes et optimisées pour
              le référencement naturel (SEO). J’accompagne les entreprises
              locales dans l’Hérault et les Hauts-Cantons afin de créer des
              solutions digitales efficaces, pensées pour durer et évoluer avec
              votre activité.
            </MotionP>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-blue-600 hover:bg-blue-500 transition text-white font-medium shadow-xl"
            >
              Découvrir mes services →
            </Link>
          </div>
        </section>

        {/* CARDS = CLIENT MAIS CONTENU SEO */}
        <PremiumSectionCard image="/images/bg_code.jpg">
          <div>
            <h2 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
              Mon expertise en développement web à Béziers
            </h2>

            <div className="grid md:grid-cols-2 gap-12 text-gray-300 text-lg">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Solutions sur mesure
                </h3>
                <p>
                  Je conçois des applications web modernes et des sites internet
                  sur mesure pour les entreprises à Béziers et dans l’Hérault.
                  Chaque projet repose sur une architecture solide, pensée pour
                  garantir performance, sécurité et évolutivité. J’interviens
                  aussi bien sur le développement front-end que back-end, en
                  accordant une attention particulière à la qualité du code, à
                  la maintenabilité et à l’optimisation SEO afin d’améliorer
                  votre visibilité sur les moteurs de recherche.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Accompagnement technique
                </h3>
                <p>
                  Je vous accompagne à chaque étape de votre projet web, du
                  conseil initial jusqu’à l’évolution de votre solution. Que ce
                  soit pour une optimisation technique, une refonte ou un suivi
                  long terme, vous échangez directement avec un développeur web
                  freelance basé à Béziers. Cette proximité permet une meilleure
                  compréhension de vos besoins et une réactivité optimale pour
                  faire évoluer votre site internet ou votre application web
                  dans le temps.
                </p>
              </div>
            </div>
          </div>
        </PremiumSectionCard>

        <PremiumSectionCard image="/images/bg_service.jpg">
          <div>
            <h2 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
              Création de sites web & développement sur mesure
            </h2>

            <div className="grid md:grid-cols-2 gap-12 text-gray-300 text-lg">
              <p className="mt-10">
                Je conçois et développe des sites internet modernes, fiables et
                optimisés pour le référencement naturel (SEO), adaptés aux
                besoins des entreprises locales à Béziers, dans l’Hérault et les
                Hauts-Cantons. Chaque projet est pensé sur mesure en fonction de
                votre activité, de vos objectifs et de votre cible afin de
                garantir une présence en ligne efficace, performante et durable.
              </p>
              <ul className="relative z-10 space-y-2 list-disc ml-20">
                <li>Création de sites web</li>
                <li>Développement sur mesure</li>
                <li>Maintenance / refonte</li>
                <li>WebApps & outils internes</li>
                <li>Intégrations API</li>
              </ul>
            </div>
          </div>
        </PremiumSectionCard>

        <PremiumSectionCard image="/images/bg_choice.jpg">
          <div>
            <h2 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
              Pourquoi choisir un développeur web freelance ?
            </h2>

            <div className="grid md:grid-cols-2 gap-12 text-gray-300 text-lg">
              <p className="mt-4">
                Faire appel à un développeur web freelance à Béziers, c’est
                choisir une collaboration directe, sans intermédiaires. De
                l’idée à la mise en production, je vous accompagne avec rigueur,
                transparence et exigence. Cette approche permet de garantir un
                résultat fiable, durable et parfaitement aligné avec vos
                besoins, tout en offrant une grande flexibilité et une meilleure
                réactivité pour vos projets digitaux dans l’Hérault.
              </p>
              <ul className="relative z-10 space-y-2 list-disc ml-20">
                <li>Un interlocuteur unique</li>
                <li>Code propre et maintenable</li>
                <li>Délais maîtrisés</li>
                <li>Vision technique claire</li>
                <li>Solutions réellement sur mesure</li>
              </ul>
            </div>
          </div>
        </PremiumSectionCard>

        <PremiumSectionCard image="/images/bg_tech.jpg">
          <div>
            <h2 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
              Technologies modernes pour des applications performantes
            </h2>

            <div className="grid md:grid-cols-2 gap-12 text-gray-300 text-lg">
              <p className="mt-8">
                J’utilise des technologies modernes et éprouvées pour concevoir
                des sites internet et des applications web rapides, sécurisées
                et évolutives. Chaque choix technique est réalisé en fonction de
                votre projet afin d’optimiser les performances, l’expérience
                utilisateur et le référencement SEO. L’objectif est de vous
                proposer des solutions fiables, adaptées aux standards actuels
                du web et capables d’évoluer avec votre activité.
              </p>
              <ul className="space-y-1 list-disc ml-20">
                <li>
                  <a
                    href="https://react.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    React
                  </a>{" "}
                </li>
                <li>Tailwind</li>
                <li>Node.js</li>
                <li>
                  <a
                    href="https://symfony.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    Symfony/PHP
                  </a>{" "}
                </li>
                <li>MySQL</li>
                <li>Et bien d'autres</li>
              </ul>
            </div>
          </div>
        </PremiumSectionCard>

        <PremiumSectionCard image="/images/bg_process.jpg">
          <div>
            <h2 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
              Processus de collaboration
            </h2>

            <div className="grid md:grid-cols-2 gap-12 text-gray-300 text-lg">
              <p className="mt-4">
                Chaque projet débute par un échange approfondi afin de
                comprendre votre activité, vos objectifs et vos contraintes. Je
                conçois ensuite une solution sur mesure, adaptée à vos besoins
                fonctionnels et techniques. Le développement est réalisé de
                manière progressive avec des points réguliers pour garantir
                qualité, performance et cohérence. Une fois le projet livré, je
                reste disponible pour assurer le suivi, la maintenance et les
                évolutions futures de votre site internet ou application web.
              </p>
              <ul className="space-y-1 list-disc ml-20 mt-14">
                <li>Comprendre votre vision</li>
                <li>Concevoir votre solution</li>
                <li>Développer et tester</li>
                <li>Livrer et accompagner</li>
                <li>Maintenir</li>
              </ul>
            </div>
          </div>
        </PremiumSectionCard>

        <PremiumSectionCard image="/images/hebergement.jpg">
          <div>
            <h2 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
              Hébergement & Maintenance
            </h2>

            <div className="grid md:grid-cols-2 gap-12 text-gray-300 text-lg">
              <div>
                <p className="mt-8">
                  Pour garantir la performance, la sécurité et la stabilité de
                  votre site internet, je propose une solution d’hébergement et
                  de maintenance adaptée aux entreprises à Béziers et dans
                  l’Hérault. Vous bénéficiez d’un accompagnement complet
                  incluant mises à jour, surveillance, sauvegardes et support
                  technique, afin de vous concentrer pleinement sur votre
                  activité sans vous soucier des aspects techniques.
                </p>
                <p className="text-sm text-gray-200/80 leading-relaxed">
                  <span className="text-white font-semibold">
                    Formule mensuelle
                  </span>{" "}
                  (sur devis) — idéale pour garder un site rapide, à jour et
                  sécurisé, sans surprise.
                </p>
              </div>

              <ul className="space-y-1 list-disc ml-20">
                <li>Hébergement sécurisé,</li>
                <li>Maintenance technique,</li>
                <li>Mises à jour,</li>
                <li>Support,</li>
                <li>Suivi évolutif,</li>
                <li>Sauvegardes,</li>
                <li>Surveillance,</li>
              </ul>
            </div>
          </div>
        </PremiumSectionCard>

        <div className="mt-10 flex justify-center mb-10">
          <ButtonB />
        </div>
      </div>
    </>
  );
}
