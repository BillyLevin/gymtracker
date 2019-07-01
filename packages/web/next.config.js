const withImages = require('next-images');
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
module.exports = withImages(
  withTypescript(
    withSass({
      webpack(config, options) {
        config.node = {
          ...(config.node || {}),
          net: 'empty',
          tls: 'empty',
          dns: 'empty',
        };
        return config;
      },
    }),
  ),
);
