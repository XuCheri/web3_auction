<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-05-01 16:14:00
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-05-01 16:17:08
 * @FilePath: /web3_auction/frontend/src/components/List/List.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-list item-layout="horizontal" :data-source="data">
        <template #renderItem="{ item }">
            <a-list-item>
                <a-list-item-meta
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                    <template #title>
                        <a href="https://www.antdv.com/">{{ item.title }}</a>
                    </template>
                    <template #avatar>
                        <a-avatar src="https://joeschmoe.io/api/v1/random" />
                    </template>
                </a-list-item-meta>
            </a-list-item>
        </template>
    </a-list>
</template>
<script setup>
const props = defineProps(["data"])
</script>
<style scoped></style>
