1. 启动之后访问localhost:8080可以访问服务
2. nginx安装地址 -s stop 关闭服务
3. nginx安装地址 -s reload 重启服务
4. 404问题解决方案，修改nginx.conf文件
```json
location / {
  try_files $uri $uri/ /index.html;
}
```