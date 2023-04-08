/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-04-08 18:14:45
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-08 18:19:51
 * @FilePath: /web3_auction/backend/utils/searchOrder.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require("mongoose");
const { OrderSchema } = require("../model/Order.model.js");
async function searchOrder(OrderName) {
  await mongoose.connect("mongodb://127.0.0.1:27017/auction_system");
  // 获取到Orders集合
  var Orders = mongoose.model("Orders", OrderSchema, "Orders");
  // 根据条件查询
  const result = await Orders.find({
    OrderName: OrderName,
  });
  console.log(result);
  return result;
}
module.exports = { searchOrder };
