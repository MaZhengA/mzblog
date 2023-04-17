import React, { Component } from 'react'

// 使用ref的函数式声明
class Child extends Component {
  
  func() {
    alert('子组件')
  }

  render() {
    return (
      <div>子组件</div>
    )
  }
}

class App extends Component {
  handleClick = () => {
    this.ChildRef.func();
  }

  render() {
    return (
      <>
        <div onClick={this.handleClick}>父组件</div>
        <Child ref={node => this.ChildRef = node} />
      </>
    )
  }
}

export default App