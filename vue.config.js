const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, 'docs'),
  lintOnSave: false,
  transpileDependencies: [
    'vuetify',
  ],
  chainWebpack: (config) => {
    // HTML Title used for OpenGraph linters (social media links)
    config.plugin('html').tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = 'Enna Alouette 100k Subscribers Tribute';
      // eslint-disable-next-line no-param-reassign
      args[0].meta = {
        'og:title': 'Enna Alouette 100k Subscribers Tribute',
        'og:type': 'website',
        'og:description': 'The community celebrates Enna Alouette reaching 100,000 YouTube subscribers.',
        'og:image': 'https://100k.ennaalouette.com/enna100k.png',
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Enna Alouette 100k Subscribers Tribute',
        'twitter:description': 'The community celebrates Enna Alouette reaching 100,000 YouTube subscribers.',
        'twitter:image': 'https://100k.ennaalouette.com/enna100k.png',
      };
      return args;
    });
  },
  pwa: {
    name: 'enna100k',
    assetsVersion: '2021_12_23_00_07',
    workboxOptions: {
      exclude: [
        'CNAME',
        /(.*).css.map/g,
        /(.*).js.map/g,
      ],
    },
  },
};
