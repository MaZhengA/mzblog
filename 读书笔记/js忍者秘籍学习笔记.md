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
#### 2. 函数上下文（this指向）
- 作为函数直接被调用时，this有两种可能性：在非严格模式下是全局上下文，而在严格模式下是undefined
- 作为对象的某个方法被调用时，该对象会成为函数的上下文
```js
function whatsMyContext() {
  return this;
}

var getMyThis = whatsMyContext; // getMyThis() === window; 函数上下文是window

var ninja = {
  getMyThis: whatsMyContext
}; 

ninja.getMyThis() === ninja; // 使用ninja对象的方法getMyThis调用函数，函数的上下文是ninja，这就是面向对象
```
- 作为构造函数被调用，如果够构造函数返回一个对象，则该对象作为整个表达式返回，传入的this将被丢弃
```js
var puppet = { rules: false };

function Emperor() { 
  this.rules = true; 
  return puppet; 
}

var emperor = new Emperor();

emperor // 返回puppet的值

emperor.rules // 值为false 
```