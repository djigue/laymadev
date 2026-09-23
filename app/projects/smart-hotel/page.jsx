import Gallery from '@/components/Gallery';
import { getImages } from '@/lib/getImages';
import MotionP from '@/components/anims/MotionP';
import MotionTitle from '@/components/anims/MotionTitle';

export const metadata = {
  title: 'SmartHotel | Application web de gestion hôtelière',

  description:
    'Projet Smart Hotel développé par LAYMAdev : solution digitale innovante pour la gestion hôtelière.',

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: '/projects/smart-hotel',
  },

  openGraph: {
    title: 'Projet Smart Hotel',
    description: 'Projet web réalisé par LAYMAdev.',
    url: 'https://www.laymadev.com/projects/smart-hotel',
    siteName: 'LAYMAdev',
    images: [
      {
        url: '/images/og-smartHotel.png',
        width: 1200,
        height: 630,
        alt: 'Projet Smart Hotel',
      },
    ],
    locale: 'fr_FR',
    type: 'article',
  },
};

export default function SmartHotelPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SmartHotel',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    creator: {
      '@type': 'Person',
      name: 'Yannick Maubrun',
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/50 rounded-full blur-[140px]" />
        </div>
        {/* TITLE */}
        <MotionTitle>SmartHotel – Application de gestion hôtelière</MotionTitle>

        {/* TEXT */}
        <MotionP>
          Plateforme de réservation et de gestion hôtelière développée sur
          mesure pour les établissements du secteur. Elle centralise la
          gestion des réservations, des clients et des opérations internes,
          avec une architecture moderne pensée pour garantir performance,
          sécurité et évolutivité.
        </MotionP>
      </section>

      <Gallery images={getImages('hotel')} />
    </>
  );
}
