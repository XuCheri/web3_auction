<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-27 14:10:21
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-18 16:25:49
 * @FilePath: /web3_auction/src/components/Drawer/Drawer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-drawer width="640" placement="right" :closable="false" :visible="visible">
        <p :style="[pStyle, pStyle2]">Details</p>
        <p :style="pStyle">商家信息</p>
        <a-row>
            <a-col :span="12">
                <description-item title="姓名" :content="Author" />
            </a-col>
            <a-col :span="12">
                <description-item title="钱包地址" :content="Address" />
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="12">
                <description-item title="城市" :content="City" />
            </a-col>
            <a-col :span="12">
                <description-item title="国籍" :content="Country" />
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="24">
                <description-item title="描述信息" :content="Reason" />
            </a-col>
        </a-row>
        <a-divider />
        <p :style="pStyle">联系方式</p>
        <a-row>
            <a-col :span="12">
                <description-item title="邮箱">
                    <template #content>
                        <a :href="'mailto:' + Email">
                            {{ Email }}
                        </a>
                    </template>
                </description-item>
            </a-col>
            <a-col :span="12">
                <description-item title="联系电话">
                    <template #content>
                        <a :href="'tel:' + Phone">
                            {{ Phone }}
                        </a>
                    </template>
                </description-item>
            </a-col>
        </a-row>
        <a-divider></a-divider>
        <p :style="pStyle">商品详情</p>
        <a-row>
            <a-col :span="12">
                <description-item title="商品名称" :content="OrderName" />
            </a-col>
            <a-col :span="12">
                <description-item title="商品类别" :content="type" />
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="24">
                <description-item title="商品描述" :content="OrderDescription" />
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="24">
                <description-item title="链上地址">
                    <template #content>
                        <a :href="'https://sepolia.etherscan.io/address/' + add">
                            {{ add }}
                        </a>
                    </template>
                </description-item>
            </a-col>
        </a-row>
        <a-divider></a-divider>
        <p :style="pStyle">参数详情</p>
        <a-row>
            <a-col :span="24">
                <a-table :scroll="{ x: 1000 }" :dataSource="dataSource" :columns="columns" />
            </a-col>
        </a-row>
    </a-drawer>
</template>
<script setup>
import DescriptionItem from "../Description/DescriptionItem.vue"
defineProps([
    "visible",
    "Author",
    "Reason",
    "City",
    "Country",
    "Email",
    "Phone",
    "OrderName",
    "type",
    "OrderDescription",
    "columns",
    "dataSource",
    "Address",
    "add",
])
const pStyle = {
    fontSize: "16px",
    color: "rgba(0,0,0,0.85)",
    lineHeight: "24px",
    display: "block",
    marginBottom: "16px",
}
const pStyle2 = {
    marginBottom: "24px",
}
</script>
