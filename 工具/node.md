#### 1. 使用homebrew安装的node后，执行which node提示node not found
解决办法：使用brew --prefix node@22获取node位置，得到/usr/local/opt/node@22路径（根据mac系统的不同，可能路径不同），再执行export PATH="/usr/local/opt/node@22/bin:$PATH"手动添加node到path，最后执行source ~/.zshrc，重新加载

#### 2. cross-env TERGET_ENV=development node .electron-vue/dev-runner.js
使用 cross-env 设置 TARGET_ENV 环境变量为 development，确保这一变量的跨平台兼容性。<br>
然后使用 node 命令运行 .electron-vue/dev-runner.js 文件，启动 Electron + Vue 的开发环境<br>
corss-env的作用是：可以统一使用一种语法来设置环境变量，根据操作系统选择合适的方式设置环境变量，极大的简化了跨平台开发时环境变量的管理<br>
```js
cross-env MY_VAR=value node script.js
// 在Windows上，会转换为
set MY_VAR=value && node script.js
// 在Linux/macOS上，会转换为
export MY_VAR=value && node script.js
```