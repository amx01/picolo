pragma solidity ^0.4.18;
import "../node_modules/zeppelin-solidity/contracts/token/StandardToken.sol";
import "../node_modules/zeppelin-solidity/contracts/math/SafeMath.sol";

contract PicoloToken is StandardToken {

    // metadata
    string public constant name = "Picolo token";
    string public constant symbol = "PIC";
    uint256 public constant decimals = 18;
    string public version = "1.0";

    // constructor
    function PicoloToken() public
    {
      totalSupply = 10000000000;
      balances[msg.sender] = totalSupply;

    }

}
