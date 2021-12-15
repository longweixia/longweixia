(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{258:function(t,e,a){"use strict";a.r(e);var s=a(6),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("上一个项目没用Vuex，几百万行代码的编辑器，全程用的eventBus，照样很香。\n为什么不用呢？因为一开始就没想过用，等到项目快完成了，没人愿意换了。")]),t._v(" "),a("p",[t._v("现在这个项目全局用的是Vuex，好不好用呢？")]),t._v(" "),a("h2",{attrs:{id:"_1-背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[t._v("#")]),t._v(" 1.背景")]),t._v(" "),a("p",[t._v("当我们的应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：")]),t._v(" "),a("ul",[a("li",[t._v("多个视图依赖于同一状态。")]),t._v(" "),a("li",[t._v("来自不同视图的行为需要变更同一状态。"),a("br"),t._v("\n对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。")])]),t._v(" "),a("p",[t._v("对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。")]),t._v(" "),a("h2",{attrs:{id:"_2-什么是vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是vuex"}},[t._v("#")]),t._v(" 2. 什么是Vuex")]),t._v(" "),a("blockquote",[a("p",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。")])]),t._v(" "),a("p",[t._v("也就是说 Vuex 用于单页面应用组件之间的数据共享，在组件嵌套很多层的情况下，Vue 中父子组件的通信过程就变得很麻烦，此时使用 Vuex 方便了组件间的通信。")]),t._v(" "),a("ul",[a("li",[t._v("HTML5 提供的数据存取机制 localStorage ，localStorage 存储的数据存在浏览器中，也就是本地磁盘中，localStorage 多数情况用于页面之间传递数据。")]),t._v(" "),a("li",[t._v("Vuex 是将数据存储在了内存中，每一次刷新页面，之前存在 Vuex 中的数据就会重新初始化。")])]),t._v(" "),a("h2",{attrs:{id:"_3-vuex的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-vuex的优缺点"}},[t._v("#")]),t._v(" 3. Vuex的优缺点")]),t._v(" "),a("p",[a("strong",[t._v("vuex的优点")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("js 原生的数据对象写法, 比起 localStorage 不需要做转换, 使用方便")]),t._v(" "),a("li",[t._v("属于 vue 生态一环, 能够触发响应式的渲染页面更新 (localStorage 就不会)")]),t._v(" "),a("li",[t._v("限定了一种可预测的方式改变数据, 避免大项目中, 数据不小心的污染")])]),t._v(" "),a("p",[a("strong",[t._v("vuex的缺点")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("刷新浏览器，vuex中的state会重新变为初始状态 (解决方案-插件"),a("code",[t._v("vuex-persistedstate")]),t._v(")")])]),t._v(" "),a("h2",{attrs:{id:"_4-为什么要用vuex-它解决了什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-为什么要用vuex-它解决了什么问题"}},[t._v("#")]),t._v(" 4. 为什么要用Vuex，它解决了什么问题")]),t._v(" "),a("ul",[a("li",[t._v("多个组件依赖于同一状态时，对于多层嵌套的组件的传参将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。")]),t._v(" "),a("li",[t._v("来自不同组件的行为需要变更同一状态。以往采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。")])]),t._v(" "),a("p",[a("strong",[t._v("那么？什么场景下我们需要用到Vuex呢？")])]),t._v(" "),a("ul",[a("li",[t._v("多个组件依赖于同一状态时。")]),t._v(" "),a("li",[t._v("来自不同组件的行为需要变更同一状态。")])]),t._v(" "),a("h2",{attrs:{id:"_5-简单使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-简单使用"}},[t._v("#")]),t._v(" 5.简单使用")]),t._v(" "),a("p",[a("strong",[t._v("（1）安装Vuex")])]),t._v(" "),a("p",[t._v("npm install vuex --save")]),t._v(" "),a("p",[a("strong",[t._v("（2）新建Vuex文件")])]),t._v(" "),a("p",[t._v("在src目录下新建store.js")]),t._v(" "),a("p",[a("strong",[t._v("（3）编写store.js中的Vuex内容")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import Vue from \'vue\'\nimport Vuex from \'vuex\'\n\nVue.use(Vuex)\n\nconst state = {    // 组件间共享的数据\n    msg: "你好"\n}\n\nconst getters = { // 获取共享数据\n    getList: state => {\n        return state.list +"吗"\n    }\n}\n\nconst mutations = { // 修改共享数据\n    setList: (state, value) => {    //value就是外部调用传进来的值\n        state.list = value\n    }\n}\n\nactions:{\n    changeList(context,value){\n      /**\n       * 模拟异步的过程，2000毫秒后通过commit()方法执行mumations中的setList方法改变数据\n       * 同样，value可以是单数据或通过对象的方式，传递多个数据\n       * 这里只举例通过对象传递多数据的情况\n       */\n      setTimeout(()=>{\n        context.commit("setList",value)\n      },2000)\n    }\n  }\n\n\nexport default new Vuex.Store({\n    state,\n    getters,\n    mutations,\n    actions\n})\n')])])]),a("p",[a("strong",[t._v("（4）main.js 引入Vuex文件")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import store from \"@/store\"; //引入src下的store.js文件\nnew Vue({\n  router,\n  store,  //注入Vuex\n  i18n,\n  render: h => h(App),\n}).$mount('#app')\n")])])]),a("p",[a("strong",[t._v("（5）外部的vue组件去调用Vuex")])]),t._v(" "),a("blockquote",[a("p",[t._v("a.vue 文件中设置共享数据list")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    <script>\n    //mapMutations是vuex的mutation的辅助函数,用于在组件中映射mutation内的方法\n    //以便在该组件中直接使用mutation里的方法 (说白了，就是一语法糖)，本质上等同于：\n    //this.setList === this.$store.commit('setList') //true\n\n    import { mapMutations } from 'vuex' \n    export default {\n        mounted () {\n            this.setList(['hello'])\n        },\n        methods: {\n            ...mapMutations(['setList'])\n        }\n    }\n    <\/script>\n\n")])])]),a("blockquote",[a("p",[t._v("b.vue 文件中获取共享数据list")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<script>\nimport { mapGetters } from 'vuex' //mapGetters是getters的语法糖,\nimport { mapState } from 'vuex'  //mapState是state的语法糖,\nexport default {\n     computed: {\n        ...mapGetters(['getList' ])\n     },\n     mounted () {\n        console.log(this.getList)               // ['你好吗']\n        console.log(this.$store.state.list)     // ['hello']\n        console.log(this.getList)               // ['hello吗']\n     }\n}\n<\/script>\n")])])]),a("h2",{attrs:{id:"_6-vuex的5大属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-vuex的5大属性"}},[t._v("#")]),t._v(" 6. Vuex的5大属性")]),t._v(" "),a("blockquote",[a("p",[t._v("通过以上的简单案例，可以看到，Vuex在简单场景下还是和好理解的，管理起来也很清晰。\n拆开看，每个属性都比较简单。")])]),t._v(" "),a("h3",{attrs:{id:"_6-1-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-state"}},[t._v("#")]),t._v(" 6-1. state")]),t._v(" "),a("ul",[a("li",[t._v("state是一个数据存储的仓库，所有的数据源都会存放在这里，就类似组件中的data。")]),t._v(" "),a("li",[t._v("在store.js的state中的数据，可以在任意组件中通过this.$store.state访问到。")]),t._v(" "),a("li",[t._v("相比EventBus，需要到处去调用$emit和$on方法去监听数据和拷贝数据副本，做到了数据和视图层的解耦。")])]),t._v(" "),a("p",[t._v("如：我们可以在a.vue中直接获取到list")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('console.log("list======"+this.$store.state.list)\n')])])]),a("h3",{attrs:{id:"_6-2-getter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-getter"}},[t._v("#")]),t._v(" 6-2. Getter")]),t._v(" "),a("ul",[a("li",[t._v("getter主要用于在获取数据时，对数据进行加工后返回。")]),t._v(" "),a("li",[t._v("与EventBus相比，通过Vuex的Getter，我们可以在Store中对数据做统一加工处理，利于日后的项目维护。\n如： 我们打印出Getter")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('console.log("getList======"+this.$store.getters.getList)\n')])])]),a("h3",{attrs:{id:"_6-3-mutation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-mutation"}},[t._v("#")]),t._v(" 6-3. Mutation")]),t._v(" "),a("ul",[a("li",[t._v("通过Mutation我们可以对数据仓中的数据进行修改，我们可以在组建中通过调用this.$store.commit()方法去调用对应的Mutation去修改数据。")]),t._v(" "),a("li",[t._v("Mutation中只能执行"),a("code",[t._v("同步")]),t._v("的方法，如果需要执行异步方法，我们要使用接下来即将登场的Action。")]),t._v(" "),a("li",[t._v("通过"),a("code",[t._v("this.$store.commit()")]),t._v("去调用Action的方法。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//注意，当我们需要传多个参数的时候，就需要把参数放到一个对象中\n this.$store.commit("setList",{"msg1":"早上好","msg2":"，吃饭吗"})\n console.log("list======"+this.$store.state.list.msg1)  //早上好\n')])])]),a("h3",{attrs:{id:"_6-4-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-action"}},[t._v("#")]),t._v(" 6-4. Action")]),t._v(" "),a("ul",[a("li",[t._v("Action和Mutation类似，它只是能够处理"),a("code",[t._v("异步")]),t._v("的情况，"),a("code",[t._v("最终通过commit(")]),t._v(")函数调用Mutation去修改数据。")]),t._v(" "),a("li",[t._v("通过"),a("code",[t._v("this.$store.dispatch()")]),t._v("去调用Action的方法。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//通过Action修改数据\n    this.$store.dispatch("changeList",{"msg":"action修改后的数据"})\n    setTimeout(()=>{\n      console.log("1秒后list======"+this.$store.state.list.msg)  //你好action修改后的数据\n    },1000)\n')])])]),a("h3",{attrs:{id:"_6-5-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-module"}},[t._v("#")]),t._v(" 6-5. Module")]),t._v(" "),a("p",[t._v("当我们项目比较小的时候，直接创建一个Vuex文件就可以了，所有的方法数据都写在一起。")]),t._v(" "),a("p",[t._v("但是，当我们项目越来越大时，我们这个Store中的state和Mutation、Getter、Action的数量和Store的代码行数就会爆炸性的增加，使得我们的Store变得维护困难。这时候我们就需要对Vuex就行模块化了。")]),t._v(" "),a("p",[t._v("这时候，我们希望把Store模块化，然后通过Module整合在一起，例如不同子组件的数据抽取出来写成单独的一个Store。")]),t._v(" "),a("p",[t._v("这时候我们就需要通过Module整合各个模块，然后在将Store挂在在根组件下。")]),t._v(" "),a("p",[a("strong",[t._v("现在我们创建3个新的Store文件")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("index.js   Store，主要负责整合所有的Store模块。")]),t._v(" "),a("li",[t._v("a.js, 主要负责a.vue的数据维护")]),t._v(" "),a("li",[t._v("b.js，主要负责b.vue子组件的数据维护")])]),t._v(" "),a("p",[a("strong",[t._v("首先我们来看a.js和b.js")]),t._v("：")]),t._v(" "),a("p",[a("strong",[t._v("a.js")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('export default {\n  state: {\n    text:""\n  },\n  getters:{\n    gettext(state){\n      return state.text;\n    }\n  },\n  mutations:{\n    changetext(state,payload){\n      state.text=payload\n    }\n  }\n}\n')])])]),a("p",[a("strong",[t._v("b.js")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("export default {\n  state: {\n    bText:[]\n  },\n  getters:{\n    getbText(state){\n      return state.bText;\n    }\n  },\n  mutations:{\n    changebText(state,payload){\n      state.text.push(payload)\n    }\n  }\n}\n")])])]),a("p",[t._v("这里，我们只是通过export default将a和b输出。\n接下来让我们看index.js,它将a.js和b.js整合在一起")]),t._v(" "),a("p",[a("strong",[t._v("index.js")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import Vue from 'vue'\nimport vuex from 'vuex'\nimport a from './a'\nimport b from './b'\nVue.use(vuex)\nexport default new vuex.Store({\n  modules:{\n    a:a,\n    b:b\n  }\n})\n")])])]),a("p",[t._v("在index中我们首先将a.js和b.js通过import引入，然后在Store的modules中将它们两引入。\n接下来我们将index.js挂载在根组件下，我们修改一下main.js：")]),t._v(" "),a("p",[a("strong",[t._v("main.js")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import Vue from 'vue'\nimport App from './App'\nimport router from './router'\nimport vueResource from 'vue-resource'\nimport store from './store/index'   //引用index.js\n// import searchStore from './store/SearchStore'\nVue.use(vueResource)\nVue.config.productionTip = false\n\nnew Vue({\n  el: '#app',\n  router,\n  store,    //修改部分，简写\n  components: { App },\n  template: '<App/>'\n})\n")])])]),a("p",[t._v("这样我们就成功整合了两个Store模块，需要注意的是接下来我们访问state对象的对象时，需要加上模块名："),a("br"),t._v("\n例如，我们要访问a的text的数据时，我们需要使用"),a("code",[t._v("this.$store.state.a.text")]),t._v("进行访问。")]),t._v(" "),a("h2",{attrs:{id:"_7-vuex的辅助函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-vuex的辅助函数"}},[t._v("#")]),t._v(" 7. Vuex的辅助函数")]),t._v(" "),a("blockquote",[a("p",[t._v('import {mapState, mapGetters, mapMutations, mapActions } from "vuex"; //引入辅助函数')])]),t._v(" "),a("h3",{attrs:{id:"_1-mapstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-mapstate"}},[t._v("#")]),t._v(" (1)mapState")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("computed: {\n  localComputed () //本地计算属性\n  //使用对象展开运算符将此对象混入到外部对象中\n  ...mapState({\n    //..\n  })\n")])])]),a("h3",{attrs:{id:"_2-mapgetters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mapgetters"}},[t._v("#")]),t._v(" (2)mapGetters")]),t._v(" "),a("p",[t._v("辅助函数仅仅是将 store 中的 getters 映射到局部计算属性，与state类似")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { mapGetters } from 'vuex'\n \nexport default {\n  // ...\n  computed: {\n  // 使用对象展开运算符将 getters 混入 computed 对象中\n    ...mapGetters([\n      'a',\n      'b',\n      //..\n    ])\n  }\n\n")])])]),a("h2",{attrs:{id:"_3-mapmutations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-mapmutations"}},[t._v("#")]),t._v(" (3)mapMutations")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { mapMutations } from 'vuex'\n \nexport default {\n  //..\n  methods: {\n    ...mapMutations([\n      'increment' // 映射 this.increment() 为 this.$store.commit('increment')\n    ]),\n  }\n\n")])])]),a("h3",{attrs:{id:"_4-mapactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-mapactions"}},[t._v("#")]),t._v(" (4)mapActions")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { mapActions } from 'vuex'\n \nexport default {\n  //..\n  methods: {\n    ...mapActions([\n      'incrementN' //映射 this.incrementN() 为 this.$store.dispatch('incrementN')\n    ])\n  }\n\n")])])]),a("p",[a("strong",[t._v("text.vue  组件中使用模块化的Vuex")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import { mapGetters, mapMutations, mapActions } from "vuex";\n  mounted() {\n        this.tabsValue = this.tabs  //使用注册后的tabs计算属性  \n  },\n\n  computed: {\n       // myOrder是Vuex定义的模块名，这里表示 注册myOrder.js 中的 tabs\n    ...mapGetters(\'myOrder\', [\'tabs\']), \n  },\n  methods: {\n      // myOrder是Vuex定义的模块名，这里表示 注册myOrder.js 中setTabs方法\n    ...mapMutations("myOrder", ["setTabs"])  \n\n    tabsClick(value) {\n      this.setTabs(value)  // 使用上面注册的setTabs方法\n    }\n  }\n\n')])])]),a("p",[a("strong",[t._v("定义的Vuex 其中的一个模块  myOrder.js")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n// 我的订单\nconst myOrder = {\n  // 设置命名空间\n  namespaced: true,\n  state: {\n    tabs: 0\n  },\n  getters: {\n    tabs: state => state.tabs,\n  },\n  mutations: {\n    setTabs(state, tabs = {}) {\n      state.tabs = tabs\n    },\n  },\n  actions: {\n\n  }\n}\nexport default myOrder;\n")])])]),a("h2",{attrs:{id:"_8-vuex的插件-打印日志createlogger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-vuex的插件-打印日志createlogger"}},[t._v("#")]),t._v(" 8. Vuex的插件--打印日志createLogger")]),t._v(" "),a("blockquote",[a("p",[t._v("Vuex 自带一个日志插件用于一般的调试，生成状态快照，对比出改变前后不同的值。"),a("br"),t._v("\n注：logger 插件会生成状态快照，所以仅在开发环境使用")])]),t._v(" "),a("h3",{attrs:{id:"_1-在vuex的文件中引入createlogger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-在vuex的文件中引入createlogger"}},[t._v("#")]),t._v(" (1) 在Vuex的文件中引入createLogger")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import Vue from "vue";\nimport Vuex from "vuex";\n// 直接引入Vuex中的日志组件就可以了，不需要安装依赖，因为是Vuex自带的\nimport createLogger from "vuex/dist/logger"; \nimport state from "./state";\nimport * as actions from "./actions";\nimport * as mutations from "./mutations";\n \nVue.use(Vuex);\n// 开发环境中为true，否则为false\nconst debug = process.env.NODE_ENV !== "production"; \n \nexport default new Vuex.Store({\n    state,\n    actions,\n    mutations,\n    // 开发环境下显示vuex的状态修改，注意：Vuex中所有插件配置需要写在plugins中\n    plugins: debug ? [createLogger()] : []\n});\n')])])]),a("h3",{attrs:{id:"_2-使用后的效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用后的效果"}},[t._v("#")]),t._v(" （2）使用后的效果")]),t._v(" "),a("ul",[a("li",[t._v("prev会列出state中所有执行此方法前的值")]),t._v(" "),a("li",[t._v("当我们通过mutations保存数据的时候，会显示当前执行的mutations方法，这里的savePath就是其中的一个方法,mutation中会列出当前方法以及传递的参数")]),t._v(" "),a("li",[t._v("next会列出state中执行此方法后的值")])]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"flex-shrink",href:"/vuex1.png"}},[a("img",{attrs:{src:"/vuex1.png",alt:"flex-shrink"}})])]),t._v(" "),a("h2",{attrs:{id:"_9-vuex页面刷新数据丢失的解决办法-vuex-persistedstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-vuex页面刷新数据丢失的解决办法-vuex-persistedstate"}},[t._v("#")]),t._v(" 9. vuex页面刷新数据丢失的解决办法--vuex-persistedstate")]),t._v(" "),a("blockquote",[a("p",[t._v("为什么数据会丢失呢？因为"),a("code",[t._v("store")]),t._v("里的数据是保存在"),a("code",[t._v("运行内存")]),t._v("中的,当页面刷新时，页面会"),a("code",[t._v("重新加载vue实例")]),t._v("，store里面的"),a("code",[t._v("数据")]),t._v("就会被"),a("code",[t._v("重新赋值初始化")])])]),t._v(" "),a("h3",{attrs:{id:"_1-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[t._v("#")]),t._v(" (1) 安装")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install vuex-persistedstate  --save\n")])])]),a("h3",{attrs:{id:"_2-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用"}},[t._v("#")]),t._v(" (2) 使用")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import createPersistedState from 'vuex-persistedstate'\n \nconst store = new Vuex.Store({\n  state: {\n    selected_card: {}, //用户选择的银行卡\n  },\n  mutations: {\n    update_selected_card(state, payload) {\n      state.selected_card = payload\n    },\n  },\n    //这是把所有数据缓存到本地 也可以进行配置\n  plugins: [createPersistedState()],\n})\n \nexport default store;\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);