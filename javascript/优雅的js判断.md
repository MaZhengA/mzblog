#### 1. 当要过滤数组内不存在某几项值时，可以把不需要的值作为一个数组列出来，然后通过filter和find结合做
```javascript
const allArr = ['1', '2', '3', '4', '5'];
const filterArr = ['1', '2', '3'];
const needArr = allArr.filter(i => !filterArr.includes(i));
console.log(needArr) // ['4', '5']
```

#### 2. 判断输入框未输入值
```javascript
// bad
if (value !== null && value !== undefined && value !== '') {};

// good
// es6的判断运算符,??左侧的值为null或者undefined时,才会返回右侧的值
if (value??'' !== '') {};

```
