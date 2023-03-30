/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-30 17:23:06
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-30 17:43:21
 * @FilePath: /web3_auction/backend/utils/AddComment.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require("mongoose");
const { CommentSchema } = require("../model/Comment.model.js");
async function AddComment(req) {
  await mongoose.connect("mongodb://127.0.0.1:27017/auction_system");
  // 获取到Comments集合
  var Comments = mongoose.model("Comments", CommentSchema, "Comments");
  // 获取comment
  const comment = await Comments.find();
  const newComment = await Comments.create({
    ID: comment.length + 1,
    author: req.author,
    avatar: req.avatar,
    content: req.content,
    datetime: req.datetime,
  });
  console.log(newComment);
  return newComment;
}
module.exports = { AddComment };
