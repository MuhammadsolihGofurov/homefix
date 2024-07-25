/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: "uz",
    locales: ["uz", "ru", "en"],
    localeDetection: false, 
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  images: {
    // like ['domen.uz']
    domains: [process.env.NEXT_PUBLIC_IMAGE_BASE],
  },
  env: {
    // like base url
    API: process.env.API,
  },
}

module.exports = nextConfig
