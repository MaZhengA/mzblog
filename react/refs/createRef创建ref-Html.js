import React, { Component } from 'react'

// 使用createCreate创建ref
// 当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 current 属性中被访问。
// 当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  handleAdd = () => {
    this.myRef.current.value = Number(this.myRef.current.value) + 1;
  }

  render() {
    return (
      <>
        <input ref={this.myRef} />
        <button onClick={this.handleAdd}>点我增加</button>
      </>
    )
  }
}

export default App