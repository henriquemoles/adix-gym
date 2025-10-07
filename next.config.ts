import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // Ativa export estática
  images: { unoptimized: true }, // Necessário para imagens estáticas
  distDir: "build",       // Pasta de build intermediária (não afeta o export)
};

export default nextConfig;
