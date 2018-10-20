pragma solidity ^0.4.18;
contract Eatsafe{

        // Identification
    string fromm;
    string to;
    string asset;
        
        
        // qualitative and quantitative analysis
    uint quantity;
    string timestamp;

    int16 temperature;
    uint humidity;
    uint gas;
    uint airqual;
    uint soilmois;
        
        // timestamp

        // Eatsafe event
    event EatSafe(
            
        string fromm,string to,string asset,string timestamp, 
        uint quantity, int16 temperature, uint humidity, uint gas,
        uint airqual, uint soilmois
        
    );
        
        // Sets the values and emits the event 
    function setter(
        string _from, string _to, string _asset,
        string _timestamp, uint _quantity, 
        int16 temperature, uint humidity, uint gas, uint airqual, 
        uint soilmois
        ) public {

        fromm = _from;
        to = _to;
        asset = _asset;
        timestamp = _timestamp;
        quantity = _quantity;
        emit EatSafe(fromm, to, asset, timestamp, quantity, temperature, humidity, gas, airqual, soilmois);
            
    }
        
        // gets the values
    function getter() public constant returns (string, string, string, string, uint, int16, uint, uint,
        uint, uint) {
        return(fromm, to, asset, timestamp, quantity, temperature, humidity, gas, airqual, soilmois);
    }
}