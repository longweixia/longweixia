##  侧边栏需要参考以下配置

```
module.exports = {
	title: '资料库', //标题
	description: 'Hello, my friend!',
	head: [
    
		[
			'script',
			{
				src:
					'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js',
			},
		],
		[
			'script',
			{
				src:
					'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js',
			},
		],
		[
			'link',
			{
				rel: 'stylesheet',
				type: 'text/css',
				href:
					'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css',
			},
		],
		[
			'link',
			{
				rel: 'icon',
				href: `/favicon.ico`,
			},
		],
	],
	themeConfig: {
		nav: [
			{
				text: 'HTML',
				link: '/html/',
			},
			{
				text: 'CSS',
				link: '/css/',
			},
			{
				text: 'language',
				link: '/language/',
			},
		],
		sidebar: [    //注意是数组的形式，推荐数组形式
            {   //只配置2级目录
				path: '/vuePress/',
				title: 'vuePress',
				children: [
					{
                        title: 'vuePress坑',
                        path: '/vuePress/pit'     //这里的pit指的是文件名，它会自动找到vuePress文件夹下的对应文件，显示在侧边栏
					},
					{
                        title: '使用指南',
                        path: '/vuePress/guide'
					},
				
				],
			},
			{   //配置3级目录
				path: '/html/',  //点击html目录会显示html文件夹下的直接子级的md文件，如这里的README.md
				title: 'HTML',
				children: [
					{
						title: 'html基础',
						children: [
							{
								path: '/html/Html/text1', // 以docs为根目录来查找文件，html和Html都是文件夹，text1是文件
								title: 'html基础(1)',
							},
							{
								path: '/html/Html/text2', // 以docs为根目录来查找文件
								title: 'html基础(2)',
							},
						],
					},
					{
						title: '面试',
						children: [
							{
								path: '/html/Interview/text1', // 以docs为根目录来查找文件
                                title: '简单',
                                children:[]
							},
							{
								path: '/html/Interview/text2', // 以docs为根目录来查找文件
								title: '详细',
							},
						],
					},
				],
			},
        ],
		sidebarDepth: 4,
	},
	dest: './docs/.vuepress/dist',
	ga: '',
	evergreen: true,
}

```

##  文章内容参考以下配置
```
需要注意的是，一级标题#，必须有且只有一个，然后就是二级标题，不要一级标题直接跟3级标题，这样侧边栏不会正常显示标题栏的。
具体，参考这个文件： docs\css\Css\1.md
# 以下内容为css 基础篇（1）

## 3. Flex布局
> Flex（Flexible Box）布局 称为 "弹性布局"，可以为网页的布局提供最大的灵活性，取代了往常的 浮动（float） 布局，并且任何一个容器都可以设置 Flex 布局。  
**注**：设置 Flex 布局后，子元素的 Float 布局将失效

### 3-1 Flex中的四大概念
- **容器**： 如果给一个标签添加display:flex;，那么这个标签就是一个容器
- **项目**： 在容器中的直接子元素叫项目（一定是 直接 子元素）
- **主轴**： 项目的默认排序方向就是主轴（默认横向排列，一个容器可以有多根主轴）
- **交叉轴**： 和主轴垂直的那个轴，就是交叉轴

![Flex中的四大概念](https://imgkr2.cn-bj.ufileos.com/07264e28-757e-4a69-beb5-7f3b11fccba1.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=nQVrvIUxvm3Nauuvm8CeRvjcRQ4%253D&Expires=1605004369)

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

![Flex-direction](https://imgkr2.cn-bj.ufileos.com/649ddc32-6d00-4f1a-8f84-fdbaa10977e7.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=MW%252Btr9JmBcDyhtv54lHThQ9ygok%253D&Expires=1605004697)

#### 2.Flex-wrap(属性决定项目排不下时如何换行)
- norwrap（默认）：不换行
- wrap：换行，第一行在上方
- wrap-reverse：换行，第一行在下方

![Flex-wrap](https://imgkr2.cn-bj.ufileos.com/9161a44c-edbd-49d5-9537-701fd179195e.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=m9tHIaqEgP6BSOYr9QRT1Nd2XL4%253D&Expires=1605004754)


```

##  怎么放大图片
```
配置config.js的head


module.exports = {
	title: '资料库', //标题
	description: 'Hello, my friend!',
	head: [
    
		[
			'script',
			{
				src:
					'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js',   //必须
			},
		],
		[
			'script',
			{
				src:
					'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js', //必须
			},
		],
		[
			'link',
			{
				rel: 'stylesheet',
				type: 'text/css',
				href:
					'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css', //必须
			},
		],
		[
			'link',
			{
				rel: 'icon',
				href: `/favicon.ico`,
			},
		],
	],


    然后安装vscode 插件 vuepress-img-format

    安装完后  Ctrl+Shift+8   格式化图片
    安装完后  Ctrl+Shift+9   去除格式化图片


```