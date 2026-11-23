/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: `npm run build` writes a plain static site to ./out,
  // which can be hosted on GitHub Pages, Netlify or Vercel.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
