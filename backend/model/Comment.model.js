/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-28 17:11:48
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-30 16:59:23
 * @FilePath: /web3_auction/backend/model/Order.model.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  ID: Number,
  author: String,
  avatar: String,
  content: String,
  datetime: Date,
});
module.exports = { CommentSchema: CommentSchema };
