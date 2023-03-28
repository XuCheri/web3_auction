/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-28 16:25:55
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-28 16:52:49
 * @FilePath: /web3_auction/backend/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { getOrders } = require("./utils/getOrders");
// 搭建一个express服务器
const express = require("express");
const app = express();
const port = 3000;
// 写一个接口获取商品数据
app.get("/api/getOrders", async (req, res) => {
  const result = await getOrders();
  res.send(result);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
