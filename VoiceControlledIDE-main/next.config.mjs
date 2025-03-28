/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/VoiceControlledIDE',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  assetPrefix: '/VoiceControlledIDE'
};

export default nextConfig;
