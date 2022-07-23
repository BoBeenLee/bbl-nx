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
