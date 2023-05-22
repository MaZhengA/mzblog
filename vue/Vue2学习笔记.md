#### vue的特点
1. 采用组件化模式，提高代码复用率，让代码更好维护
2. 声明式编码，无需直接操作DOM，提高开发效率

#### 基础
1. 通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新
2. 修饰符.stop可阻止事件冒泡
3. 事件绑定中使用$event可以访问原声的dom事件
4. v-bind可以简写成“:”声明指令语法。标签体内使用插值语法“{{}}”，指令语法：用于解析标签，都是v-xxx的形式
5. v-model双向绑定只能用在表单类标签上（存在value值），v-model:value可以简写成v-model
6. 如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例。
7. data可以是对象也可以是普通函数(一定不能是箭头函数)
8. Vue中的mvvm模型：model: data数据, view: 视图层模板代码, vm(viewModel): vue实例
9. Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
```js
Object.defineProperty(person, 'age', {
  value: 26, // 属性值
  writable: true, // 控制属性能否被重新赋值，默认为false
  enumerable: true, // 定义了对象的属性是否能被枚举，默认为false
  configurable: true, // 定义对象属性是否能被删除，以及除 value 和 writable 特性外的其他特性是否可以被修改。默认值为false
  get() { return 'xxx' }, // 获取age的值
  set(value) { xxx = value } // 设置age的值
})
```
10. v-on:xxx可以使用‘@xxx’简写，使用$event可以访问DOM事件
11. 键盘修饰符，tab键必须使用keydown使用，因为tab本身具有切换功能
12. watch和computed的差别
- watch能完成computed所有的功能，但是watch能进行异步操作，后者不能
- 所有不被vue管理的函数，要写成箭头函数，避免this指向错误
13. 条件判断中v-if、v-else-if、v-else中间不能被打断，v-if可以与template结合使用，不破坏html结构
14. 如果模板的值是undefined，则vue不会展示
15. vue监测数据原理
- 使用 Vue.set(object, propertyName, value) 方法向 ⚠️嵌套对象 添加响应式 property。对象不能是vue实例或vue实例的根数据对象（即data）
- vue操作数组时使用vue提供的可修改原数组的方法push()、pop()、shift()、unshift()、splice()、sort()、reverse()
- 修改数组也可以使用索引修改Vue.set(array, '索引', '新值')
16. 收集表单数据
- <input type="text" /> 则v-model收集的是value值，用户输入的也是value值
- <input type="radio" /> 则v-model收集的是value值，且要给input配置value值
- <input type="checkbox" /> 如果没有配置value值，则收集的是checked(布尔值), 如果配置了value，则收集的是选中的value数组
- .lazy修饰符表示失焦后获取value，.number表示获取数字类型，.trim清除左右两边的空格
17. 常用生命周期钩子
- mounted:发送ajax请求、启动定时器、绑定自定义事件、订阅消息
- beforeDestroy:清除自定义事件、清除定时器、取消订阅消息
- 销毁后自定义事件失效，但原生dom依然有效
18. 关于VueComponent
- 自定义的组件本质是一个VueComponent的构造函数，是由Vue.extend()生成的
- 每次调用Vue.extend，返回的都是一个新的VueComponent
- 组件配置中：data函数，methods、watch、computed中的函数他们的this指向是VueComponent(vc)的实例对象
19. 一个重要的内置关系
VueComponent.prototype.__proto__ === Vue.prototype;这样可以使VueComponent的可以访问到Vue原型上的属性和方法

#### Vue SPA组件
1. 使用vue create 'xx'创建项目报错时，可能是因为某些依赖需要使用sudo权限，因此执行npm run serve没有安装上，这时候需要把sudo权限免写，再重新安装依赖
2. 修改脚手架默认配置需要新建一个vue.config.js文件
3. 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。
4. 可选 scoped attribute 会自动添加一个唯一的 attribute (比如 data-v-21e5b78) 为组件内 CSS 指定作用域
5. 引入less-loader时也要增加less依赖，通过npm view '包名称' version 可以看安装版本

#### Vue CLI vue.config.js文件
1. Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，是webpack的超集
2. CLI 服务(@vue/cli-server)是一个开发环境依赖，内部的 vue-cli-service 命令，提供了serve、build、lint命令
3. configureWebpack 提供的对象调整webpack配置
4. chainWebpack 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例，对内部的webpack配置进行更细粒度的修改
5. ts-loader 不能处理vue文件，因此在options中要加 appendTsSuffixTo: [/\.vue$/],
6. lintOnSave 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
7. transpileDependencies 默认情况下 babel-loader 会忽略所有 node_modules 中的文件，开启此选项(true)，以避免构建后的代码中出现未转译的第三方依赖。会降低构建速度，因此可以传输一个数组，列出第三方包名或正则表达式

#### Vite vite.config.js
1. 介绍：前端构建工具，能够显著提升前端开发体验。两部分组成：
  - 一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。
  - 一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。
2. vite-plugin-cdn-import 是一个Vite插件，允许指定 modules 在生产环境中使用 CDN 引入。这可以减少构建时间,并且提高生产环境中页面加载速度。
prodUrl 允许为特定的模块指定CDN的位置。autoComplete 支持自动完成引入，无需通过定义对象的方式引入
3. rollup-plugin-visualizer 可以用来分析vite创建的项目的打包体积，在 vite.config.js 中的 plugins 中配置 visualizer({ open: true })，然后执行npm run build 会生成一个 stats.html 文件