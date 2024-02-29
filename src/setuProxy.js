const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/question-collection?locale=en&depth=0&draft=true',
    createProxyMiddleware({
      target: 'https://admin-quickdraft.linecore.com.ua/',
      changeOrigin: true,
    }),
  );
  app.use(
    '/api/email',
    createProxyMiddleware({
      target: 'https://email-quickdraft.linecore.com.ua/',
      changeOrigin: true,
    }),
  );
  app.use(
    '/api/emailPayment',
    createProxyMiddleware({
      target: 'http://localhost:3003/',
      changeOrigin: true,
    }),
  );
};
