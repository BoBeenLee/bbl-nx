// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withImages = require('next-images');
const { ANALYZE } = process.env;
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withNx(
    withImages({
      swcMinify: true,
      nx: {
        // Set this to true if you would like to to use SVGR
        // See: https://github.com/gregberge/svgr
        svgr: false,
      },
      images: {
        disableStaticImages: true,
      },
      publicRuntimeConfig: {
        staticFolder: '/public',
      },
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
        return config;
      },
    })
  )
);

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
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // https://scotthelme.co.uk/a-new-security-header-referrer-policy/
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];
