### 函数组件
#### 写法
```javascript
function Person(props) {
  const { name, age, sex } = props;
	return <>
  	<p>姓名: {name}</p>
    <p>年龄: {age}</p>
    <p>性别: {sex}</p>
  </>
}
const Component = <Person name="MaZheng" age="24" sex="male" />
ReactDOM.render(
  <Component />,
  document.getElementById('root')
);
```
#### 使用场景
只有一个props传进来,没有state,可以用来实现一些简单的组件,如Avatar、HeaderSearch等

### class组件
#### 写法
```javescript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  onAdd() {
  	this.setState({
    	count: this.state.count + 1;
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>Count: { count }</p>
				<button type="button" onClick={this.onAdd.bind(this)}>+</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
```
#### 使用场景
相比function,多了state和生命周期函数,可以实现react世界绝大部分功能

### 受控组件
#### 含义
值始终受到state控制,值的改变由state驱动
#### react组件的双向绑定
```javascript
class Son extends React.Component {
  constructor(props){
    super(props);
    this.state = { desc: '' }
  }
  // 向父组件传值
  handleClick(){
    this.props.updateDesc(this.state.desc);
  }

  handleChange(e){
    this.setState({
      desc: e.target.value
    });
  }

  render(){
    return (
      <div>
      	<input onChange={this.handleChange.bind(this)}></input>
				<p onClick={this.handleClick.bind(this)}>点击回传值</p>
			</div>
		);
	}
}
 
class Parent extends React.Component {
  constructor(){
    super();
    this.state = { describe: '' }
  }
  // 接收子组件的传值
  setDatas(desc){
    this.setState({
      describe: desc
    });
  }
 
  render(){
    return (
      <div>
      	<Son updateDesc={this.setDatas.bind(this)}></Son>
				<div>描述：{this.state.describe}</div>
			</div>
		);
	}
}
ReactDOM.render(<Parent />, document.getElementById('root'));
```

### 高阶组件
#### 含义
普通组件是传入props来生成ui,高阶组件是传入的参数是组件,返回也是组件
#### 使用场景
高阶组件可以重复利用代码或者是补充原来的组件没有的功能
#### 栗子🌰
```javascript
function HigherOrderComponent(WrappedComponent) {
	return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: '' };
    }
    onChange = () => {
      this.setState({
        name: 'MaZheng'
      });
    }
    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onChange,
        },
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
	};
}
const EnhancedComponent = props => (<input name="name" {...props.name} />);
HigherOrderComponent(EnhancedComponent);
```