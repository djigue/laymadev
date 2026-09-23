/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/about', destination: '/#apropos', permanent: true },
      { source: '/services', destination: '/#services', permanent: true },
      {
        source: '/services/creation-site',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/services/dev-web',
        destination: '/#services',
        permanent: true,
      },
      { source: '/contact', destination: '/#contact', permanent: true },
      { source: '/projects', destination: '/#projets', permanent: true },
    ];
  },
};

export default nextConfig;
