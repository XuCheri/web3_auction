<script setup>
import OrderList from "@/components/OrderList/OrderList.vue"
const productList = [
    {
        name: "Product A",
        price: 9.99,
    },
    {
        name: "Product B",
        price: 19.99,
    },
    // Add more products here...
]
</script>
<template>
    <div>
        <OrderList :products="productList" />
    </div>
</template>
