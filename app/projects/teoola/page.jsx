import Gallery from "@/components/Gallery";
import { getImages } from "@/lib/getImages";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

export const metadata = {
  title: "Teoola | Application métier sur mesure",

  description:
    "Projet Teoola réalisé par LAYMAdev : plateforme web innovante développée sur mesure.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/projects/teoola",
  },

  openGraph: {
    title: "Projet Teoola",
    description: "Projet web développé par LAYMAdev.",
    url: "https://www.laymadev.com/projects/teoola",
    siteName: "LAYMAdev",
    images: [
      {
        url: "images/og-teoola.jpg",
        width: 1200,
        height: 630,
        alt: "Projet Teoola",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
};

export default function TeoolaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Teoola",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    creator: {
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
      <section className="relative py-32 px-6 text-center overflow-hidden text-white">
        {/* Light directionnelle */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
        </div>
        <MotionTitle>Teoola – Application métier sur mesure</MotionTitle>
        <MotionP>
          Application métier dédiée au suivi des adhésions, à la gestion
          d’événements et au pilotage commercial. Cette solution web a été
          conçue pour automatiser les processus internes et améliorer la
          visibilité des équipes.
        </MotionP>
      </section>
      <section className="max-w-4xl mx-auto mt-20 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Une application métier sur mesure
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Teoola est une application web développée sur mesure pour répondre aux
          besoins spécifiques de gestion d’adhésions et d’événements. Cette
          solution permet de centraliser les données, d’automatiser les
          processus internes et d’améliorer la gestion commerciale. Le
          développement a été réalisé avec des technologies modernes afin de
          garantir performance, sécurité et évolutivité.
        </p>
      </section>
      <Gallery images={getImages("teoola")} />
    </>
  );
}
