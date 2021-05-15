const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              dark: true,
              'primary-color': '#1DA57A',
              'secondary-color': '#fa8c16'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
