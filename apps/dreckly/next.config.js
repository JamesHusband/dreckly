const { composePlugins, withNx } = require('@nx/next');

const nextConfig = {
  nx: {
    svgr: false,
  },
  output: 'standalone',
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
