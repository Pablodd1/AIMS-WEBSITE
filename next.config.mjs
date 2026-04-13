/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  compress: true,

  poweredByHeader: false,

  reactStrictMode: true,

  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024, 1280, 1536],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-UA-Compatible', value: 'IE=edge' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Vary', value: 'Accept-Encoding' },
          { key: 'Link', value: '</images/hero_banner.webp>; rel=preload; as=image' },
        ]
      },
      {
        source: '/:path*.json',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' }
        ]
      },
      {
        source: '/:path*.js',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        source: '/:path*.css',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml' },
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }
        ]
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain' },
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }
        ]
      },
      {
        source: '/og-image.jpg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        source: '/video/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      }
    ];
  },

  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },
      { source: '/contact', destination: '/customer-care', permanent: true },
      { source: '/blog', destination: '/articles', permanent: true },
      { source: '/demo', destination: '/get-started', permanent: true },
      { source: '/pricing', destination: '/get-started', permanent: true },
      { source: '/features', destination: '/technology', permanent: true },
      { source: '/solutions', destination: '/technology', permanent: true },
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/ai-medical-scribe', destination: '/', permanent: true },
      { source: '/medical-scribe-ai', destination: '/', permanent: true },
      { source: '/ai-doctor-assistant', destination: '/technology', permanent: true },
      { source: '/hipaa-compliant-scribe', destination: '/technology', permanent: true },
      { source: '/soapy-notes-ai', destination: '/technology', permanent: true },
      { source: '/medical-billing-ai', destination: '/technology', permanent: true },
      { source: '/ai-consulting-services', destination: '/ai-consulting', permanent: true },
      { source: '/ai-consultant', destination: '/ai-consulting', permanent: true },
      { source: '/ai-implementation', destination: '/ai-consulting', permanent: true },
      { source: '/ai-for-business', destination: '/ai-consulting', permanent: true },
      { source: '/ai-transformation', destination: '/ai-consulting', permanent: true },
      { source: '/ai-automation', destination: '/ai-consulting', permanent: true },
    ];
  },

  async rewrites() {
    return [
      { source: '/.well-known/security.txt', destination: '/.well-known/security.txt' },
      { source: '/ads.txt', destination: '/ads.txt' },
    ];
  },

  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons', 'clsx'],
    optimizeCss: true,
    scrollRestoration: true,
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              name: 'framework',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|next)[\\/]/,
              priority: 40,
              enforce: true,
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
                const packageName = match ? match[1] : 'vendors';
                return `npm.${packageName.replace('@', '')}`;
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
            },
          },
        },
      };
    }

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    return config;
  },

  env: {
    NEXT_PUBLIC_BASE_URL: process.env.BASE_URL || 'https://www.aidynamic.pro',
    NEXT_PUBLIC_SITE_NAME: 'AI Dynamic - AI Medical Scriber & Consulting',
    NEXT_PUBLIC_SITE_DESCRIPTION: 'AI-powered medical documentation platform for healthcare providers. AI consulting for all industries. Virtual front desk assistant.',
    NEXT_PUBLIC_SITE_KEYWORDS: 'AI medical scribe, AI consulting, virtual receptionist, AI assistant, medical documentation, SOAP notes, EHR integration, healthcare AI, AI for business',
  },

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  generateBuildId: async () => {
    return `v${Date.now()}-${process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'local'}`;
  },
};

export default nextConfig;
