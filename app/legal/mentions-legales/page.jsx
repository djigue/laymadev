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
    <section className="max-w-4xl mx-auto px-6 py-20 text-slate-700">
      <MotionTitle>Mentions légales</MotionTitle>

      <p className="mb-4">
        <strong className="underline">Éditeur du site :</strong>
        <br />
        LAYMA.dev — Yannick Maubrun <br />
        Auto-entrepreneur — Freelance Développement Web <br />
        1020 Grand Rue, 34390 Mons-la-Trivalle, France <br />
        SIRET : 999 877 756 00018
      </p>

      <p className="mb-4">
        <strong className="underline">Directeur de la publication :</strong>{" "}
        Yannick Maubrun
      </p>

      <p className="mb-4">
        <strong className="underline">Contact :</strong> contact@laymadev.com
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
