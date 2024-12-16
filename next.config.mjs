/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // HOST
    HOST_API:
      process.env.NODE_ENV === "production"
        ? "https://catproxies.com/api/v1/"
        : // : "https://test.catproxies.com/api/v1/",
          "http://localhost:3000/api/v1/",
  },
  images: {
    domains: [
      "catproxies.com",
      "dashboard.catproxies.com",
      "files.catproxies.com",
      "localhost",
    ],
  },
}

export default nextConfig
