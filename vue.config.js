module.exports = {
    devServer: {
        proxy: {
            '/ajax': {
                target: 'https://m.maoyan.com',
                changeOrigin: true
            },
            '/searchlist': {
                target: 'https://m.maoyan.com',
                changeOrigin: true
            }
        }
    }
}
  