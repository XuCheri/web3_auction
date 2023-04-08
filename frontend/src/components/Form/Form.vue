<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-04-08 20:06:07
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-08 20:53:28
 * @FilePath: /web3_auction/frontend/src/components/Form/Form.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <a-button type="primary" @click="visible = true">创建拍卖</a-button>
        <a-modal
            v-model:visible="visible"
            title="创建一个新的拍卖"
            ok-text="创建"
            cancel-text="取消"
            @ok="onOk"
        >
            <a-form ref="formRef" :model="formState" layout="vertical" name="form_in_modal">
                <a-form-item
                    name="OrderName"
                    label="商品名称"
                    :rules="[{ required: true, message: '请输入商品名称' }]"
                >
                    <a-input v-model:value="formState.OrderName" />
                </a-form-item>
                <a-form-item
                    name="OrderDescription"
                    label="商品描述"
                    :rules="[{ required: true, message: '一句话介绍一下商品' }]"
                >
                    <a-textarea v-model:value="formState.OrderDescription" />
                </a-form-item>
                <a-form-item
                    name="TopBidding"
                    label="起拍价格"
                    :rules="[{ required: true, message: '请输入正确的起拍价格' }]"
                >
                    <a-input-number
                        :min="1"
                        style="width: 100%"
                        v-model:value="formState.TopBidding"
                    >
                        <template #addonAfter>
                            <a-select v-model:value="addonAfterValue" style="width: 60px">
                                <a-select-option value="ETH">ETH</a-select-option>
                                <a-select-option value="CNY">¥</a-select-option>
                            </a-select>
                        </template>
                    </a-input-number>
                </a-form-item>
                <a-divider>个人信息</a-divider>
                <a-form-item
                    name="Country"
                    label="国籍"
                    :rules="[{ required: true, message: '请输入您的国籍' }]"
                >
                    <a-input v-model:value="formState.Country" />
                </a-form-item>
                <a-form-item
                    name="City"
                    label="城市"
                    :rules="[{ required: true, message: '请输入您所在的城市' }]"
                >
                    <a-input v-model:value="formState.City" />
                </a-form-item>
                <a-form-item
                    name="Email"
                    label="邮箱地址"
                    :rules="[{ required: true, message: '请输入您的邮箱' }]"
                >
                    <a-input v-model:value="formState.Email" />
                </a-form-item>
                <a-form-item
                    name="Phone"
                    label="手机号码"
                    :rules="[{ required: true, message: '请输入您的手机号码' }]"
                >
                    <a-input v-model:value="formState.Phone" />
                </a-form-item>
                <a-form-item
                    name="Reason"
                    label="售卖原因"
                    :rules="[{ required: true, message: '请输入售卖原因' }]"
                >
                    <a-textarea v-model:value="formState.Reason" />
                </a-form-item>
                <a-form-item name="modifier" class="collection-create-form_last-form-item">
                    <a-radio-group v-model:value="formState.modifier">
                        <a-radio value="public">Public</a-radio>
                        <a-radio value="private">Private</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>
<script setup>
import { reactive, ref, toRaw } from "vue"
const formRef = ref()
const visible = ref(false)
const addonAfterValue = ref("CNY")
const formState = reactive({
    OrderName: "",
    OrderDescription: "",
    modifier: "public",
    TopBidding: 0,
    Reason: "",
    Country: "",
    City: "",
    Email: "",
    Phone: "",
})
const onOk = () => {
    formRef.value
        .validateFields()
        .then((values) => {
            console.log("Received values of form: ", values)
            console.log("formState: ", toRaw(formState))
            visible.value = false
            formRef.value.resetFields()
            console.log("reset formState: ", toRaw(formState))
        })
        .catch((info) => {
            console.log("Validate Failed:", info)
        })
}
</script>
<style scoped>
.collection-create-form_last-form-item {
    margin-bottom: 0;
}
</style>
