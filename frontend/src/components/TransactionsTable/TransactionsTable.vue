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
            <template
                v-if="
                    column.dataIndex === 'transactionHash' &&
                    (state.searchedColumn !== 'transactionHash' || state.searchText == '')
                "
            >
                <a :href="`https://sepolia.etherscan.io/tx/${text}`">{{
                    text.slice(0, 19) + "..."
                }}</a>
            </template>
            <template v-if="column.dataIndex === 'blockNumber'">
                <a :href="`https://sepolia.etherscan.io/block/${text}`">{{ text }}</a>
            </template>
            <template
                v-if="
                    column.dataIndex === 'from' &&
                    (state.searchedColumn !== 'from' || state.searchText == '')
                "
            >
                <a :href="`https://sepolia.etherscan.io/address/${text}`">{{
                    text.slice(0, 8) + "..." + text.slice(-8)
                }}</a>
            </template>
            <template
                v-if="
                    column.dataIndex === 'to' &&
                    (state.searchedColumn !== 'to' || state.searchText == '')
                "
            >
                <a :href="`https://sepolia.etherscan.io/address/${text}`">{{
                    text.slice(0, 8) + "..." + text.slice(-8)
                }}</a>
            </template>
            <template v-if="column.dataIndex === 'value'"> {{ text }} wei </template>
            <template v-if="column.dataIndex === 'gas'"> {{ text }} ETH </template>
            <span v-if="state.searchText && state.searchedColumn === column.dataIndex">
                <template
                    v-for="(fragment, i) in text
                        .toString()
                        .split(new RegExp(`(?<=${state.searchText})|(?=${state.searchText})`, 'i'))"
                >
                    <a
                        :href="
                            column.dataIndex == 'transactionHash'
                                ? 'https://sepolia.etherscan.io/tx/' + text
                                : 'https://sepolia.etherscan.io/address/' + text
                        "
                        ><mark
                            v-if="fragment.toLowerCase() == state.searchText.toLowerCase()"
                            :key="i"
                            class="highlight"
                        >
                            {{ fragment }}
                        </mark>
                        <template v-else>{{
                            fragment.length > 10 ? fragment.slice(0, 9) + "..." : fragment
                        }}</template></a
                    >
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
const state = ref({
    searchText: "",
    searchedColumn: "",
})
const searchedColumn = () => {
    return ref("")
}
const searchInput = ref()
const columns = [
    {
        title: "交易哈希值",
        dataIndex: "transactionHash",
        key: "transactionHash",
        customFilterDropdown: true,
        onFilter: (value, record) =>
            record.transactionHash.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (!visible) {
                searchInput.value.focus()
                console.log(searchInput.value)
                setTimeout(() => {
                    searchInput.value.focus()
                }, 100)
            }
        },
    },
    {
        title: "区块号",
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
        title: "发送方",
        dataIndex: "from",
        key: "from",
        customFilterDropdown: true,
        onFilter: (value, record) =>
            record.from.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (!visible) {
                searchInput.value.focus()
                console.log(searchInput.value)
                setTimeout(() => {
                    searchInput.value.focus()
                }, 100)
            }
        },
    },
    {
        title: "接收方",
        dataIndex: "to",
        key: "to",
        customFilterDropdown: true,
        onFilter: (value, record) =>
            record.to.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (!visible) {
                searchInput.value.focus()
                console.log(searchInput.value)
                setTimeout(() => {
                    searchInput.value.focus()
                }, 100)
            }
        },
    },
    {
        title: "发送金额",
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
        title: "手续费",
        dataIndex: "gas",
        key: "gas",
    },
]
const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    state.value.searchText = selectedKeys[0]
    state.value.searchedColumn = dataIndex
}
const handleReset = (clearFilters) => {
    clearFilters({
        confirm: true,
    })
    state.value.searchText = ""
}
</script>
<style scoped>
.highlight {
    background-color: rgb(255, 192, 105);
    padding: 0px;
}
</style>
