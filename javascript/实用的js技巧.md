#### 1.函数参数默认值

```js
function mazheng(age, sex, height = "183cm") {
  console.log("...");
}
mazheng("24", "man");
```

#### 2.区分状态，按照索引取值。摒弃 switch || if else

```js
// bad
if (status === "0") {
  return "成功";
} else if (status === "1") {
  return "失败";
} else if (status === "2") {
  return "进行中";
}

// good
let statusArr = ["成功", "失败", "进行中"];
statusArr[status];
```

#### 3.键值对转成对象

```js
// 语法 ES10
Object.fromEntries(iterable);

// 例子🌰
const entries = new Map([
  ["name", "mazheng"],
  ["age", "24"],
]);
const obj = Object.fromEntries(entries);
console.log(obj); // { name: 'mazheng', age: '24 }
```

#### 4.使用时间戳作为 state 刷新组件

在某些情况下没有 state 但是想刷新组件，可以通过这种方式来更新 state 然后刷新组件

```js
this.state = {
  dateId: Date now()
}

this.setState({ dateId: Date now() })
```

#### 4.mousedown 先于 blur 执行,click 后于 blur 执行

使用场景：例如失焦事件后出现一个弹窗，当循环出得两个 input 框失焦事件相同时，在第一个框点击修改后，
点击第二个框触发第一个框的失焦事件，这时再去点击弹窗的确认，实际上先触发了第二个弹窗的失焦事件，
导致弹窗出现了两次，这时候就可以把点击弹窗确认按钮的 click 事件转为 mousedown 事件，使弹窗可以关闭

#### 5.判断时间大小

需要先把 moment 转化为 unix 字符串，然后比较大小

#### 6.判断时间是否为 moment 对象

使用\_isAMomentObject 方法
![示例](http://pic.yupoo.com/mazhenghjj/28736148/682e4f17.png)

#### 7.同时使用两个叹号(!!)

相当于调用了转型函数 Boolean(),第一个叹号返回布尔值,第二个叹号对该布尔值取反,从而给出变量真正对应的布尔值(摘自《js 高程 4》)

#### 8.规范的函数注释

```js
/**
 * 函数功能描述
 *
 * @param {Object} 函数传参
 * @return {Axios} 函数的返回值
 */
```

#### 9.判断非 0 的方法

```js
function isNonEmpty(param) {
  return (
    param !== "" && param !== undefined && param !== null && !Number.isNaN(val)
  );
}
```

#### 10.ES6-12 新特性

![总结](http://pic.yupoo.com/mazhenghjj/8d9ebaaa/8d0d5f55.jpeg)

#### 11.获取字符串中的字符数

```js
/**
 * 传递char拆分字符串获取返回数组的长度，结果会多1，因此减去，就可以获取到char的个数
 * @param {string} str 字符串
 * @param {string} char 要算的字符
 */
cosnt charactCount = (str, char) => str.split(char).length - 1;
```

#### 12.返回网页被选中的文本
```js
const getSelectedText = () => window.getSelection().toString();
```

#### 13.获取一个随机布尔值
```js
const getRandomBoolean = () => Math.random() >= 0.5
```
