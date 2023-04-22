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
无状态组件：代理组件（封装常用属性）、样式组件、布局组件
有状态组件：容器组件、高阶组件（逻辑复用、链式调用、渲染劫持），缺点是ref不能透传

### 6. setState是异步还是同步
setState用于变更状态，触发组件重新渲染、更新视图UI
源码中通过 isBatchingUpdates 判断state是存入队列还是直接更新，值为fasle时直接更新，true时存入队列，
在React的生命周期和合成事件中，可以拿到 isBatchingUpdates 的控制权，将状态放进队列，控制执行节奏,<br>
在17以前，react 给 document 挂载事件监听，dom 事件触发后冒泡到 document，react 找到对应组件，生成合成事件，
并按组件树模拟一遍事件冒泡，17之后，挂载在dom容器上，即 ReactDOM.render 所调用的节点<br>
原因是为了保持内部的一致性和启用并发(批量)更新
在原生事件中，拿不到 isBatchingUpdates ，因此是同步更新的

### 7. Virtual DOM的工作原理
前言：react主要工作是组件实现、更新调度等，react-dom则提供了网页渲染的基础
优势：
1. 提升性能：大量的直接操作DOM容易引起网页性能下降，这时react基于虚拟dom的diff运算和批处理操作可降低dom操作范围和频次，提升网页性能
2. 规避xss风险：虚拟dom存在字符转义，但时react中使用 dangerousSetInnerHtml 可以绕过转义
3. 跨平台成本更低
缺点：内存占用较高、无法进行极致优化
工作原理：通过js对象模拟dom节点，虚拟dom在实现上通常是plain object(简单对象)，以react为例，在render函数中写了JSX，通常会在babel插件的作用下，编译为React.createElement执行JSX中的属性参数，执行后会返回一个plain object,
他会描述自己的组件名称、props和children等情况，通过树形结构组成一颗虚拟dom树，当状态发生变更时。进行diff比较，执行结果成为patch，然后渲染patch完成对真实dom的操作

### 8. react hooks的使用限制
1. 不能在条件、循环和嵌套函数中调用Hook，
2. 只能在React的函数组件中使用
防范：通过引入eslint-plugin-react-hooks完成自动化检查即可

### 9. useEffect和useLayoutEffect的区别
相同点：都用于处理副作用
区别：useLayoutEffect可同步触发dom渲染，但计算量较大的任务会造成阻塞
使用：代码引起了页面闪烁使用useLayoutEffect