### sass写法
#### 1. 插值语句
通过#{}插值语句可以在选择器或属性名中使用变量
```scss
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}

编译为
p.foo {
  border-color: blue
}
```

插值语句也可以在属性值中插入 SassScript
```scss
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}

编译为
p {
  font: 12px/30px;
}
```

#### 2. 控制指令
for指令可以在控制的范围内重复输出格式，每次按要求（变量的值）对数据结果做出变动，包含两种格式：@for $var from <start> through <end>或者
@for $var from <start> to <end>，区别在于使用through时，包含end的值，使用to时，不包含end的值
```scss
@for $i from 1 through 3 {
  .item-#{$i} {
    width: $1 * 2em;
  }
}

编译为
.item-1 {
  width: 2em;
}
.item-2 {
  width: 4em;
}
.item-3 {
  width: 6em;
}
```
