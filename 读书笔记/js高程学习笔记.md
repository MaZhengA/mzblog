#### 1. 指数运算符
- Math.pow(3, 2) // 9
- 3 ** 2 // 9

#### 2. Number(undefined) == NaN; Number(null) == 0;
#### 3. 原始类型的初始化可以只使用原始字面量形式，如果使用new关键字，则js会创建一个Object类型的实例，但其行为类似原始值
let name1 = 'mazheng';
let name2 = new String('Mz');
name1.age = 26; 
name2.age = 27;
console.log(name1.age) // undefined
console.log(name2.age) // 26
console.log(typeof name1) // string
console.log(typeof name2) // object

#### 4. slice、substr、substring比较
```javescript
let stringValue = 'hello world';
console.log(stringValue.slice(-3)) // 'rld' 此处的-3被转换成8(长度加上负参数),实际上调用的是slice(8)
console.log(stringValue.substring(-3)) // 'hello world' 此处-3被转换成0(索引),调用了substring(0)
console.log(stringValue.substr(-3)) // 'rld' 此处的-3被转换成8(长度加上负参数),实际上调用的是substr(8)
console.log(stringValue.slice(3, -4)) // 'lo w' 此处-4被转换成7,实际上调用的是slice(3.7)
console.log(stringValue.substring(3, -4)) // 'hel' // 此处-4被转换为0,调用了substring(0,3),实际上此函数会以较小的参数作为起点
console.log(stringValue.substr(3,-4)) // '' (empty string) // 实际上是substr(3,0),0为实际的数值,因此是个空字符串
```

#### 5. new运算符

#### 6. 数组方法
- reduce 第二个参数为初始值（initialValue）
- array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

#### 7. 栈方法
- 后进先出（Last-In-First-Out），即后添加的先被删除，数据项的插入（push）和删除（pop）只在栈的栈顶发生

#### 8. 队列方法
- 先进先出（First-In-First-Out），队列在列表末尾添加数据在列表开头获取数据，可通过push和shift把数组当成队列来使用

#### 9. 数组的排序方法
- reverse() 将数组反向排列
- sort() 将数组按照升序排列，会在数组的每一项调用一个toString()方法，然后比较字符串来决定顺序。
1. 存在的问题，用字符串比较大小，多数情况下是不合适的。因为要传入一个比较函数，来进行排序
```js
function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
};

let values = [0,1,10,15,5];
values.sort(compare);
console.log(values); // [0,1,5,10,15] 
```

