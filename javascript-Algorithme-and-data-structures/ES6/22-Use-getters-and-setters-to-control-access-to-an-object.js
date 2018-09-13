// You can obtain values from an object, and set a value 
// of a property within an object

// solution by @adnen_rebai
function makeClass(){
  
    /* Alter code below this line */
    class Thermostat{
        constructor(FahernheitTemp){
            this._temperature = FahernheitTemp;
        }
        get temperature(){
            return 5/9 *(this._temperature - 32);
        }
        set temperature(celsiusTemp){
            this._temperature = celsiusTemp * 9.0 / 5 + 32;
        }

    }
    /* Alter code below this line */
  return Thermostat
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahernaheit scale
let temp = thermos.temperature;
thermos.temperature = 26;
let newTemp = thermos.temperature;
console.log("Old tempurature : "+ temp);
console.log("New tempurature : "+ newTemp);