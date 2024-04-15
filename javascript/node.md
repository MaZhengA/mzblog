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

#### 5. 使用n更新node版本
1. n 选取已安装版本
2. n help 帮助
3. n ls 列出已安装的所有node版本
4. n stable 把当前系统的node升级成最新的稳定版本
5. n lts 安装长期支持版
6. n latest 安装最新版
7. n 16.14.2 安装指定版本
8. n rm 16.14.2 删除执行版本 

#### 6. express

#### 7. 查看当前npm使用的镜像：nrm ls，带星号的就是当前使用的
#### 8. 切换源命令：nrm use 'xxx' xxx表示源名称，例如：'taobao'
#### 9. 全局切换源命令：npm config set registry 'xxx'，xxx表示源路径，例如：'https://registry.npm.taobao.org'
#### 10. -S 等价于 --save && -D 等价于 --save-dev

#### 11. depcheck 可以查看 package.json 那些依赖没有被引用或被引用的依赖没有被下载

#### 12. npm安装全局依赖报错问题
问题：npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules <br/>
方法：修改npm包所安装目录的权限：sudo chown -R $USER /usr/local   然后输入密码就可以了

#### 13. path
path.resolve() 将返回当前工作目录的绝对路径<br/>
resolve() 是获取当前运行文件夹的路径，如果不写__dirname，如果不是在目标文件下运行路径会错误。
```js
path.resolve('work/js', 'ts/vue')  
// /work/js/ts/vue
path.resolve(__dirname)
// 当前文件所在目录的绝对路径，包含当前文件夹
```

#### 14. fs
1. fs.writeFileSync(file, data[, options]) 文件同步写入的方法
 - file // 文件名
 - data // 写入的数据
 - options // 一些选项，包括encoding，flag，mode

2. fs.readFileSync(file, [, options]) 同步读取文件内容
```js
let fs = require('fs');
fs.writeFileSync('nodeWrite.txt', 'hello world', 'utf8');
const data = fs.readFileSync('nodeWrite.txt', 'utf8');
console.log(data, 'data==') // hello world data== 在当前目录创建一个 nodeWrite.txt 文件并写值
```

#### 15. nrm
nrm是npm源管理器，允许切换各种npm源
1. nrm ls 展示所有可用源
2. nrm current 展示当前源
3. nrm use <registry> 切换源
4. nrm del <registry> 删除源
5. nrm test npm 测试源速度(测试npm的速度)