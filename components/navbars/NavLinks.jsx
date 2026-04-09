const navLinks = [
  { label: "Accueil", href: "/" },

  { label: "A propos", href: "/about" },

  {
    label: "Projets",
    href: "/projects",
    children: [
      { label: "Teoola", href: "/projects/teoola" },
      { label: "SmartHotel", href: "/projects/smart-hotel" },
    ],
  },

  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Création de site web",
        href: "/services/creation-site",
      },
      {
        label: "Développement web",
        href: "/services/dev-web",
      },
    ],
  },

  { label: "Contact", href: "/contact" },
];

export default navLinks;
