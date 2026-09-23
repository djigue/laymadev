export default function sitemap() {
  const baseUrl = "https://www.laymadev.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects/smart-hotel`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects/teoola`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects/caroux`,
      lastModified: new Date(),
    },
  ];
}