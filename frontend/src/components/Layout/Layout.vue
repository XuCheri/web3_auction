<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" :theme="colors" collapsible>
            <div class="logo" />
            <div class="connect">
                <a-button type="primary" shape="round" @click="connect">
                    <template #icon>
                        <api-outlined />
                    </template>
                    {{ content }}
                </a-button>
            </div>
            <a-menu v-model:selectedKeys="selectedKeys" :theme="colors" mode="inline">
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
                <a-menu-item key="3" :disabled="disabled">
                    <router-link to="/Transactions">
                        <desktop-outlined />
                        <span>订单信息</span>
                    </router-link>
                </a-menu-item>
                <a-sub-menu key="sub1" :disabled="disabled">
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
                <a-sub-menu key="sub2" :disabled="disabled">
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
                <a-menu-item v-if="connected" key="10">
                    <router-link to="/user">
                        <span><user-outlined /> {{ ID }}</span>
                    </router-link>
                </a-menu-item>
            </a-menu>
            <div class="darkMode">
                <a-switch
                    class="darkModeBtn"
                    v-model:checked="checked"
                    checked-children="开"
                    un-checked-children="关"
                />
            </div>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <h1 style="text-align: center">基于区块链的拍卖系统</h1>
            </a-layout-header>
            <a-layout-content style="margin: 0 16px">
                <router-view></router-view>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                <p class="copyright">
                    © 2023, made with
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
                            fill="#111827"
                        />
                    </svg>
                    by <a href="https://github.com/XuCheri">Cheri</a> for a better web
                </p>
            </a-layout-footer>
        </a-layout>
    </a-layout>
    <div class="noWallet" v-if="haveWallet">
        <a-alert
            message="Error"
            description="请在浏览器安装MetaMask插件"
            closable
            :after-close="() => (haveWallet = false)"
            type="warning"
            show-icon
        >
            <template #icon><smile-outlined /></template>
        </a-alert>
    </div>
</template>
<script>
import {
    MoneyCollectOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    CommentOutlined,
    ChromeOutlined,
    ApiOutlined,
    SmileOutlined,
} from "@ant-design/icons-vue"
import { defineComponent, ref, reactive, computed } from "vue"
export default defineComponent({
    components: {
        MoneyCollectOutlined,
        DesktopOutlined,
        UserOutlined,
        TeamOutlined,
        CommentOutlined,
        ChromeOutlined,
        ApiOutlined,
        SmileOutlined,
    },
    setup() {
        async function getAccount() {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                })
                if (accounts.length != 0) {
                    content.value = "已连接"
                    connected.value = true
                    ID.value = accounts[0]
                    // Listen for accounts change
                    ethereum.on("accountsChanged", handleAccountsChanged)
                    disabled.value = false
                } else {
                    console.log("未连接")
                }
            } catch (error) {
                console.log(error)
            }
        }
        getAccount()
        async function connect() {
            // Check if the user has MetaMask installed
            if (typeof window.ethereum != "undefined") {
                // Ask the user to connect their MetaMask wallet
                try {
                    await window.ethereum.request({ method: "eth_requestAccounts" })
                    // Get the user's public key
                    await getAccount()
                } catch (error) {
                    if (error.code === 4001) {
                        // EIP-1193 userRejectedRequest error
                        // If this happens, the user rejected the connection request.
                        console.log("Please connect to MetaMask.")
                    } else {
                        console.error(error)
                    }
                }
            } else {
                // The user doesn't have MetaMask installed
                haveWallet.value = true
            }
        }
        async function handleAccountsChanged(accounts) {
            if (accounts.length === 0) {
                console.log("Please connect to MetaMask.")
                content.value = "连接账户"
                connected.value = false
                disabled.value = true
                const hash = window.location.hash
                // console.log(hash)
                if (hash != "#/" && hash != "#/OrderList" && hash != "#/comments") {
                    window.location.href = "/"
                }
            } else if (accounts[0] !== ID.value) {
                // currentAccount = accounts[0]
                ID.value = accounts[0]
                console.log("已连接")
            } else {
                ID.value = accounts[0]
            }
        }
        // 获取当前的url的虚拟目录部分
        const haveWallet = ref(false)
        const connected = ref(false)
        const content = ref("连接钱包")
        const checked = ref(true)
        const ID = ref("")
        const disabled = ref(true)
        let selectedKeys = ref(["1"])
        function handleSelect() {
            const hash = window.location.hash
            if (hash == "#/") {
                selectedKeys.value = ["1"]
            } else if (hash == "#/OrderList") {
                selectedKeys.value = ["2"]
            } else if (hash == "#/comments") {
                selectedKeys.value = ["9"]
            } else if (hash == "#/user") {
                selectedKeys.value = ["10"]
            }
        }
        handleSelect()

        return {
            handleAccountsChanged,
            ID,
            connected,
            content,
            connect,
            haveWallet,
            checked,
            disabled,
            getAccount,
            colors: computed(() => {
                return checked.value == true ? "dark" : "light"
            }),
            collapsed: ref(false),
            selectedKeys,
            handleSelect,
        }
    },
    // data() {

    // },
})
</script>
<style scoped>
.noWallet {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.connect {
    display: flex;
    justify-content: center;
}
.darkMode {
    display: flex;
    justify-content: center;
    margin-top: 40vh;
}
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
