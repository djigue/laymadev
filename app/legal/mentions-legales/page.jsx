import MotionTitle from "@/components/anims/MotionTitle";

export const metadata = {
  title: "Mentions Légales | LAYMAdev",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.laymadev.com/legal/mentions-legales",
  },
};

export default function MentionsLegales() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-white">
      <MotionTitle>Mentions légales</MotionTitle>

      <p className="mb-4">
        <strong className="underline">Éditeur du site :</strong>
        <br />
        LAYMA.dev <br />
        Freelance Développement Web <br />
        Création site internet <br />
        France
      </p>

      <p className="mb-4">
        <strong className="underline">Contact :</strong> contact@layma.dev
      </p>

      <p className="mb-4">
        <strong className="underline">Hébergement :</strong>
        <br />
        Vercel Inc. <br />
        340 S Lemon Ave #4133
        <br />
        Walnut, CA 91789 <br />
        États-Unis
        <br />
        https://vercel.com
      </p>

      <p>Le site est soumis au droit français.</p>
    </section>
  );
}
