## Vuex

上一个项目没用Vuex，几百万行代码的编辑器，全程用的eventBus，照样很香。
为什么不用呢？因为一开始就没想过用，等到项目快完成了，没人愿意换了。

现在这个项目全局用的是Vuex，好不好用呢？
### 1.背景

当我们的应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：    
- 多个视图依赖于同一状态。
- 来自不同视图的行为需要变更同一状态。  
对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。

对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。


### 2. 什么是Vuex
> Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。   

也就是说 Vuex 用于单页面应用组件之间的数据共享，在组件嵌套很多层的情况下，Vue 中父子组件的通信过程就变得很麻烦，此时使用 Vuex 方便了组件间的通信。  
- HTML5 提供的数据存取机制 localStorage ，localStorage 存储的数据存在浏览器中，也就是本地磁盘中，localStorage 多数情况用于页面之间传递数据。
- Vuex 是将数据存储在了内存中，每一次刷新页面，之前存在 Vuex 中的数据就会重新初始化。

### 3. Vuex的优缺点

**vuex的优点**：

- js 原生的数据对象写法, 比起 localStorage 不需要做转换, 使用方便
- 属于 vue 生态一环, 能够触发响应式的渲染页面更新 (localStorage 就不会)
- 限定了一种可预测的方式改变数据, 避免大项目中, 数据不小心的污染

**vuex的缺点**：

- 刷新浏览器，vuex中的state会重新变为初始状态 (解决方案-插件`vuex-persistedstate`)

### 3.简单使用 (超级丐中丐版)

**（1）安装Vuex**    

npm install vuex

**（2）新建Vuex文件**    

在src目录下新建store.js

**（3）编写store.js中的Vuex内容**    
```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {    // 组件间共享的数据
    msg: "你好"
}

const getters = { // 获取共享数据
    getList: state => {
        return state.list +"吗"
    }
}

const mutations = { // 修改共享数据
    setList: (state, value) => {    //value就是外部调用传进来的值
        state.list = value
    }
}

actions:{
    changeList(context,value){
      /**
       * 模拟异步的过程，2000毫秒后通过commit()方法执行mumations中的setList方法改变数据
       * 同样，value可以是单数据或通过对象的方式，传递多个数据
       * 这里只举例通过对象传递多数据的情况
       */
      setTimeout(()=>{
        context.commit("setList",value)
      },2000)
    }
  }


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
```

**（4）main.js 引入Vuex文件**      
```
import store from "@/store"; //引入src下的store.js文件
new Vue({
  router,
  store,  //注入Vuex
  i18n,
  render: h => h(App),
}).$mount('#app')
```
**（5）外部的vue组件去调用Vuex**   

> a.vue 文件中设置共享数据list

```
    <script>
    //mapMutations是vuex的mutation的辅助函数,用于在组件中映射mutation内的方法
    //以便在该组件中直接使用mutation里的方法 (说白了，就是一语法糖)，本质上等同于：
    //this.setList === this.$store.commit('setList') //true

    import { mapMutations } from 'vuex' 
    export default {
        mounted () {
            this.setList(['hello'])
        },
        methods: {
            ...mapMutations(['setList'])
        }
    }
    </script>

```



> b.vue 文件中获取共享数据list

```
<script>
import { mapGetters } from 'vuex' //mapGetters是getters的语法糖,
import { mapState } from 'vuex'  //mapState是state的语法糖,
export default {
     computed: {
        ...mapGetters(['getList' ])
     },
     mounted () {
        console.log(this.getList)               // ['你好吗']
        console.log(this.$store.state.list)     // ['hello']
        console.log(this.getList)               // ['hello吗']
     }
}
</script>
```

### 4. Vuex的5大属性
> 通过以上的简单案例，可以看到，Vuex在简单场景下还是和好理解的，管理起来也很清晰。
拆开看，每个属性都比较简单。

#### 4-1. state
- state是一个数据存储的仓库，所有的数据源都会存放在这里，就类似组件中的data。
- 在store.js的state中的数据，可以在任意组件中通过this.$store.state访问到。
- 相比EventBus，需要到处去调用$emit和$on方法去监听数据和拷贝数据副本，做到了数据和视图层的解耦。

如：我们可以在a.vue中直接获取到list
```
console.log("list======"+this.$store.state.list)
```

#### 4-2. Getter
- getter主要用于在获取数据时，对数据进行加工后返回。
- 与EventBus相比，通过Vuex的Getter，我们可以在Store中对数据做统一加工处理，利于日后的项目维护。
如： 我们打印出Getter
```
console.log("getList======"+this.$store.getters.getList)
```

#### 4-3. Mutation
- 通过Mutation我们可以对数据仓中的数据进行修改，我们可以在组建中通过调用this.$store.commit()方法去调用对应的Mutation去修改数据。
- Mutation中只能执行`同步`的方法，如果需要执行异步方法，我们要使用接下来即将登场的Action。
- 通过`this.$store.commit()`去调用Action的方法。

```
//注意，当我们需要传多个参数的时候，就需要把参数放到一个对象中
 this.$store.commit("setList",{"msg1":"早上好","msg2":"，吃饭吗"})
 console.log("list======"+this.$store.state.list.msg1)  //早上好
```

#### 4-4. Action
- Action和Mutation类似，它只是能够处理`异步`的情况，`最终通过commit(`)函数调用Mutation去修改数据。
- 通过`this.$store.dispatch()`去调用Action的方法。

```
//通过Action修改数据
    this.$store.dispatch("changeList",{"msg":"action修改后的数据"})
    setTimeout(()=>{
      console.log("1秒后list======"+this.$store.state.list.msg)  //你好action修改后的数据
    },1000)
```

#### 4-5. Module

当我们项目比较小的时候，直接创建一个Vuex文件就可以了，所有的方法数据都写在一起。

但是，当我们项目越来越大时，我们这个Store中的state和Mutation、Getter、Action的数量和Store的代码行数就会爆炸性的增加，使得我们的Store变得维护困难。这时候我们就需要对Vuex就行模块化了。

这时候，我们希望把Store模块化，然后通过Module整合在一起，例如不同子组件的数据抽取出来写成单独的一个Store。

这时候我们就需要通过Module整合各个模块，然后在将Store挂在在根组件下。

**现在我们创建3个新的Store文件**：

1. index.js   Store，主要负责整合所有的Store模块。
2. a.js, 主要负责a.vue的数据维护
3. b.js，主要负责b.vue子组件的数据维护

**首先我们来看a.js和b.js**：

**a.js**
```
export default {
  state: {
    text:""
  },
  getters:{
    gettext(state){
      return state.text;
    }
  },
  mutations:{
    changetext(state,payload){
      state.text=payload
    }
  }
}
```

**b.js**
```
export default {
  state: {
    bText:[]
  },
  getters:{
    getbText(state){
      return state.bText;
    }
  },
  mutations:{
    changebText(state,payload){
      state.text.push(payload)
    }
  }
}
```
这里，我们只是通过export default将a和b输出。
接下来让我们看index.js,它将a.js和b.js整合在一起  

**index.js**
```
import Vue from 'vue'
import vuex from 'vuex'
import a from './a'
import b from './b'
Vue.use(vuex)
export default new vuex.Store({
  modules:{
    a:a,
    b:b
  }
})
```
在index中我们首先将a.js和b.js通过import引入，然后在Store的modules中将它们两引入。
接下来我们将index.js挂载在根组件下，我们修改一下main.js：  

**main.js**
```
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import store from './store/index'   //引用index.js
// import searchStore from './store/SearchStore'
Vue.use(vueResource)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,    //修改部分，简写
  components: { App },
  template: '<App/>'
})
```
这样我们就成功整合了两个Store模块，需要注意的是接下来我们访问state对象的对象时，需要加上模块名：  
例如，我们要访问a的text的数据时，我们需要使用`this.$store.state.a.text`进行访问。









