/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-20 17:31:06
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-21 12:56:41
 * @FilePath: /web3_auction/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
})
