<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-20 18:01:14
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-29 16:29:01
 * @FilePath: /web3_auction/frontend/src/pages/OrderList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
// import OrderList from "@/components/OrderList/OrderList.vue"
import OrderLists from "@/components/OrderLists/OrderLists.vue"
import { ref, onBeforeMount, reactive } from "vue"
import axios from "axios"
onBeforeMount(() => {
    axios.get("http://localhost:3000/api/getOrders").then((res) => {
        res.data.map((item) => {
            item.LikesValue = ref(item.LikesValue)
            item.WantsValue = ref(item.WantsValue)
            item.TopBidding = ref(item.TopBidding)
            item.AuctionTime = ref(item.AuctionTime + Date.now())
        })
        orders.value = res.data
    })
})
let orders = ref([])
async function LikesAdd(order) {
    await axios.get("http://localhost:3000/api/Likes?", {
        params: {
            ID: order.ID,
        },
    })
    orders.value[order.ID - 1].LikesValue++
}
function WantsAdd(order) {
    orders.value[order.ID - 1].WantsValue++
}
async function NoLikesAdd(order) {
    await axios.get("http://localhost:3000/api/NoLikes?", {
        params: {
            ID: order.ID,
        },
    })
    orders.value[order.ID - 1].LikesValue--
}
function NoWantsAdd(order) {
    orders.value[order.ID - 1].WantsValue--
}
async function bid(order, NewBidPrice) {
    await axios.get("http://localhost:3000/api/bid?", {
        params: {
            ID: order.ID,
            TopBidding: NewBidPrice,
        },
    })
    orders.value[order.ID - 1].TopBidding = NewBidPrice
}
</script>
<template>
    <a-row :gutter="[24, 8]">
        <OrderLists
            v-for="order in orders"
            :key="order.ID"
            :Author="order.Author"
            :AuthorDescription="order.AuthorDescription"
            :OrderName="order.OrderName"
            :OrderDescription="order.OrderDescription"
            :imgsrc="order.imgsrc"
            :LikesValue="order.LikesValue"
            :WantsValue="order.WantsValue"
            :avatarSrc="order.avatarSrc"
            :AuctionTime="ref(order.AuctionTime)"
            :TopBidding="ref(order.TopBidding)"
            :Reason="order.Reason"
            :City="order.City"
            :Country="order.Country"
            :Email="order.Email"
            :Phone="order.Phone"
            :type="order.type"
            :OrderDetailDescription="order.OrderDetailDescription"
            :columns="order.columns"
            :dataSource="order.dataSource"
            :order="order"
            @bid="bid"
            @LikesAdd="LikesAdd(order)"
            @WantsAdd="WantsAdd(order)"
            @NoLikesAdd="NoLikesAdd(order)"
            @NoWantsAdd="NoWantsAdd(order)"
        />
    </a-row>
    <a-back-top />
</template>
