<template>
    <a-table :data-source="data" :columns="columns" borderd>
        <template #title>{{ ContractAddress }}</template>
        <template
            #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
        >
            <div style="padding: 8px">
                <a-input
                    ref="searchInput"
                    :placeholder="`Search ${column.dataIndex}`"
                    :value="selectedKeys[0]"
                    style="width: 188px; margin-bottom: 8px; display: block"
                    @change="(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                    @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
                />
                <a-button
                    type="primary"
                    size="small"
                    style="width: 90px; margin-right: 8px"
                    @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
                >
                    <template #icon><SearchOutlined /></template>
                    Search
                </a-button>
                <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
                    Reset
                </a-button>
            </div>
        </template>
        <template #customFilterIcon="{ filtered }">
            <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
        </template>
        <template #bodyCell="{ text, column }">
            <template v-if="column.dataIndex === 'address'">
                <a :href="`https://sepolia.etherscan.io/address/${text}`">{{ text }}</a>
            </template>
            <template v-if="column.dataIndex === 'transactionHash'">
                <a :href="`https://sepolia.etherscan.io/tx/${text}`">{{
                    text.slice(0, 19) + "..."
                }}</a>
            </template>
            <template v-if="column.dataIndex === 'blockNumber'">
                <a :href="`https://sepolia.etherscan.io/block/${text}`">{{ text }}</a>
            </template>
            <template v-if="column.dataIndex === 'from'">
                <a :href="`https://sepolia.etherscan.io/address/${text}`">{{
                    text.slice(0, 8) + "..." + text.slice(-8)
                }}</a>
            </template>
            <template v-if="column.dataIndex === 'to'">
                <a :href="`https://sepolia.etherscan.io/address/${text}`">{{
                    text.slice(0, 8) + "..." + text.slice(-8)
                }}</a>
            </template>
            <template v-if="column.dataIndex === 'value'"> {{ text }} WEI </template>
            <template v-if="column.dataIndex === 'gas'"> {{ text }} ETH </template>
            <span v-if="searchText && searchedColumn === column.dataIndex">
                <template
                    v-for="(fragment, i) in text
                        .toString()
                        .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
                >
                    <mark
                        v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                        :key="i"
                        class="highlight"
                    >
                        {{ fragment }}
                    </mark>
                    <template v-else>{{ fragment }}</template>
                </template>
            </span>
        </template>
    </a-table>
</template>
<script setup>
import { SearchOutlined } from "@ant-design/icons-vue"
import { defineComponent, reactive, ref, toRefs } from "vue"
const props = defineProps(["data", "ContractAddress"])
const data = props.data
const searchText = () => {
    return ref("")
}
const state = reactive({
    searchText: "",
    searchedColumn: "",
})
const searchedColumn = () => {
    return ref("")
}
const searchInput = ref()
const columns = [
    {
        title: "TransactionHash",
        dataIndex: "transactionHash",
        key: "transactionHash",
    },
    {
        title: "Block",
        dataIndex: "blockNumber",
        key: "blockNumber",
        // customFilterDropdown: true,
        // onFilter: (value, record) =>
        //     record.address.toString().toLowerCase().includes(value.toLowerCase()),
        // onFilterDropdownVisibleChange: (visible) => {
        //     if (visible) {
        //         setTimeout(() => {
        //             searchInput.value.focus()
        //         }, 100)
        //     }
        // },
    },
    {
        title: "From",
        dataIndex: "from",
        key: "from",
    },
    {
        title: "To",
        dataIndex: "to",
        key: "to",
    },
    {
        title: "Value",
        dataIndex: "value",
        key: "value",
    },
    // {
    //     title: "Address",
    //     dataIndex: "address",
    //     key: "address",
    // customFilterDropdown: true,
    // onFilter: (value, record) =>
    //     record.name.toString().toLowerCase().includes(value.toLowerCase()),
    // onFilterDropdownVisibleChange: (visible) => {
    //     if (visible) {
    //         setTimeout(() => {
    //             searchInput.value.focus()
    //         }, 100)
    //     }
    // },
    // },
    {
        title: "Txn Fees",
        dataIndex: "gas",
        key: "gas",
    },
]
const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    state.searchText = selectedKeys[0]
    state.searchedColumn = dataIndex
}
const handleReset = (clearFilters) => {
    clearFilters({
        confirm: true,
    })
    state.searchText = ""
}
</script>
<style scoped>
.highlight {
    background-color: rgb(255, 192, 105);
    padding: 0px;
}
</style>
