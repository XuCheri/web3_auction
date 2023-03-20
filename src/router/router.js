/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-20 18:05:15
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-20 18:15:18
 * @FilePath: /web3_auction/src/router/router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Demo1 from "../pages/Demo1.vue";
import Demo2 from "../pages/Demo2.vue";
const routes = [
  { path: "/Demo1", component: Demo1 },
  { path: "/Demo2", component: Demo2 },
];
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});
export default router;
