<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-25 20:54:44
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-10 01:49:45
 * @FilePath: /web3_auction/src/components/OrderLists/OrderLists.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <Transition name="fade">
        <a-col v-if="ended" :span="6">
            <a-card
                hoverable
                style="width: 350px"
                :tab-list="tabList"
                :active-tab-key="Tabkey"
                @tabChange="(Tabkey) => onTabChange(Tabkey)"
            >
                <TransitionGroup name="list">
                    <a-card-meta
                        v-show="Tabkey == 'tab1'"
                        :title="Author"
                        :description="AuthorDescription"
                        key="1"
                    >
                        <template #avatar>
                            <a-avatar :src="avatarSrc" />
                        </template>
                    </a-card-meta>
                    <a-card-meta
                        :title="OrderName"
                        v-show="Tabkey == 'tab2'"
                        :description="OrderDescription"
                        key="2"
                    >
                    </a-card-meta>
                </TransitionGroup>

                <template #extra><a @click="showDrawer">Details</a></template>
                <template #cover>
                    <img alt="example" :src="imgsrc" />
                </template>
                <template #actions>
                    <like-filled v-if="!Liked" key="like" @click="Likes" />
                    <like-two-tone v-else="Liked" @click="NoLikes" />
                    <star-outlined v-if="!Wanted" key="edit" @click="Wants" />
                    <star-two-tone v-else="Wanted" @click="NoWants" />
                    <a-popover :title="`Bid for ${OrderName} with`">
                        <template #content>
                            <a-input-number
                                v-model:value="BidPrice"
                                :min="props.TopBidding.value + 1"
                                :max="10000000"
                                :step="1"
                                style="width: 80%"
                            />
                            <label for="">ETH</label>
                        </template>
                        <pay-circle-filled key="pay" @click="bid" />
                    </a-popover>
                </template>
                <template #title>
                    <h1 class="title">{{ OrderName }}</h1>
                </template>
                <a-row :gutter="[24, 10]">
                    <a-col :span="8">
                        <a-statistic title="Likes" :value="LikesValue" style="margin-right: 50px">
                            <template #suffix>
                                <like-outlined />
                            </template>
                        </a-statistic>
                    </a-col>
                    <a-col :span="8">
                        <a-statistic title="Wants" :value="WantsValue">
                            <template #suffix>
                                <star-outlined />
                            </template>
                        </a-statistic>
                    </a-col>
                    <a-col :span="8">
                        <a-statistic title="Top Bidding" :value="TopPrice">
                            <template #suffix>
                                <transaction-outlined />
                            </template>
                        </a-statistic>
                    </a-col>
                </a-row>
                <a-statistic-countdown
                    @finish="AuctionEnd"
                    title="竞拍结束还剩"
                    :value="AuctionTime.value"
                    format="HH:mm:ss:SSS"
                    style="margin-right: 50px"
                />
            </a-card>
            <Drawer
                :visible="visible"
                @close="onClose"
                :Reason="Reason"
                :Author="Author"
                :City="City"
                :Country="Country"
                :Email="Email"
                :Phone="Phone"
                :OrderName="OrderName"
                :type="type"
                :OrderDescription="OrderDetailDescription"
                :columns="columns"
                :dataSource="dataSource"
                :Address="address"
            />
        </a-col>
    </Transition>
</template>
<script setup>
import {
    LikeFilled,
    LikeTwoTone,
    StarOutlined,
    PayCircleFilled,
    LikeOutlined,
    StarTwoTone,
    TransactionOutlined,
} from "@ant-design/icons-vue"
import { message } from "ant-design-vue"
import Drawer from "../Drawer/Drawer.vue"
import { ref, computed, Transition, onBeforeMount } from "vue"
onBeforeMount(() => {
    if (props.AuctionTime.value - Date.now() <= 0) {
        ended.value = false
    }
})
const key = "updatable"
const ended = ref(true)
function AuctionEnd() {
    ended.value = false
}
const props = defineProps([
    "Author",
    "AuthorDescription",
    "OrderName",
    "OrderDescription",
    "imgsrc",
    "LikesValue",
    "WantsValue",
    "avatarSrc",
    "AuctionTime",
    "TopBidding",
    "Reason",
    "City",
    "Country",
    "Email",
    "Phone",
    "type",
    "OrderDetailDescription",
    "columns",
    "dataSource",
    "order",
    "address",
])
const visible = ref(false)

const showDrawer = () => {
    visible.value = true
}
const onClose = () => {
    visible.value = false
}
const TopPrice = computed(() => {
    return props.TopBidding.value + "ETH"
})
const BidPrice = ref(props.TopBidding.value + 1 || 0)
const Liked = ref(false)
const Wanted = ref(false)
const emit = defineEmits(["LikesAdd", "WantsAdd", "NoWantsAdd", "NoLikesAdd", "bid"])
const bid = () => {
    message.loading({
        content: "Loading...",
        key,
    })
    if (BidPrice.value >= props.TopBidding.value + 1) {
        setTimeout(() => {
            emit("bid", props.order, BidPrice.value)

            // props.TopBidding.value = BidPrice.value
            message.success({
                content: "Bid Success!",
                key,
                duration: 2,
            })
        }, 1000)
    } else {
        setTimeout(() => {
            message.error({
                content: "Bid Price must be higher than Top Bidding",
                key,
                duration: 4,
            })
        }, 2500)
    }
}
const Likes = () => {
    emit("LikesAdd")
    Liked.value = true
}
const NoLikes = () => {
    emit("NoLikesAdd")
    Liked.value = false
}
const Wants = () => {
    emit("WantsAdd")
    Wanted.value = true
}
const NoWants = () => {
    emit("NoWantsAdd")
    Wanted.value = false
}
const tabList = [
    {
        key: "tab1",
        tab: "商家信息",
    },
    {
        key: "tab2",
        tab: "商品介绍",
    },
]
const Tabkey = ref("tab1")
const onTabChange = (value) => {
    Tabkey.value = value
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.title {
    text-align: center;
}
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
    position: absolute;
}
</style>
