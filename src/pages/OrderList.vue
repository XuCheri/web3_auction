<script setup>
// import OrderList from "@/components/OrderList/OrderList.vue"
import OrderLists from "@/components/OrderLists/OrderLists.vue"
import { ref } from "vue"
// const productList = [
//     {
//         name: "Product A",
//         price: 9.99,
//     },
//     {
//         name: "Product B",
//         price: 19.99,
//     },
//     // Add more products here...
// ]
const avatarArray = [
    "/avatars/avatar_01.jpg",
    "/avatars/avatar_02.jpg",
    "/avatars/avatar_03.jpg",
    "/avatars/avatar_04.jpg",
    "/avatars/avatar_05.jpg",
    "/avatars/avatar_06.jpg",
    "/avatars/avatar_07.jpg",
    "/avatars/avatar_08.jpg",
    "/avatars/avatar_09.jpg",
    "/avatars/avatar_10.jpg",
    "/avatars/avatar_11.jpg",
    "/avatars/avatar_12.jpg",
    "/avatars/avatar_13.jpg",
    "/avatars/avatar_14.jpg",
    "/avatars/avatar_15.jpg",
    "/avatars/avatar_16.jpg",
    "/avatars/avatar_17.jpg",
    "/avatars/avatar_18.jpg",
    "/avatars/avatar_19.jpg",
    "/avatars/avatar_20.jpg",
    "/avatars/avatar_21.jpg",
]
const orders = [
    {
        ID: 1,
        Author: "Cheri",
        AuthorDescription: "Hello, I am Cheri",
        OrderName: "Xbox Series X",
        OrderDescription: "This is Xbox Series X",
        imgsrc: "https://cdn.microsoftstore.com.cn/media/catalog/product/cache/774160b9511385e1dd8f562f777c0d21/c/o/configure_338338_mic3385.png",
        LikesValue: ref(8127),
        WantsValue: ref(2378),
        avatarSrc: avatarArray[getRandomInt()],
        AuctionTime: Date.now() + 1000 * 60 * 60 * 24 * 1,
        TopBidding: ref(20),
        Reason: "I want to play games so I get a new Xbox Series X",
        City: "Shanghai",
        Country: "China🇨🇳",
        Email: "XuCheri@gmail.com",
        Phone: "+86 18872905868",
    },
    {
        ID: 2,
        Author: "Yuan LK",
        AuthorDescription: "Hello, I am Yuan LK",
        OrderName: "Lamborghini Aventador SVJ",
        OrderDescription: "This is Lamborghini Aventador SVJ",
        imgsrc: "https://picnew13.photophoto.cn/20181101/kuxuanlanbojini-30790000_1.jpg",
        LikesValue: ref(1001),
        WantsValue: ref(0),
        avatarSrc: avatarArray[getRandomInt()],
        AuctionTime: Date.now() + 1000 * 60 * 60 * 24 * 1.5,
        TopBidding: ref(135),
        Reason: "I need money so I want to sell my car",
        City: "Xiamen",
        Country: "China🇨",
        Email: "abcexample@qq.com",
        Phone: "+86 12345678901",
    },
]
function getRandomInt() {
    return Math.floor(Math.random() * 21)
}
function LikesAdd(order) {
    orders[order.ID - 1].LikesValue.value++
}
function WantsAdd(order) {
    orders[order.ID - 1].WantsValue.value++
}
function NoLikesAdd(order) {
    orders[order.ID - 1].LikesValue.value--
}
function NoWantsAdd(order) {
    orders[order.ID - 1].WantsValue.value--
}
</script>
<template>
    <!-- <OrderList :products="productList" /> -->
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
            :AuctionTime="order.AuctionTime"
            :TopBidding="order.TopBidding"
            :Reason="order.Reason"
            :City="order.City"
            :Country="order.Country"
            :Email="order.Email"
            :Phone="order.Phone"
            @LikesAdd="LikesAdd(order)"
            @WantsAdd="WantsAdd(order)"
            @NoLikesAdd="NoLikesAdd(order)"
            @NoWantsAdd="NoWantsAdd(order)"
        />
    </a-row>
</template>
