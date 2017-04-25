module.exports = {
  webpack: (config) => {
    const newConfig = config;
    newConfig.node = {
      fs: 'empty',
    };
    return newConfig;
  },
};
