/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-28 16:25:55
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-29 16:27:38
 * @FilePath: /web3_auction/backend/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { getOrders } = require("./utils/getOrders");
const { Bid } = require("./utils/Bid");
const { Likes } = require("./utils/Likes");
const { NoLikes } = require("./utils/NoLikes");

// 搭建一个express服务器
const express = require("express");
const app = express();
const port = 3000;

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5175"); //仅支持配置一个域名
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //允许客户端携带验证信息
  next();
});
// 写一个接口获取商品数据
app.get("/api/getOrders", async (req, res) => {
  const result = await getOrders();
  res.send(result);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// 写一个接口修改商品数据
app.get("/api/Bid", async (req, res) => {
  const { ID, TopBidding } = req.query;
  const result = await Bid(ID, TopBidding);
  res.send(result);
});
// 写一个接口增加点赞数
app.get("/api/Likes", async (req, res) => {
  const { ID } = req.query;
  const result = await Likes(ID);
  res.send(result);
});
// 写一个接口减少点赞数
app.get("/api/NoLikes", async (req, res) => {
  const { ID } = req.query;
  const result = await NoLikes(ID);
  res.send(result);
});
