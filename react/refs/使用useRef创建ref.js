import React, { useRef } from 'react'

// useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。
// 返回的 ref 对象在组件的整个生命周期内保持不变。
function App() {
  const inputEl = useRef();

  const handleClick = () => {
    inputEl.current.focus();
  }
  return (
    <>
      <input ref={inputEl} />
      <button onClick={handleClick}>input聚焦</button>
    </>
  )
}

export default App