#### 1. 在终端输入lsof -i:端口号（如：lsof -i:9000）
![查询端口](http://pic.yupoo.com/mazhenghjj/559b5b29/871ec733.png)
#### 2. 查到PID，通过kill -9 PID（如：kill -9 68382）
#### 3. 使用#region和#endregion能闭合注释块
#### 4. 查看当前npm使用的镜像：nrm ls，带星号的就是当前使用的
#### 5. 切换源命令：nrm use 'xxx' xxx表示源名称，例如：'taobao'
#### 6. 全局切换源命令：npm config set registry 'xxx'，xxx表示源路径，例如：'https://registry.npm.taobao.org'
#### 7. 在访达查找文件shift+command+g