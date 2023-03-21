### 1. class继承
1. class通过extends关键字实现继承，写法比es5的原型链继承简洁许多
2. super()：es6规定，子类必须在constructor()方法中调用super()，这是因为子类的this对象，必须通过父类的构造函数完成塑造，才能得到与父类同样的属性与方法，再对其加工，添加子类自己的实例属性和方法。
3. 子类必须调用super()的原因：ES6 的继承机制，是先将父类的属性和方法，加到一个空的对象上面，然后再将该对象作为子类的实例，即“继承在前，实例在后”，如果没有调用super()，就无法生成一个继承父类的this对象，ES5则恰恰相反
4. 除了私有的属性和方法，父类的其他属性和方法都会被子类继承
5. 可以使用Object.getPrototypeOf()判断一个类是否继承了另一个类
```js
class Point { /*...*/ }

class ColorPoint extends Point { /*...*/ }

Object.getPrototypeOf(ColorPoint) === Point /// true
```
6. class的方法定义在原型上，属性定义在类上

### 2. 解构赋值
解构赋值语法是一种ES6的表达式。可以将数组中的值或对象的属性取出，赋值给其他变量