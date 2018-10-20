var MyContract = artifacts.require("Eatsafe.sol");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};
