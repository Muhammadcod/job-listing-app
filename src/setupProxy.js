const { REACT_APP_URL } = process.env;
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/jobs',
    createProxyMiddleware({
      target: `${REACT_APP_URL}`,
      changeOrigin: true,
    })
  );
};
