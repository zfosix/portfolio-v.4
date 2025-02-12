const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://accounts.google.com;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
