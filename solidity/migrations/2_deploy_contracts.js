var PicoloToken = artifacts.require("./PicoloToken.sol");

module.exports = function(deployer) {
  deployer.deploy(PicoloToken);
};
