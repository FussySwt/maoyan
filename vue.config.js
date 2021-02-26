module.exports = {
    // publicPath: '/maoyan',
    devServer: {
        proxy: {
            '/ajax': {
                target: 'https://m.maoyan.com',
                changeOrigin: true
            },
            '/searchlist': {
                target: 'https://m.maoyan.com',
                changeOrigin: true
            },
            '/geo': {
                target: 'https://api.asilu.com',
                changeOrigin: true
            }
        }
    }
}
  