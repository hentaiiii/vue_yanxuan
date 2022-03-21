module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/wy': {
        target: 'https://m.you.163.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/wy': ''
        }
      }
    }
  }
}
