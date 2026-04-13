import './globals.css';
import NavBar from '@/components/navbars/NavBar';
import { TransitionProvider } from '@/context/TransitionProvider';
import Footer from '@/components/Footer';
import LinkCard from '@/components/anims/LinkCard';

export const metadata = {
  title:
    'Développeur web freelance à Béziers (Hérault, Hauts Cantons) – LAYMA.dev',
  description:
    'Développeur web freelance basé à Béziers (Hérault, Hauts Cantons). Spécialisé en création de sites internet, applications web sur mesure et solutions performantes pour entreprises et indépendants.',
  metadataBase: new URL('https://www.laymadev.com'),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Développeur web freelance à Béziers (Hérault, Hauts Cantons) – LAYMA.dev',
    description:
      'Création de site internet à Béziers (Hérault, Hauts Cantons). Solutions web modernes et performantes.',
    url: 'https://www.laymadev.com/',
    siteName: 'LAYMAdev',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className="min-h-screen overflow-x-hidden"
        style={{ backgroundColor: '#020617' }}
        suppressHydrationWarning
      >
        <TransitionProvider>
          {/* NAVBAR FIXE */}
          <NavBar />
          <div className="min-h-screen md:pl-72 flex flex-col">
            <main className="flex-1 px-4 md:px-12 pt-16 relative z-10">
              {children}
            </main>
            <div className="md:hidden mt-10 flex justify-center ">
              <LinkCard className="w-3/4" />
            </div>
            <Footer size="py-2" marginTop="" bg="#020617" />
          </div>
        </TransitionProvider>
      </body>
    </html>
  );
}
