<template>
    <a-row justify="center" align="middle" :gutter="[24, 8]">
        <a-col :span="24" class="center">
            <a-avatar
                class="avatar"
                :size="100"
                :src="avatarSrc"
                @click="() => onVisibleChange(true, false)"
            >
                <template #icon><UserOutlined /></template>
            </a-avatar>
        </a-col>
        <a-col :span="24" class="center">
            <p>昵称 ：{{ NickName }}</p>
        </a-col>
        <a-col :span="24" class="center">
            <a-button type="primary" shape="round" :size="'24px'" @click="avatarShow">
                变更头像
            </a-button>
        </a-col>
        <a-col class="center" :span="24">
            <p>钱包地址 ：{{ address }}</p>
        </a-col>
    </a-row>
    <Transition name="bounce">
        <a-row justify="center" v-show="choose_avatar" align="middle" :gutter="[24, 8]">
            <a-col :span="16">
                <a-image-preview-group :preview="{ visible, onVisibleChange, current }">
                    <a-image
                        style="border-radius: 50%"
                        v-for="(item, index) in avatarArray"
                        :width="80"
                        @click="choose(index)"
                        :src="item"
                    />
                </a-image-preview-group>
            </a-col>
        </a-row>
    </Transition>
    <a-row justify="center" align="middle" :gutter="[24, 8]"> asdsa </a-row>
</template>
<style scoped>
.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.avatar {
    transition: 0.5s;
}
.avatar:hover {
    transition: 0.8s;
    box-shadow: 0 0px 10px 0px #2f3510;
    cursor: pointer;
}
</style>
<script setup>
import { ref, onBeforeMount } from "vue"
import { UserOutlined } from "@ant-design/icons-vue"
import axios from "axios"
function choose(index) {
    current.value = index
    avatarSrc.value = avatarArray[index]
}
const NickName = ref("")
const choose_avatar = ref(false)
const avatarShow = () => {
    choose_avatar.value = !choose_avatar.value
    if (choose_avatar.value == false) {
        let choosedAvatarNum = current.value + 1
        console.log(choosedAvatarNum)
        axios
            .get("http://localhost:3000/api/changeAvatar", {
                params: {
                    Address: address.value,
                    choosedAvatarNum: choosedAvatarNum,
                },
            })
            .then((res) => {
                console.log(res.data)
            })
    }
}
const getUserInfo = async () => {
    axios
        .get("http://localhost:3000/api/getUsers", {
            params: {
                Address: address.value,
            },
        })
        .then((res) => {
            NickName.value = res.data.NickName
            avatarSrc.value = `http://localhost:3000/avatars/avatar_${res.data.AvatarNum}.jpg`
        })
}
const avatarSrc = ref("")
const address = ref("")
const visible = ref(false)
const current = ref()
const avatarArray = [
    "http://localhost:3000/avatars/avatar_1.jpg",
    "http://localhost:3000/avatars/avatar_2.jpg",
    "http://localhost:3000/avatars/avatar_3.jpg",
    "http://localhost:3000/avatars/avatar_4.jpg",
    "http://localhost:3000/avatars/avatar_5.jpg",
    "http://localhost:3000/avatars/avatar_6.jpg",
    "http://localhost:3000/avatars/avatar_7.jpg",
    "http://localhost:3000/avatars/avatar_8.jpg",
    "http://localhost:3000/avatars/avatar_9.jpg",
    "http://localhost:3000/avatars/avatar_10.jpg",
    "http://localhost:3000/avatars/avatar_11.jpg",
    "http://localhost:3000/avatars/avatar_12.jpg",
    "http://localhost:3000/avatars/avatar_13.jpg",
    "http://localhost:3000/avatars/avatar_14.jpg",
    "http://localhost:3000/avatars/avatar_15.jpg",
    "http://localhost:3000/avatars/avatar_16.jpg",
    "http://localhost:3000/avatars/avatar_17.jpg",
    "http://localhost:3000/avatars/avatar_18.jpg",
    "http://localhost:3000/avatars/avatar_19.jpg",
    "http://localhost:3000/avatars/avatar_20.jpg",
    "http://localhost:3000/avatars/avatar_21.jpg",
    "http://localhost:3000/avatars/avatar_22.jpg",
]
const onVisibleChange = (value, preVisible) => {
    visible.value = value
}
onBeforeMount(async () => {
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    })
    ethereum.on("accountsChanged", handleAccountsChanged)
    if (accounts.length != 0) {
        accounts.value = accounts[0]
        address.value = accounts[0]
    }
    await getUserInfo()
})
async function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        console.log("Please connect to MetaMask.")
        address.value = ""
    } else {
        address.value = accounts[0]
        console.log("已连接")
        await getUserInfo()
    }
}
</script>
