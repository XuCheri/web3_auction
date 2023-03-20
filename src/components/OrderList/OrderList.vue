<template>
    <div>
        <a-button type="primary" @click="handleAddProduct">添加商品</a-button>
        <a-table
            :columns="columns"
            :dataSource="products"
            rowKey="id"
            @row-remove="handleRemoveProduct"
        >
            <template #operation="{ record }">
                <a-button type="danger" @click="() => handleRemoveProduct(record)">删除</a-button>
            </template>
        </a-table>

        <!-- 添加遮罩层及表单 -->
        <div v-if="showAddModal" class="add-modal">
            <div class="mask"></div>
            <div class="form">
                <h2>新增商品</h2>
                <a-form :form="form" @submit.prevent="handleSubmitForm">
                    <a-form-item label="商品名称" required>
                        <a-input v-model:value="newProduct.name" />
                    </a-form-item>
                    <a-form-item label="价格" required>
                        <a-input-number v-model:value="newProduct.price" />
                    </a-form-item>
                    <a-button html-type="submit">确定</a-button>
                    <a-button @click="handleCancelAdd">取消</a-button>
                </a-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { Button, Table, Pagination, Modal, Form, Input, InputNumber } from "ant-design-vue"

const columns = [
    {
        title: "商品名称",
        dataIndex: "name",
    },
    {
        title: "价格",
        dataIndex: "price",
    },
    {
        title: "",
        width: 80,
        slots: { customRender: "operation" },
    },
]

const products = ref([
    { id: 1, name: "商品1", price: 10 },
    { id: 2, name: "商品2", price: 20 },
])

const currentPage = ref(1)
const pageSize = 10
const total = ref(products.value.length)

// 新增商品相关变量和函数
const showAddModal = ref(false)
const form = ref(null)
const newProduct = ref({ name: "", price: "" })

function handlePageChange(page) {
    currentPage.value = page
}

function handleAddProduct() {
    // 显示遮罩层和表单
    showAddModal.value = true
}

function handleCancelAdd() {
    // 隐藏遮罩层和表单
    showAddModal.value = false
}

function handleSubmitForm() {
    // 将新商品推入数组
    const len = products.value.length
    const newId = len > 0 ? products.value[len - 1].id + 1 : 1
    products.value.push({
        ...newProduct.value,
        id: newId,
    })
    total.value = products.value.length

    // 隐藏遮罩层和表单
    handleCancelAdd()
}

function handleRemoveProduct(product) {
    Modal.confirm({
        title: "确定要删除该商品吗？",
        onOk() {
            const index = products.value.findIndex((item) => item.id === product.id)
            if (index !== -1) {
                products.value.splice(index, 1)
                total.value = products.value.length
            }
        },
    })
}
</script>

<style scoped>
.add-modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.1);
}

.form {
    width: 400px;
    padding: 20px;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
}

.form h2 {
    margin-bottom: 20px;
}
</style>
