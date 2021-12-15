(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{233:function(t,s,a){"use strict";a.r(s);var e=a(6),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-配置deploy-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置deploy-sh"}},[t._v("#")]),t._v(" 1. 配置deploy.sh")]),t._v(" "),a("p",[t._v("在根目录创建文件:deploy.sh")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hashbang comment"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n# 确保脚本抛出遇到的错误\nset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e\n\n# 生成静态文件\nnpm run build\n\n# 进入生成的文件夹\ncd docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vuepress"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist\n\n# 如果是发布到自定义域名\n# echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.yourwebsite.com'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CNAME")]),t._v("\n\ngit init\ngit add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v("\ngit commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n# 如果你想要部署到 https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io\n# longweixia分别是账户名和项目名 master是推送的分支\ngit push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("longweixia"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("longweixia"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git master  \n\n# 如果发布到 https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REPO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REPO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("github上的项目\n# git push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f git@github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REPO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git master"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("gh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pages\n\ncd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-配置config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置config-js"}},[t._v("#")]),t._v(" 2. 配置config.js")]),t._v(" "),a("p",[t._v("docs/.vuepress/config.js")]),t._v(" "),a("p",[t._v("base项需要匹配要发布的项目名，如："),a("code",[t._v("base: '/longweixia/',")])]),t._v(" "),a("h2",{attrs:{id:"_3-去github上配置page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-去github上配置page"}},[t._v("#")]),t._v(" 3. 去github上配置page")]),t._v(" "),a("p",[t._v("进入项目（longweixia）的主页面，上面的tab页的最右侧有个settings，点击进入")]),t._v(" "),a("p",[t._v("然后找到左侧的page菜单，进入，然后配置Source项目，分支选默认的master，Select folder选"),a("code",[t._v("/(root)")])]),t._v(" "),a("p",[t._v("配置好后点击保存，可以看到上面显示了配置的page站点，之后就可以用这个页面来访问了(https://longweixia.github.io/longweixia/)")]),t._v(" "),a("h2",{attrs:{id:"_4-现在去提交代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-现在去提交代码"}},[t._v("#")]),t._v(" 4. 现在去提交代码")]),t._v(" "),a("p",[t._v("git add .")]),t._v(" "),a("p",[t._v("git commit -m '提交内容'")]),t._v(" "),a("p",[t._v("git push")]),t._v(" "),a("p",[t._v("提交好后，再输入命令:"),a("code",[t._v("bash deploy.sh")]),t._v("去发布")]),t._v(" "),a("p",[t._v("这时候可能出现无法识别bash指令，没关系，我们用git工具的命令行来操作，找到我们的项目文件夹，右键git bash，然后输入"),a("code",[t._v("bash deploy.sh")])]),t._v(" "),a("p",[t._v("如果此时没问题的话，窗口最后会输出:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("To https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("longweixia"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("longweixia"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" ddd5c08"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".43")]),t._v("dff02 master "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("master")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("forced update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("此时文章就更新了，我们去对应的站点查看。")]),t._v(" "),a("p",[t._v("但是不巧的是很多人这个节点会报错")]),t._v(" "),a("h2",{attrs:{id:"_5-报错处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-报错处理"}},[t._v("#")]),t._v(" 5. 报错处理")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_43705131/article/details/107965888",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考地址"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("如果报这个")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git@github.com: Permission denied (publickey).\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists.\n\n\n")])])]),a("p",[t._v("说明公钥出问题了,需要删除.ssh下文件,然后重设置用户名和邮箱再重新生成ssh公钥即可解决")]),t._v(" "),a("p",[t._v("第一步：")]),t._v(" "),a("p",[t._v("进入"),a("code",[t._v("C:\\Users\\user\\.ssh")]),t._v("删除.ssh下所有所有文件。")]),t._v(" "),a("p",[t._v("第二步：")]),t._v(" "),a("p",[t._v("1.设置用户名")]),t._v(" "),a("p",[a("code",[t._v("git config --global user.name 'longweixia'")])]),t._v(" "),a("p",[t._v("2.设置用户名邮箱")]),t._v(" "),a("p",[a("code",[t._v("git config --global user.email '481033454@qq.com'")])]),t._v(" "),a("p",[t._v("3.查看设置")]),t._v(" "),a("p",[t._v("git config --list")]),t._v(" "),a("p",[t._v("可以看到配置成功了。")]),t._v(" "),a("p",[t._v("4.然后继续输入命令:修改后面的邮箱即可")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ssh-keygen -t rsa -C "481033454@qq.com"\n')])])]),a("p",[t._v("接着一路回车")]),t._v(" "),a("p",[t._v("然后去github上配置")]),t._v(" "),a("p",[t._v("进入个人中心settings，进入左侧的菜单"),a("code",[t._v("SSH and GPG keys")]),t._v("。")]),t._v(" "),a("p",[t._v("点击"),a("code",[t._v("New SSH keys")]),t._v("，然后title输入"),a("code",[t._v("rsa")]),t._v("，key需要去找本地文件的对应的值（找到"),a("code",[t._v("C:\\Users\\user\\.ssh\\id_rsa.pub")]),t._v("，复制里面的值，然后输入到key里面。）")]),t._v(" "),a("p",[t._v("接着再"),a("code",[t._v("bash deploy.sh")]),t._v("就没有问题了")])])}),[],!1,null,null,null);s.default=r.exports}}]);