import MotionTitle from "@/components/anims/MotionTitle";

export const metadata = {
  title: "CGU | LAYMAdev",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.laymadev.com/legal/cgu",
  },
};

export default function CGU() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-white">
      <MotionTitle>Conditions Générales d’Utilisation</MotionTitle>

      <p className="mb-4 ">
        Le présent site est accessible gratuitement à tout utilisateur. L’accès
        et l’utilisation du site impliquent l’acceptation pleine et entière des
        présentes Conditions Générales d’Utilisation.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Accès au site</h2>
      <p className="mb-4">
        Le site est accessible 24h/24 et 7j/7, sauf interruption pour
        maintenance ou cas de force majeure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Responsabilité</h2>
      <p className="mb-4">
        L’éditeur ne saurait être tenu responsable des dommages directs ou
        indirects causés au matériel de l’utilisateur.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Propriété intellectuelle
      </h2>
      <p>
        Tout le contenu du site est protégé par le droit d’auteur. Toute
        reproduction est interdite sans autorisation préalable.
      </p>
    </section>
  );
}
