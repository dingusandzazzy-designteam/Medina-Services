/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Type checking is ON (tsc --noEmit passes clean as of the Phase 3 build).
  // ESLint isn't configured yet (no .eslintrc) — skip it during builds until Phase 6/9 sets it up.
  eslint: { ignoreDuringBuilds: true },
  // Security headers (baseline; expanded in Phase 5).
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
