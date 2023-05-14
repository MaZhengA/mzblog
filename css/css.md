#### 1. 样式属性顺序
1. 布局方式、位置
   - position、float、display、overflow、top
2. 自身尺寸
   - width、padding、border
3. 文本相关
   - font、line-height、text-align
4. 视觉效果
   - background、color、transition

#### 2. BEN命名规范
 > BEM是块(Block)、元素(Element)、修饰符(Modifier)三者的缩写

 block__elem--hidden

#### 3. display: table-cell
 行内元素只能设置左右margin, 块元素可以设置任意margin, table-cell设置margin无效

#### 4. display: inline-block
基于baseline对齐, 因此会存在上下不对齐的情况, 所以要加上vertical-align属性

#### 5. direction: ltr/rtl
- 可以改变子元素的排列方向，无法改变单段文本的排列方向
- 可使用rtl使省略号移至头部

#### 6. direction: rtl + unicode-bidi: bidi-override可以使文本倒叙

#### 7. nth-child() 选择父元素的第几个子元素 nth-child-of() 选择指定类型的元素

#### 8.表单无需滚动到底部就显示滚动条，需要给表格加一个height，如果是在model中，则要禁用model本身的overflow: auto

#### 9.inset属性
> inset CSS 属性是对应于 top、right、bottom 和/或 left 属性的简写。它具有与边距速记相同的多值语法。

#### 10. user-select
功能：控制能否选中文本

属性值：

1. none 元素及其子元素的文本不可选中
2. text 用户可以选中文本
3. contain 允许在元素内选择
4. all 双击子元素时，包含该子元素的上层元素也会被选中
5. auto 取决于以下的一系列条件
   - 在::before和::after伪元素上，采用的值时none
   - 如果元素是可编辑的，则采取的是contain属性
   - 否则，如果此元素的父元素的 user-select 采用的属性值为 all，则该元素采用的属性值也为 all
   - 否则，如果此元素的父元素的 user-select 采用的属性值为 none，则该元素采用的属性值也为 none
   - 否则，采用的属性值为 text

#### 11. 夜空的颜色
background: linear-gradient(to bottom, #000 0%, #5788fe 100%);