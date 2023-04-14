/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-08 00:25:33
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-04-14 21:20:26
 * @FilePath: /blockchain-javascript-learing-fcc/deploy/01-deploy-fund-me.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config.js");
const { network } = require("hardhat");
const { verify } = require("../utils/verify");
module.exports = async function deploy({ getNamedAccounts, deployments }) {
  const args = ["0xA34323DB7bEa9238202c7A866cDA9977CBA8ff6f", 1000, 1, 0, 0];

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
    await verify(Auction.address, args);
  }
};
module.exports.tags = ["all", "Auction"];
