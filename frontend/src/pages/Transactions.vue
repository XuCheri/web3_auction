<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-20 18:01:19
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-22 03:01:49
 * @FilePath: /web3_auction/src/pages/Demo2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <ul>
        <li v-for="item in data">
            {{ item.Author }}
        </li>
    </ul>
</template>
<script setup>
import axios from "axios"
import { ethers } from "ethers"
import { ref } from "vue"
let data = ref(),
    transaction
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
    transaction = transactions
    console.log(transactions)
}
</script>
