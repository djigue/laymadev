import PremiumCard from "@/components/anims/PremiumCard";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

export const metadata = {
  title: "Projets web Béziers | Réalisations LAYMAdev",

  description:
    "Découvrez les projets réalisés par LAYMAdev à Béziers : sites internet, applications web et solutions digitales dans l’Hérault.",

  keywords: [
    "projets web Béziers",
    "portfolio développeur web",
    "réalisations site internet Hérault",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "Projets LAYMAdev",
    description: "Portfolio de projets web à Béziers.",
    url: "https://www.laymadev.com/projects",
    siteName: "LAYMAdev",
    images: [
      {
        url: "/images/og-services.png",
        width: 1200,
        height: 630,
        alt: "Projets web Béziers",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projets web Béziers",
    description: "Découvrez mes réalisations.",
    images: ["/logoBlack.png"],
  },
};

export default function ProjectsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projets web LAYMA.dev",
    url: "https://www.laymadev.com/projects",
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
          Projets web à Béziers – Sites internet & applications réalisées
        </MotionTitle>
        <MotionP>
          Portfolio de développeur web freelance à Béziers : création de sites
          internet et applications web sur mesure.
        </MotionP>
      </section>
      <section className="max-w-5xl mx-auto px-6 my-20">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Projets web réalisés à Béziers
        </h2>

        <p className="text-gray-400 leading-relaxed">
          En tant que développeur web freelance à Béziers, j’ai conçu plusieurs
          projets web pour des entreprises et des porteurs de projets dans
          l’Hérault. Chaque réalisation repose sur une approche sur mesure,
          combinant performance, expérience utilisateur et qualité technique.
          Les projets présentés ici illustrent ma capacité à développer des
          applications web modernes et des sites internet adaptés aux besoins
          spécifiques de chaque client.
        </p>
      </section>
      {/* CARDS */}
      <div className="space-y-28 max-w-6xl mx-auto mb-10">
        <PremiumCard
          image="/images/teoola.png"
          description="Application de gestion d’abonnés conçue pour la performance et l’automatisation."
          link="/projects/teoola"
          showButton
        />

        <PremiumCard
          image="/images/hotels1.png"
          description="Solution intelligente de gestion hôtelière."
          link="/projects/smart-hotel"
          showButton
        />
      </div>
    </>
  );
}
