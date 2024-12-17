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
