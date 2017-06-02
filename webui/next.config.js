/* eslint-disable */
const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    const newConfig = config;
    newConfig.node = {
      fs: 'empty',
    };
    newConfig.plugins.push(
      new webpack.DefinePlugin({ 'process.env.GRAPHQL_ENDPOINT': JSON.stringify(process.env.GRAPHQL_ENDPOINT)})
    );
    return newConfig;
  },
  exportPathMap: () => ({
    "/": { page: "/" },
  }),
};
