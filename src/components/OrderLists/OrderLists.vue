<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-25 20:54:44
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-25 22:11:35
 * @FilePath: /web3_auction/src/components/OrderLists/OrderLists.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-row :gutter="[24, 8]">
        <a-col :span="6">
            <a-card
                hoverable
                style="width: 350px"
                :tab-list="tabList"
                :active-tab-key="key"
                @tabChange="(key) => onTabChange(key)"
            >
                <a-card-meta v-show="key == 'tab1'" title="Cheri" description="卖家的自我介绍">
                    <template #avatar>
                        <a-avatar :src="avatarArray[getRandomInt()]" />
                    </template>
                </a-card-meta>
                <a-card-meta title="商品" v-show="key == 'tab2'" description="商品信息描述">
                </a-card-meta>
                <template #cover>
                    <img
                        alt="example"
                        src="https://picnew13.photophoto.cn/20181101/kuxuanlanbojini-30790000_1.jpg"
                    />
                </template>
                <template #actions>
                    <setting-outlined key="setting" />
                    <edit-outlined key="edit" />
                    <ellipsis-outlined key="ellipsis" />
                </template>
                <template #title>
                    <h1 class="title">兰博基尼</h1>
                </template>
                <a-row :gutter="[24, 10]">
                    <a-col :span="12">
                        <a-statistic title="Like" :value="1128" style="margin-right: 50px">
                            <template #suffix>
                                <like-outlined />
                            </template>
                        </a-statistic>
                    </a-col>
                    <a-col :span="12">
                        <a-statistic title="Want" :value="9346" class="demo-class"> </a-statistic>
                    </a-col>
                </a-row>
                <a-statistic-countdown
                    title="竞拍结束还剩"
                    :value="Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30"
                    format="HH:mm:ss:SSS"
                    style="margin-right: 50px"
                />
            </a-card>
        </a-col>
        <a-col :span="6">
            <a-card
                hoverable
                style="width: 350px"
                :tab-list="tabList"
                :active-tab-key="key"
                @tabChange="(key) => onTabChange(key)"
            >
                <a-card-meta v-show="key == 'tab1'" title="Cheri" description="卖家的自我介绍">
                    <template #avatar>
                        <a-avatar :src="avatarArray[getRandomInt()]" />
                    </template>
                </a-card-meta>
                <a-card-meta title="商品" v-show="key == 'tab2'" description="商品信息描述">
                </a-card-meta>
                <template #cover>
                    <img
                        alt="example"
                        src="https://picnew13.photophoto.cn/20181101/kuxuanlanbojini-30790000_1.jpg"
                    />
                </template>
                <template #actions>
                    <setting-outlined key="setting" />
                    <edit-outlined key="edit" />
                    <ellipsis-outlined key="ellipsis" />
                </template>
                <template #title>
                    <h1 class="title">兰博基尼</h1>
                </template>
                <a-row :gutter="[24, 10]">
                    <a-col :span="12">
                        <a-statistic title="Like" :value="1128" style="margin-right: 50px">
                            <template #suffix>
                                <like-outlined />
                            </template>
                        </a-statistic>
                    </a-col>
                    <a-col :span="12">
                        <a-statistic title="Want" :value="9346" class="demo-class"> </a-statistic>
                    </a-col>
                </a-row>
                <a-statistic-countdown
                    title="竞拍结束还剩"
                    :value="Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30"
                    format="HH:mm:ss:SSS"
                    style="margin-right: 50px"
                />
            </a-card>
        </a-col>
        <a-col :span="6">
            <a-card
                hoverable
                style="width: 350px"
                :tab-list="tabList"
                :active-tab-key="key"
                @tabChange="(key) => onTabChange(key)"
            >
                <a-card-meta v-show="key == 'tab1'" title="Cheri" description="卖家的自我介绍">
                    <template #avatar>
                        <a-avatar :src="avatarArray[getRandomInt()]" />
                    </template>
                </a-card-meta>
                <a-card-meta title="商品" v-show="key == 'tab2'" description="商品信息描述">
                </a-card-meta>
                <template #cover>
                    <img
                        alt="example"
                        src="https://picnew13.photophoto.cn/20181101/kuxuanlanbojini-30790000_1.jpg"
                    />
                </template>
                <template #actions>
                    <setting-outlined key="setting" />
                    <edit-outlined key="edit" />
                    <ellipsis-outlined key="ellipsis" />
                </template>
                <template #title>
                    <h1 class="title">兰博基尼</h1>
                </template>
                <a-row :gutter="[24, 10]">
                    <a-col :span="12">
                        <a-statistic title="Like" :value="1128" style="margin-right: 50px">
                            <template #suffix>
                                <like-outlined />
                            </template>
                        </a-statistic>
                    </a-col>
                    <a-col :span="12">
                        <a-statistic title="Want" :value="9346" class="demo-class"> </a-statistic>
                    </a-col>
                </a-row>
                <a-statistic-countdown
                    title="竞拍结束还剩"
                    :value="Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30"
                    format="HH:mm:ss:SSS"
                    style="margin-right: 50px"
                />
            </a-card>
        </a-col>
        <a-col :span="6">
            <a-card
                hoverable
                style="width: 350px"
                :tab-list="tabList"
                :active-tab-key="key"
                @tabChange="(key) => onTabChange(key)"
            >
                <a-card-meta v-show="key == 'tab1'" title="Cheri" description="卖家的自我介绍">
                    <template #avatar>
                        <a-avatar :src="avatarArray[getRandomInt()]" />
                    </template>
                </a-card-meta>
                <a-card-meta title="商品" v-show="key == 'tab2'" description="商品信息描述">
                </a-card-meta>
                <template #cover>
                    <img
                        alt="example"
                        src="https://picnew13.photophoto.cn/20181101/kuxuanlanbojini-30790000_1.jpg"
                    />
                </template>
                <template #actions>
                    <setting-outlined key="setting" />
                    <edit-outlined key="edit" />
                    <ellipsis-outlined key="ellipsis" />
                </template>
                <template #title>
                    <h1 class="title">兰博基尼</h1>
                </template>
                <a-row :gutter="[24, 10]">
                    <a-col :span="12">
                        <a-statistic title="Like" :value="1128" style="margin-right: 50px">
                            <template #suffix>
                                <like-outlined />
                            </template>
                        </a-statistic>
                    </a-col>
                    <a-col :span="12">
                        <a-statistic title="Want" :value="9346" class="demo-class"> </a-statistic>
                    </a-col>
                </a-row>
                <a-statistic-countdown
                    title="竞拍结束还剩"
                    :value="Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30"
                    format="HH:mm:ss:SSS"
                    style="margin-right: 50px"
                />
            </a-card>
        </a-col>
        <a-col :span="6">
            <a-card
                hoverable
                style="width: 350px"
                :tab-list="tabList"
                :active-tab-key="key"
                @tabChange="(key) => onTabChange(key)"
            >
                <a-card-meta v-show="key == 'tab1'" title="Cheri" description="卖家的自我介绍">
                    <template #avatar>
                        <a-avatar :src="avatarArray[getRandomInt()]" />
                    </template>
                </a-card-meta>
                <a-card-meta title="商品" v-show="key == 'tab2'" description="商品信息描述">
                </a-card-meta>
                <template #cover>
                    <img
                        alt="example"
                        src="https://picnew13.photophoto.cn/20181101/kuxuanlanbojini-30790000_1.jpg"
                    />
                </template>
                <template #actions>
                    <setting-outlined key="setting" />
                    <edit-outlined key="edit" />
                    <ellipsis-outlined key="ellipsis" />
                </template>
                <template #title>
                    <h1 class="title">兰博基尼</h1>
                </template>
                <a-row :gutter="[24, 10]">
                    <a-col :span="12">
                        <a-statistic title="Like" :value="1128" style="margin-right: 50px">
                            <template #suffix>
                                <like-outlined />
                            </template>
                        </a-statistic>
                    </a-col>
                    <a-col :span="12">
                        <a-statistic title="Want" :value="9346" class="demo-class"> </a-statistic>
                    </a-col>
                </a-row>
                <a-statistic-countdown
                    title="竞拍结束还剩"
                    :value="Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30"
                    format="HH:mm:ss:SSS"
                    style="margin-right: 50px"
                />
            </a-card>
        </a-col>
        <a-col :span="6">
            <a-card
                hoverable
                style="width: 350px"
                :tab-list="tabList"
                :active-tab-key="key"
                @tabChange="(key) => onTabChange(key)"
            >
                <a-card-meta v-show="key == 'tab1'" title="Cheri" description="卖家的自我介绍">
                    <template #avatar>
                        <a-avatar :src="avatarArray[getRandomInt()]" />
                    </template>
                </a-card-meta>
                <a-card-meta title="商品" v-show="key == 'tab2'" description="商品信息描述">
                </a-card-meta>
                <template #cover>
                    <img
                        alt="example"
                        src="https://picnew13.photophoto.cn/20181101/kuxuanlanbojini-30790000_1.jpg"
                    />
                </template>
                <template #actions>
                    <setting-outlined key="setting" />
                    <edit-outlined key="edit" />
                    <ellipsis-outlined key="ellipsis" />
                </template>
                <template #title>
                    <h1 class="title">兰博基尼</h1>
                </template>
                <a-row :gutter="[24, 10]">
                    <a-col :span="12">
                        <a-statistic title="Like" :value="1128" style="margin-right: 50px">
                            <template #suffix>
                                <like-outlined />
                            </template>
                        </a-statistic>
                    </a-col>
                    <a-col :span="12">
                        <a-statistic title="Want" :value="9346" class="demo-class"> </a-statistic>
                    </a-col>
                </a-row>
                <a-statistic-countdown
                    title="竞拍结束还剩"
                    :value="Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30"
                    format="HH:mm:ss:SSS"
                    style="margin-right: 50px"
                />
            </a-card>
        </a-col>
        <a-col :span="6">
            <a-card
                hoverable
                style="width: 350px"
                :tab-list="tabList"
                :active-tab-key="key"
                @tabChange="(key) => onTabChange(key)"
            >
                <a-card-meta v-show="key == 'tab1'" title="Cheri" description="卖家的自我介绍">
                    <template #avatar>
                        <a-avatar :src="avatarArray[getRandomInt()]" />
                    </template>
                </a-card-meta>
                <a-card-meta title="商品" v-show="key == 'tab2'" description="商品信息描述">
                </a-card-meta>
                <template #cover>
                    <img
                        alt="example"
                        src="https://picnew13.photophoto.cn/20181101/kuxuanlanbojini-30790000_1.jpg"
                    />
                </template>
                <template #actions>
                    <setting-outlined key="setting" />
                    <edit-outlined key="edit" />
                    <ellipsis-outlined key="ellipsis" />
                </template>
                <template #title>
                    <h1 class="title">兰博基尼</h1>
                </template>
                <a-row :gutter="[24, 10]">
                    <a-col :span="12">
                        <a-statistic title="Like" :value="1128" style="margin-right: 50px">
                            <template #suffix>
                                <like-outlined />
                            </template>
                        </a-statistic>
                    </a-col>
                    <a-col :span="12">
                        <a-statistic title="Want" :value="9346" class="demo-class"> </a-statistic>
                    </a-col>
                </a-row>
                <a-statistic-countdown
                    title="竞拍结束还剩"
                    :value="Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30"
                    format="HH:mm:ss:SSS"
                    style="margin-right: 50px"
                />
            </a-card>
        </a-col>
        <a-col :span="6">
            <a-card
                hoverable
                style="width: 350px"
                :tab-list="tabList"
                :active-tab-key="key"
                @tabChange="(key) => onTabChange(key)"
            >
                <a-card-meta v-show="key == 'tab1'" title="Cheri" description="卖家的自我介绍">
                    <template #avatar>
                        <a-avatar :src="avatarArray[getRandomInt()]" />
                    </template>
                </a-card-meta>
                <a-card-meta title="商品" v-show="key == 'tab2'" description="商品信息描述">
                </a-card-meta>
                <template #cover>
                    <img
                        alt="example"
                        src="https://picnew13.photophoto.cn/20181101/kuxuanlanbojini-30790000_1.jpg"
                    />
                </template>
                <template #actions>
                    <setting-outlined key="setting" />
                    <edit-outlined key="edit" />
                    <ellipsis-outlined key="ellipsis" />
                </template>
                <template #title>
                    <h1 class="title">兰博基尼</h1>
                </template>
                <a-row :gutter="[24, 10]">
                    <a-col :span="12">
                        <a-statistic title="Like" :value="1128" style="margin-right: 50px">
                            <template #suffix>
                                <like-outlined />
                            </template>
                        </a-statistic>
                    </a-col>
                    <a-col :span="12">
                        <a-statistic title="Want" :value="9346" class="demo-class"> </a-statistic>
                    </a-col>
                </a-row>
                <a-statistic-countdown
                    title="竞拍结束还剩"
                    :value="Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30"
                    format="HH:mm:ss:SSS"
                    style="margin-right: 50px"
                />
            </a-card>
        </a-col>
    </a-row>
</template>
<script setup>
import {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    LikeOutlined,
} from "@ant-design/icons-vue"
import { defineComponent, ref } from "vue"
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
function getRandomInt() {
    return Math.floor(Math.random() * 21)
}
</script>
<style scoped>
.title {
    text-align: center;
}
</style>
