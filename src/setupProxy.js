const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://localhost:3001`, // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
      onProxyReq(proxyReq, req, res) {
        // add custom header to request
        // proxyReq.setHeader('Authorization', 'xxxxx');
        // console.log(req)
        // or log the req
      }
    })
  )
}
