module.exports = {
	title: '资料库', //标题
	description: 'Hello, my friend!',
	head: [
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
				text: 'JS',
				link: '/js/',
				// items: [
				//     { text: 'JS基础', link: '/' },
				//     { text: 'ES6', link: '/' }
				// ],
			},
		],
		sidebar: [
			{
				path: '/html/',
				title: 'HTML',
				children: [
					{
						title: 'html基础',
						children: [
							{
								path: '/html/Html/text1', // 以docs为根目录来查找文件
								title: 'html基础(1)',
							},
							{
								path: '/html/Html/text2', // 以docs为根目录来查找文件
								title: 'html基础(2)',
							},
							// 上面地址查找的是：docs>js>JS>test.md 文件
							// 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
						],
					},
					{
						title: '面试',
						children: [
							{
								path: '/html/Interview/text1', // 以docs为根目录来查找文件
								title: '简单',
							},
							{
								path: '/html/Interview/text2', // 以docs为根目录来查找文件
								title: '详细',
							},
						],
					},
				],
            },
            {
				path: '/css/',
				title: 'CSS',
				children: [
					{
						title: 'css基础',
						children: [
							{
								path: '/css/Css/text1', // 以docs为根目录来查找文件
								title: 'css基础(1)',
							},
							{
								path: '/css/Css/text2', // 以docs为根目录来查找文件
								title: 'css基础(2)',
							},
							// 上面地址查找的是：docs>js>JS>test.md 文件
							// 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
						],
					},
					{
						title: '面试',
						children: [
							{
								path: '/css/Interview/text1', 
								title: '简单',
							},
							{
								path: '/css/Interview/text2', 
								title: '详细',
							},
						],
					},
				],
            },
            // docs文件夹下面的js文件夹 文档中md文件 书写的位置(命名随意)
			{
				path: '/js/',
				title: 'JS',
				children: [
					// '/js/', // js文件夹的README.md 不是下拉框形式
					{
						title: 'js基础',
						children: [
							{
								path: '/js/JS/jsBase1', // 以docs为根目录来查找文件
								title: 'js基础(1)',
							},
							{
								path: '/js/JS/jsBase2', // 以docs为根目录来查找文件
								title: 'js基础(2)',
							},
							// 上面地址查找的是：docs>js>JS>test.md 文件
							// 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
						],
					},
					{
						title: 'ES6',
						children: [
							{
								path: '/js/ES6/ES61', // 以docs为根目录来查找文件
								title: 'ES6(1)',
							},
							{
								path: '/js/ES6/ES62', // 以docs为根目录来查找文件
								title: 'ES6(2)',
							},
							// 上面地址查找的是：docs>js>JS>test.md 文件
							// 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
						],
					},
					{
						title: '手写函数',
						children: [
							{
								path: '/js/Function/text1', // 以docs为根目录来查找文件
								title: '手写函数(简单)',
							},
							{
								path: '/js/Function/text2', // 以docs为根目录来查找文件
								title: '手写函数(复杂)',
							},
							// 上面地址查找的是：docs>js>JS>test.md 文件
							// 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
						],
					},
				],
            },
			{
				path: '/vue/',
				title: 'Vue',
				children: [
					{
						title: 'vue基础',
						children: [
							{
								path: '/vue/vue/1', 
								title: 'vue基础(1)',
							},
							{
								path: '/vue/vue/2', 
								title: 'vue基础(2)',
							},
						],
					},
					{
						title: '面试',
						children: [
							{
								path: '/vue/Interview/1',
								title: '简单',
							},
							{
								path: '/vue/Interview/2',
								title: '详细',
							},

						],
					},
					{
						title: '源码分析',
						children: [
							{
								path: '/vue/SourceCode/1', 
								title: '源码分析(1)',
							},
						],
					},
					{
						title: 'VUE3.0',
						children: [
							{
								path: '/vue/vue3/1', 
								title: 'VUE3.0(1)',
							},
						],
					},
				],
			},
			{
				path: '/browser/',
				title: '浏览器',
				children: [
					{
						title: 'Http',
						children: [
							{
								path: '/browser/Http/1', 
								title: 'Http基础(1)',
							},
							{
								path: '/browser/Http/2', 
								title: 'Http基础(2)',
							},
						],
					},
					{
						title: '面试',
						children: [
							{
								path: '/browser/Interview/1',
								title: '简单',
							},
							{
								path: '/browser/Interview/2',
								title: '详细',
							},

						],
					},
					{
						title: '浏览器调试',
						children: [
							{
								path: '/browser/Console/1', 
								title: '浏览器调试(1)',
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
