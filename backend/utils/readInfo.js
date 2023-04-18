/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-04-18 13:48:58
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-18 14:18:39
 * @FilePath: /web3_auction/backend/utils/readInfo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require("fs");
let datas = [];
fs.readFile(
  "../artifacts/contracts/Auction.sol/Auction.json",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return `{${err}}`;
    }
    // 将文件内容转为字符串
    const content = JSON.parse(data);
    datas[0] = content.abi;
    datas[1] = content.bytecode;
    console.log(datas);
  }
);
module.exports = { datas };
