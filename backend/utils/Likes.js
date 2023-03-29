var mongoose = require("mongoose");
const { OrderSchema } = require("../model/Order.model.js");
async function Likes(ID) {
  await mongoose.connect("mongodb://127.0.0.1:27017/auction_system");
  // 获取到Orders集合
  var Orders = mongoose.model("Orders", OrderSchema, "Orders");
  // 获取LikesValue
  const order = await Orders.find();
  let LikesValue = order[ID - 1].LikesValue;

  //   修改Orders集合
  const orders = await Orders.updateOne(
    { ID: ID },
    { LikesValue: ++LikesValue }
  );
  return orders;
}
module.exports = { Likes };
