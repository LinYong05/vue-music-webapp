# Tomato Music——移动端音乐 WebApp

这是我学习VUE之路的第一个练手项目。慕课网学习地址: http://coding.imooc.com/class/107.html

👉  项目演示地址(接口可能会因为QQ音乐变动导致数据获取失败): https://linyong05.github.io/vue-music-webapp/dist/#/recommend （在 GitHub Pages 中，通过 jsonp 请求的数据会被正常渲染，而由于无 node 服务，通过 axios 请求的数据不会被正常渲染,最主要表现为首页推荐列表、歌词加载不来。）

基于 **Vue 全家桶 (2.x)** 制作的移动端音乐 WebApp ，一个媲美原生的移动端音乐App项目，功能完备，UI美观，交互一流
## Build Setup

## 技术储备要求

- 1、精通HTML、 CSS和JavaScript编程
- 2、有了一定Vue.js 基础和Vue.js的实际开发经验
- 3、已经具备Node.js、npm和webpack的使用经验

## 学习知识点（前端）
- `Vue`：数据绑定及全新的逻辑体验
- `vue-router`：为单页面应用提供的路由系统
- `vuex`：Vue 集中状态管理，有点像临时共享仓库
- `vue-lazyload`：第三方图片懒加载库，优化页面加载速度
- `better-scroll`：滚动插件
- `ES6`：ECMAScript 新一代语法，模块化、解构赋值、Promise、Class 是新的知识点

## 学习知识点（后端）
- `Node.js`：本地测试服务器，基于node.js开发vue项目
- `jsonp`：服务端数据通讯。抓取 QQ音乐(移动端)数据来实现音乐的数据的获取
- `axios`：服务端数据请求。结合 Node.js 代理后端请求，抓取 QQ音乐(PC端)数据

## 收获
1. 收获了一套 Vue 通用组件，可以在其它项目中复用的 10+ 个基础组件、15+ 个业务组件
2. 收获了一套常用的 SCSS mixin 库
3. 体会到组件化、模块化开发带来的便捷
4. 体会到将对象封装成类(ES6 class) 的便捷性，以及利用工厂方式初始化类实例
5. 学会利用 `js` 编写过渡效果及动画效果制作良好的用户交互体验
6. 学会了vue开发思想逻辑


## Build Setup

``` bash
# clone the repo into your disk.
$ git clone https://github.com/LinYong05/vue-music-webapp.git

# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production with minification
$ npm run build
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
