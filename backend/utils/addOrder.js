/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-04-10 00:50:49
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-18 15:08:56
 * @FilePath: /web3_auction/backend/utils/addOrder.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require("mongoose");
const { OrderSchema } = require("../model/Order.model.js");
async function addOrder(data, abi, address) {
  await mongoose.connect("mongodb://127.0.0.1:27017/auction_system");
  // 获取到Orders集合
  var Orders = mongoose.model("Orders", OrderSchema, "Orders");
  // 创建一个订单
  const orderInfo = {
    ...data,
    abi: abi,
    address: address,
  };
  var order = new Orders(orderInfo);
  // 保存订单
  await order.save();
}
module.exports = { addOrder };
