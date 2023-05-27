/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://docs.api-next.peterportal.org/",
        permanent: true,
        basePath: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/:slug*",
        destination: "/api/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;
