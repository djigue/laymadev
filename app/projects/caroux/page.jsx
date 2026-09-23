import Gallery from '@/components/Gallery';
import { getImages } from '@/lib/getImages';
import MotionP from '@/components/anims/MotionP';
import MotionTitle from '@/components/anims/MotionTitle';

export const metadata = {
  title: 'Caroux Electro Vélo | location et vente de vélos électriques',

  description:
    'Projet Caroux Electro Vélo réalisé par LAYMAdev : site de location et vente de vélos électriques développé sur mesure.',

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: '/projects/caroux',
  },

  openGraph: {
    title: 'Projet Caroux Electro Vélo',
    description:
      'Site de location et vente de vélos électriques développé par LAYMAdev.',
    url: 'https://www.laymadev.com/projects/caroux',
    siteName: 'LAYMAdev',
    images: [
      {
        url: '/images/caroux.png',
        width: 1200,
        height: 630,
        alt: 'Projet Caroux Electro Vélo',
      },
    ],
    locale: 'fr_FR',
    type: 'article',
  },
};

export default function CarouxPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Caroux Electro Vélo',
    description: 'Site de location et vente de vélos électriques.',
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
        <MotionTitle>
          Caroux Electro Vélo – Site de location et vente de vélos électriques
        </MotionTitle>
        <MotionP>
          Site web sur mesure pour Caroux Electro Vélo, dédié à la
          présentation et à la réservation de vélos électriques à la location
          comme à la vente. Il met en avant l’offre, facilite la prise de
          contact et de réservation, et a été conçu avec des technologies
          modernes pour garantir performance, sécurité et évolutivité.
        </MotionP>
      </section>

      <Gallery images={getImages('caroux')} />
    </>
  );
}
