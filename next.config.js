/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["vscode-oniguruma", "shiki"],
  },
};

module.exports = nextConfig;
