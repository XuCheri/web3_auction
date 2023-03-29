/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-29 16:26:02
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-29 16:26:37
 * @FilePath: /web3_auction/backend/utils/NoLikes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require("mongoose");
const { OrderSchema } = require("../model/Order.model.js");
async function NoLikes(ID) {
  await mongoose.connect("mongodb://127.0.0.1:27017/auction_system");
  // 获取到Orders集合
  var Orders = mongoose.model("Orders", OrderSchema, "Orders");
  // 获取LikesValue
  const order = await Orders.find();
  let LikesValue = order[ID - 1].LikesValue;

  //   修改Orders集合
  const orders = await Orders.updateOne(
    { ID: ID },
    { LikesValue: --LikesValue }
  );
  return orders;
}
module.exports = { NoLikes };
