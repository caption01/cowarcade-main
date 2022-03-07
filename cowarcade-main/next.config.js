/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    phaseBuild: process.env.PHASE_BUILD,
    configuration: process.env.CONFIGURATION,
  }
};

module.exports = nextConfig;
