class Thermostat {
	constructor() {
		this.initialTemp = 20;
		this.powerSavingModeOn = 25;
		this.powerSavingModeOff = 32;
	}

	getTemperature() {
		return this.initialTemp;
	}

	up() {
		this.initialTemp += 1;
	}

	down() {
		this.initialTemp -= 1;
	}

	setPowerSavingMode(x) {}

	reset() {
		return (this.initialTemp = 20);
	}
}

module.exports = Thermostat;
