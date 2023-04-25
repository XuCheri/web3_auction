/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-04-15 21:34:18
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-25 19:42:26
 * @FilePath: /web3_auction/backend/deploy/deploy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const args = ["0xdb056cc02d181885899e5cb2934ba798d354c418",254,1,0,0];
const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config.js");
const { network } = require("hardhat");
const { verify } = require("../utils/verify.js");
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const Auction = await deploy("Auction", {
    from: deployer,
    log: true,
    args: args,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  log("------------------------");
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    verify(Auction.address, args);
  }
};
