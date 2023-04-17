import React, { Component, useRef } from 'react'

// ref的内容发生改变时，组件不会重新进行render
// 类组件使用React.createRef()
// 有点写法简单易懂
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
  constructor(props) {
    super(props);
    this.childRef = React.createRef()
  }

  handleClick = () => {
    this.childRef.current.func();
  }
 

  render() {
    return (
      <>
        <div onClick={this.handleClick}>父组件</div>
        <Child ref={this.childRef} />
      </>
    )
  }
}

export default App