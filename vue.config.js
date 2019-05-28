module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        bypass: function(req, res) {
          if (req.headers.accept.indexOf('html') !== -1) {
            // console.log("Skipping proxy for browser request.");
            return '/index.html';
          } else if (process.env.MOCK !== 'none') {
            // process是nodejs一个全局对象
            // process.env属性返回包含用户环境的对象
            const name = req.path.split('/api/')[1];
            const mock = require(`./mock/${name}`);
            const result = mock(req.method);
            // 卸载mock模块在require.cache对象中的缓存，
            // 以便每次请求都重新加载mock模块来获得mock模块中最新的数据
            delete require.cache[require.resolve(`./mock/${name}`)];
            return res.send(result);
          }
        }
      }
    }
  }
};
