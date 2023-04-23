### 1. MVC和MVVM
1. MVC 通过分离 Model、View 和 Controller 的方式来组织代码结构
  - View 负责页面的显示逻辑
  - Model 负责存储页面的业务数据，以及对相应数据的操作
  - Controller 主要负责用户与应用的响应操作
2. MVVM 分为 Model、View、ViewModel：
  - Model代表数据模型，数据和业务逻辑都在Model层中定义；
  - View代表UI视图，负责数据的展示；
  - ViewModel负责监听Model中数据的改变并且控制视图的更新，处理用户交互操作

### 2. v-model的原理
作用：在组件上实现双向数据绑定，在代码背后，模版编译器会对v-model做冗长的等价展开
原理：通过Object.defineProperty()实现

### 3. 为什么组件的data必须是一个函数
因为在js中对象是引用类型的数据，多个实例引用同一个对象时，只要有一个实例对这个对象进行了操作，其他实例中的数据也会发生改变<br>
而在 vue 组件中，希望组件之间时互不影响的，所以要写成函数的形式，使每个实例可以维护一份被返回对象的独立的拷贝

### 4. v-if和v-show的区别
v-if：不满足条件时，不渲染dom，更小的初始开销
v-show：通过display属性判断显隐，更小的切换开销

### 5. $nextTick的作用
本质上是vue对js执行原理eventloop的一种应用，作用是在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

### 6. v-for和v-if
v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中，因此一般不连用。v-if可以放在外层元素

### 