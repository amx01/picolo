var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "section tomorrow blame village rifle sail about despair behave distance special cup";

module.exports = {
  networks: {
    dev: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    sokol: {
      provider: new HDWalletProvider(mnemonic, "https://sokol.poa.network"),
      network_id: "*"
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/d9N1uNSOhRmzUXmT2hX2"),
      network_id: "3"
    }
  }
};
