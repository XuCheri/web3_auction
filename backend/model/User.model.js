/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-04-01 19:26:03
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-01 19:27:08
 * @FilePath: /web3_auction/backend/model/User.model.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  ID: Number,
  Address: String,
  AvatarNum: Number,
  NickName: String,
});
module.exports = { UserSchema: UserSchema };
