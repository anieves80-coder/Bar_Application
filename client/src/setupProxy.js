const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    
    app.use(
        ["/api","/api/save","/auth/google"],
        createProxyMiddleware({ target: 'http://localhost:3001' })
    );
    
}