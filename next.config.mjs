/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org"
      },
      {
        protocol: "https",
        hostname: "openlibrary.org"
      }
    ]
  }
};

export default nextConfig;
