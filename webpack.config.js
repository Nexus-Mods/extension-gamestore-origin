let webpack = require('vortex-api/bin/webpack').default;

const config = webpack('gamestore-origin', __dirname, 4);

config.externals.turbowalk = 'turbowalk';
config.externals.libxmljs = 'libxmljs';

module.exports = config;