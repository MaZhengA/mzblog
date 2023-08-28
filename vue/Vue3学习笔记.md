## 前置须知
选项式API以“组件实例”的概念为中心<br>
组合式API的核心思想是直接在函数作用域内定义响应式状态变量，并将从多个函数中得到的状态组合起来解决问题。<br>
组合式 API 配合 <script setup></script> 语法在单文件组件中使用<br>
组合式 API 并不是函数式编程。组合式 API 是以 Vue 中数据可变的、细粒度的响应性系统为基础的，而函数式编程通常强调数据不可变<br>

### 组合式API优势
1. 更好的逻辑复用
2. 更灵活的代码组织：同一个逻辑关注点相关的代码被归为了一组，大大降低了重构成本
3. 更好的类型推导：组合式 API 主要利用基本的变量和函数，它们本身就是类型友好的
4. 更小的生产包体积

## 基础
### 1. 声明响应式状态
#### 1.1 reactive()
使用reactive()函数创建一个响应式对象或数组.<br>
reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的，只有代理对象是响应式的，更改原始对象不会触发更新。<br>
局限：1. 仅对对象有效、2. Vue 的响应式系统是通过属性访问进行追踪的，因此必须保持对该响应式对象的相同引用。不能随意“替换”一个响应式对象
```js
const raw = {}
const proxy = reactive(raw)
// 代理对象和原始对象不是全等的
console.log(proxy === raw) // false
```

#### 1.2 ref()
使用ref()定义响应式变量，允许我们创建可以使用任何值类型的响应式 ref<br>
```js
// ref将传入一个带.value属性的ref对象
const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

当 ref 在模板中作为顶层属性被访问时，它们会被自动“解包”，所以不需要使用 .value<br>
当 ref 被嵌套在一个响应式对象中时，作为属性被访问或更改时，也会自动解包
```js
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ count }} <!-- 无需 .value -->
  </button>
</template>
```

### 2. 条件渲染
v-if指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染，可以在template上边使用。条件区块内的事件监听器和子组件都会被销毁与重建，更高的切换开销<br>
v-show用法和v-if一样，区别在于在dom渲染中保留了该元素，只是切换了该元素上名为display的css属性。不支持在template元素上使用。元素无论初始条件如何，始终会被渲染，更高的初始渲染开销
二者同时存在于一个元素上时，v-if会被首先执行

### 3. 事件处理
#### 1. 监听事件
使用v-on指令监听DOM事件，用法是v-on:click="handler" 或 @click="handler"。<br>
handler可以是内联事件处理器或方法事件处理器
```js
// 内联
const count = ref(0)

<button @click="count++">Add 1</button>
<p>Count is: {{ count }}</p>

// 方法
const name = ref('Vue.js')

function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` 是 DOM 原生事件
  if (event) {
    alert(event.target.tagName)
  }
}
// `greet` 是上面定义过的方法名
<button @click="greet">Greet</button>
```
Vue 为 v-on 提供了事件修饰符，使方法能更专注于数据逻辑而不用去处理 DOM 事件的细节

### 4. 组件基础
在<script setup></script>中，使用defineProps宏声明props，不需要显示导入，一个组件可以有任意多的 props，默认情况下，所有 prop 都接受任意类型的值。<br>
子组件通过调用$emit方法，通过传入事件名称来抛出一个事件，通过defineEmits()声明抛出的事件，如果没有使用setup，可以从setup 上下文对象上访问到 emit 函数：
```js
export default {
  emits: ['enlarge-text'],
  setup(props, ctx) {
    ctx.emit('enlarge-text')
  }
}
```

### 一. 生命周期

### 二. v-model
用来实现双向绑定
默认情况下，v-model使用modelValue最为prop,并以update:modelValue最为事件名,可以通过指定参数来改变名称
```js
// v-model原生元素写法
<input v-modal="searchText" />
// 编译后
<input :value="searchText" @input="searchText = $event.target.value" />

// v-model组件写法
<CustomInput v-model="searchText" />
// 编译后
<CustomInput :modelValue="searchText" @update:modelValue="newValue => searchText = newValue" />

// 增加参数
<MyComponent v-model:title="bookTitle" />
// 编译后
<MyComponent :title="bookTitle" @update:title="newValue => bookTitle = newValue"/>
```

### 三. 组件
#### 1. 组件注册
vue组件在被使用前需要注册，这样才能正常渲染，两种方式：全局注册和局部注册<br>
全局注册：使用app.component()方法. 缺点: 1. 未使用的组件无法在打包时被自动移除(tree-shaking), 2. 在大型项目中使项目的依赖关系不明确，类似于使用了大量的全局变量<br>
局部注册：使用components实现，每个components对象里的属性，它的key名就是注册的组件名，值是对应的组件实现. 缺点: 
局部注册的组件在后代组件中并不可用<br>
组件名格式：使用大驼峰

#### 2. Props
子组件接收时通过小驼峰，向子组件传递时通过 kebab-case(短横线链接)，为了和 HTML attribute 对齐

#### 3. 插槽
1. 作用：<slot> 元素是一个插槽出口 (slot outlet)，标示了父元素提供的插槽内容 (slot content) 将在哪里被渲染，
插槽的内容可以是任意合法的模版内容，不局限于文本，通过使用插槽，使得组件更加灵活和具有可复用性<br>
2. 作用域：插槽内容可以访问到父组件的作用域，无法访问子组件的数据。Vue 模板中的表达式只能访问其定义时所处的作用域，这和 JavaScript 的词法作用域规则是一致的
3. 具名插槽：带name的插槽
```js
// 没有提供 name 的 <slot> 出口会隐式地命名为“default”。
<header>
    <slot name="header"></slot> 
</header>
// 使用v-slot为具名插槽插入内容，缩写为#
<template #header>
    <!-- header插槽的内容 -->
</template>
```
4. 动态插槽名
```js
<template v-slot:[dynamicSlotName]>
    ...
</template>
```

#### 4. 依赖注入
1. 含义：一个父组件相对于其所有的后代组件，会作为依赖提供者。任何后代的组件树，无论层级有多深，都可以注入由父组件提供给整条链路的依赖。解决父子组件逐级透传的问题<br>
2. Provide为后代提供数据，inject注入上层提供的数据<br>
```js
export default {
  inject: ['message']
}
```
3. 注入别名：当以数组形式使用 inject，注入的属性会以同名的 key 暴露到组件实例上。想要用一个不同的本地属性名注入该属性，我们需要在 inject 选项的属性上使用对象的形式
```js
export default {
  inject: {
    /* 本地属性名 */ localMessage: {
      from: /* 注入来源名 */ 'message'
    }
  }
}
```
4. 和响应式数据配合使用，通过computed()函数提供的计算属性实现

#### 5. 透传Attributes
1. 含义：“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 props 或 emits 的 attribute 或者 v-on 事件监听器。最常见的例子就是 class、style 和 id。

### 四. 逻辑复用
#### 1. 组合式函数
1. 概念：“组合式函数”(Composables) 是一个利用 Vue 的组合式 API 来封装和复用有状态逻辑的函数<br> 
2. 组合式函数约定小驼峰命名法，并以“use”开头

#### 2. 自定义指令
1. 概念：自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑。注意：当所需的功能只能通过直接的 DOM 操作来实现时，才应该使用自定义指令
2. 生成：一个自定义指令由一个包含类似组件生命周期钩子的对象来定义
3. 在 <script setup></script> 中，任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令。<br>
在setup()中需要通过directives选项注册

### 五. 内置组件
#### <KeepAlive>
在多个组件间动态切换时缓存被移除的组件实例<br>
可以通过 include 和 exclude prop 来定制缓存的内容<br>
通过传入 max prop 来限制可被缓存的最大组件实例数

### 六. setup
#### defineExpose()
使用 <script setup> </script>的组件是默认关闭的, 可以通过 defineExpose 编译器宏来显式指定在 <script setup> </script> 组件中要暴露出去的属性，即子组件暴露自己的属性和方法，在父组件可以使用

#### /deep/ & ::v-deep
style 标签设置 scoped 属性时，css 只作用于当前组件，增加这两个属性(深度选择器)中的一个可以在父子组件拥有相同类名时，只写一次样式

### 七、踩坑
1. 使用 reactive 定义的数据没刷新页面，给数据外面包一层或者改用ref
2. 使用 Transition 必须有 v-if 和 key, 否则无效