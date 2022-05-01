const withPlugins = require("next-compose-plugins")
const nextImages = require("next-images")

/** @type {import('next').NextConfig} */
const nextConfig = withPlugins([nextImages], {
  images: {
    disableStaticImages: true
  },
  reactStrictMode: true
})

module.exports = nextConfig
