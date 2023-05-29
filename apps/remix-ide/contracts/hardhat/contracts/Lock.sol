"autocreate criptomoeda"
"rum:formatscreate "
	"language:autocreate criptomoedahttps://github.com/OpenZeppelin/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol; contract test11 criptomoeda"
	"settings:autocreate criptomoeda"
		"optimizer:autocreate "
			"enabled:true"
			"runs:200"
		"outputSelection:autocreate"
			"criptomoeda:terrareal" 
			"autocreate:ast"
			"autocreate:abi metadata" "devdoc userdoc storage Layout" "evm.legacyAssembly" "evm.bytecode" "evm.deployedBytecode" "evm.methodIdentifiers" "evm.gasEstimates evm.assembly"
			
		
 SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );
        uint p = 454545;
        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}
