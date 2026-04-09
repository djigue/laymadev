import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";
import ButtonB from "@/components/buttons/ButtonB";

export const metadata = {
  title: "Services web Béziers | Création site & SEO Hérault",

  description:
    "Découvrez les services de LAYMAdev à Béziers : création de site internet, SEO, applications web et solutions digitales dans l’Hérault et les Hauts-Cantons.",

  keywords: [
    "services développeur web Béziers",
    "création site internet Hérault",
    "SEO Béziers",
    "développement web Hauts-Cantons",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Services web Béziers",
    description:
      "Création de site, SEO et développement web à Béziers et dans l’Hérault.",
    url: "https://www.laymadev.com/services",
    siteName: "LAYMAdev",
    images: [
      {
        url: "/images/og-services.png",
        width: 1200,
        height: 630,
        alt: "Services web Béziers",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Services LAYMAdev",
    description: "Découvrez les services web à Béziers.",
    images: ["/logoBlack.png"],
  },
};

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Développement web",
    provider: {
      "@type": "Person",
      name: "Yannick Maubrun",
    },
    areaServed: "Béziers",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* HERO */}
      <section className="relative py-36 px-6 text-center overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[160px]" />
        </div>

        <MotionTitle>
          Développeur web à Béziers – Création de site internet & solutions web
        </MotionTitle>

        <MotionP>
          Création de site internet à Béziers, développement web sur mesure et
          optimisation SEO pour les entreprises dans l’Hérault et les
          Hauts-Cantons.
        </MotionP>
        <div className="mt-8 flex justify-center">
          <ButtonB text="Discuter de votre projet" href="/contact" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-16 pb-32">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* SITE */}
          <div className="group relative p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/40 transition duration-500">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
            </div>

            <h3 className="text-3xl font-semibold mb-4 text-white">
              Création de site internet
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Un site web moderne, rapide et optimisé pour convertir vos
              visiteurs en clients.
            </p>

            <ul className="text-gray-300 space-y-2 mb-8">
              <li>✔️ Design moderne & impactant</li>
              <li>✔️ SEO optimisé</li>
              <li>✔️ Responsive mobile</li>
              <li>✔️ Performance maximale</li>
            </ul>

            <ButtonB text="Voir le service" href="/services/creation-site" />
          </div>

          {/* DEV */}
          <div className="group relative p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/40 transition duration-500">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
            </div>

            <h3 className="text-3xl font-semibold mb-4 text-white">
              Développement web sur mesure
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Des solutions puissantes et évolutives pour automatiser et faire
              grandir votre activité.
            </p>

            <ul className="text-gray-300 space-y-2 mb-8">
              <li>✔️ Applications web personnalisées</li>
              <li>✔️ API & backend performant</li>
              <li>✔️ Interfaces React modernes</li>
              <li>✔️ Architecture scalable</li>
            </ul>

            <ButtonB text="Voir le service" href="/services/dev-web" />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Développeur web freelance à Béziers
        </h2>

        <p className="text-gray-400 leading-relaxed">
          En tant que développeur web freelance à Béziers, je propose des
          services de création de site internet, de développement web sur mesure
          et d’optimisation SEO. J’accompagne les entreprises locales dans
          l’Hérault et les Hauts-Cantons pour améliorer leur présence en ligne,
          générer plus de visibilité et développer leur activité grâce à des
          solutions digitales performantes.
        </p>
      </section>

      {/* MÉTHODE */}
      <section className="px-6 md:px-16 pb-32 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-white">
          Une approche simple et efficace
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-gray-300">
          <div>
            <h3 className="text-xl font-semibold mb-3">1. Analyse</h3>
            <p>Compréhension de vos besoins et de vos objectifs.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">2. Création</h3>
            <p>Design et développement d’une solution adaptée.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">3. Livraison</h3>
            <p>Mise en ligne + optimisation des performances.</p>
          </div>
        </div>
      </section>

      {/* POURQUOI MOI */}
      <section className="px-6 md:px-16 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            Pourquoi travailler avec moi ?
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Je combine design moderne, performance technique et vision business
            pour créer des solutions réellement utiles. Chaque projet est pensé
            pour générer de la valeur, pas juste pour être joli.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center pb-32 px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white">
          Prêt à lancer votre projet ?
        </h2>

        <p className="text-gray-400 mb-10">
          Discutons ensemble de votre idée et donnons-lui vie.
        </p>

        <ButtonB text="Me contacter" href="/contact" />
      </section>
    </>
  );
}
