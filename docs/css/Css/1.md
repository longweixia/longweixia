
# 以下内容为css 基础篇（1）
## 1. 如何解决 a 标点击后 hover 事件失效的问题？

> 改变 a 标签 CSS 属性的排列顺序：  
（爱恨原则）link -> visited -> hover -> active 

1. a:link：简写 a，未访问的样式
2. a:visited：已经访问的样式
3. a:hover：鼠标移上去时的样式
4. a:active：鼠标按下的样式  

按照这样书写：  
可以解决a:link样式被a:visited样式覆盖问题。  
在 CSS 中，如果对于相同元素针对不同条件的定义，适宜将最一般的条件放在最上面，依次向下，保证最下面的是最特殊的条件（可以理解为样式覆盖）。

这样，浏览器显示元素的时候，才会从特殊到一般、逐级向上验证条件。

**举例说明：** 

我想让未访问链接颜色为蓝色，悬浮链接为绿色，已访问链接为红色：

`第一种情况：`我定义的顺序是`a:visited-红色、a:hover-绿色、a:link:蓝色`，这时会发现：把鼠标放到未访问过的蓝色链接上时，它并不变成绿色，只有放在已访问的红色链接上，链接才会变绿。

`第二种情况：`我把CSS定义顺序调整为：a:link、a:visited、a:hover，这时，无论你鼠标经过的链接有没有被访问过，它都会变成绿色啦。

这是因为，一个鼠标经过的`未访问链接`同时拥有`a:link、a:hover`两种属性。  
1. 在第一种情况下，a:link离它最近，所以它优先满足同时拥有【a:link，a:hover】中的a:link，而放弃a:hover的重复定义（hover样式被link给覆盖了）。
2. 在第二种情况，无论链接有没有被访问过，它首先要检查是否符合a:hover的标准（即是否有鼠标经过它），满足，则变成绿色，不满足，则继续向上查找，一直找到满足条件的定义为止。

**奇淫技巧--记住正确排序**：（l v h a ）==》`LV好啊`（取的首字母)

## 2. 响应式布局
> 从目前了解的情况，pc和h5使用一套响应式的代码的场景比较少了，大多是pc,h5各自维护一套代码。


## 3. Flex布局
> Flex（Flexible Box）布局 称为 "弹性布局"，可以为网页的布局提供最大的灵活性，取代了往常的 浮动（float） 布局，并且任何一个容器都可以设置 Flex 布局。  
**注**：设置 Flex 布局后，子元素的 Float 布局将失效

### 3-1 Flex中的四大概念
- **容器**： 如果给一个标签添加display:flex;，那么这个标签就是一个容器
- **项目**： 在容器中的直接子元素叫项目（一定是 直接 子元素）
- **主轴**： 项目的默认排序方向就是主轴（默认横向排列，一个容器可以有多根主轴）
- **交叉轴**： 和主轴垂直的那个轴，就是交叉轴

<a data-fancybox title="Flex中的四大概念" href="/flex1.png">![Flex中的四大概念](/flex1.png)</a>
<a data-fancybox title="Flex中的四大概念" href="/flex2.png">![Flex中的四大概念](/flex2.png)</a>

### 3-2 容器的属性
- Flex-direction    --属性决定主轴的方向
- Flex-wrap  -- 属性决定项目排不下时如何换行
- Flex-flow -- flex-direction 和 flex-wrap 的简写形式
- justify-content  -- 水平对齐
- align-items   -- 垂直对齐
- align-content -- 决定了多根主轴的对齐方式

#### 1.Flex-direction（属性决定主轴的方向）
- row（默认值）：主轴为水平方向，起点在左端
- row-reverse：主轴为水平方向，起点在右端
- column：主轴为垂直方向，起点在上端
- column-reverse：主轴为垂直方向，起点在下端

<a data-fancybox title="Flex-direction" href="/flex3.png">![Flex-direction](/flex3.png)</a>

#### 2.Flex-wrap(属性决定项目排不下时如何换行)
- norwrap（默认）：不换行
- wrap：换行，第一行在上方
- wrap-reverse：换行，第一行在下方

<a data-fancybox title="Flex-wrap" href="/flex4.png">![Flex-wrap](/flex4.png)</a>

#### 3.Flex-flow（属性是 flex-direction 和 flex-wrap 的简写形式）
- flex-flow: flex-direction || flex-wrap;

#### 4.justify-content(沿着主轴的方向--一般是水平对齐)
- flex-start；（默认值），项目左对齐
- flex-end：项目右对齐
- space-between：项目两端对齐，项目之间的间隔都相等
- space-around：每个项目两侧的间隔相等

<a data-fancybox title="justify-content" href="/flex5.png">![justify-content](/flex5.png)</a>

#### 5.align-items(属性决定项目在交叉轴上如何对齐--一般是垂直对齐)
- flex-start；（默认值），项目左对齐
- flex-end：项目右对齐
- space-between：项目两端对齐，项目之间的间隔都相等
- space-around：每个项目两侧的间隔相等  
**注:必须给当前的容器设置高度才会起作用**


<a data-fancybox title="align-items" href="/flex6.png">![align-items](/flex6.png)</a>

#### 6.align-content（属性决定了多根主轴的对齐方式）
- stretch（默认值）：轴线占满整个交叉轴
- flex-start：与交叉轴的起点对齐
- flex-end：与交叉轴的终点对齐
- center：与交叉轴的中点对齐
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分
- space-around：每根轴线两侧的间隔都相等


<a data-fancybox title="align-content" href="/flex7.png">![align-content](/flex7.png)</a>

### 3-3项目属性

#### 项目的属性
- order 
- flex-grow 
- flex-shrink 
- flex-basis
- flex 
- align-self

#### （1）order（属性定义项目的排列顺序。数值越小，排列越靠前，默认为0）

<a data-fancybox title="order" href="/flex8.png">![order](/flex8.png)</a>


#### （2）flex-grow（属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大）


<a data-fancybox title="flex-grow" href="/flex9.png">![flex-grow](/flex9.png)</a>



####  （3）flex-shrink（属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小）


<a data-fancybox title="flex-shrink" href="/flex10.png">![flex-shrink](/flex10.png)</a>



####  （4）flex-basis(属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小,也可以设置 xx px,项目将占据固定空间)


<a data-fancybox title="flex-basis" href="/flex11.png">![flex-basis](/flex11.png)</a>



#### （5）flex（属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1  auto。后两个属性可选）

```flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ];```


#### （6）align-self（属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch）


```align-self: auto | stretch | flex-start | flex-end | center | baseline;```

<a data-fancybox title="" href="/flex12.png">![](/flex12.png)</a>


## 4.使元素消失的方法

- **visibility:hidden**  该元素隐藏起来了，但不会改变页面布局，但是**不会触发**该元素已经绑定的事件  
- **display:none**  把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把**该元素删掉**  
- **z-index=-1**  把元素**遮盖**起来，并且不会改变页面布局，可以理解被其它元素压在下面了
- **opacity：0**, 该元素**隐藏**起来了，但不会改变页面布局，并且，如果该元素已经绑定了一些事件，如click事件也**能触发** ，常用于设置图片透明度为0 ，然后加个点击事件，点击上传文件
- **position: absolute**; 设置一个很大的 left 负值定位，使元素定位在可见区域之外；
- **transform: scale(0)**; 将一个元素设置为缩放无限小，元素将不可见，元素原来所在的位置将被保留；
- **`<div hidden="hidden">`** HTML5属性,效果和display:none;相同，但这个属性用于记录一个元素的状态；
- **height: 0** ; 将元素高度设为 0 ，并消除边框；
- **filter: blur(0)** ; CSS3属性，括号内的数值越大，图像高斯模糊的程度越大，到达一定程度可使图像消失（此处感谢小伙伴支持）；

**rgba和opacity透明有何不同**:  
- rgba()只作用于元素自身的`颜色或背景色`，`对元素的内容没有影响`。
- opacity在作用于元素自身的颜色或背景色的同时，也作用于元素内的内容的透明度。

## 5. css盒模型

> css 中，有两种盒模型，通过 box-sizing 切换：

1. 当设置为 **content-box** 时，属于`标准盒模型`，在设置宽度和高度时，`只包含 content`，不包含 padding 和 border；
2. 而设为 **border-box** 时，属于 `IE 盒模型`，设置宽度和高度时，`包含 content、padding 和 border`。

## 6. 选择器怎么解析的

样式系统从关键选择器开始，**向左依次查找**，如果出现未匹配的情况会放弃规则，否则会左移直至匹配完成。  
因此在写样式时，应尽量选择 ID 选择器或 class 选择器作为关键选择器，并且`减少样式的层级，降低消耗`。

## 7. 选择器

### 7-1 选择器分类
- id选择器(#myid)
- 类选择器(.myclass)
- 标签选择器(div, h1,p)
- 通配符选择器(*)
- 相邻选择器（h1 + p）
- 子选择器(ul > li)
- 后代选择器(li a)
- 属性选择器(a[rel="external"])
- 伪类选择器(:link, :visited, :active , :hover, :before, :after)

### 7-2 选择器优先级
| 选择器类别    |   说明  |   权重  |  权值   |
| --- | --- | --- | --- |
|  @important   |  强制使用此样式   |   权重最高  |  权值最高   |
|  行内样式   |    style = ""  |  （1.0.0.0）   |  1000   |
|  id选择器   |   #id  |  （0.1.0.0）   |   100  |
|   类选择器  |   .id  |  （0.0.1.0）   |  10   |
|  元素选择器 |   div  |  （0.0.0.1）   |  1   |

通配符 > 继承 > 浏览器默认

### 7-3 css3新增的伪类

- :first-child 匹配父元素中第一个子元素   
  **E:first-child它表示**：只要E元素是它的父级的第一个子元素，就选中。它需要同时满足`两个条件`，一个是`第一个子元素`，另一个是`这个子元素刚好是E`。  
  **以下2中解读都是错误的**:
  - 误解一：认为E:first-child选中E元素的第一个子元素。
  - 误解二：认为E:first-child选中E元素的父元素的第一个E元素。  

- :last-child 匹配父元素中最后一个子元素
- :nth-child(n) 匹配父元素中第n个子元素（n可以是一个数字，一个关键字，或者一个公式）
  - 参数n时选中所有行
  - 参数为n+i时表示从第i行开始下面的都被选中，如n+3，从第3行开始下面全部选中
  - 参数为-n+i时表示选中前i个元素，如-n+6表示选中前6个
  - 2n表示2的倍数行被选中，选中偶数行
  - 2n+1表示选中奇数行
  - 3n表示每个3行选中一次
  - odd表示奇数，even表示偶数
  
- :nth-last-child(n) 匹配倒数第n个同级兄弟元素
- :nth-of-type(n) 匹配同类型中的第n个同级兄弟元素
- :root 根元素
- :not(selector)

### 7-4 选择器如何工作的

<a data-fancybox title="选择器优先级" href="/youxian.png">![order](/youxian.png)</a>




## 8. 伪类和伪元素的区别
> 两者都是描述不在文本流中的东西。

- 其中伪类用`单冒号`表示，当元素处于某种状态时，为该元素添加样式，如 a 标签的 `hover`；
- 伪元素用`双冒号`表示，为了兼容老浏览器，有时候也会用单冒号表示，作用是创建不在文本流中的元素，并为其添加样式，如 `::before`，在指定元素前添加元素。

## 9. BFC
> BFC 指的是格式化上下文

### 9-1 当一个元素形成 BFC 后:
- 其内部元素的布局不会影响外部元素
- 外部元素的布局不会影响内部元素。  

### 9-2 如何形成BFC
- 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- 表格类元素
- overflow 除了 visible 以外的值 (hidden、auto、scroll)【最常用】

### 9-3 BFC的原理/BFC的布局规则
- BFC 内部的子元素，在垂直方向，边距会发生重叠。
- BFC在页面中是独立的容器，外面的元素不会影响里面的元素，反之亦然。（稍后看举例1）
- BFC区域不与旁边的float box区域重叠。（可以用来清除浮动带来的影响）。（稍后看举例2）
- 计算BFC的高度时，浮动的子元素也参与计算。（稍后看举例3）

### 9-4 BFC的应用
- 解决margin重叠
- 当父元素和子元素发生 margin 重叠时，解决办法：给子元素或父元素创建BFC
- BFC区域不与float区域重叠
- 清除浮动


## 10. 定位

### 10-1 基本含义
- 相对定位，将元素的 position 设为 relative，元素相对于自身 content box 定位，仍占据原来位置空间；
- 绝对定位，将元素的 position 设为 absolute，元素相对于第一个 position 不为 static 的祖先元素的 padding box 定位，元素不占据原来位置空间；
- 固定定位，将元素的 position 设为 fixed，元素相对于浏览器窗口顶部定位，不占据原来位置空间

### 10-2 水平居中
**通用方案**：  
- `行内元素`：父元素是块级元素，给父元素设置text-align:center，父元素不是块级元素，先将父元素设置为块级元素，再给父元素设置text-align:center
- `图片`：给图片设置clear:both;display:block;margin:auto;

**详细方案**：  
- `方案一`：
   1. 宽度定，需要谁居中，就给谁设置margin:0 auto;
   2. 宽度不定，默认子元素宽度与父元素宽度一样，给子元素设置display:inline-block;或display:inline,将其转换成行内块级元素/行内元素，给父元素设置text-align:center
- `方案二`：使用定位属性
  1. 子元素设置绝对定位，父元素设置相对定位，left:50%,margin-left: 子元素的宽度的一半(宽度定),或者transform:translateX(-50%)(宽度不定)
- `方案三`：使用flexbox布局实现（宽度定不定都行）
  1. 父元素设置display:flex;justify-content:center;
   
   
### 10-3 垂直居中
- 单行的行内元素：设置 行高=父元素的高
- 多行的行内元素：父元素设置display:table-cell;vertical-align:middle（行级、块级、图片都通杀）
- 块级元素：  
     1. 方案一：子元素设置绝对定位，父元素设置相对定位，子元素设置top:50%;``margin-top: 子元素高度的一半(高度定)，transform:translateY(-50%);(高度不定)
     2. 方案二：flex布局，给父元素设置display:flex;align-items:center;（行级、块级、图片都通杀）


### 10-4 水平垂直居中

**已知高度和宽度的元素**
1. 方案一：子元素设置绝对定位，父元素设置相对定位，子元素设置left:0;right:0;top:0;bottom:0;margin:auto;
2. 方案二：子元素设置绝对定位，父元素设置相对定位，子元素设置top:50%;left:50%(左上角垂直居中)，margin-top:-子元素高的一半,margin-left:-子元素宽的一半


**未知高度和宽度的元素**
1. 方案一：（定位属性）子元素设置绝对定位，父元素设置相对定位，子元素设置top:50%;left:50%(左上角垂直居中)，transform:translate(-50%,-50%)(根据自身定位实现偏移)
2. 方案二：（flex布局）父元素定义display:flex;justify-content:center;align-items:center;

### 10-4 浮动

**清除浮动的方法**：    

- 父级盒子定义高度（height）;
- 最后一个浮动元素后面加一个div空标签，并且添加样式clear: both;
- 包含浮动元素的父级标签添加样式overflow为hidden/both;
- 父级div定义zoom;

**最好的方法**：    
```
clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
```

那么,clear:both;到底起了什么作用？？？  

- clear是CSS中的定位属性，规定元素的哪一侧不允许其他浮动元素。那么clear:both就是规定在左右两侧均不允许浮动元素。
- clear属性只能在块级元素上其作用，这就是清除浮动样式中display:block的作用。
- 另外visibility: hidden;height: 0;只要content的值为空。写不写都无所谓。



## 11. 布局

### 11-1 两侧定宽，中间自适应
1. `浮动` 左侧设置左浮动，右侧设置右浮动即可，中间会自动地自适应。
2. `绝对定位` 左侧设置为绝对定位， left：0px。右侧设置为绝对定位， right：0px。中间设置为绝对定位，left 和right 都为300px，即可。中间的宽度会自适应。
3. `flexbox布局` 将左中右所在的容器设置为display: flex，设置两侧的宽度后，然后让中间的flex = 1，即可。
4. `表格布局` 设置整个容器的宽度为100%，设置三个部分均为表格(display:table-cell)，然后左边的单元格为 300px，右边的单元格为 300px，即可。中间的单元格会自适应。
5. `网格布局grid` 设置容器为网格布局，宽度为100%，设置网格为三列，并设置每列的宽度，即可。


## 12. margin重叠
### margin重叠的规则

- 当两个margin都是正值的时候，取两者的最大值；
- 当 margin 都是负值的时候，取的是其中绝对值较大的，然后，从 0 位置，负向位移；
- 当有正有负的时候，先取出负 margin 中绝对值中最大的，然后，和正 margin 值中最大的 margin 相加,即取和的绝对值

### margin重叠主要有四种情况的解决：

- **相邻兄弟元素 margin-bottom 和 margin-top 重叠**。可以将其中一个设为 BFC；
- **父子元素 margin-top 重叠**。可以给父元素添加 border-top|padding-top 来分隔父子元素，也可将父元素设为 BFC；
- **父元素高度 auto，父子元素 margin-bottom 重叠**，在第二种情况的解决方案上，还可以给父元素设置 height、min-height、max-height；
- **无内容元素自身 margin-top 与 margin-bottom 重叠**。可以给元素设置 border|padding|height

## 13. 用 css 画三角形

```
.triangle {
  width: 0;
  height: 0;
  border-width: 100px;
  border-style: solid;
  border-color: tomato transparent transparent transparent;  //3边透明，一边不透明
}
```
**奇淫技巧--记住透明边框的数量**：`3点一线` (总共4条线，有3条变成点了，即变透明了，另外一条边还是线，即不透明)

## 14. 实现单行和多行文本溢出添加省略号
- 单行溢出：
```
p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

- 多行溢出：
```
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;  //3行溢出
```

## 15. 常见单位
- px：绝对单位，页面按精确像素展示
- em：相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算（浏览器默认字体是16px），整个页面内1em不是一个固定的值
- rem：相对单位，可理解为”root em”, 相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+支持
- vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%
- vh：viewpoint height，视窗高度，1vh等于视窗高度的1%
- vmin：vw和vh中较小的那个
- vmax：vw和vh中较大的那个
- %:百分比

## 16. CSS有哪些属性可以继承？
1. 字体系列属性：如font，font-family，font-size，font-weight，font-style
2. 文本系列属性：如color，text-indent(文本缩进)，text-align(文本水平对齐)，line-height，word-spacing(字间隔)
3. 元素可见性：visibility
4. 表格布局属性：caption-side、border-collapse、border-spacing、empty-cells、table-layout
5. 列表属性：list-style-type、list-style-image、list-style-position

## 17. CSS3有哪些新特性？

- 选择器;
- 圆角（border-raduis）;
- 多列布局（multi-column layout）;
- 阴影（shadow）和反射（reflect）;
- 文字特效（text-shadow）;
- 文字渲染（text-decoration）;
- 线性渐变（gradient）;
- 旋转（rotate）/缩放（scale）/倾斜（skew）/移动（translate）;
- 媒体查询（@media）;
- RGBA和透明度 ;
- @font-face属性;
- 多背景图 ;
- 盒子大小;
- 语音;

## 18. 为什么要初始化CSS样式？

因为浏览器的兼容问题，不同浏览器对标签的默认值是不同的，如果没有对浏览器的CSS初始化，会造成相同页面在不同浏览器的显示存在差异。

## 19.CSS优化、提高性能的方法有哪些？

- 多个css可合并，并尽量减少http请求
- 属性值为0时，不加单位
- 将css文件放在页面最上面
- 避免后代选择符，过度约束和链式选择符
- 使用紧凑的语法
- 避免不必要的重复
- 使用语义化命名，便于维护
- 尽量少的使用!impotrant，可以选择其他选择器
- 精简规则，尽可能合并不同类的重复规则
- 遵守盒子模型规则

## 20. 什么是回流（重排）和重绘以及其区别？

**回流（重排）**，reflow:当render tree中的一部分（或全部）因为元素的规模`尺寸`，`布局`，`隐藏`等改变时而需要重新构建；  

**重绘（repaint）**:当render tree中的一些元素需要更新属性，而这些属性只影响元素的`外观`，`风格`，而`不会影响布局时`，称其为重绘，例如颜色改变等。

注意：每个页面`至少需要引发一次`重排+重绘，而且`重排（回流）一定`会引发`重绘`。

触发重排（回流）的条件：

- 增加或者删除可见的dom元素；
- 元素的位置发生了改变；
- 元素的尺寸发生了改变，例如边距，宽高等几何属性改变；
- 内容改变，例如图片大小，字体大小改变等；
- 页面渲染初始化；
- 浏览器窗口尺寸改变，例如resize事件发生时等；

## 21.94. border:none;与border:0;有什么区别？

**首先是性能差异**：

- {border：0;}: 把border设置为0像素，虽然在页面上看不到，但是按border`默认值理解`，浏览器依然对border-width/border-color进行了`渲染`，即已经`占用内存值`；
- {border：none；}被理解为border-style:none。boder:0;比border:none`多渲染了一个border-width:0`,也就是为什么border:none的`性能`要比border:0`高`；

**兼容性差异**：

{border:none;}当border为“none”时似乎对IE6/7无效,边框依然存在,当border为“0”时，所有浏览器都一致把边框隐藏。

## 21. BFC、IFC、GFC、FFC是什么？

- Block formatting context(BFC)--`块级`格式化上下文；
- Inline formatting context(IFC)--`内联`格式化上下文；
- Grid formatting context(GFC)--`网格布局`格式化上下文；
- Flex formatting context(FFC)--`自适应`格式化上下文

## 22. CSS属性overflow属性定义溢出元素内容区的内容会如何处理?

- **scroll**: 一定会出滚动条；
- **auto**: 子元素内容大于父元素时出现滚动条；
- **visible**: 溢出的内容出现在父元素之外；
- **hidden**: 溢出隐藏；

## 23. style标签写在body后与body前有什么区别？
一般情况下，页面加载时`自上而下`的。  
将style标签至于body之前，为的是先`加载样式`。 
若是写在body标签之后，由于浏览器以`逐行方式`对html文档进行解析，当解析到写在文档尾部的样式表时，
会导致浏览器`停止之前的渲染`，等待`加载且解析样式表`完成之后会`重新渲染`，在windows的IE下可能会出现FOUC现象（`页面闪烁`）。

## 24. 元素竖向的百分比设定是相对于容器的高度吗？

一般来说，子元素的百分比单位都是以父元素为依据。    
但是margin和padding例外。元素的height是相对于容器的高度，但是元素的margin和padding是相对于容器的宽度。







 

 










