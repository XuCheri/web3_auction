/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-20 18:05:15
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-21 15:30:34
 * @FilePath: /web3_auction/src/router/router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
import OrderList from "@/pages/OrderList.vue"
import OrderInfo from "@/pages/OrderInfo.vue"
import Comments from "@/pages/Comments.vue"
import Home from "@/pages/Home.vue"
const routes = [
    { path: "/", component: Home },
    { path: "/OrderList", component: OrderList },
    { path: "/OrderInfo", component: OrderInfo },
    { path: "/Comments", component: Comments },
]
const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes,
})
export default router
