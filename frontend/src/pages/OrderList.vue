<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-20 18:01:14
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-22 19:53:40
 * @FilePath: /web3_auction/frontend/src/pages/OrderList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import OrderLists from "@/components/OrderLists/OrderLists.vue"
import Form from "@/components/Form/Form.vue"
import { ref, onBeforeMount, reactive } from "vue"
import axios from "axios"
const haveOrder = ref(true)

onBeforeMount(async () => {
    await getData()
})
const value = ref("")
const onSearch = async (searchValue) => {
    if (searchValue == "") {
        axios.get("http://localhost:3000/api/getOrders").then((res) => {
            for (const [i, index] of res.data.entries()) {
                if (new Date(index.AuctionTime).getTime() - 8 * 1000 * 60 * 60 - Date.now() > 0) {
                    haveOrder.value = false
                } else {
                    res.data.splice(i, 1)
                }
            }
            if (res.data.length == 0) {
                haveOrder.value = true
                return
            }
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
        return true
    } else {
        axios.get("http://localhost:3000/api/getOrders").then((res) => {
            for (const [i, index] of res.data.entries()) {
                if (new Date(index.AuctionTime).getTime() - 8 * 1000 * 60 * 60 - Date.now() > 0) {
                    haveOrder.value = false
                } else {
                    res.data.splice(i, 1)
                }
            }
            if (res.data.length == 0) {
                haveOrder.value = true
                return
            }
            res.data.map((item) => {
                item.LikesValue = ref(item.LikesValue)
                item.WantsValue = ref(item.WantsValue)
                item.TopBidding = ref(item.TopBidding)
                item.AuctionTime = ref(
                    new Date(item.AuctionTime.toString()).getTime() - 8 * 1000 * 60 * 60
                )
            })
            res.data = res.data.filter((order) => order.OrderName.includes(searchValue))
            orders.value = res.data
        })
    }
}
let orders = ref([])
async function getData() {
    await axios.get("http://localhost:3000/api/getOrders").then((res) => {
        for (const [i, index] of res.data.entries()) {
            if (new Date(index.AuctionTime).getTime() - 8 * 1000 * 60 * 60 - Date.now() > 0) {
                haveOrder.value = false
            } else {
                res.data.splice(i, 1)
            }
        }
        if (res.data.length == 0) {
            haveOrder.value = true
            return
        }
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
}
async function LikesAdd(order) {
    await axios.get("http://localhost:3000/api/Likes?", {
        params: {
            ID: order.ID,
        },
    })
    for (const iterator of orders.value) {
        if (iterator.ID == order.ID) {
            iterator.LikesValue++
        }
    }
}
async function WantsAdd(order) {
    axios.get("http://localhost:3000/api/Wants?", {
        params: {
            ID: order.ID,
        },
    })
    for (const iterator of orders.value) {
        if (iterator.ID == order.ID) {
            iterator.WantsValue++
        }
    }
}
async function NoLikesAdd(order) {
    await axios.get("http://localhost:3000/api/NoLikes?", {
        params: {
            ID: order.ID,
        },
    })
    for (const iterator of orders.value) {
        if (iterator.ID == order.ID) {
            iterator.LikesValue--
        }
    }
}
async function NoWantsAdd(order) {
    axios.get("http://localhost:3000/api/NoWants?", {
        params: {
            ID: order.ID,
        },
    })
    for (const iterator of orders.value) {
        if (iterator.ID == order.ID) {
            iterator.WantsValue--
        }
    }
}
async function bid(order, NewBidPrice) {
    await axios.get("http://localhost:3000/api/bid?", {
        params: {
            ID: order.ID,
            TopBidding: NewBidPrice,
        },
    })
    for (const iterator of orders.value) {
        if (iterator.ID == order.ID) {
            iterator.TopBidding = NewBidPrice
        }
    }
}
</script>
<template>
    <a-row justify="space-between" style="margin-top: 25px">
        <a-col :span="6">
            <a-input-search
                v-model:value="value"
                placeholder="input search text"
                enter-button
                @search="onSearch"
            />
        </a-col>
        <a-col :span="6"><Form @getData="getData" /></a-col>
    </a-row>
    <a-empty v-if="haveOrder"></a-empty>

    <a-divider v-if="!haveOrder">商品列表</a-divider>
    <a-row :gutter="[24, 8]">
        <TransitionGroup name="fade">
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
                :abi="order.abi"
                :add="order.address"
                @bid="bid"
                @LikesAdd="LikesAdd(order)"
                @WantsAdd="WantsAdd(order)"
                @NoLikesAdd="NoLikesAdd(order)"
                @NoWantsAdd="NoWantsAdd(order)"
            />
        </TransitionGroup>
    </a-row>
    <a-back-top />
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
