const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#EAA0A1',
              '@layout-body-background': '#FFF',
              '@layout-header-background': '#FFF',
              '@layout-header-padding': '0 0px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
