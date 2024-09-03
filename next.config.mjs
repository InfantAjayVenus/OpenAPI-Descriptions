/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/OpenAPI-Descriptions',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
