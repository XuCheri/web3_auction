<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-04-28 18:04:34
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-05-01 16:22:49
 * @FilePath: /web3_auction/frontend/src/pages/FinishedAuction.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <List :data="data" />
</template>
<script setup>
import List from "@/components/List/List.vue"
import axios from "axios"
import { onBeforeMount } from "vue"
onBeforeMount(async () => {
    await axios.get("http://localhost:3000/api/getOrders").then((res) => {
        console.log(res.data)
    })
})
const data = [
    {
        title: "Ant Design Title 1",
    },
    {
        title: "Ant Design Title 2",
    },
    {
        title: "Ant Design Title 3",
    },
    {
        title: "Ant Design Title 4",
    },
]
</script>
<style scoped></style>
