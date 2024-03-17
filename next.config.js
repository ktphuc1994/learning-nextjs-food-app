/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_CLOUNDINARY_PROTOCAL,
        hostname: process.env.NEXT_PUBLIC_CLOUNDINARY_HOSTNAME,
        port: '',
        pathname: `/${process.env.NEXT_PUBLIC_CLOUNDINARY_CLOUD_NAME}/**`,
      },
    ],
  },
};

module.exports = nextConfig;
