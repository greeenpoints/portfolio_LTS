/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.isbndb.com", "m.media-amazon.com"],
  },
  async redirects() {
    return [
      {
        source: '/skiff',
        destination: '/bookworm',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
