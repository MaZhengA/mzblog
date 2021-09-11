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

// 例子🌰
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

#### 4.mousedown先于blur执行,click后于blur执行
使用场景：例如失焦事件后出现一个弹窗，当循环出得两个input框失焦事件相同时，在第一个框点击修改后，
点击第二个框触发第一个框的失焦事件，这时再去点击弹窗的确认，实际上先触发了第二个弹窗的失焦事件，
导致弹窗出现了两次，这时候就可以把点击弹窗确认按钮的click事件转为mousedown事件，使弹窗可以关闭

#### 5.判断时间大小
需要先把moment转化为unix字符串，然后比较大小

#### 6.判断时间是否为moment对象
使用_isAMomentObject方法
![示例](http://pic.yupoo.com/mazhenghjj/28736148/682e4f17.png)

#### 7. 同时使用两个叹号(!!)
相当于调用了转型函数Boolean(),第一个叹号返回布尔值,第二个叹号对该布尔值取反,从而给出变量真正对应的布尔值(摘自《js高程4》)

#### 8. saync和await使用
```javascript
function fn1 () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5)
    }, 1000)
  })
}

function fn2 (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data * 10)
    }, 2000)
  })
}

async function req () {
  // 同步方式执行异步，像排队一样
  const data1 = await fn1() // 等待1秒后返回数据再往下执行
  const data2 = await fn2(data1) // 拿data1去请求2秒后，往下走
  console.log(data2) // 总共3秒后 输出 50
}
req()
```
