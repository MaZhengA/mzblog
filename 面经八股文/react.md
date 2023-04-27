### 1. 讲一下react
React是一个网页ui框架，通过组件化的方式解决视图层开发复用的问题，本质上是一个组件化框架<br>
核心设计思路是：声明式、组件化、与通用性<br>
声明式的优势在于直观和组合
组件化的优势在于视图拆分和模块复用、可以更容易做到高内聚和低耦合
通用性的特点在于一次学习，随处编写，使得react的适用范围较广，例如react native

### 2. 为什么要引入JSX
JSX是JS语法扩展，可以在JS文件中书写类似于HTML的标签<br>
将JSX标签与相关的渲染逻辑放在一起，使得创建、维护和删除React组件更加容易

### 3. 如何避免生命周期的坑
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
他会描述自己的组件名称、props和children等情况，通过树形结构组成一颗虚拟dom树，当状态发生变更时。进行diff比较，执行结果成为patch，然后渲染patch完成对真实dom的操作<br>
Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识，从而减少不必要的元素重渲染

### 8. react hooks的使用限制
1. 不能在条件、循环和嵌套函数中调用Hook，
2. 只能在React的函数组件中使用
防范：通过引入eslint-plugin-react-hooks完成自动化检查即可

### 9. useEffect和useLayoutEffect的区别
相同点：都用于处理副作用
区别：useLayoutEffect可同步触发dom渲染，但计算量较大的任务会造成阻塞
使用：代码引起了页面闪烁使用useLayoutEffect

### 10. useEffect模拟的class组件生命周期
1. 第二个参数不传时，每次都更新，模拟了DidMount 和 DidUpdate
2. 第二个参数为空数组时，只更新一次，模拟了DidMount
3. 第二个参数为参数数组时，依赖项改变时触发，模拟了DidUpdate
4. 返回一个函数时，模拟了WillUnMount，应用：比如清除定时器

### 11. React16架构
相较于15，增加了调度器Scheduler，在15之前，react的Reconciler采用递归的方式创建虚拟DOM，递归的过程是不能中断的。如果组件数的层级很深，递归会占用线程很多时间，造成卡顿，为了解决这个问题，16将递归中无法中断的更新重构为异步的可中断的更新，以前的用于递归的虚拟DOM结构无法满足需要了，因此Fiber应运而生。

1. React16的架构分为三层：
- Scheduler（调度器）- 调度任务的优先级，高优任务优先进入Reconciler
- Reconciler（协调器）- 负责找出变化的组件
- Renderer（渲染器）- 负责将变化的组件渲染到页面上

2. Fiber的含义
- 作为架构来说，15的数据保存在调用栈中，被称为stack Reconciler，16的Reconciler基于Fiber节点实现，被称为Fiber Reconciler
```js
// 指向父级Fiber节点
this.return = null;
// 指向子Fiber节点
this.child = null;
// 指向右边第一个兄弟Fiber节点
this.sibling = null;
```
- 作为静态数据来说，每个Fiber节点对应一个React element，保存了该组件的类型、对应的DOM节点信息
```js
// Fiber对应组件的类型 Function/Class/Host...
this.tag = tag;
// key属性
this.key = key;
// 大部分情况同type，某些情况不同，比如FunctionComponent使用React.memo包裹
this.elementType = null;
// 对于 FunctionComponent，指函数本身，对于ClassComponent，指class，对于HostComponent，指DOM节点tagName
this.type = null;
// Fiber对应的真实DOM节点
this.stateNode = null;
```
- 作为动态的工作单元来说，每个Fiber节点保存了本次更新中组件改变的状态、要执行的工作（增、删、改）

3. Scheduler的原理与实现
包含两个功能：
- 时间切片
本质是模拟实现requestIdleCallback(该函数在浏览器空闲时被调用)
- 优先级调度

### 12. useCallback和useMemo区别
useCallback把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新，
当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。
```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);

// useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
```
useMemo把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。
```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
二者区别在于useMemo会调用fn函数并返回结果，useCallback将返回fn而不调用<br>
React.Memo是一个高阶组件，将组件包装在 React.memo 中调用，相同的 props 会渲染相同的结果，默认只进行浅比较，如果要控制对比过程，通过第二个函数来实现

### 13. 那些生命周期可以调用setState
1. componentDidMount中执行 setState 会导致组件在初始化的时候就触发了更新，渲染了两遍，可以
2. componentWillUnmount不生效无意义
3. 禁止在 shouldComponentUpdate 和 componentWillUpdate 中调用setState，这会造成循环调用，直至耗光浏览器内存后崩溃
4. 在 componentDidUpdate 中执行 setState 会导致组件刚刚完成更新，又要再更新一次，连续渲染两遍（和在 componentDidMount 中执行 setState 类似）。可以在条件语句中调用
6. 在 componentWillReceiveProps中可以 setState，不会造成二次渲染

### 14. componentWillReceiveProps被替换原因
在 componentWilReceiveProps 中判断前后两个 props 是否相同，如果不同再将新的 props更新到相应的 state 上去，会破坏 state 数据的单一数据源，导致组件状态变得不可预测，另一方面当外部多个属性在很短的时间间隔之内多次变化，也会增加组件的重绘次数<br/>
使用getDerivedStateFromProps的时候，就算props在很短的时间内多次变化，也只会触发一次render，从而提高了性能。