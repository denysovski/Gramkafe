/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true"
const repoName = "Gramkafe"

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubActions ? `/${repoName}` : "",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
}

export default nextConfig
