// // Exercise (instructions):
// Build, test-driving your code, a simple program to manage a thermostat. Here is the specification for the initial MVP
// of the program:

// 	The Thermostat starts with an initial temperature of 20 degrees
// 	You can increase the temperature with an up method
// 	You can decrease the temperature with a down method
// 	The minimum possible temperature is 10 degrees
// 	The Power saving mode is on by default but it can also be turned off
// 	If power saving mode is on, the maximum temperature is 25 degrees
// 	If power saving mode is off, the maximum temperature is 32 degrees
// 	You can reset the temperature to 20 with a reset method

class Thermostat {
	constructor() {
		this.initialTemperature = 20;
		this.minTemperature = 10;
		this.powerSavingMode = true;
		this.maxPSMonTemperature = 25;
		this.maxPSMoffTemperature = 32;
	}

	getTemperature() {
		return this.initialTemperature;
	}

	up() {
		if (
			this.powerSavingMode === true &&
			this.initialTemperature < this.maxPSMonTemperature
		) {
			this.initialTemperature += 1;
		} else if (
			this.powerSavingMode === false &&
			this.initialTemperature < this.maxPSMoffTemperature
		) {
			this.initialTemperature += 1;
		}
	}

	down() {
		if (this.initialTemperature > this.minTemperature) {
			this.initialTemperature -= 1;
		}
	}

	turnOffPsm() {
		this.powerSavingMode = false;
	}

	reset() {
		this.initialTemperature = 20;
	}
}

module.exports = Thermostat;

// In the node REPL:

// 		> const Thermostat = require('./thermostat.js');
// 		 undefined
// 		> const thermostat = new Thermostat()
// 		 undefined
// 		> thermostat
// 		 Thermostat {
//   		initialTemperature: 20,
//   		minTemperature: 10,
//   		powerSavingMode: true,
//   		maxPSMonTemperature: 25,
//   		maxPSMoffTemperature: 32
// 		 }
// 		> thermostat.getTemperature()
// 		 20
// 		> thermostat.up()
// 		 undefined
// 		> thermostat.up()
// 		 undefined
// 		> thermostat.getTemperature()
// 		 22
// 		> thermostat.down()
// 		 undefined
// 		> thermostat.getTemperature()
// 		 21
// 		> thermostat.reset()
// 		 undefined
// 		> thermostat.getTemperature()
// 		 20
