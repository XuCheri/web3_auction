/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-28 16:25:55
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-18 15:25:24
 * @FilePath: /web3_auction/backend/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { getOrders } = require("./utils/getOrders");
const { getComments } = require("./utils/getComments");
const { Bid } = require("./utils/Bid");
const { Likes } = require("./utils/Likes");
const { NoLikes } = require("./utils/NoLikes");
const { Wants } = require("./utils/Wants");
const { NoWants } = require("./utils/NoWants");
const { AddComment } = require("./utils/AddComment");
const { getUsers } = require("./utils/getUser");
const { changeAvatar } = require("./utils/changeAvatar");
const { searchOrder } = require("./utils/searchOrder");
const { addOrder } = require("./utils/addOrder");
const { updateDeploy } = require("./utils/updateDeploy");
const fs = require("fs");

// 搭建一个express服务器
const express = require("express");
const { exec } = require("child_process");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;

// 解析 application/json 类型的请求
app.use(bodyParser.json());
// 设置跨域
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //仅支持配置一个域名
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //允许客户端携带验证信息
  next();
});
// 设置存储路径和文件名
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});

// 设置上传限制和存储路径
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2, // 2MB
  },
  fileFilter: function (req, file, cb) {
    const allowedMimes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/svg+xml",
      "image/bmp",
      "image/webp",
      "image/vnd.microsoft.icon",
    ];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Uploaded file is not an image!"), false);
    }
  },
});
// 处理上传请求
app.post("/api/upload", upload.single("avatar"), (req, res) => {
  app.use(express.static("public"));
  const filename = req.file.filename;
  const filepath = req.file.path;
  res.send(filepath);
});

// 写一个接口获取全部商品数据
app.get("/api/getOrders", async (req, res) => {
  const result = await getOrders();
  res.send(result);
});
// 写一个接口获取全部评论数据
app.get("/api/getComments", async (req, res) => {
  const result = await getComments();
  res.send(result);
});
// 写一个接口修改商品竞价
app.get("/api/Bid", async (req, res) => {
  const { ID, TopBidding } = req.query;
  const result = await Bid(ID, TopBidding);
  res.send(result);
});
// 写一个接口搜索商品
app.get("/api/searchOrder", async (req, res) => {
  const { OrderName } = req.query;
  const result = await searchOrder(OrderName);
  res.send(result);
});
// 写一个接口增加商品
app.post("/api/addOrder", async (req, res) => {
  // console.log(req.body);
  const seconds =
    (new Date(req.body.AuctionTime).getTime() -
      new Date().getTime() -
      8 * 1000 * 60 * 60) /
    1000;
  const result2 = await updateDeploy([
    req.body.Address,
    Math.floor(seconds),
    req.body.TopBidding,
    0,
    0,
  ]);
  await exec("yarn hardhat deploy", async (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send("Error");
    }

    console.log(`stdout: ${stdout}`);

    const lines = stdout.split("\n");
    const deployedLine = lines.find((line) => line.includes("deployed at"));
    const regex = /deployed at (\w+) with \d+ gas/;

    const address = deployedLine.match(regex)[1];
    console.error(`stderr: ${stderr}`);
    fs.readFile(
      "./artifacts/contracts/Auction.sol/Auction.json",
      "utf8",
      async (err, data) => {
        if (err) {
          console.error(err);
          return `{${err}}`;
        }
        // 将文件内容转为字符串
        const content = JSON.parse(data);
        console.log(content.abi);
        const result1 = await addOrder(req.body, content.abi, address);
        res.send(result1);
      }
    );
    // 将输出作为响应发送回客户端
    // res.send(stdout);
  });
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
// 写一个接口增加关注数
app.get("/api/Wants", async (req, res) => {
  const { ID } = req.query;
  const result = await Wants(ID);
  res.send(result);
});
// 写一个接口减少关注数
app.get("/api/NoWants", async (req, res) => {
  const { ID } = req.query;
  const result = await NoWants(ID);
  res.send(result);
});
// 写一个接口增加评论
app.get("/api/AddComment", async (req, res) => {
  const result = await AddComment(req.query);
  res.send(result);
});
// 写一个接口获取全部用户数据
app.get("/api/getUsers", async (req, res) => {
  const { Address } = req.query;
  const result = await getUsers(Address);
  res.send(result);
});
// 写一个接口改用户头像
app.get("/api/changeAvatar", async (req, res) => {
  const { Address, choosedAvatarNum } = req.query;
  const result = await changeAvatar(Address, choosedAvatarNum);
  res.send(result);
});

// app.post("/api/deploy", async (req, res) => {
//   const result = await updateDeploy(req.body.args);
//   // res.send(result);
//   exec("yarn hardhat deploy --network sepolia", (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return res.status(500).send("Error");
//     }

//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);

//     // 将输出作为响应发送回客户端
//     res.send(stdout);
//   });
// });

// 保存静态资源
app.use(express.static("public"));
// 服务器监听端口
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
