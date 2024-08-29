import createNextIntlPlugin from 'next-intl/plugin'
const withNextIntl= createNextIntlPlugin('./i18n/i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",   
  output: "export", 
  reactStrictMode: true,
  experimental: {},
};

export default withNextIntl(nextConfig);
