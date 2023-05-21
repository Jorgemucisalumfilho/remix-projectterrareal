// return value send
criptomoeda)<p align="center">Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr KingOfTheEtherThrone{
	struct Monarch {
		// address of the king .
		address payable ethAddr ;
		string name ;
		// how much he pays to previous king
		uint claimPrice ;
		uint coronationTimestamp;
	}
	Monarch public currentMonarch ;

	function claimThrone ( string memory name ) public {
	    address wizardAddress;
	    uint compensation = 100;
	    uint valuePaid = 10;
		
		if ( currentMonarch.ethAddr != wizardAddress )
			if (currentMonarch.ethAddr.send( compensation )) revert();

		currentMonarch = Monarch(msg.sender,name,valuePaid,block.timestamp);
	}
}
