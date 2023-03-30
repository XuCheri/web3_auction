<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-21 12:51:01
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-30 18:12:13
 * @FilePath: /web3_auction/src/components/Comments/comments.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-list
        v-if="comments.length"
        :data-source="comments"
        :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
        item-layout="horizontal"
    >
        <template #renderItem="{ item }">
            <a-list-item>
                <a-comment
                    :author="item.author"
                    :avatar="item.avatar"
                    :content="item.content"
                    :datetime="item.datetime"
                />
            </a-list-item>
        </template>
    </a-list>
    <a-comment>
        <template #avatar>
            <a-avatar src="/avatars/avatar_01.jpg" alt="Han Solo" />
        </template>
        <template #content>
            <a-form-item>
                <a-textarea
                    :disabled="connected"
                    placeholder="在这里留下什么吧～"
                    v-model:value="value"
                    :rows="4"
                />
            </a-form-item>
            <a-form-item>
                <a-button
                    html-type="submit"
                    :loading="submitting"
                    type="primary"
                    @click="handleSubmit"
                >
                    Add a Comment
                </a-button>
            </a-form-item>
        </template>
    </a-comment>
</template>
<script>
import { defineComponent, ref, onMounted, onBeforeMount } from "vue"
import { message } from "ant-design-vue"
import dayjs from "dayjs"
import axios from "axios"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)
export default defineComponent({
    setup() {
        const connected = ref(true)
        const comments = ref([])
        const submitting = ref(false)
        const value = ref("")
        const accountsName = ref("")
        // console.log(new Date().)
        onBeforeMount(async () => {
            await axios.get("http://localhost:3000/api/getComments").then((res) => {
                for (const iterator of res.data) {
                    iterator.datetime = dayjs(
                        new Date(iterator.datetime.toString()).getTime() - 8 * 1000 * 60 * 60
                    ).fromNow()
                }
                comments.value = res.data
            })
        })
        onMounted(async () => {
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            })
            ethereum.on("accountsChanged", handleAccountsChanged)
            if (accounts.length != 0) {
                connected.value = false
                accountsName.value = accounts[0]
            }
        })
        function handleAccountsChanged(accounts) {
            if (accounts.length === 0) {
                console.log("Please connect to MetaMask.")
                connected.value = true
                accountsName.value = ""
            } else {
                connected.value = false
                accountsName.value = accounts[0]
                console.log("已连接")
            }
        }
        const handleSubmit = () => {
            if (!value.value) {
                return
            }
            submitting.value = true
            setTimeout(async () => {
                submitting.value = false
                const req = {
                    author: accountsName.value,
                    avatar: "http://localhost:3000/avatars/avatar_12.jpg",
                    content: value.value,
                    datetime: new Date(new Date().getTime() + 8 * 1000 * 3600).toISOString(),
                }
                await axios.get("http://localhost:3000/api/addComment", {
                    params: { ...req },
                })
                comments.value = [req, ...comments.value]
                value.value = ""
                message.success("评论成功")
            }, 1000)
        }
        return {
            connected,
            comments,
            submitting,
            value,
            handleSubmit,
            handleAccountsChanged,
        }
    },
})
</script>
