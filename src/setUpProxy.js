const proxy = require('http-proxy-middleware');

// proxy westelm domain to bypass CORS -- this did not work
module.exports = function(app) {
    app.use(
        proxy.createProxyMiddleware(
            '/services/catalog/v4/category/shop/new/all-new/',
            {
                target: 'https://www.westelm.com',
                changeOrigin: true,
            }
        )
    );
};
