### 1. 为什么需要webpack
开发中，我们使用的是React、Vue等框架，ES6、Less等css预处理器等语法进行开发<br>
这样的代码必须经过编译生成浏览器识别的js、css等代码，才能运行，因此需要打包工具

### 2. webpack的核心概念
1. entry(入口)：提示webpack从哪个文件开始打包
2. output(出口)：指示webpack打包后的文件输出到哪里，如何命名等
3. loader(加载器)：webpack本身只能处理js、json，其他的需要借助loader才能解析
4. plugins(插件)：拓展webpack的功能
5. mode(模式)：生产模式：production，开发模式：development

```js
const path = require('path'); // node的核心模块，专门用来处理路径问题

module.exports = {
  // 入口
  entry: "./src/main.js", // 相对路径
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    // 文件名称
    filename: 'main.js',
    clean: true, // 自动清空上次打包结果
  },
  // 加载器
  module: {
    // loader配置
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
          'style-loader' // 
        ],
        loader: 'xxx', // 只能使用一个loader
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'css-loader',
          'style-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: { // 小于10kb的转为base64,可以减少请求数量
            maxSize: 10 * 1024
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除的文件
        loader: 'babel-loader',
        // options: { // 可以写在babel.config.js里面
        //   presets: ['@babel/preset-env']
        // },
        options: {
          cacheDirectory: true, // 开启babel缓存 
        }
      }
    ]
  },
  // 插件
  plugins: {},
  // 开发服务器，不会输出资源
  devServer: {
    host: '服务域名',
    port: '3000',
    open: true, // 是否自动打开浏览器
    hot: false // 关闭热更新
  },
  // 模式
  mode: "development",
  devtool: "cheap-module-source-map", // 生产模式："source-map"
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
```

### 3. 处理各类资源
1. css: css-loader、style-loader
2. less: less-loader
3. sass: sass-loader
4. html: html-webpack-plugin 创建html文件，为bundles提供服务

### 4. Eslint
.eslintrc.js
.eslintignore文件里面添加忽略eslint检查的文件
引入eslint-webpack-plugin查找和修复js代码问题

### 5. 搭建开发服务器
不会输出资源，在内存中编译打包，使用 webpack-dev-server 可以快速开发应用，避免每次重新启动

### 6. webpack优化
1. 提升开发体验
使用source-map，生成源代码和构建后的代码---映射的文件，提示更友好
2. 提升打包构建速度
HMR热模块替换，只对修改的文件进行重新编译打包，无需加载整个页面，只有开发模式能用<br>
使用oneOf,每个文件只能被一个规则匹配<br>
使用include或exclude，包含或排除要处理的文件，只针对js文件处理<br>
使用cache缓存babel和eslit
3. 减少代码体积
Tree Shaking：移除js中没有用上的代码，默认开启的
4. 优化代码运行性能
code split(代码分割)：1.分割文件，将打包的代码进行分割，生成多个js文件；2.通过import进行按需加载