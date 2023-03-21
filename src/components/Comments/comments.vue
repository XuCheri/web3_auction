<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-21 12:51:01
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-21 15:44:05
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
            <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        </template>
        <template #content>
            <a-form-item>
                <a-textarea v-model:value="value" :rows="4" />
            </a-form-item>
            <a-form-item>
                <a-button
                    html-type="submit"
                    :loading="submitting"
                    type="primary"
                    @click="handleSubmit"
                >
                    Add Comment
                </a-button>
            </a-form-item>
        </template>
    </a-comment>
</template>
<script>
import { defineComponent, ref } from "vue"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)
export default defineComponent({
    setup() {
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
        const comments = ref([])
        const submitting = ref(false)
        const value = ref("")
        function getRandomInt() {
            return Math.floor(Math.random() * 21)
        }

        const handleSubmit = () => {
            if (!value.value) {
                return
            }
            submitting.value = true
            setTimeout(() => {
                submitting.value = false
                comments.value = [
                    {
                        author: "Cheri",
                        avatar: avatarArray[getRandomInt()],
                        content: value.value,
                        datetime: dayjs().fromNow(),
                    },
                    ...comments.value,
                ]
                value.value = ""
            }, 1000)
        }
        return {
            comments,
            submitting,
            value,
            handleSubmit,
        }
    },
})
</script>
