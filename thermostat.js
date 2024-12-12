class Thermostat {
	constructor() {
		this.initialTemp = 20;
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
}

module.exports = Thermostat;
