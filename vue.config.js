
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 10:47:41
 * @LastEditTime: 2019-09-17 16:00:17
 * @LastEditors: Please set LastEditors
 */

// var path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, '..', dir)
// }


// // vue.config.js
// module.exports = {
//   configureWebpack: {
//     resolve: {
//       extensions: ['.js', '.vue', '.json'],
//       alias: {
//         'vue$': 'vue/dist/vue.esm.js',
//         '@': resolve('src')
//       }
//     },
//   },
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:5000',
//         changeOrigin: true,
//           pathRewrite: {
//             '^/api': '', // rewrite path
//           },
//       },
//     }
//   }
// }





const path = require('path')
// __dirname: 内置代表当前文件的文件夹的绝对路径

/* 
根据目录/文件夹名得到其对应的绝对路径
*/
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  // 编写webpack配置
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 自添加的文件扩展名
      alias: { // 模块路径别名
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'components': resolve('src/components'),
        'pages': resolve('src/pages'),
      }
    }
  },
 
    css: {
      loaderOptions: {
        css: {},
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 75
            })
          ]
        }
      
    },
    
  },
  // 配置px2rem 自动将px转为rem
  // chainWebpack: config => {
  //   config.module
  //     .rule('css')
  //     .test(/\.css$/)
  //     .oneOf('vue')
  //     .resourceQuery(/\?vue/)
  //     .use('px2rem')
  //     .loader('px2rem-loader')
  //     .options({
  //       remUnit: 75 //remUnit为转换为rem的基础 设计稿/等分数=remUnit
  //     })
  // },
  

  // 配置开发服务中的代理
  devServer: {
    proxy: {
      // 请求地址以/api开头
      '/api': {
        target: 'http://m.you.163.com', // 转发的目录地址
        changeOrigin: true, // 支持跨域
        pathRewrite: { // 重写路径: 让代理服务在转发请求, 对路径进行特定修改
          '^/api': '', // 去掉路径中的/api
        },
      },
    }
  }
}
