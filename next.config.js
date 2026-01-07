/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // experiments: {
  //   topLevelAwait: true
  // }
  // Adding policies:
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "frame-ancestors 'self'; img-src *; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://qpnykweytq7ry2kn.public.blob.vercel-storage.com https://storage.googleapis.com;",
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
