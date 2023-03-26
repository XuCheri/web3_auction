<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-25 20:54:44
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-26 20:23:36
 * @FilePath: /web3_auction/src/components/OrderLists/OrderLists.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-col :span="6">
        <a-card
            hoverable
            style="width: 350px"
            :tab-list="tabList"
            :active-tab-key="key"
            @tabChange="(key) => onTabChange(key)"
        >
            <a-card-meta v-show="key == 'tab1'" :title="Author" :description="AuthorDescription">
                <template #avatar>
                    <a-avatar :src="avatarSrc" />
                </template>
            </a-card-meta>
            <a-card-meta :title="OrderName" v-show="key == 'tab2'" :description="OrderDescription">
            </a-card-meta>
            <template #cover>
                <img alt="example" :src="imgsrc" />
            </template>
            <template #actions>
                <like-filled v-if="!Liked" key="like" @click="Likes" />
                <like-two-tone v-else="Liked" @click="NoLikes" />
                <star-outlined v-if="!Wanted" key="edit" @click="Wants" />
                <star-two-tone v-else="Wanted" @click="NoWants" />
                <pay-circle-filled key="pay" />
            </template>
            <template #title>
                <h1 class="title">{{ OrderName }}</h1>
            </template>
            <a-row :gutter="[24, 10]">
                <a-col :span="8">
                    <a-statistic title="Likes" :value="LikesValue.value" style="margin-right: 50px">
                        <template #suffix>
                            <like-outlined />
                        </template>
                    </a-statistic>
                </a-col>
                <a-col :span="8">
                    <a-statistic title="Wants" :value="WantsValue.value">
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
                title="竞拍结束还剩"
                :value="AuctionTime"
                format="HH:mm:ss:SSS"
                style="margin-right: 50px"
            />
        </a-card>
    </a-col>
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
import { ref, computed } from "vue"
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
])
const TopPrice = computed(() => {
    return props.TopBidding.value + "ETH"
})
const Liked = ref(false)
const Wanted = ref(false)
const emit = defineEmits(["LikesAdd", "WantsAdd", "NoWantsAdd", "NoLikesAdd"])
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
const contentList = {
    tab1: "content1",
    tab2: "content2",
}
const key = ref("tab1")
const onTabChange = (value) => {
    key.value = value
}
</script>
<style scoped>
.title {
    text-align: center;
}
</style>
