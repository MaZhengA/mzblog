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

#### 8. 两个元素相等的对象（数组）并不相等，因为原始值的比较是值相等，对象的比较则是引用的比较
```js
let a = []; let b = []; console.log(a === b);  // false 

let a = []; // 定义一个引用空数组的变量a
let b = a; // 变量b引用同一个数组
b[0] = 1; // 修改引用的数组
a === b; // true, a和b引用的同一个数组因此相等
```

#### 9. 0.1 + 0.2 !== 0.3
因为二进制的浮点数0.1和0.2并不精确，因此所加结果是一个比较接近0.3的值（不止js,所有满足IEEE-754 标准的语言都有这种问题）

#### 10.export写法
```js
export { default as DefaultExport } from 'bar.js';
```
等价于
```js
import { default as DefaultExport } from 'bar.js'; // 标准写法
import DefaultExport from 'bar.js'; // 上边的简写
export { DefaultExport };
```

#### 11. null >= 0为true，null === 0为false
1. 当使用===和!==操作服饰，不会在检查相等之前转换操作数的类型，因此null === 0为false
2. 当使用>=时，会在比较相等之前转换操作数的类型，因此null >= 0为true

#### 12. 当要安装的包与已安装的包存在冲突时，使用npm -i --force解决
![图例](http://pic.yupoo.com/mazhenghjj/ea579c81/0e9969c7.png)

#### 13. 判断对象是否为空
使用lodash isEmpty或者Object.keys(obj).length;使用json.stringify(obj) === '{}'极耗性能
```js
function isEmptyObj(obj) {
  return obj && obj.constructor === Object && Object.keys(obj).length === 0;
}
```

#### 14. [] == ![]的结果
结果为true,使用“==”时，两边的值都会转为数字再进行比较，![]会首先转化为boolean,为false，转为数字则是0，因此得到该结果

#### 15. JSON.stringify()序列化会把对象的undefined、function、Symbol值转换成空或者null
```js
// 如果值在数组中则被转成null
console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol(''), null] }));
// expected output: "{"x":[10,null,null,null]}"

// 如果值本身在对象中，则会被忽略
console.log(JSON.stringify({ x: 5, y: 6, z: undefined, o: function(){}, p: Symbol('')}));
// expected output: "{"x":5,"y":6}"
```

#### 16. input框踩坑
```js
"input is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`".
input是一个void元素标记，既不能有“children”，也不能使用“dangerouslySetInnerHTML”。
```

#### 17. react-quill踩坑
```js
当使用onBlur时，输入完成后直接点及其他元素，value不会被改变，需要把onBlur应用到react-quill的上级组件中。
```

#### 18. polyfill 
polyfill是一块代码，用来为旧浏览器提供它没有原生支持的比较新的属性

#### 19. <script type="module"></script>
如果 type 属性为 module ，代码会被当作 JavaScript 模块