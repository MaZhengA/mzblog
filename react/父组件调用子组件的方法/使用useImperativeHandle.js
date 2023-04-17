import React, { useRef, useImperativeHandle } from 'react'

// useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值
// useImperativeHandle(ref, createHandle, [deps])，必须与forwardRef配合使用
// React.forwardRef 会创建一个React组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中

function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    count: () => {
      inputRef.current.value = Number(inputRef.current.value) + 1;
    },
    dialog: () => { return alert('弹窗') }
  }));

  return (
    <input ref={inputRef} />
  )
}

const ForwardFancyInput = React.forwardRef(FancyInput);

function App() {
  const inputEl = useRef();

  const handleClick = () => {
    inputEl.current.focus();
    inputEl.current.count();
    inputEl.current.dialog();
  }
  return (
    <>
      <ForwardFancyInput ref={inputEl} />
      <button onClick={handleClick}>input聚焦</button>
    </>
  )
}

export default App