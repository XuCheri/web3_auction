/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-28 13:49:31
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-30 17:01:44
 * @FilePath: /web3_auction/backend/utils/getOrders.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// mongoose连接mongodb中a数据库
var mongoose = require("mongoose");
const { CommentSchema } = require("../model/Comment.model.js");
async function getComments() {
  await mongoose.connect("mongodb://127.0.0.1:27017/auction_system");
  // 获取到Orders集合
  var Comments = mongoose.model("Comments", CommentSchema, "Comments");
  // 查询Orders集合
  const comments = await Comments.find();
  console.log(comments);
  return comments;
}
module.exports = { getComments };
