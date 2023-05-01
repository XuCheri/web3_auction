<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-05-01 16:14:00
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-05-01 19:54:29
 * @FilePath: /web3_auction/frontend/src/components/List/List.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-list item-layout="vertical" size="large" :data-source="data">
        <template #renderItem="{ item }">
            <a-list-item key="item.ID">
                <template #extra>
                    <img width="272" height="200" alt="logo" :src="item.imgsrc" />
                </template>
                <a-list-item-meta :description="item.OrderDetailDescription">
                    <template #title>
                        <a href="https://www.antdv.com/">{{ item.OrderName }}</a>
                    </template>
                    <template #avatar>
                        <a-avatar :src="item.avatarSrc" />
                    </template>
                </a-list-item-meta>
                <a-row style="margin-bottom: 20px">
                    <a-col :span="12">
                        拍卖截止时间：{{
                            new Date(new Date(item.AuctionTime).getTime() - 8 * 1000 * 60 * 60)
                                .toString()
                                .split(" ")[3] +
                            " " +
                            new Date(new Date(item.AuctionTime).getTime() - 8 * 1000 * 60 * 60)
                                .toString()
                                .split(" ")[1] +
                            " " +
                            new Date(new Date(item.AuctionTime).getTime() - 8 * 1000 * 60 * 60)
                                .toString()
                                .split(" ")[2] +
                            " " +
                            new Date(new Date(item.AuctionTime).getTime() - 8 * 1000 * 60 * 60)
                                .toString()
                                .split(" ")[4]
                        }}
                    </a-col>
                    <a-col :span="12">
                        合约地址：
                        <a :href="`https://sepolia.etherscan.io/address/` + item.address">{{
                            item.address
                        }}</a>
                    </a-col>
                </a-row>
                <a-row>
                    <a-col :span="12">
                        竞拍获胜者：
                        <a :href="`https://sepolia.etherscan.io/address/` + item.highestBidder">{{
                            item.highestBidder
                        }}</a>
                    </a-col>
                    <a-col :span="12">竞拍获胜者出价：{{ item.highestBid }} wei</a-col>
                </a-row>
            </a-list-item>
        </template>
    </a-list>
</template>
<script setup>
const props = defineProps(["data"])
console.log(props)
</script>
<style scoped>
.flex {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
}
</style>
