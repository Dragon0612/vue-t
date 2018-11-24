
// 引入Vue模块
import Vue from "vue"

// 导入router模块
import VueRouter from 'vue-router'
// 安装router功能
Vue.use(VueRouter);

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://vue.lovegf.cn:8899';

// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded


// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})
Vue.http.options.emulateJSON = true;

// 引入根文件
import router from "./router.js"
import App from "./App.vue"

// 引入mui的组件
import { Header, Swipe, SwipeItem,Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

// 引入min-ui文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 创建Vue实例
var vm = new Vue({
    el:"#app",
    // 渲染跟组件
    render:c=>c(App),
    router
})

