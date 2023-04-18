/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-28 17:11:48
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-18 14:35:10
 * @FilePath: /web3_auction/backend/model/Order.model.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  ID: Number,
  Author: String,
  AuthorDescription: String,
  OrderName: String,
  OrderDescription: String,
  imgsrc: String,
  LikesValue: Number,
  WantsValue: Number,
  avatarSrc: String,
  AuctionTime: Date,
  TopBidding: Number,
  Reason: String,
  City: String,
  Country: String,
  Email: String,
  Phone: String,
  type: String,
  OrderDetailDescription: String,
  columns: Array,
  dataSource: Array,
  Address: String,
  abi: Array,
  bytecode: String,
});
module.exports = { OrderSchema: OrderSchema };
