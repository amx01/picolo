pragma solidity ^0.4.4;

import "../node_modules/zeppelin-solidity/contracts/math/SafeMath.sol";

contract Bets {

  using SafeMath for uint256;

  mapping(address => uint256) winnings;
  mapping(address => uint256) openbets;
  mapping(address => uint256) livebets;

  function openBet() public payable {
    openbets[msg.sender].add(msg.value);
  }

  function enterBet(address addr1, address addr2, uint256 amount) public {
    assert(openbets[addr1] >= amount);
    assert(openbets[addr2] >= amount);

    openbets[addr1].sub(amount);
    openbets[addr2].sub(amount);

    livebets[addr1].add(amount);
    livebets[addr2].add(amount);
  }

  function closeBet(address winner, address loser, uint256 amount) public {
    assert(livebets[winner] >= amount);
    assert(livebets[loser] >= amount);

    livebets[winner].sub(amount);
    livebets[loser].sub(amount);

    winnings[winner].add(amount);
  }

  function claimWinnigs() public {
    address payee = msg.sender;
    uint256 payment = winnings[payee];

    require(payment != 0);
    require(this.balance >= payment);

    winnings[payee] = 0;
    assert(payee.send(payment));
  }

  function cancelBet(uint256 amount) public {
    assert(openbets[msg.sender] >= amount);
    openbets[msg.sender].sub(amount);
    winnings[msg.sender].add(amount);
  }

}
