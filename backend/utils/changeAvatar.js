/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-04-01 20:08:37
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-01 20:15:42
 * @FilePath: /web3_auction/backend/utils/changeAvatar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mongoose = require("mongoose");
const { UserSchema } = require("../model/User.model.js");
async function changeAvatar(Address, AvatarNum) {
  await mongoose.connect("mongodb://127.0.0.1:27017/auction_system");
  // 获取到Orders集合
  var Users = mongoose.model("Users", UserSchema, "Users");
  //   修改Orders集合
  const users = await Users.updateOne(
    { Address: Address },
    { AvatarNum: AvatarNum }
  );
  console.log(users);
  return users;
}
module.exports = { changeAvatar };
