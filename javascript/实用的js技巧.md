#### 1.函数参数默认值
```javascript
function mazheng(age, sex, height = '183cm') {
  console.log('...')
}
mazheng('24', 'man');
```

#### 2.区分状态，按照索引取值。摒弃switch || if else
```javascript
// bad
if (status === '0') {
  return '成功'
} else if (status === '1') {
  return '失败'
} else if (status === '2') {
  return '进行中'
}

// good
let statusArr = ['成功', '失败', '进行中'];
statusArr[status];
```

#### 3.键值对转成对象
```javascript
// 语法 ES10
Object.fromEntries(iterable)

//例子🌰
const entries = new Map([
  ['name', 'mazheng'],
  ['age', '24']
])
const obj = Object.fromEntries(entries);
console.log(obj); // { name: 'mazheng', age: '24 }
```

#### 4.使用时间戳作为state刷新组件
在某些情况下没有state但是想刷新组件，可以通过这种方式来更新state然后刷新组件
```javascript
this.state = {
  dateId: Date now()
}

this.setState({ dateId: Date now() })
```
