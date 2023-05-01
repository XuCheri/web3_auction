<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-04-28 18:04:34
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-05-01 20:04:21
 * @FilePath: /web3_auction/frontend/src/pages/FinishedAuction.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <List :data="data" />
    <a-back-top />
</template>
<script setup>
import List from "@/components/List/List.vue"
import axios from "axios"
import { ethers } from "ethers"
import { onBeforeMount, ref } from "vue"
onBeforeMount(async () => {
    await axios.get("http://localhost:3000/api/getOrders").then(async (res) => {
        res.data = res.data.filter(
            (order) => new Date(order.AuctionTime).getTime() - 8 * 1000 * 60 * 60 - Date.now() < 0
        )
        res.data.sort((a, b) => {
            return new Date(b.AuctionTime).getTime() - new Date(a.AuctionTime).getTime()
        })
        for (const order of res.data) {
            await getHighestBidder(order.address, order.abi).then((res) => {
                order.highestBidder = res
            })
            await getValue(order.address, order.abi).then((res) => {
                order.highestBid = res
            })
        }
        console.log(res.data)
        data.value = res.data
    })
})
async function getHighestBidder(address, abi) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(address, abi, signer)
    const highestBidder = await contract.highestBidder()
    return highestBidder
}
async function getValue(address, abi) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(address, abi, signer)
    const highestBid = await contract.highestBid()
    return highestBid
}
const data = ref([])
</script>
<style scoped></style>
