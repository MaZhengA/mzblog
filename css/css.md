#### 样式属性顺序
1. 布局方式、位置
   - position、float、display、overflow、top
2. 自身尺寸
   - width、padding、border
3. 文本相关
   - font、line-height、text-align
4. 视觉效果
   - background、color、transition

 #### BEN命名规范
 > BEM是块(Block)、元素(Element)、修饰符(Modifier)三者的缩写

 block__elem--hidden

 #### display: table-cell
 行内元素只能设置左右margin, 块元素可以设置任意margin, table-cell设置margin无效

 #### display: inline-block
基于baseline对齐, 因此会存在上下不对齐的情况, 所以要加上vertical-align属性