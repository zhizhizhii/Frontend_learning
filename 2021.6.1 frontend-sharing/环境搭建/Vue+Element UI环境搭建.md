在本次前端技术分享之前，你可以先按步骤做好以下事情：

0、学习HTML+CSS+JS的相关知识：https://www.w3school.com.cn/

**1、搭建Node.js环境：**

- 访问https://nodejs.org/en/下载最新版NodeJS环境即可(选择左侧14.17.0 LTS即可)

<img src=".\document_img\nodejs\1.png" alt="1" style="zoom: 50%;" />

- 根据https://www.bilibili.com/video/BV1ki4y1F72Y上的安装教程进行安装即可

**2、全局安装Webpack**

- Win+R键后输入cmd，回车打开控制台，输入：

  ```shell
  npm install webpack -g
  ```

  等待其安装完成即可

**3、安装Vue脚手架**

- Win+R键后输入cmd，回车打开控制台，输入：

  ```shell
  npm install -g @vue/cli
  ```

- 验证是否安装成功，控制台输入：

  ```shell
  vue --version
  ```

- 显示vue版本即安装成功：

  ```
  @vue/cli 4.5.13
  ```

**4、尝试使用Vue-CLI搭建一个新的项目：**

- 在想创建项目的父级文件夹下输入以下命令：(hello-world是项目名)

  ```
  vue create hello-world
  ```

- 然后控制台中会显示如下内容，你可以定制你想创建的内容，使用上下箭头选择，使用回车键选择，我们在这里选择Manually select features（自定义），回车

  ```shell
  Vue CLI v4.5.13
  ? Please pick a preset: (Use arrow keys)
  > Default ([Vue 2] babel, eslint)
    Default (Vue 3) ([Vue 3] babel, eslint)
    Manually select features
  ```

- 然后会显示如下内容，你可以用上下箭头进行移动，按下空格键，进行选择/取消，项目前方(*)代表了被选中，()代表未被选中，你可以选择如下的几个内容：

  ```shell
  Vue CLI v4.5.13
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
  >(*) Choose Vue version //代表着你是否要选择Vue的版本，vue2.x/vue3.x
   (*) Babel //Babel插件，把项目中的ES6代码转成ES5代码，为了兼容性我们选中
   ( ) TypeScript //是否使用TypeScript开发？我们使用JS，TS是JS的超集
   ( ) Progressive Web App (PWA) Support //现行阶段不需要了解，不选
   (*) Router //是否使用路由，项目中必用，选择
   (*) Vuex //是否使用VueX，项目中会用到，选择
   ( ) CSS Pre-processors //是否使用CSS预处理器？(less sass)，如果CSS基础不好，不选
   ( ) Linter / Formatter //是否验证格式？对新手不友好，不选，但之后练习多后尽量选中
   ( ) Unit Testing //单元测试相关，不选
   ( ) E2E Testing //E2E测试相关，不选
  ```

- 下一步（直接回车，选择vue2.x)

  ```shell
  Vue CLI v4.5.13
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex
  ? Choose a version of Vue.js that you want to start the project with
  > 2.x
    3.x
  ```

- 下一步，选择何种路由模式，我们输入n，选择hash模式（兼容性好）

  ```shell
  Vue CLI v4.5.13
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex
  ? Choose a version of Vue.js that you want to start the project with 2.x
  ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)n
  ```

- 下一步，你想要把一些配置文件集成还是要单独抽离文件方便后续配置？建议选择单独文件，方便维护，直接回车

  ```shell
  Vue CLI v4.5.13
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex
  ? Choose a version of Vue.js that you want to start the project with 2.x
  ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
  ? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
  > In dedicated config files
    In package.json
  ```

- 下一步，是否把上述的选择记住，方便下次创建项目时使用？按需选择，可以直接N，跳过

  ```shell
  Vue CLI v4.5.13
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex
  ? Choose a version of Vue.js that you want to start the project with 2.x
  ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
  ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
  ? Save this as a preset for future projects? (y/N)
  ```

- 开始了自动装包，只需要等待其建立完成：

  ```shell
  Vue CLI v4.5.13
  ✨  Creating project in C:\Users\zhizhizhi\Desktop\前端技术分享前置资料\hello-world.
  ⚙️  Installing CLI plugins. This might take a while...
  
  [       ...........] | postinstall: sill install executeActions
  ```

- 出现了如下信息即创建成功：

  ```shell
  🎉  Successfully created project hello-world.
  👉  Get started with the following commands:
  
   $ cd hello-world
   $ npm run serve
  ```

- 继续在控制台中输入：

  ```shell
  cd hello-world (回车，进入hello-world文件夹)
  ```

  ```shell
  npm run serve (回车，运行)
  ```

  ```
   出现如下信息，即运行成功：
   DONE  Compiled successfully in 2266ms                                                                       下午2:40:38
  
  
    App running at:
    - Local:   http://localhost:8080/
    - Network: http://192.168.50.78:8080/
  
    Note that the development build is not optimized.
    To create a production build, run npm run build.
  ```

- 打开浏览器，URL地址栏中输入: localhost:8080/，出现如下界面即搭建成功！

<img src=".\document_img\1.png" alt="1" style="zoom:50%;" />

**5、尝试向项目中加入Element UI组件库**

- 在控制台中进入项目文件夹，输入：

  ```shell
  npm i element-ui -S
  ```

- 在项目当中的`src/main.js`文件中，加入以下代码：

  ```javascript
  import Vue from 'vue'
  import App from './App.vue'
  import router from './router'
  import store from './store'
  
  //+引入组件库及相关样式
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  
  //让Vue使用ElementUI
  Vue.use(ElementUI)
  
  Vue.config.productionTip = false
  
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  ```

- 在项目`src/App.vue`的template中添加按钮：你也可以访问：https://element.eleme.cn/#/zh-CN/component/button来访问文档并添加其余组件

  ```html
  <template>
    <div id="app">
      <!--尝试添加一个按钮-->
      <el-button type="primary">主要按钮</el-button>
        
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </div>
  </template>
  ```

- 页面中显示Element-UI按钮即访问成功

  <img src=".\document_img\2.png" alt="2" style="zoom:50%;" />

**6、运行Demo项目**

- 进入`vue-admin-template`文件夹

  ```shell
  cd vue-admin-template
  ```

- 安装依赖

  ```shell
  npm install
  ```

- 运行

  ```shell
  npm run dev
  ```
