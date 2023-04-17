import React, { Component } from 'react'

// 使用函数声明ref获取值
class App extends Component {
  constructor(props) {
    super(props);
  }

  handleAdd = () => {
    this.myRef.focus(); 
    this.myRef.value = Number(this.myRef.value) + 1;
  }

  render() {
    return (
      <>
        <input ref={node => this.myRef = node} />
        <button onClick={this.handleAdd}>点我增加</button>
      </>
    )
  }
}

export default App