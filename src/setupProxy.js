const { REACT_APP_URL } = process.env;
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.post(
    '/login',
    createProxyMiddleware({
      target: `${REACT_APP_URL}`,
      changeOrigin: true,
    })
  );
  app.use(
    '/jobs',
    createProxyMiddleware({
      target: `${REACT_APP_URL}`,
      changeOrigin: true,
    })
  );
  app.post(
    '/register',
    createProxyMiddleware({
      target: `${REACT_APP_URL}`,
      changeOrigin: true,
      onProxyReq: function onProxyReq(proxyReq, req) {
        // add custom header to request
        let token = req.session.token;
        if (token) {
          proxyReq.setHeader('Authorization', `bearer ${token.access_token}`);
        }
      },
    })
  );
};
