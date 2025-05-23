### uni-app工程目录

#### uni_modules
uni_modules是uni-app的包管理方案

#### components
符合vue组件规范的uni-app组件目录

#### pages
业务页面文件存放的目录

#### static
存放应用引用的本地静态资源的目录

#### unpackage
非工程代码，存放运行或发行的编译结果

#### main.js
Vue初始化入口文件

#### App.vue
应用配置，用来配置App全局样式及监听 [应用生命周期](https://uniapp.dcloud.net.cn/collocation/App.html#%E5%BA%94%E7%94%A8%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)

#### manifest.json
配置应用名称、appid、logo、版本等打包信息

#### uni.scss 
内置的常用样式变量，在代码中无需import这个文件即可在scss代码中使用这里的样式变量，
不设置rpx和px的转换关系时，默认的转换方式如下：px = rpx × (屏幕宽度/750)，rpx是代码写的值

#### pages.json
配置页面路由，用来对uni-app进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原声tabbar，globalStyle的h5的titleNView: false可以禁用页面导航标题（即不显示页面标题）

#### package.json
在此文件中增加uni-app扩展节点，可实现自定义条件编译平台，文件中不允许出现注释，否则扩展配置无效

### 全局工具或插件
本项目中，在dictUtils文件中有一个refreshDictMap方法，在App.vue中可以通过this.$dictUtils当问到这个方法，是因为在main.js中全局注册了这个对象：Vue.prototype.$dictUtils，

### 写法
#### 使用this_ 是对this的一个引用，因为在异步回调中，this的指向会发生变化，因此通过this_ 来保持对原始上下文的引用
#### px2rpx
```js
function px2rpx(px, num = 375) {
  return (px * (750 / num)) + 'rpx'
}
含义：1px对应的rpx是750/num，num指的是屏幕的宽度，单位是px，可以得到结果1px等于2rpx，因此转换方法是px * (750 / num)
```
#### uni.$u.setConfig()
这个$u是uView组件库里边的一个对象，uView组件库中的工具库的所有方法，都挂载在$u这个对象下边
#### @click="handleClick"和@click="handleClick()"
前者会自动传递事件对象event，后者不会，可以用来传递额外参数，例如handleClick('extra-param', event)
#### @click和@tap的区别
@click模拟的是鼠标点击事件，在移动设备上会有300ms的延迟，这是为了区分点击和长按操作
@tap没有延迟，模拟的是触摸屏的轻触操作
#### view组件的v-html属性可以解析标签
#### "&gt;"可以被解析成">"符号

### this
vue中的this指向的是组件的实例，在组件的方法、计算属性或生命周期中使用this，它都会指向该组件的实例，因此可以通过this访问组件中的所有属性和方法

### Vuex


### 页面和路由
uni.navigateTo 保留当前页面，跳转到应用内的某个页面
uni.switchTab 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
uni.redirectTo 关闭当前页面，跳转到应用内的某个页面
uni.reLaunch 关闭所有页面，打开到应用内的某个页面

### 拦截器
uni.addInterceptor(string, object) 添加拦截器，string指的是拦截的uni的api，object是一些拦截参数说明

### 页面的生命周期
onShow() 监听页面显示，页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
onPullDownRefresh() 监听用户下拉动作，一般用作下拉刷新
要现在pages.json页面中开启enablePullDownRefresh属性，然后在对应的页面组件中写onPullDownRefresh方法，再使用uni.stopPullDownRefresh停止当前页面的刷新

### 常用API
uni.makePhoneCall({phoneNumber: num}) 拨打电话
uni.createSelectorQuery 创建查询请求
```js
// 这个方法需要在mounted生命周期中使用
const query = uni.createSelectorQuery().in(this)
// 将选择器的选取范围更改为自定义组件 component 内，返回一个selectQuery对象实例

query.select('#listView').boundingClientRect((data) => {
  this.listHeight = data.height + 'px';
  console.log("listHeight===" + this.listHeight)
}).exec();

// query.select 在当前页面下选择第一个匹配选择器 selector 的节点，返回一个NodesRef对象实例
// nodesRef.boundingClientRect(callback) 添加节点的布局位置的查询请求
// exec() 执行请求
// 这段代码的目的是取页面上listView的高度，并将其保存到组件的数据属性中
```

### Vue2
#### 父子组件传值
使用this.$refs可以引用子组件的实例，并调用其方法，$refs是一个对象，它包含所有通过ref属性注册的子组件或DOM元素，使用方法，this.$refs.childComp.someMethods()，在父组件中为子组件添加一个ref属性叫childComp

### 内置组件
1. button的open-type="share"可以直接分享到微信