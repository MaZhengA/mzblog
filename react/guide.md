>jsx语法规范
#### 1. 对于普通组件使用组件名作为文件名(使用PascalCase)。对于根目录，使用index.jsx作为文件名，并使用目录名作为组件名
```js
// bad
import Footer from './Footer/inde';

// good
import Footer from './Footer';
```

#### 2. 高阶组件的名称要使用本身的组件名加传入的组件名的组合作为组件的displayName，因为displayName有助于帮助人们理解组件的作用
```js
// bad
export default function withFoo(WrappedComponent) {
  return function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }
}

// good
export default function withFoo(WrappedComponent) {
  function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  WithFoo.displayName = `withFoo(${wrappedComponentName})`;
  return WithFoo;
}
```

#### 3. js语法对齐方式
```js
// 如果props只有一个，则放在同一行
<Foo bar="bar" />

// 如果有多个则要缩进
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>

// &&写法
// good
{showButton && (
  <Button />
)}

// good
{showButton && <Button />}

// good
{someReallyLongConditional
  && anotherLongConditional
  && (
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    />
  )
}

// good
{someConditional ? (
  <Foo />
) : (
  <Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
  />
)}
```

#### 4. 引号：使用对jsx属性使用双引号，对其他js属性使用单引号
```js
// good
<Foo bar="bar" />

// good
<Foo style={{ left: '20px' }} />
```

#### 5. 空格：不使用空格填充jsx花括号
```js
// good
<Foo bar={baz} />
```

#### 6. 属性名称
```js
1. 始终使用驼峰作为prop的名称，如果props是react组件，则使用帕斯卡
// good
<Foo
  userName="hello"
  phoneNumber={12345678}
  Component={SomeComponent}
/>

2. 当prop属性的值为true时，省略它的值
// good
<Foo hidden />

3. 为所有非必填的prop定义defaultProps,因为定义propTypes和defaultProps能提高代码的可读性
// good
function SFC({ foo, bar, children }) {
  return <div>{foo}{bar}{children}</div>;
}
SFC.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
  children: PropTypes.node,
};
SFC.defaultProps = {
  bar: '',
  children: null,
};
```

#### 7. 括号：当jsx标签跨域多行时，用括号括起来
```js
// good
render() {
  return (
    <MyComponent variant="long body" foo="bar">
      <MyChild />
    </MyComponent>
  );
}
```

#### 8. 标签：如果组件具有多行属性，要在新行关闭标签
```js
// good
<Foo
  bar="bar"
  baz="baz"
/>
```