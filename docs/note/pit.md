## 1. 什么是后台权限
常见的模块设计是基于 `RBAC`（Role-based Access Control）权限访问控制的,就构造成“用户-角色-权限”的授权模型。 RBAC英文意思是：基于角色的访问控制。
- 也就是说一个用户可以有多个角色
- 一个角色可以有多个权限，通过将角色和权限分离开来提高设计的可扩展性
- 通常一个用户有多个角色，一个角色也会属于多个用户（多对多）
- 一个角色有多个权限，一个权限也会属于多个角色（多对多）。

## 2. 权限划分
> 在实际项目中，权限主要分为：

- 页面级（路由级）
- 接口级
- 菜单级
- 数据级
### 2-1. 页面权限
> 我们的项目是通过左侧的菜单控制页面权限的，左侧的菜单是调用接口返回的，不同的用户登录获取的菜单不一样，菜单是通过另一个系统进行配置的。
- 显示当前用户能访问的权限内菜单，如果用户通过URL进行强制访问，则会直接进入404
#### （1）. 创建路由表
> 路由中有部分是不用做权限控制的，如： 登录注册，404，需要将它们写到默认路由表中

- 这里有一个需要非常注意的地方就是 404 页面一定要最后加载，如果放在默认路由一同声明了404，后面的所以页面都会被拦截到404，
#### （2）. 对路由进行拦截

<details>
  <summary>main.js路由拦截</summary>

```
/**
 * 路径白名单
 *
 * 任意场景都能无阻碍访问
 */
// 1. 建立白名单
const whiteRoutePath = ["/login", "/forget", "/403", "/404", "/500"];
// 2. 路由拦截
router.beforeEach((to, from, next) => {
  // 3. 获取该账号是否审核通过的标识，0 - 未通过， 1 - 通过
  let state = localStorage.getItem("state");
  // 4. 判断路由参数是否携带了token信息，如果携带了，就保存token
  // 这里路由携带token的目的是因为，同时有多个项目，各个项目相互跳转携带token跳到另外一个项目就不用再登录了
  if (to.query.token) {
    Auth.setToken(to.query.token)
  }
  // 5. 有token的时候，才会走路由权限表的路由
  if (Auth.getToken()) {
    if (to.path === "/login" || to.path === "/") {
      next()
    } else {
      // 7. 判断用户id是否为空,注意！由于是放在vueX中的，刷新后id会丢失 
      if (store.getters.user.id === "") {
        // 9. 判断账号是否审核通过
        if (state == 1) {
          // 10. 走FetchUserData函数，获取项目的信息，包括项目的名称，路由，项目，id和对应的路由表
          store.dispatch("FetchUserData").then(apps => {
            const appTarget = to.query.appcode ? to.query.appcode : ""
            // 14 . InitPermissionByApps存储路由表和权限表
            store.dispatch("InitPermissionByApps", {
              apps,
              appTarget
            }).then(() => {
              next()

            })

          }).catch(error => {
            Message.error(error.message)
            Auth.removeToken()
            if (error && error.source === "action") {
              next({
                path: `/${error.redirect}`
              })
            } else {
              //跳转到官网的登录页
              next({
                path: "/login"
              })
            }
          })
        } else {
          next()
        }

      } else {
          // 8. 如果id存在（存id的过程在第9步的FetchUserData函数中，说明此时已经走了一遍全流程了），说明用户登录，此时菜单也全部显示了，点击哪个菜单直接就跳转过去
        next();
      }
    }
  } else {
    // 6. 没有token只能走白名单的路由
    if (whiteRoutePath.indexOf(to.path) > -1) {
      next()
    } else {
      next({
        path: "/login"
      });
    }
  }
  //  next()
});
```

</details>

**FetchUserData**函数：

<details>
  <summary>设置用户信息</summary>

```
FetchUserData({
      commit
    }) {
      return new Promise((resolve, reject) => {
        let urlhost = window.location.hostname
        // 11. 开发环境下，我们也可以通过修改urlhost，来获取测试环境的数据
        if (process.env.NODE_ENV == "development") {
          urlhost = 'apollo.gvtfat.com' //  测试
        // urlhost = 'apollo.gvtdev.com' //  开发环境
        }
        fetchUserByUrl(urlhost).then(response => {
          // 12. 执行一系列的存储用户数据的操作
          // 用户数据源
          const userinfo = response.data;
        
            // mutation 用户 ID
            commit("SET_ID", userinfo.user.id);
            commit("SET_SYSTEM", userinfo.user.system);

            // mutation 用户 名称
            commit("SET_NAME", userinfo.user.name);

            // mutation 商户code
            if (userinfo.tenant && userinfo.tenant.code) {
              commit("SET_TENANT_CODE", userinfo.tenant.code)
            }

            // mutation 商户id
            if (userinfo.tenant && userinfo.tenant.id) {
              commit("SET_TENANT_ID", userinfo.tenant.id);
            }

            // mutation 商户名称
            if (userinfo.tenant && userinfo.tenant.name) {
              commit("SET_TENANT_NAME", userinfo.tenant.name);
            }

            if (userinfo.employee && userinfo.employee.code) {
              commit("SET_TENANT_CODE", userinfo.employee.code)
            }

            if (userinfo.employee && userinfo.employee.tenantId) {
              commit("SET_TENANT_ID", userinfo.employee.tenantId);

            }
            // mutation logo
            if (userinfo.oem && userinfo.oem.companyLogoUrl) {
              commit('SET_LOGO', userinfo.oem.companyLogoUrl);
            }
            commit('USER_TYPE', userinfo.user.userType)
            // mutation 账户
            commit("SET_USERNAME", userinfo.user.userName);

            // mutation 商户 or !商户
            userinfo.user.system === 1 && commit("IS_NOT_TENANT");
          } 

          // resolve apps
          // 13. apps是当前打开项目的信息，包括项目的名称，路由，项目，id和对应的路由表
          resolve(userinfo.apps);

        }).catch(error => {
          reject(error)
        })
      })
    }
```
</details>

### 2-2.接口权限
> 接口权限是放到后端去做的，当该账号没有该接口的权限时，就直接报错。

- 建立一个权限表，一个用户表
- 给用户分配权限

## 3. 具体实现-路由权限
### 3-1. beforeEach路由拦截
注册全部路由，在router.beforeEach中即进入路由前进行判断，如果进入的路由是否有权限，没有的话手动重定向到某个静态路由（不需要权限就能进入的页面，即任何用户都能进入的页面，如404页或首页）

我们在router.beforeEach判断是否有权限进入，需要有三点：

- 在路由配置中做标识，告知该路由需要的权限
- 需要一处地方记录该用户所拥有的权限信息
- 在router.beforeEach结合第1点和第2点进行判断

#### 3-1-1. 路由配置中做标识
- 项目的权限通过ID来表示，即每个权限，用一个ID值来表示。
- 通过路由配置的props项来做标识，authId值表示权限对应的ID值。

<details>
  <summary>展开代码</summary>

```
import Vue from 'vue';
import Router from 'vue-router';

import home from 'home.vue';
import exam1 from 'example1.vue';
import exam2 from 'example2.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/exam1',
        component: exam1,
        props: {
            authId: '100' // 路由id，通常这个id会很长
        }
    },
    {
        path: '/exam2',
        component: exam2,
        props: {
            authId: '200'
        }
    }
];

const router = new Router({
    routes
});

export default router;

```

</details>

上面是设置路由的主文件，从中我们看到，两个页面分别有两个不同的权限ID值，要能够进入页面，就得拥有这两个权限。

#### 3-1-2. 存储权限信息

我们需要找个地方来存储用户的权限信息，如果对用户的权限信息是保存在sessionStorage、localStorage、cookie或url中的话，刷新后还能继续能拿到这些值，那么再根据这些值控制路由访问，这是没多大问题的。但是，这种重要的信息就暴露在外面？万一别人恶心修改了，把自己不能访问的权限改成可以访问呢？

因此上述方法是不建议的。

更合理的方法是存在vuex中，那么存在这里的话，就会面临刷新页面了，vuex的信息也会丢失的问题。

为了解决这个问题，我们同样需要保存一些信息到持久化的一个地方中，但是与上面不同的是，我们不要直接保存权限信息，而是保存一些能发请求获取权限信息的信息，常见的如用户id等。刷新后，根据保存的这些信息发请求重新获取权限信息并存储。

如这里的例子我就设置`sessionStorage.setItem('userId', 1012313);`

**以下为存储权限信息的vuex内容：**

<details>
  <summary>展开代码</summary>

```
// authority.js

import * as types from '../mutation-types';

// state
const state = {
    // 权限id值数组，null为初始化情况，如果为[]代表该用户没有任何权限
    rights: null
};

// getters
const getters = {
    rights: state => state.rights
};

// actions
const actions = {
    /**
     * 设置用户访问权限
     */
    setRights ({ commit }, value) {
        commit(types.SET_RIGHTS, value);
    }
};

// mutations
const mutations = {
    [types.SET_RIGHTS] (state, value) {
        state.rights = value;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};

```

</details>

这里值得一提的是，为什么rights默认值是null而不是[]，原因是用来区分是初始化状态还是真的无任何权限状态。这个有使用场景，特别是针对刷新页面。

就是当你目前在一个非权限路由页面上时，如果你刷新了页面，用户的鉴权还有效，理应还是停留在这个动态路由的页面。

那你怎么判断现在是由于刷新了页面呢，就是通过判断rights是null而不是[]， 如果rights初始值本身就是[]的话，这是无法判断出来的。

那么为null是有两种情况的：

从空tab或别的网站进入到你的网站（如输入url、sso登录跳转过来）；
刷新页面
所以为了进一步区分是刷新行为，则需进一步通过判断sessionStorage里有没有登陆后存储的userId信息，因为如果userId存在了代表登录了，登录了就会进行权限的设置，就自然rights会有值，就算没权限也会是个[]

上面讨论的这些判断行为，都会在router.beforeEach中体现应用到。

#### 3-1-3. 还是在路由主文件中，在全局前置守卫中做判断。

<details>
  <summary>展开代码</summary>

```
import store from '/store';

/**
 * 检查进入的路由是否需要权限控制
 * @param {Object} to - 即将进入的路由对象
 * @param {Object} from - 来自的路由对象
 * @param {Function} next - 路由跳转的函数
 */
const verifyRouteAuthority = async (to, from, next) => {
    // 获取路由的props下的authId信息
    const defaultConfig = to.matched[to.matched.length - 1].props.default;  //获取最后一个路由（即子路由的）的默认配置对象，也就是当前要跳转的路由的信息
    const authId = (defaultConfig && defaultConfig.authId) ? defaultConfig.authId : null;

    // authId存在，表示需要权限控制的页面
    if (authId) {
        // 获取vuex中存储权限信息的模块，authority为vueX的该模块名
        const authorityState = store.state.authority;
        // 为null的场景： 从空tab或别的网站进入到网站（如输入url、sso登录跳转过来）；刷新页面；
        if (authorityState.rights === null) {
            const userId = sessionStorage.getItem('userId');
            //  如果是刷新了导致存储的权限路由配置信息没了，则要重新请求获取权限，判断刷新页是否拥有权限
            if (userId) {
                // 重新获取权限，以下为例子
                const res = await loginService.getRights();
                store.dispatch('setRights', res);
            } else { // 如果是非当页刷新，则跳转到首页
                next({ path: '/' });
                return true;
            }
        }

        // 如果是要进行权限控制的页面，判断是否有对应权限，无则跳转到首页
        if (!authorityState.rights.includes(authId)) {
            next({ path: '/' });
            return true;
        }
    }

    return false;
};

/**
 * 能进入路由页面的处理
 */
const enterRoute = async (to, from, next) => {
    // 进行权限控制校验
    const res = await verifyRouteAuthority(to, from, next);
    // 如果通不过检验已进行内部跳转，则退出该流程
    if (res) {
        return;
    }

    // 进行登录验证以及获取必要的用户信息等操作
    // ...
};

router.beforeEach((to, from, next) => {
    
    // matched是路由记录，包括父路由和子路由组成的数组(如一级路由和二级路由)
    // 一个路由匹配到的所有路由记录会暴露为 $route 对象的 $route.matched 数组。

    // 无匹配路由
    if (to.matched.length === 0) {
        // 跳转到首页 添加query，避免手动跳转丢失参数，例如token
        next({
            path: '/',
            query: to.query
        });
        return;
    }
    enterRoute(to, from, next);
});
```

</details>

#### 3-1-4. 退出清空权限信息
完整的一个方案，别忘了还要针对登出，清空权限信息这步。也很简单，清空，意味着把rights重新置为null，因此执行`store.dispatch('setRights', null);`即可

### 3-2. addRoutes动态注册路由
> addRoutes函数就是用来追加路由注册的。最简单的思路是，当用户登录到系统后，就根据用户的权限来追加注册他能访问的路由。

**一套完整的方案，会有以下几个方面你需要考虑的**

- 切换用户后，权限发生变化，注册的路由也应该要变化，理想情况是删除已注册的动态路由（旧用户的路由信息），然后才重新追加新路由。
- 刷新页面时，如果用户鉴权还通过，那么其权限所允许的页面应该还能继续访问
- 登出系统，即用户退出，需要清除已注册路由

**针对问题一**
目前vue-router不提供删除已注册路由的api，只有一个addRoutes可以动态改变注册路由，其接受一个参数，是个路由配置的数组。

那么如果不做处理，直接采用addRoutes追加注册，就会可能发生追加重复路由的情况

例如用户1拥有 a,b 权限，用户2拥有 a,c 权限。当用户1登录上了，此时路由已注册 a,b 权限对应的路由，然后用户1退出切换到用户2，通过addRoutes把 a,c 权限对应的路由追加注册了，这时候，就会重复注册了a路由，在控制台中会有警告信息，并且原本不属于用户2的b权限也加入到了用户2路由了。

其实如果路由都是完全一样的话，不会影响到实际应用，用户也无是无感知的，只是路由变得累赘。但是如果假设同name的路由却是对应不同的页面路径，这时候我就会有问题了。

因此，我们需要找一个方案，解决可能添加重复路由的问题。

> 有不少资料会让你在切换用户时，在跳转到登录界面时，刷新一下页面，就会变回整个网站初始化的情况，即路由也重新初始化实例，这样登录后就再用addRoutes追加路由就好。

其实上述方案不失为一个好方案，如果你不介意会刷新一下页面的话。甚至你的登录界面就是跟系统不在一个单页面应用的话就更加不用手动刷新了（如有专门的单点登录平台），自然就能在登录后重新进入系统初始化了。

**要说缺点的话：**

- 要重新刷新页面，如果系统网站本身初始化加载很慢的话，那么用户体验很差。
- 如果你的系统权限方面比较复杂，像我开发的系统，权限不仅仅在用户之间，在用户里，不同任务下也有不同权限，这时，就不能用这种方式了，因为切换任务并不会要重新登录

如果你不喜欢上面这个简单的方案的话，不妨继续往下看


<details>
  <summary>展开代码</summary>

```
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 创建路由实例的函数
// 这里的staticRoutes表示你系统的静态路由
const createRouter = () => {
    return new Router({
        routes: staticRoutes
    });
};
/**
 * 重置注册的路由导航map
 * 主要是为了通过addRoutes方法动态注入新路由时，避免重复注册相同name路由
 */
const resetRouter = () => {
    const newRouter = createRouter();
    router && (router.matcher = newRouter.matcher);
};

// 这是伴随vue app实例化的初始化路由实例
const router = createRouter();

export { resetRouter };
export default router;
```
</details>

上面是创建路由的一份代码，除了resetRouter，其余部分跟你原本创建路由的代码并无什么不同。 
而resetRouter的作用就是解决重复问题的关键（router.matcher = newRouter.matcher），这句相当于重置了路由映射关系，抹去了已注册的路由映射关系，跟新的路由实例的映射一样（添加路由前，把路由替换为初始化的静态路由）。

因此，在每次通过addRoutes追加注册路由前，都要使用resetRouter方法来重置一下路由映射，再追加。但是这样仍然是不能百分百避免重复问题，为什么呢？

**以上述代码为例子，如果staticRoutes中有一个路由是拥有children子路由的，如：**
<details>
  <summary>展开代码</summary>

```
//假设原来就有这个路由，现在又要添加下面的子路由，会有问题，导致重复添加
{
    path: '/tsp',
    name: 'TSP',
    component: TSP,
    children: [
        {
            path: 'analysis',
            name: 'analysis',
            component: Analysis
        }
    ]
}
```
</details>

然后你要追加的路由刚好就是在这children中的子路由的话，你就需要追加整个name为TSP的路由了，这时就会发生重复追加已存在的TSP和Analysis的路由了。

为了避免该问题，人为的约定，静态路由staticRoutes中不能是有可能被追加路由（包含子孙路由）的路由。

真要发生上面要追加在子路由的情况，那么把该TSP路由在初始化路由实例后，然后手动追加一次，假装是静态路由，这样在使用resetRouter重置后就不包含TSP路由了，然后再追加这个TSP路由就不会警告重复了。

**针对问题二**
这个问题，我们在第一个方案中也说过了，关于刷新带来的问题以及思考。

思路我们有了，那么在代码的具体什么时机进行操作呢？由于需要进行异步请求，所以不适宜在路由实例初始化时进行，我们在beforeEach中做处理，以下为例子（具体说明是注释中）：

先看vuex中定义存储权限信息的关键代码
<details>
  <summary>展开代码</summary>

```
// authority.js

const state = {
    functionModules: null, // 功能模块权限id值数组，null为初始化情况，如果为[]代表该用户没有任何权限
};

const getters = {
    functionModules: state => state.functionModules
};

const actions = {
    /**
     * 设置用户所拥有的的功能模块访问权限
     */
    setFunctionModules ({ commit, state }, value) {
        // ... 这里省略了实现代码，因为此节重点不在这，后面再详说
    }
};

const mutations = {
    // 设置用户所拥有的的功能模块访问权限
    [types.SET_FUNCTION_MODULES] (state, value) {
        state.functionModules = value;
    }
};
```
</details>

下面是在beforeEach的处理逻辑
<details>
  <summary>展开代码</summary>

```
router.beforeEach((to, from, next) => {
    // 判断是否有匹配路由
    // 由于刷新了页面，路由重新初始化，只有静态路由被注册了，
    // 所以进入这个动态路由页面时，是找不到路由匹配项的
    if (to.matched.length === 0) {
        // 获取存储的用来获取权限信息的信息
        const userId = sessionStorage.getItem('userId');
        // 如果是刷新了导致存储的权限路由配置信息没了，则要重新请求获取权限，判断刷新页是否拥有权限
        // 这里的store.state.authority.functionModules是vuex中存在权限信息的state，是个数组
        // 刷新页面会变回初始值，例子中是null
        // 这个条件判断的目的是区分 1.用户胡乱输入根本不会存在的路由 2. 在某个动态路由上刷新了页面
        // functionModules为null，且保存了userId就代表是第二种情况，
        // 因为如果userId存在了代表登录了，就自然functionModules会有值，就算没权限也会是个[]
        if (store.state.authority.functionModules === null && userId) {
            // 重新获取权限，以下为例子
            http.get('/rights').then(res => {
                // vuex中用于保存权限信息的action
                store.dispatch('setFunctionModules', res);
                router.replace(to);
            });
            return;
        }
        // 跳转到首页 添加query，避免手动跳转丢失参数，例如token
        next({
            path: '/',
            query: to.query
        });
        return;
    }
    // ... 其余的一些有匹配路由的操作
});
```
</details>


**针对问题三**
登出系统，即用户退出，需要清除已注册的动态路由。由于问题二的解决，也需要清除在vuex中的存储信息。

这个问题其实没啥难度的，清空动态路由，用上述的resetRouter即可，清空vuex的信息就置为初始值就。

我为啥这里一提，就是为了提示你还有这么一个流程，别忘记了，一整套完整的方案不能漏了这个。

**addRoutes的缺陷**
上述基本已经描述完一整套实现动态路由的解决方案。但是有些小细节，可以注意一下，提高方案的全面性。

关于addRoutes的详细解释，官方文档也是简单一笔带过，实际动态注入路由是怎么一回事，你会不会觉得注入后，我们写配置里的routes选项值，就是添加了我们追加的内容？很遗憾，并不是这样的。

我们在控制台上打印路由实例router，可以看到其下有个options属性，里面有个routes属性。这个就是我们创建路由实例时的routes选项内容。我们以为通过addRoutes动态注册路由后，新注册的内容也会出现在这个属性里，但结果却是没有。

$router.options.routes的内容只会是在创建实例时生成，后面追加的不会出现在这里。这意味着，在这个版本下的vue-router你没法通过路由实例对象来获知当前已注册的所有路由。假设你的系统有需要利用当然已注册的所有路由来做一些处理的话，你此时就没有这个数据了。因此，我们要自己做一个备份，记录当前已注册的路由，以防不时之需。

我们在刚才的vuex文件中存储这个已注册路由信息，并补充具体的setFunctionModules逻辑

<details>
  <summary>展开代码</summary>

```
// authority.js

import staticRoutes from '@/router/staticRoutes.js';

// 由于vuex的检查机制，不允许存在在mutation外部能改变state值的可能性（特别是赋值类型是数组或对象时），所以要深拷贝一下
const _staticRoutes = JSON.parse(JSON.stringify(staticRoutes));

const state = {
    functionModules: null,
    // 当前已注册的路由，因为通过addRoutes追加的路由不会更新到router对象上，需要自己做记录，以免不时之需
    // _staticRoutes为系统的静止路由
    registeredRoutes: _staticRoutes
};

const getters = {
    functionModules: state => state.functionModules,
    registeredRoutes: state => state.registeredRoutes
};

const actions = {
    /**
     * 设置用户所拥有的的功能模块访问权限
     */
    setFunctionModules ({ commit, state }, value) {
        // 如果和旧值一样，那么就不需重新注册路由
        // 这里举例的系统的权限信息是由一个个权限id组成的数组，所以用以下逻辑判断是否重复，具体项目具体实现
        if (state.functionModules) {
            const _functionModules = state.functionModules.concat();
            _functionModules.sort(Vue.common.numCompare);
            value.sort(Vue.common.numCompare);
            if (_functionModules.toString() === value.toString()) {
                return;
            }
        }
        // 如果没有任何权限
        if (value.length === 0) {
            resetRouter(); // 重置路由映射
            return;
        }
        // 根据权限信息生成动态路由配置
        // createRoutes函数不展开说明，具体项目具体实现
        const dynamicRoutes = createRoutes();
        resetRouter(); // 重置路由映射
        router.addRoutes(dynamicRoutes); // 追加权限路由
         // 由于vuex的检查机制，不允许存在在mutation外部能改变state值的可能性（特别是赋值类型是数组或对象时），所以要深拷贝一下
        const _dynamicRoutes = JSON.parse(JSON.stringify(dynamicRoutes));
        // 记录当前已注册的路由配置
        commit(types.SET_REGISTERED_ROUTES, [..._staticRoutes, ..._dynamicRoutes]);
        // 保存权限信息
        commit(types.SET_FUNCTION_MODULES, value);
    }
};

const mutations = {
    // 生成当前已注册的路由副本
    [types.SET_REGISTERED_ROUTES] (state, value) {
        state.registeredRoutes = value;
    },
    // 设置用户所拥有的的功能模块访问权限
    [types.SET_FUNCTION_MODULES] (state, value) {
        state.functionModules = value;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
```
</details>


对了，如果在VUEX中存储了当前注册路由信息的话，在问题三中，退出登录，也要清除这个信息，把它置为默认情况，即只有静态路由的情况。

```
// 重置已注册的路由副本
[types.RESET_REGISTERED_ROUTES] (state) {
```
**还有一点可能需要知道：**

如果通过addRoutes加入的新路由有在静态路由中的某个路由children中，那么$router.options.routes会更新上去。

小结
以上即为一个完整的动态加载路由的方案，这个方案中要注意的东西，要处理好的细节，都已一一说明了。

总结
三个方案都已经说明了，优缺点大家也能知道。没有说哪个方案更好，甚至最好的方案，选择的标准就是：能满足你项目需求的，在你接受缺陷范围内的最简单的方案 ，这就是对你来说最好的方案。
