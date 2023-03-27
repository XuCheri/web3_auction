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
        // AuctionTime: ref(Date.now() + 1000 * 10),
        AuctionTime: ref(Date.now() + 1000 * 60 * 60 * 24 * 1),
        TopBidding: ref(20),
        Reason: "I want to play games so I get a new Xbox Series X",
        City: "Shanghai",
        Country: "China🇨🇳",
        Email: "XuCheri@gmail.com",
        Phone: "+86 18872905868",
        type: "电子产品",
        OrderDetailDescription:
            "Xbox Series X是一款由微软研发并推出的家用电子游戏机。产品接替Xbox One，属于Xbox系列游戏机的第四代。其最初于2019年E3游戏展上以研发代号Project Scarlett公开，后于2019年The Game Awards颁奖典礼上公布正式名称，并计划于2020年11月10日发售产品外观设计采用黑色长方体造型，内部搭载了拥有12 TFLOPS单精度浮点数运算速度的定制版AMD处理器、GDDR6内存和NVMe固态硬盘2021年9月微软宣布，Xbox Series X主机已正式支持杜比视界游戏，玩家将获得全面提升的视觉体验。",
        columns: [
            {
                title: "CPU",
                dataIndex: "CPU",
                key: "CPU",
            },
            {
                title: "GPU",
                dataIndex: "GPU",
                key: "GPU",
            },
            {
                title: "内存",
                dataIndex: "memory",
                key: "memory",
            },
            {
                title: "存储",
                dataIndex: "storage",
                key: "storage",
            },
            {
                title: "电源供应",
                dataIndex: "power",
                key: "power",
            },
            {
                title: "重量",
                dataIndex: "weight",
                key: "weight",
            },
        ],
        dataSource: [
            {
                key: 1,
                CPU: "AMD Zen 2",
                GPU: "AMD RDNA 2",
                memory: "16GB GDDR6",
                storage: "1TB SSD",
                power: "500W",
                weight: "4.5kg",
            },
        ],
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
        AuctionTime: ref(Date.now() + 1000 * 60 * 60 * 24 * 1.5),
        TopBidding: ref(135),
        Reason: "I need money so I want to sell my car",
        City: "Xiamen",
        Country: "China🇨",
        Email: "abcexample@qq.com",
        Phone: "+86 12345678901",
        type: "跑车",
        OrderDetailDescription:
            "兰博基尼从不畏惧挑战，全新Aventador SVJ因此应运而生。集前瞻科技与卓越设计为一身，Aventador SVJ 时刻彰显毫不妥协的极致风范。在科技发展日新月异的未来，情感或将变得越发疏远。而在兰博基尼构建的未来里，真挚的情感不可或缺。因为情感将赋予车辆灵魂。",
        columns: [
            {
                title: "长",
                dataIndex: "long",
                key: "long",
            },
            {
                title: "宽",
                dataIndex: "width",
                key: "width",
            },
            {
                title: "高",
                dataIndex: "height",
                key: "height",
            },
            {
                title: "轴距",
                dataIndex: "wheelbase",
                key: "wheelbase",
            },
            {
                title: "发动机",
                dataIndex: "engine",
                key: "engine",
            },
            {
                title: "百公里加速时间",
                dataIndex: "acceleration",
                key: "acceleration",
            },
            {
                title: "最高时速",
                dataIndex: "topspeed",
                key: "topspeed",
            },
            {
                title: "最大功率",
                dataIndex: "maxpower",
                key: "maxpower",
            },
        ],
        dataSource: [
            {
                key: 1,
                long: "4,680mm",
                width: "2,000mm",
                height: "1,100mm",
                wheelbase: "2,700mm",
                engine: "V12",
                acceleration: "2.8s",
                topspeed: "350km/h",
                maxpower: "770hp",
            },
        ],
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
            :type="order.type"
            :OrderDetailDescription="order.OrderDetailDescription"
            :columns="order.columns"
            :dataSource="order.dataSource"
            @LikesAdd="LikesAdd(order)"
            @WantsAdd="WantsAdd(order)"
            @NoLikesAdd="NoLikesAdd(order)"
            @NoWantsAdd="NoWantsAdd(order)"
        />
    </a-row>
    <a-back-top />
</template>
