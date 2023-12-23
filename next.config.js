const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  webpack(config) {
    // const indexOfFirstSvgLoader = config.module.rules.findIndex(r=>{
    //   return r.test.source.includes('svg');
    // });
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: /component/,
      use: ['@svgr/webpack']
    });
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: { not: [/component/] },
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[hash:8].[ext]',
          publicPath: `/_next/static/images/`, //specify the base path
          outputPath: 'static/images', //and output path
        }
      }]
    });

    return config;
  }
});