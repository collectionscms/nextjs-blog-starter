const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.collections.dev',
      },
    ],
  },
};

export default nextConfig;