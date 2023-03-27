<template>
    <a-descriptions-item :label="title">{{ content }}</a-descriptions-item>
</template>
<script setup>
defineProps(["title", "content"])
</script>
