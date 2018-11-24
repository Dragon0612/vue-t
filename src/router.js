// 引入路由模块
import VueRouter from "vue-router"

// 引入跟组件模块
import App from "./App.vue"

// 引入自定义组件  这里引入了main.js不需要引入？
import home from './component/tabbar/Home.vue'
import newsList from './component/news/NewsList.vue'
import newsInfo from './component/news/NewsInfo.vue'
import photosList from './component/photos/PhotoList.vue'
import photosInfo from './component/photos/PhotoInfo.vue'
import member from './component/tabbar/Member.vue'
import shopcar from './component/tabbar/Search.vue'
import search from './component/tabbar/Shopcar.vue'

// 创建路由对象
const router = new VueRouter({
    routes:[
        {path:"/home",component:home},
        // 这里不是使用子组件显示因为不需要同时显示父子组件
        {path:"/home/NewsList",component:newsList},
        // 路由传参设置path也要规定,区别于vue-resource前面不加 /
        {path:"/home/NewsInfo/:id",component:newsInfo},
        {path:"/home/photoslist",component:photosList},
        {path:"/member",component:member},
        {path:"/shopcar",component:shopcar},
        {path:"/search",component:search},
        {path:"/",redirect:'/home'},

    ],
    // 设置选中后的类样式名称
    linkActiveClass:'mui-active'
})

// 暴露router.js
export default router