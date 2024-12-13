//class Thermostat {
// constructor() {
// 	this.initialTemp = 20;
// 	this.powerSavingModeOn = 25;
// 	this.powerSavingModeOff = 32;
// }
// getTemperature() {
// 	return this.initialTemp;
// }
// up() {
// 	this.initialTemp += 1;
// }
// down() {
// 	this.initialTemp -= 1;
// }
// setPowerSavingMode(x) {}
// reset() {
// 	return (this.initialTemp = 20);
// }
//}

class Thermostat {
	constructor() {
		this.initialTemperature = 20;
		this.minTemperature = 10;
		this.powerSavingMode = true;
	}

	getTemperature() {
		return this.initialTemperature;
	}

	up() {
		this.initialTemperature += 1;
	}

	down() {
		if (this.initialTemperature > this.minTemperature) {
			this.initialTemperature -= 1;
		}
	}
}

module.exports = Thermostat;
