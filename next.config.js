/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push('pino-pretty', 'lokijs', 'encoding', { 'node-gyp-build': 'commonjs node-gyp-build' });
    return config;
  },
};

module.exports = nextConfig
