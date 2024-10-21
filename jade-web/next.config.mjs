/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/JADE' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/JADE' : '',
};

export default nextConfig;