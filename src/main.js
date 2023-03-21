/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-20 17:31:06
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-21 12:59:30
 * @FilePath: /web3_auction/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import App from "./App.vue"
import router from "@/router/router"
const app = createApp(App)
app.use(Antd).use(router).mount("#app")
