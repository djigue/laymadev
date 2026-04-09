import MotionTitle from "@/components/anims/MotionTitle";

export const metadata = {
  title: "Confidentialité | LAYMAdev",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.laymadev.com/legal/confidentialite",
  },
};

export default function Confidentialite() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-white">
      <MotionTitle>Politique de confidentialité</MotionTitle>

      <p className="mb-4">
        Les données personnelles collectées via le formulaire de contact sont
        utilisées uniquement pour répondre aux demandes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Données collectées</h2>
      <p className="mb-4">
        Nom, adresse email, et message transmis volontairement par
        l’utilisateur.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Durée de conservation</h2>
      <p className="mb-4">
        Les données sont conservées pour une durée maximale de 3 ans.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Droits de l’utilisateur
      </h2>
      <p>
        Vous pouvez demander l’accès, la modification ou la suppression de vos
        données par email à layma.dev@outlook.com.
      </p>
    </section>
  );
}
