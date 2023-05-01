<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-04-28 18:04:34
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-05-01 18:33:53
 * @FilePath: /web3_auction/frontend/src/pages/FinishedAuction.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <List :data="data" />
</template>
<script setup>
import List from "@/components/List/List.vue"
import axios from "axios"
import { onBeforeMount, ref } from "vue"
onBeforeMount(async () => {
    await axios.get("http://localhost:3000/api/getOrders").then((res) => {
        res.data = res.data.filter(
            (order) => new Date(order.AuctionTime).getTime() - 8 * 1000 * 60 * 60 - Date.now() < 0
        )
        res.data.sort((a, b) => {
            return new Date(b.AuctionTime).getTime() - new Date(a.AuctionTime).getTime()
        })
        data.value = res.data
    })
})
const data = ref([])
</script>
<style scoped></style>
