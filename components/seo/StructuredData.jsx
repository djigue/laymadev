import Script from "next/script";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://layma.dev/#organization",
        name: "LAYMA.dev",
        url: "https://layma.dev",
        logo: "https://layma.dev/images/logo-corporate.png",
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://layma.dev/#localbusiness",
        name: "LAYMA.dev",
        url: "https://layma.dev",
        description:
          "LAYMA.dev est un développeur web freelance basé à Béziers dans l’Hérault spécialisé dans la création de sites internet et d’applications web sur mesure.",
        areaServed: {
          "@type": "Place",
          name: "Béziers",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Béziers",
          addressRegion: "Hérault",
          addressCountry: "FR",
        },
        parentOrganization: {
          "@id": "https://layma.dev/#organization",
        },
      },
      {
        "@type": "Person",
        "@id": "https://layma.dev/#person",
        name: "LAYMA.dev",
        jobTitle: "Développeur web freelance",
        worksFor: {
          "@id": "https://layma.dev/#organization",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Béziers",
          addressRegion: "Hérault",
          addressCountry: "FR",
        },
        url: "https://layma.dev",
      },
      {
        "@type": "WebSite",
        "@id": "https://layma.dev/#website",
        url: "https://layma.dev",
        name: "LAYMA.dev",
        alternateName: ["LAYMAdev", "Layma dev", "laymadev"],
        publisher: {
          "@id": "https://layma.dev/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://layma.dev/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
