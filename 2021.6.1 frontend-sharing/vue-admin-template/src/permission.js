import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // import NProgress from 'nprogress'此条语句导入了进度条插件
  // 在页面前置判定时启动进度条以提升用户体验
  NProgress.start()

  // 从router文件中的元数据获取该页面的title，并调用get-page-title.js中的函数拼接
  // meta: { title: 'Dashboard', icon: 'dashboard' }
  document.title = getPageTitle(to.meta.title)

  // /utils/auth.js中获取cookie中的token
  const hasToken = getToken()

  // 因为需要在登陆状态下访问系统所有的页面，所以判断token是否存在
  if (hasToken) {
    // 有token代表已经登录
    if (to.path === '/login') {
      // 如果存在token,且目标页面是登录页，重定向至主页
      next({ path: '/' })
      // 完成进度条
      NProgress.done()
    } else {
      // 从vuex中取出个人信息
      const hasGetUserInfo = store.getters.name
      // 因为刷新页面后，vuex中的信息会消失，而vuex中的token存储在cookie中重新取得
      // 而个人信息需要重新调用后台接口获取
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // 调用vuex中的方法获取个人信息,await会阻塞后续代码的执行
          await store.dispatch('user/getInfo')
          // 上述Promise状态变为fulfilled后会执行后续代码，否则抛出异常
          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
