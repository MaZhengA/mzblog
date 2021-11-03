### 一. js运行时页面构建过程
1. 生命周期概览：由页面构建和时间处理两部分组成。
2. 页面构建目标：建立web应用的ui。包括两步：解析html代码并构建DOM，执行js代码
### 二. 函数
#### 1. 函数定义
- 函数声明和函数表达式 
```js
function myFun() { return 1 };
```
- 箭头函数
```js
myArg => myArg * 2;
```
- 函数构造函数：以字符串形式动态构建一个函数，这样得到的函数是动态生成的
```js
new Function('a', 'b', 'return a + b')
```
- 生成器函数：创建不同于普通函数的函数
```js
function* myGen() { yield 1; } 
```
