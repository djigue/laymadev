import './globals.css';
import NavBar from '@/components/navbars/NavBar';
import { TransitionProvider } from '@/context/TransitionProvider';
import Footer from '@/components/Footer';

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
        className="min-h-screen overflow-x-clip bg-slate-200"
        suppressHydrationWarning
      >
        <TransitionProvider>
          <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer size="py-2" marginTop="" />
          </div>
        </TransitionProvider>
      </body>
    </html>
  );
}
