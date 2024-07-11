const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isProduction = process.env.NODE_ENV === "production";

const plugins = [];
if(isProduction){
  plugins.push(
    new UglifyJsPlugin({
      uglifyOptions:{
        output:{
          comments:false
        }
      }
    }));
}
module.exports = {
  assetsDir: "assets/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@views": path.resolve(__dirname, "./src/views"),
      },
    },
   optimization:{
      minimize: isProduction
   },
   plugins:plugins
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://arnautnastena.amocrm.ru',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '' } // это уберет /api из пути запроса на сервере
      }
    }
  }
};