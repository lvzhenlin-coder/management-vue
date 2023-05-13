const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 19.2, // 设计稿十等分后的值1rem=19.2px
  remPrecision: 6 // 转化后小数点位数
})

//本地启动设置代理地址
let target = "http://127.0.0.1:3000";

module.exports = {
  lintOnSave: false,//关闭eslint
  css: {
    // PC分辨率端适配
    loaderOptions: {
      css: {},
      postcss: {
        plugins: {
          postcss
        }
      }
    }
  },
  //设置代理
  devServer: {
    host: "localhost",
    port: 3000,
    https: false,
    open: true,
    proxy: {
      "/": {
        target: target,
        changeOrigin: true
      }
    }
  }
}
