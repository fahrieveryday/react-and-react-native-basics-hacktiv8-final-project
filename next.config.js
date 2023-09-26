/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_TMDB_API_KEY: '9eee52ff1aa889a66b444b064b0408b4',
  },
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
  },
};

module.exports = nextConfig;
