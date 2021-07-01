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