// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nx/next/plugins/with-nx');
const withImages = require('next-images');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
module.exports = withNx(
  withImages({
    reactStrictMode: true,
    swcMinify: true,
    nx: {
      // Set this to true if you would like to to use SVGR
      // See: https://github.com/gregberge/svgr
      svgr: false,
    },
    publicRuntimeConfig: {
      staticFolder: '/public',
    },
    experimental: {
      appDir: true,
      typedRoutes: true,
      legacyBrowsers: false,
    },
    transpilePackages: ['@bbl-nx'],
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
      ];
    },
    webpack(config, { isServer }) {
      if (!isServer) {
        // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
        config.resolve.fallback = {
          fs: false,
          path: false,
        };
      }

      return {
        ...config,
        optimization: {
          ...config.optimization,
          providedExports: true,
          sideEffects: 'flag',
        },
      };
    },
  })
);

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.googletagmanager.com;
    child-src *.youtube.com *.google.com *.twitter.com;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src *;
    connect-src *;
    font-src 'self' *.gstatic.com;
`;

// https://nextjs.org/docs/advanced-features/security-headers#options
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://scotthelme.co.uk/a-new-security-header-referrer-policy/
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  // {
  //   key: 'Content-Security-Policy',
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  // },
];
