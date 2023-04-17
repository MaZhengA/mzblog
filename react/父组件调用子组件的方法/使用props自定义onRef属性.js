import React, { Component } from 'react'
import { observer } from 'mobx-react';

// 使用props的自定义属性传递函数
// 自定义一个onRef属性
// 加入子组件嵌套在高阶组件里边，也可以指向真实的组件
class Child extends Component {
  componentDidMount() {
    // 调用ref方法并传入this指针，这里的this是子组件本身
    // 子组件的this指针被挂载到父组件的this.inputEl上
    this.props.onRef && this.props.onRef(this); 
  }

  func() {
    console.log('被调用了')
  }

  render() {
    return (
      <>
        <div>子组件</div>
      </>
    )
  }
}

observer(Child)

// 在父组件内访问整个子组件实例，并且可以调用子组件函数。
class App extends Component {

  handleClick = () => {
    // this.inputEl指向子组件的实例
    this.inputEl.func();
    this.inputEl.focus();
  }

  render() {
    return (
      <>
       {/* 通过onRef将子组件的实例方法传递给子组件 */}
        <Child onRef={el => this.inputEl = el} />
        <button onClick={this.handleClick}>input聚焦</button>
      </>
    )
  }
 
}

export default App