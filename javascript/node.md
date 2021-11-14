#### 1. 开始
1. 在终端里直接输如node会出现一个光标，表示进入了node环境
2. 如果是执行一整个js文件，需要使用node xxx.js

#### 2. 启动一个node服务
```javascript
// 加载 HTTP 模块
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {

  // 用 HTTP 状态码和内容类型（Content-Type）设置 HTTP 响应头
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // 发送响应体
  res.end('Hello World\n');
});

// 监听 3000 端口的请求，注册一个回调函数记录监听开始
server.listen(port, hostname, () => {
  console.log(`服务器运行于 http://${hostname}:${port}/`);
});
```

#### 3. yarn upgrade把指定范围内的包升级到最新版本

#### 4. node_modules中带下划线的依赖是因为使用了cnpm下载，使用npm或yarn则不会有