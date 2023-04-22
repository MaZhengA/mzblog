### 1. 讲一下react
React是一个网页ui框架，通过组件化的方式解决视图层开发复用的问题，本质上是一个组件化框架<br>
核心设计思路是：声明式、组件化、与通用性<br>
声明式的优势在于直观和组合
组件化的优势在于试图拆分和模块复用、可以更容易做到高内聚和低耦合
通用性的特点在于一次学习，随处编写，使得react的适用范围较广，例如react native

### 2. 为什么要引入JSX
JSX是JS语法扩展，可以在JS文件中书写类似于HTML的标签<br>
将JSX标签与相关的渲染逻辑放在一起，使得创建、维护和删除React组件更加容易

### 3. 如何避免声明周期的坑
1. 挂载阶段：组件从初始化到完成加载的过程
  - constructor 用于初始化
  - getDerivedStateFromProps 在props变化时更新state
  - UNSAFE_componentWillMount 在组件渲染前加载，在react异步渲染机制下，容易被多次调用
  - render 返回JSX结构，描述具体的渲染内容
  - componentDidMount 用于组件加载完成后执行的操作<br>
    异步请求放在这里，
2. 更新阶段
  - UNSAFE_componentWillReciveProps(nextProps) 短时间内props多次改变会被多次调用，因此被删除
  - getDerivedStateFromProps 
  - shouldComponentUpdate(nextProps, nextState)
  - UNSAFE_componentWillUpdate(nextProps, nextState)
  - render
  - getSnapshotBeforeUpdate 返回值作为componentDidUpdate的第三个参数调用
  - componentDidUpdate
3. 卸载阶段
  - componentWillUnmount 解除时间绑定、去除定时器
4. 组件重新渲染
  - 函数组件：可以使用React.memo，把组件变成记忆组件
  - 类组件：不使用shouldComponentUpdate时，当state发生变化和父组件的props发生变化时，会触发重新渲染
  - React.PureComponent组件中在props和state进行浅比较后确认有变更时，会触发重新渲染
5. 错误边界
  - getDerivedStateFromError(error) 捕获失败状态，显示降级UI
  - componentDidCatch 捕获错误类型，打印错误信息
6. 解答问题：
  - 在不恰当的时机调用了不合适的代码
  - 在需要调用时没有调用

### 4. 类组件和函数组件的区别
共同点：都可以用做基础组件展示UI<br>
不同点：
- 类组件时OOP，面向对象编程；函数组件是FP，函数式编程
- 类组件适合生命周期场景

### 5. 如何设计一个React组件
组件分为状态组件和无状态组件，状态组件从功能复用和业务逻辑角度探讨，无状态组件从样式和布局角度探讨
