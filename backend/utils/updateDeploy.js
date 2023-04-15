/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-04-15 21:33:31
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-15 22:03:37
 * @FilePath: /web3_auction/backend/demo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require("fs");
const updateDeploy = async (newArgs) => {
  // 读取文件内容
  fs.readFile("./deploy/deploy.js", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return `{${err}}`;
    }
    // 将文件内容转为字符串
    const content = data.toString();

    const newContent = content.replace(
      /const args = \[.*\]/,
      `const args = ${JSON.stringify(newArgs)}`
    );
    // 将修改后的内容写入文件
    fs.writeFile("./deploy/deploy.js", newContent, (err) => {
      if (err) {
        console.error(err);
        return `${err}`;
      }
      console.log("File updated successfully");
      return true;
    });
  });
};
module.exports = { updateDeploy };
