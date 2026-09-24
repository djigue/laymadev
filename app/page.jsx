import PremiumSectionCard from '@/components/anims/PremiumSectionCard';
import PremiumCard from '@/components/anims/PremiumCard';
import LinkCard from '@/components/anims/LinkCard';
import ButtonB from '@/components/buttons/ButtonB';
import AltSiteNudge from '@/components/buttons/AltSiteNudge';
import MotionTitle from '@/components/anims/MotionTitle';
import MotionP from '@/components/anims/MotionP';
import ContactForm from '@/components/forms/ContactForm';

export const metadata = {
  title:
    'Développeur web freelance à Béziers | Sites & applications sur mesure – LAYMA.dev',

  description:
    "Création de sites internet et applications web sur mesure à Béziers, dans l'Hérault et les Hauts-Cantons. Design moderne, SEO et accompagnement par un développeur freelance.",

  keywords: [
    'création site internet Béziers',
    'développeur web Béziers',
    'site internet Hérault',
    'développeur freelance Hérault',
    'création site Hauts-Cantons',
    'SEO Béziers',
    'référencement naturel Hérault',
    'développement web sur mesure',
    'application web Béziers',
    'agence web Béziers',
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'LAYMA.dev — Développeur web freelance à Béziers',
    description:
      "Création de sites internet et applications web sur mesure à Béziers, dans l'Hérault et les Hauts-Cantons.",
    url: 'https://www.laymadev.com/',
    siteName: 'LAYMAdev',
    images: [
      {
        url: '/images/og-home.png',
        width: 1200,
        height: 630,
        alt: 'LAYMA.dev | développeur web et création de site à Béziers, Hauts-Cantons, Hérault',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'LAYMA.dev — Développeur web freelance à Béziers',
    description:
      "Création de sites internet et applications web sur mesure à Béziers et dans l'Hérault.",
    images: ['/images/logoBlack.png'],
  },
};

export default function HomePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://www.laymadev.com/#business',
        name: 'LAYMA.dev',
        url: 'https://www.laymadev.com/',
        image: 'https://www.laymadev.com/images/logo.png',
        description:
          'Développeur web freelance à Béziers spécialisé en création de sites internet et applications web sur mesure.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Béziers',
          addressRegion: 'Hérault',
          addressCountry: 'FR',
        },
        areaServed: ['Béziers', 'Hérault', 'Hauts-Cantons'],
        founder: { '@id': 'https://www.laymadev.com/#person' },
      },
      {
        '@type': 'Person',
        '@id': 'https://www.laymadev.com/#person',
        name: 'Yannick Maubrun',
        jobTitle: 'Développeur web freelance',
        url: 'https://www.laymadev.com/#apropos',
      },
      {
        '@type': 'Service',
        name: 'Création de site internet',
        provider: { '@id': 'https://www.laymadev.com/#business' },
        areaServed: 'Béziers',
      },
      {
        '@type': 'Service',
        name: 'Développement web sur mesure',
        provider: { '@id': 'https://www.laymadev.com/#business' },
      },
      {
        '@type': 'Service',
        name: 'Hébergement & maintenance',
        provider: { '@id': 'https://www.laymadev.com/#business' },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ============ HERO ============ */}
      <section
        id="top"
        className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden bg-white"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-200/50 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 px-6 max-w-4xl">
          <MotionTitle className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-8">
            Votre site internet, conçu pour faire grandir votre activité
          </MotionTitle>

          <MotionP className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Développeur web freelance à Béziers, je conçois des sites et
            applications sur mesure : clairs, rapides, et pensés pour
            transformer vos visiteurs en clients.
          </MotionP>

          <div className="flex flex-col items-center gap-4">
            <ButtonB text="Discutons de votre projet" href="#contact" />
            <span className="text-sm text-slate-500">
              Basé à Béziers (Hérault) · Disponible en Occitanie et à distance
            </span>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section
        id="services"
        className="px-6 md:px-16 py-24 md:py-32 scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            Ce que je peux faire pour vous
          </h2>
          <p className="text-slate-600 text-lg">
            Trois façons de renforcer votre présence en ligne, selon vos
            besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          <PremiumSectionCard
            image="/images/bg_tech.jpg"
            containerClass=""
            contentClass="p-8 h-full flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-4 text-slate-900">
              Création de site internet
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Un site vitrine ou e-commerce moderne, rapide et optimisé pour
              être trouvé sur Google.
            </p>
            <ul className="text-slate-600 space-y-2 mb-8 text-sm">
              <li>✔️ Design sur mesure, à votre image</li>
              <li>✔️ SEO technique inclus dès la conception</li>
              <li>✔️ 100% responsive (mobile, tablette, desktop)</li>
              <li>✔️ Mise en ligne rapide et accompagnée</li>
            </ul>
            <a
              href="#contact"
              className="text-blue-700 font-medium hover:text-blue-900 transition mt-auto"
            >
              En discuter →
            </a>
          </PremiumSectionCard>

          <PremiumSectionCard
            image="/images/bg_code.jpg"
            containerClass=""
            contentClass="p-8 h-full flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-4 text-slate-900">
              Développement sur mesure
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Une application ou un outil interne pensé pour votre activité,
              pour automatiser ce qui vous fait perdre du temps.
            </p>
            <ul className="text-slate-600 space-y-2 mb-8 text-sm">
              <li>✔️ Applications métier & outils internes</li>
              <li>✔️ Intégrations API</li>
              <li>✔️ Interfaces modernes en React</li>
              <li>✔️ Architecture pensée pour évoluer</li>
            </ul>
            <a
              href="#contact"
              className="text-blue-700 font-medium hover:text-blue-900 transition mt-auto"
            >
              En discuter →
            </a>
          </PremiumSectionCard>

          <PremiumSectionCard
            image="/images/hebergement.jpg"
            containerClass=""
            contentClass="p-8 h-full flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-4 text-slate-900">
              Hébergement & maintenance
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Gardez un site rapide, sécurisé et à jour, sans avoir à vous en
              soucier.
            </p>
            <ul className="text-slate-600 space-y-2 mb-8 text-sm">
              <li>✔️ Sauvegardes régulières</li>
              <li>✔️ Mises à jour & sécurité</li>
              <li>✔️ Support réactif</li>
              <li>✔️ Formule mensuelle, sur devis</li>
            </ul>
            <a
              href="#contact"
              className="text-blue-700 font-medium hover:text-blue-900 transition mt-auto"
            >
              En discuter →
            </a>
          </PremiumSectionCard>
        </div>
      </section>

      {/* ============ POURQUOI + PROCESSUS ============ */}
      <section
        id="apropos"
        className="px-6 md:px-16 py-24 md:py-32 scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            Mon approche
          </h2>
          <p className="text-slate-600 text-lg">
            La philosophie derrière chaque projet, et comment on avance ensemble
            une fois lancés.
          </p>
        </div>

        <PremiumSectionCard
          image="/images/bg_choice.jpg"
          containerClass="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-semibold text-slate-900 mb-10 text-center">
            Pourquoi travailler avec moi
          </h3>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <p className="text-slate-600 text-lg leading-relaxed">
              Je m&apos;appelle Yannick, développeur web freelance basé à
              Béziers. Mon objectif n&apos;est pas de livrer un site joli qui
              prend la poussière, mais un outil qui sert concrètement votre
              activité : plus de visibilité, plus de demandes, plus de clients.
              Vous avez un interlocuteur unique du premier échange à la mise en
              ligne, et je reste disponible ensuite pour faire évoluer votre
              site avec vous.
            </p>

            <ul className="text-slate-600 space-y-3 text-lg">
              <li>✔️ Un interlocuteur unique, sans intermédiaire</li>
              <li>✔️ Code propre, documenté et facile à faire évoluer</li>
              <li>✔️ Délais annoncés, respectés</li>
              <li>✔️ Suivi après la mise en ligne</li>
            </ul>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-200">
            <h4 className="text-xl font-semibold mb-8 text-slate-900 text-center">
              Comment on travaille ensemble
            </h4>
            <div className="grid md:grid-cols-4 gap-8 text-slate-600">
              <div>
                <span className="text-blue-700 font-semibold">01</span>
                <h5 className="text-slate-900 font-semibold mt-2 mb-2">
                  Échange
                </h5>
                <p className="text-sm leading-relaxed">
                  On discute de votre projet, de vos objectifs, de vos
                  contraintes et de votre budget.
                </p>
              </div>
              <div>
                <span className="text-blue-700 font-semibold">02</span>
                <h5 className="text-slate-900 font-semibold mt-2 mb-2">
                  Conception
                </h5>
                <p className="text-sm leading-relaxed">
                  Je vous propose une solution adaptée : structure, choix
                  techniques et planning.
                </p>
              </div>
              <div>
                <span className="text-blue-700 font-semibold">03</span>
                <h5 className="text-slate-900 font-semibold mt-2 mb-2">
                  Développement
                </h5>
                <p className="text-sm leading-relaxed">
                  Je code, avec des points réguliers pour garder le cap
                  ensemble.
                </p>
              </div>
              <div>
                <span className="text-blue-700 font-semibold">04</span>
                <h5 className="text-slate-900 font-semibold mt-2 mb-2">
                  Mise en ligne & suivi
                </h5>
                <p className="text-sm leading-relaxed">
                  Livraison de votre site, puis accompagnement pour le faire
                  évoluer dans le temps.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-200">
            <h4 className="text-xl font-semibold mb-6 text-slate-900 text-center">
              Les outils que j&apos;utilise
            </h4>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-slate-600">
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  React
                </a>
              </li>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Node.js</li>
              <li>
                <a
                  href="https://symfony.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  Symfony/PHP
                </a>
              </li>
              <li>MySQL</li>
            </ul>
          </div>
        </PremiumSectionCard>
      </section>

      {/* ============ PROJETS ============ */}
      <section
        id="projets"
        className="px-6 md:px-16 py-24 md:py-32 scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            Quelques projets réalisés
          </h2>
          <p className="text-slate-600 text-lg">
            Trois exemples récents de solutions sur mesure, du cahier des
            charges à la mise en production.
          </p>
        </div>

        <div className="space-y-8 md:space-y-16 max-w-6xl mx-auto">
          <PremiumCard
            image="/images/teoola.png"
            index={1}
            total={3}
            accent="#f97316"
            title="Teoola"
            description="Application de gestion d'abonnés conçue pour la performance et l'automatisation."
            link="/projects/teoola"
          />

          <PremiumCard
            image="/images/hotels1.png"
            index={2}
            total={3}
            accent="#eab308"
            title="SmartHotel"
            description="Solution intelligente de gestion hôtelière."
            link="/projects/smart-hotel"
          />

          <PremiumCard
            image="/images/caroux.png"
            index={3}
            total={3}
            accent="#ea580c"
            title="Caroux Electro Vélo"
            description="Location et vente de vélos électriques."
            link="/projects/caroux"
          />
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section
        id="contact"
        className="relative px-6 py-24 md:py-32 text-center overflow-hidden scroll-mt-24"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/50 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6">
            Parlons de votre projet
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Décrivez-moi votre projet en quelques mots, je vous réponds
            rapidement pour en discuter ensemble.
          </p>
        </div>

        <ContactForm />
      </section>

      {/* ============ AUTRE EXPÉRIENCE ============ */}
      <div className="max-w-md mx-auto px-6 pb-16">
        <LinkCard />
      </div>

      <AltSiteNudge />
    </>
  );
}
