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
