const CracoLessPlugin = require('craco-less')
const path = require('path')
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@components': pathResolve('src/components'),
      '@pages': pathResolve('src/pages')
    },
    configure: {
      ignoreWarnings: [
        function ignoreSourcemapsloaderWarnings(warning) {
          return (
            warning.module &&
            warning.module.resource.includes('node_modules') &&
            warning.details &&
            warning.details.includes('source-map-loader')
          )
        }
      ]
    }
  },
  devServer: {
    // 配置跨域代理
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  babel: {
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [
            [
              'postcss-pxtorem',
              {
                rootValue: 375 / 10, // 根元素字体大小
                propList: ['*']
              }
            ]
          ]
        }
      }
    }
  }
}
