const { createProxyMiddleware, responseInterceptor } = require('http-proxy-middleware');
const logger = require('./logger');

const proxy = createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true, // for vhosted sites

  selfHandleResponse: true, // res.end() will be called internally by responseInterceptor()

  onProxyRes: responseInterceptor(async (responseBuffer, proxyRes, req, res) => {
    // log original request and proxied request info
    const exchange = `[DEBUG] ${req.method} ${req.path} -> ${proxyRes.req.protocol}//${proxyRes.req.host}${proxyRes.req.path} [${proxyRes.statusCode}] / ${proxyRes.req.params}`;
    logger.info(exchange); // [DEBUG] GET / -> http://www.example.com [200]

    // log complete response
    const response = responseBuffer.toString('utf8');
    logger.info(response); // log response body

    return responseBuffer;
    //return response
  }),
});

module.exports = { proxy }