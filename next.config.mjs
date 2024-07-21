/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
           {
              protocol: "https",
              hostname: "shinigami02.com",
              port: "",
           },
        ],
     },
};

export default nextConfig;
