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
  AuctionTime: Number,
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
});
module.exports = { OrderSchema: OrderSchema };
