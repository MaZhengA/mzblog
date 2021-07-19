#### 1. new String("ma")和 String("ma")的返回结果是什么

![执行结果](http://pic.yupoo.com/mazhenghjj/97759735/5646dfb9.png)

结论：
new String("ma") 返回类型：引用类型 返回值：字符串对象

String("ma") 返回类型：基本类型 返回值：字符串的值

#### 2. setTimeout 的回调函数执行时间比预期更久，最小延时为 4ms

#### 3. forEach 方法第二个参数是 this 指向，对箭头函数不生效

![执行结果](http://pic.yupoo.com/mazhenghjj/acf5c411/f805d9a0.png)

#### 4. map 如果不 return 时，作用与 forEach 一样

![例子](http://pic.yupoo.com/mazhenghjj/43d11aea/06b18ad8.png)

#### 5. GUI 线程和 js 线程

二者是互斥的，因此如果 js 执行时间过长，会造成页面掉帧，卡顿

#### 6. 判断数组是否有重复项

```javascript
function isRepeat(array) {
  var hash = {};
  for (var i in array) {
    if (array[i] != "") {
      if (hash[array[i]]) return true;
      hash[array[i]] = true;
    }
  }
  return false;
}
```

#### 7. 数组的长度值是比数组的最大索引多1的数