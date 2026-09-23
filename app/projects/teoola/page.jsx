import Gallery from '@/components/Gallery';
import { getImages } from '@/lib/getImages';
import MotionP from '@/components/anims/MotionP';
import MotionTitle from '@/components/anims/MotionTitle';

export const metadata = {
  title: 'Teoola | Application métier sur mesure',

  description:
    'Projet Teoola réalisé par LAYMAdev : plateforme web innovante développée sur mesure.',

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: '/projects/teoola',
  },

  openGraph: {
    title: 'Projet Teoola',
    description: 'Projet web développé par LAYMAdev.',
    url: 'https://www.laymadev.com/projects/teoola',
    siteName: 'LAYMAdev',
    images: [
      {
        url: '/images/og-teoola.png',
        width: 1200,
        height: 630,
        alt: 'Projet Teoola',
      },
    ],
    locale: 'fr_FR',
    type: 'article',
  },
};

export default function TeoolaPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Teoola',
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
        <MotionTitle>Teoola – Application métier sur mesure</MotionTitle>
        <MotionP>
          Application métier dédiée au suivi des adhésions, à la gestion
          d’événements et au pilotage commercial. Développée sur mesure pour
          centraliser les données et automatiser les processus internes,
          cette solution a été conçue avec des technologies modernes afin de
          garantir performance, sécurité et évolutivité.
        </MotionP>
      </section>

      <Gallery images={getImages('teoola')} />
    </>
  );
}
