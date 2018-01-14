import Web3 from '../../node_modules/web3';
const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/d9N1uNSOhRmzUXmT2hX2"));
const eth = web3.eth
var accounts = ''

var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "section tomorrow blame village rifle sail about despair behave distance special cup";

const abiArray = [{
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "livebets",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "openBet",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "winner",
        "type": "address"
      },
      {
        "name": "loser",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "closeBet",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "openbets",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
      "name": "amount",
      "type": "uint256"
    }],
    "name": "cancelBet",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "addr1",
        "type": "address"
      },
      {
        "name": "addr2",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "enterBet",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "claimWinnings",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "winnings",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]

const contractBets = new web3.eth.Contract(abiArray, '0xd24E39f0c281f02397b77b806BD1DC5FF6E15295');

// accounts = result;
// console.log(accounts);
// eth.getBalance(accounts[0], function(error, result) {
//   console.log('bal0 is: ' + result);
// });
// eth.getBalance(accounts[1], function(error, result) {
//   console.log('bal1 is: ' + result);
// });

// eth.sendTransaction({
//   from: accounts[0],
//   to: accounts[1],
//   value: 1000000000000
// });

export function openBet() {
  console.log('opening bet', contractBets.methods.openBet().call().then(function(result) {
    console.log('result is: ' + result);
  }));
}

export function closeBet(winner, loser, betAmount) {
  console.log('closing bet', contractBets.methods.closeBet(winner, loser, betAmount).send({
    from: accounts[0]
  }).then(function(result) {
    console.log('result is: ' + result);
  }));
}

export function enterBet(account1, account2, betAmount) {
  console.log('entering bet', contractBets.methods.enterBet(account1, account2, betAmount).send({
    from: accounts[0]
  }).then(function(result) {
    console.log('result is: ' + result);
  }));
}

export function claimBet() {
  console.log('claim winnings', contractBets.methods.claimWinnings().send({
    from: accounts[0]
  }).then(function(result) {
    console.log('result is: ' + result);
  }));
}

export function cancelBet(betAmount) {
  console.log('canceling bet', contractBets.methods.cancelBet(betAmount).send({
    from: accounts[0]
  }).then(function(result) {
    console.log('result is: ' + result);
  }));
}

//console.log('open bets', contractBets.methods.openbets(accounts[0]));
