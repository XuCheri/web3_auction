<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" theme="dark" collapsible>
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <a-menu-item key="1">
                    <router-link to="/">
                        <chrome-outlined />
                        <span>主页</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="2">
                    <router-link to="/OrderList">
                        <money-collect-outlined />
                        <span>商品列表</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="3">
                    <router-link to="/OrderInfo">
                        <desktop-outlined />
                        <span>订单信息</span>
                    </router-link>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                            <user-outlined />
                            <span>用户中心</span>
                        </span>
                    </template>
                    <a-menu-item key="4">Tom</a-menu-item>
                    <a-menu-item key="5">Bill</a-menu-item>
                    <a-menu-item key="6">Alex</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>
                        <span>
                            <team-outlined />
                            <span>Team</span>
                        </span>
                    </template>
                    <a-menu-item key="7">Team 1</a-menu-item>
                    <a-menu-item key="8">Team 2</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <router-link to="/comments">
                        <comment-outlined />
                        <span>评论区</span>
                    </router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <h1 style="text-align: center">基于区块链的拍卖系统</h1>
            </a-layout-header>
            <a-layout-content style="margin: 0 16px">
                <router-view></router-view>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Web3 Auction System ©2023 Created by Cheri
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script>
import {
    MoneyCollectOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    CommentOutlined,
    ChromeOutlined,
} from "@ant-design/icons-vue"
import { defineComponent, ref } from "vue"
export default defineComponent({
    components: {
        MoneyCollectOutlined,
        DesktopOutlined,
        UserOutlined,
        TeamOutlined,
        CommentOutlined,
        ChromeOutlined,
    },
    data() {
        return {
            collapsed: ref(false),
            selectedKeys: ref(["1"]),
        }
    },
})
</script>
<style>
.logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
    background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
    background: #141414;
}
</style>
