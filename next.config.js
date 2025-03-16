const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          // {
          //   key: "Content-Security-Policy",
          //   value: `
          //     default-src 'self';
          //     script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com https://www.gstatic.com;
          //     style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          //     img-src 'self' data: https://lh3.googleusercontent.com;
          //     font-src 'self' https://fonts.gstatic.com;
          //     connect-src 'self' https://www.googleapis.com;
          //     frame-src 'self' https://accounts.google.com;
          //     frame-ancestors 'self' https://accounts.google.com;
          //   `.replace(/\s+/g, " ").trim(),
          // },
        ],
      },
    ];
  },
};

module.exports = nextConfig;