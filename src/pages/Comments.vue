<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-21 12:51:26
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-21 15:32:13
 * @FilePath: /web3_auction/src/pages/Comments.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import Comments from "@/components/Comments/comments.vue"
import PageHeader from "@/components/PageHeader/PageHeader.vue"
</script>
<template>
    <Layout>
        <Header>
            <PageHeader />
        </Header>
        <a-divider>留言板</a-divider>
        <Layout>
            <Content>
                <Comments />
            </Content>
        </Layout>
    </Layout>
</template>
