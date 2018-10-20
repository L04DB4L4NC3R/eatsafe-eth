Web3 = require('web3')
if(typeof web3 !== 'undefined'){
    web3 = new Web3(web3.currentProvider)
} else{
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

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

var contract = contractData.at('0x78caef59bc3299242f47c7911ace5cc51d9435c7');



$("#submitBtn").on("click",(e)=>{
    e.preventDefault();
    contract.setter("a","a","a","a",1,1,1,1,1,1);
});


// Event listener will get fired once setInstructor sets the values
var eventListener = contract.EatSafe();

eventListener.watch((err,result)=>{
    if(!err){
        console.log(result)
    } else{
        console.log("error"); 
    }
})