<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-20 18:01:14
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-07 18:50:52
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
            item.AuctionTime = ref(
                new Date(item.AuctionTime.toString()).getTime() - 8 * 1000 * 60 * 60
            )
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
async function WantsAdd(order) {
    axios.get("http://localhost:3000/api/Wants?", {
        params: {
            ID: order.ID,
        },
    })
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
async function NoWantsAdd(order) {
    axios.get("http://localhost:3000/api/NoWants?", {
        params: {
            ID: order.ID,
        },
    })
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
            :address="order.Address"
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
