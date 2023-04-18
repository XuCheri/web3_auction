<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-04-08 20:06:07
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-17 21:57:21
 * @FilePath: /web3_auction/frontend/src/components/Form/Form.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <a-button type="primary" :disabled="disabled" @click="visible = true">创建拍卖</a-button>
        <a-modal
            v-model:visible="visible"
            title="创建一个新的拍卖"
            ok-text="创建"
            cancel-text="取消"
            :confirm-loading="confirmLoading"
            @ok="onOk"
        >
            <a-form ref="formRef" :model="formState" layout="vertical" name="form_in_modal">
                <a-divider>商品信息</a-divider>
                <a-form-item
                    name="OrderName"
                    label="商品名称"
                    :rules="[{ required: true, message: '请输入商品名称' }]"
                >
                    <a-input v-model:value="formState.OrderName" />
                </a-form-item>
                <a-form-item
                    name="type"
                    label="商品类别"
                    :rules="[{ required: true, message: '请输入商品类别' }]"
                >
                    <a-input v-model:value="formState.type" />
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
                <a-form-item
                    name="OrderDescription"
                    label="一句话介绍一下商品"
                    :rules="[{ required: true, message: '请输入商品简介' }]"
                >
                    <a-input v-model:value="formState.OrderDescription" />
                </a-form-item>
                <a-form-item
                    name="OrderDetailDescription"
                    label="商品详细信息"
                    :rules="[{ required: true, message: '请输入商品详细信息' }]"
                >
                    <a-textarea v-model:value="formState.OrderDetailDescription" />
                </a-form-item>
                <a-form-item name="AuctionTime" label="拍卖截止时间">
                    <a-date-picker
                        :disabled-date="disabledDate"
                        show-time
                        v-model:value="formState.AuctionTime"
                    >
                    </a-date-picker>
                </a-form-item>
                <a-form-item label="请上传商品图片" name="imgsrc">
                    <a-upload-dragger
                        v-model:fileList="fileList"
                        name="avatar"
                        :multiple="true"
                        action="http://localhost:3000/api/upload"
                        @change="handleChange"
                        @drop="handleDrop"
                    >
                        <p class="ant-upload-drag-icon">
                            <inbox-outlined></inbox-outlined>
                        </p>
                        <p class="ant-upload-text">Click or drag file to this area to upload</p>
                        <p class="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading
                            company data or other band files
                        </p>
                    </a-upload-dragger>
                </a-form-item>

                <a-form layout="inline" name="info" label="参数详情">
                    <a-form-item label="参数类别" style="width: 35%">
                        <a-input v-model:value="classification"></a-input>
                    </a-form-item>
                    <a-form-item label="参数内容" style="width: 35%">
                        <a-input v-model:value="content"></a-input>
                    </a-form-item>
                    <a-form-item label=" ">
                        <a-button type="primary" html-type="submit" @click="addInfo"
                            >添加参数</a-button
                        >
                    </a-form-item>
                </a-form>
                <a-form-item label="参数信息预览">
                    <a-table :scroll="{ x: 1000 }" :dataSource="dataSource" :columns="columns" />
                    <a-select style="display: none" v-model:value="formState.dataSource"></a-select>
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
            </a-form>
            <div class="progress" v-show="progress">
                <a-progress type="circle" :width="70" :percent="percent" />
            </div>
        </a-modal>
    </div>
</template>
<script setup>
import dayjs from "dayjs"
import { reactive, ref, toRaw, onBeforeMount } from "vue"
import { InboxOutlined } from "@ant-design/icons-vue"
import { message } from "ant-design-vue"
import Fakeprogress from "fake-progress"
import axios from "axios"
const emit = defineEmits(["getData"])
const fake = new Fakeprogress({
    timeConstant: 60000,
})
const percent = ref(0)
const progress = ref(false)
const confirmLoading = ref(false)
const disabled = ref(true)
const classification = ref("")
const content = ref("")
const fileList = ref([])
const handleDrop = (e) => {
    console.log(e, 1)
}
const handleChange = (info) => {
    const status = info.file.status
    if (status !== "uploading") {
        // console.log(info.file, info.fileList)
    }
    if (status === "done") {
        formState.imgsrc = "http://localhost:3000/" + info.file.response.slice("/public".length)
        message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`)
    }
}
const formRef = ref()
const visible = ref(false)
const addonAfterValue = ref("CNY")
const addInfo = () => {
    const item = classification.value
    dataSource.value[0][item] = content.value
    columns.value.push({
        title: classification.value,
        dataIndex: classification.value,
        key: classification.value,
    })
    classification.value = ""
    content.value = ""
}
const dataSource = ref([{}])
const columns = ref([])
const formState = reactive({
    OrderName: "",
    OrderDescription: "",
    TopBidding: 0,
    Reason: "",
    Country: "",
    City: "",
    Email: "",
    Phone: "",
    type: "",
    imgsrc: "",
    classification: "",
    content: "",
    AuctionTime: ref(),
    OrderDetailDescription: "",
})

const onOk = () => {
    formRef.value
        .validateFields()
        .then(async (values) => {
            fake.start()
            var timer = setInterval(() => {
                percent.value = parseInt(fake.progress * 100)
            }, 500)
            confirmLoading.value = true
            progress.value = true
            const hide = message.loading(
                "正在连接sepolia链，因服务器在国外，连接速度较慢，请耐心等待..",
                0
            )

            await axios.get("http://localhost:3000/api/getOrders").then((res) => {
                values["ID"] = res.data.length + 1
            })
            values["columns"] = columns.value
            values["dataSource"] = dataSource.value
            values["Author"] = NickName.value
            values["avatarSrc"] = avatarSrc.value
            values["AuthorDescription"] = `Hello, I am ${NickName.value}`
            values["LikesValue"] = 0
            values["WantsValue"] = 0
            values["Address"] = address.value
            values["AuctionTime"] = new Date(
                new Date(values["AuctionTime"].$d).getTime() + 28800000
            ).toISOString()
            await axios.post("http://localhost:3000/api/addOrder", values).then((res) => {
                console.log(res.data)
                message.success("添加成功")
            })
            console.log("Received values of form: ", values)
            console.log("formState: ", toRaw(formState))
            visible.value = false
            confirmLoading.value = false
            fake.end()
            clearInterval(timer)
            setTimeout(hide, 2500)

            formRef.value.resetFields()
            columns.value = []
            dataSource.value = [{}]
            console.log("reset formState: ", toRaw(formState))
            emit("getData")
        })
        .catch((info) => {
            message.error("添加失败,请检查表单是否填写完整")
            console.log("Validate Failed:", info)
        })
}
const address = ref("")
const NickName = ref("")
const avatarSrc = ref("")
onBeforeMount(async () => {
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    })
    ethereum.on("accountsChanged", handleAccountsChanged)
    if (accounts.length != 0) {
        accounts.value = accounts[0]
        address.value = accounts[0]
        disabled.value = false
    }
    await getUserInfo()
})
async function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        console.log("Please connect to MetaMask.")
        address.value = ""
        NickName.value = ""
        avatarSrc.value = ""
        disabled.value = true
    } else {
        address.value = accounts[0]
        console.log("已连接")
        disabled.value = false
        await getUserInfo()
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
const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day")
}
</script>
<style scoped>
.progress {
    display: flex;
    justify-content: center;
}
.collection-create-form_last-form-item {
    margin-bottom: 0;
}
</style>
