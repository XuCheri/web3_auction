/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-04-01 19:27:24
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-01 19:39:52
 * @FilePath: /web3_auction/backend/utils/getUser.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// mongoose连接mongodb中a数据库
var mongoose = require("mongoose");
const { UserSchema } = require("../model/User.model.js");
async function getUsers(Address) {
  await mongoose.connect("mongodb://127.0.0.1:27017/auction_system");
  // 获取到Users集合
  var Users = mongoose.model("Users", UserSchema, "Users");
  // 查询Users集合
  const users = await Users.find();
  let correctUser;
  // 获取users中Address对应的用户
  for (let i = 0; i < users.length; i++) {
    console.log(Address);
    if (users[i].Address == Address) {
      correctUser = users[i];
      break;
    }
    console.log("Address is not exist");
  }
  console.log(correctUser);
  return correctUser;
}
module.exports = { getUsers };
