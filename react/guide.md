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