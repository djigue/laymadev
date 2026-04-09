import Gallery from "@/components/Gallery";
import { getImages } from "@/lib/getImages";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

export const metadata = {
  title: "SmartHotel | Application web de gestion hôtelière",

  description:
    "Projet Smart Hotel développé par LAYMAdev : solution digitale innovante pour la gestion hôtelière.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/projects/smart-hotel",
  },

  openGraph: {
    title: "Projet Smart Hotel",
    description: "Projet web réalisé par LAYMAdev.",
    url: "https://www.laymadev.com/projects/smart-hotel",
    siteName: "LAYMAdev",
    images: [
      {
        url: "/og-smartHotel.png",
        width: 1200,
        height: 630,
        alt: "Projet Smart Hotel",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
};

export default function SmartHotelPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SmartHotel",
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
        {/* TITLE */}
        <MotionTitle>SmartHotel – Application de gestion hôtelière</MotionTitle>

        {/* TEXT */}
        <MotionP>
          Plateforme de réservation et de gestion hôtelière développée sur
          mesure, pensée pour offrir une expérience fluide, rapide et
          performante aux établissements.
        </MotionP>
      </section>
      <section className="max-w-4xl mx-auto mt-20 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Une solution web sur mesure pour l’hôtellerie
        </h2>

        <p className="text-gray-400 leading-relaxed">
          SmartHotel est une application web développée sur mesure pour répondre
          aux besoins des établissements hôteliers. Cette solution permet de
          gérer les réservations, les clients et les opérations internes de
          manière centralisée. Le projet a été conçu avec une architecture
          moderne afin de garantir performance, sécurité et évolutivité. Ce type
          de développement web sur mesure permet aux entreprises d’optimiser
          leurs processus et d’améliorer leur productivité.
        </p>
      </section>
      <Gallery images={getImages("hotel")} />
    </>
  );
}
