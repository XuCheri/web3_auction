/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-28 13:49:31
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-28 17:13:44
 * @FilePath: /web3_auction/backend/utils/getOrders.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// mongoose连接mongodb中a数据库
// getOrders().catch((err) => console.log(err))
var mongoose = require("mongoose");
const { OrderSchema } = require("../model/Order.model.js");
async function getOrders() {
  await mongoose.connect("mongodb://127.0.0.1:27017/auction_system");
  // 获取到Orders集合
  var Orders = mongoose.model("Orders", OrderSchema, "Orders");
  // 查询Orders集合
  const orders = await Orders.find();
  console.log(orders);
  return orders;
}
module.exports = { getOrders };
