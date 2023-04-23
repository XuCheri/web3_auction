<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-20 18:01:19
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-23 22:15:26
 * @FilePath: /web3_auction/src/pages/Demo2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <!-- <ul>
        <li v-for="item in data">
            {{ item.Author }}
        </li>
    </ul> -->
    <TransactionsTable :data="transaction" />
</template>
<script setup>
import axios from "axios"
import { ethers } from "ethers"
import { ref } from "vue"
import TransactionsTable from "@/components/TransactionsTable/TransactionsTable.vue"
const data = ref()
const transaction = ref([])
axios
    .get("http://localhost:3000/api/getOrders")
    .then((res) => {
        data.value = res.data
        for (const iterator of res.data) {
            // console.log(iterator.address)
            // console.log(iterator.abi)
            getlogs(iterator.address, iterator.abi)
        }
    })
    .catch((err) => {
        console.log(err)
    })
async function getlogs(add, abi) {
    // 连接到 Sepolia 测试链
    const provider = new ethers.providers.JsonRpcProvider(
        "https://sepolia.infura.io/v3/05c8d4263d474e18bb174fcf8d60d511"
    )
    // 智能合约地址
    const contractAddress = add

    // 创建智能合约实例
    const contract = new ethers.Contract(contractAddress, abi, provider)
    // 获取智能合约的所有交易记录
    const filter = {
        address: contractAddress,
        fromBlock: 0,
        toBlock: "latest",
    }
    const transactions = await provider.getLogs(filter)
    // console.log(transactions)
    for (const iterator of transactions) {
        // console.log(
        //     (await provider.getBlockWithTransactions(iterator.blockHash)).transactions.filter(
        //         (item) => item.hash === iterator.transactionHash
        //     )[0]
        // )
        // console.log(await provider.getTransactionReceipt(iterator.transactionHash))
        // 获取每笔交易的value和gas
        // console.log(
        //     (await provider.getBlockWithTransactions(iterator.blockHash)).transactions.filter(
        //         (item) => item.hash === iterator.transactionHash
        //     )[0].value
        // )
        const blockTransaction = (
            await provider.getBlockWithTransactions(iterator.blockHash)
        ).transactions.filter((item) => item.hash === iterator.transactionHash)[0]
        // 获取每笔交易的gas
        const gas = (
            ((await provider.getBlockWithTransactions(iterator.blockHash)).transactions.filter(
                (item) => item.hash === iterator.transactionHash
            )[0].gasPrice *
                (await provider.getTransactionReceipt(iterator.transactionHash)).gasUsed) /
            1000000000000000000
        ).toFixed(8)
        const value = (
            await provider.getBlockWithTransactions(iterator.blockHash)
        ).transactions.filter((item) => item.hash === iterator.transactionHash)[0].value
        // console.log(`gas: ${gas} eth, value: ${value} wei`)
        iterator["gas"] = gas
        iterator["value"] = value
        iterator["from"] = blockTransaction.from
        iterator["to"] = blockTransaction.to
        console.log(blockTransaction)
    }

    transaction.value.push(...transactions)
}
</script>
