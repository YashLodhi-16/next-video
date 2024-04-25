/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/server-side-generation",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
