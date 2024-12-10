import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'], 
  },
};

export default nextConfig;
