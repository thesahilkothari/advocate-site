// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Redirect everything from the apex domain to www (keeps the full path/query)
        source: '/:path*',
        has: [{ type: 'host', value: 'kotharivakil.in' }],
        destination: 'https://www.kotharivakil.in/:path*',
        permanent: true, // 308 in Vercel
      },
    ];
  },
};

module.exports = nextConfig;
