// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
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
