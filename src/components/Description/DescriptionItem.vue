<template>
    <a-descriptions>
        <a-descriptions-item :label="title"
            >{{ content }}<slot name="content"></slot
        ></a-descriptions-item>
    </a-descriptions>
</template>
<script setup>
defineProps(["title", "content"])
</script>
