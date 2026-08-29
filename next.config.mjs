/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: produces plain HTML/CSS/JS in /out that can be uploaded
  // to any standard web host (cPanel/FTP, Netlify, Vercel, etc.) with no
  // Node.js server required. This site has no server-only features
  // (no API routes, no server actions, no cookies) so this is safe.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
