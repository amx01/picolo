var PicoloToken = artifacts.require("./PicoloToken.sol");
var Bets = artifacts.require("./Bets.sol");

module.exports = function(deployer) {
  deployer.deploy(PicoloToken);
  deployer.deploy(Bets);
};
