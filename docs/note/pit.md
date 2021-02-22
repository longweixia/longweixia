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
**FetchUserData**函数：
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
### 接口权限
