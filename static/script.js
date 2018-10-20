    
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));



var contractData = web3.eth.contract([
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "fromm",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "to",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "asset",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "quantity",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "temperature",
				"type": "int16"
			},
			{
				"indexed": false,
				"name": "humidity",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "gas",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "airqual",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "soilmois",
				"type": "uint256"
			}
		],
		"name": "EatSafe",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "string"
			},
			{
				"name": "_to",
				"type": "string"
			},
			{
				"name": "_asset",
				"type": "string"
			},
			{
				"name": "_timestamp",
				"type": "string"
			},
			{
				"name": "_quantity",
				"type": "uint256"
			},
			{
				"name": "temperature",
				"type": "int16"
			},
			{
				"name": "humidity",
				"type": "uint256"
			},
			{
				"name": "gas",
				"type": "uint256"
			},
			{
				"name": "airqual",
				"type": "uint256"
			},
			{
				"name": "soilmois",
				"type": "uint256"
			}
		],
		"name": "setter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getter",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "int16"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);
web3.eth.defaultAccount = web3.eth.accounts[0];

var contract = contractData.at('0x1647236ceb211f38311a64ca9bc7f2af67a0a1d0');



 $("#submitBtn").on("click",(e)=>{
    contract.setter("a","a","a","a",1,1,1,1,1,1);
 });
// Event listener will get fired once setInstructor sets the values
var eventListener = contract.EatSafe();

eventListener.watch((err,result)=>{
    let arr=[];
    if(!err){
      for(let i=1;;i++)
      {
      let block=web3.eth.getBlock(i,true);
      if(!block)
        break;
      else
        arr.push(block);
      }
      $("#result").html(JSON.stringify(arr));
        }
    else 
        console.log(err);

      });
    