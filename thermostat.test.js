const Thermostat = require("./thermostat.js");

// const thermostat = new Thermostat();

describe("thermostat", () => {
	it("starts with an initial temperature of 20 degrees", () => {
		const thermostat = new Thermostat();
		console.log(thermostat);

		expect(thermostat.initialTemperature).toBe(20);
	});
	it("increases the temperature with an up method", () => {
		const thermostat = new Thermostat();
		thermostat.up();
		expect(thermostat.initialTemperature).toBe(21);
	});
	it("decreases the temperature with a down method", () => {
		const thermostat = new Thermostat();
		thermostat.down();
		expect(thermostat.initialTemperature).toBe(19);
	});
	it("has a minimum possible temperature of 10 degrees", () => {
		const thermostat = new Thermostat();
		expect(thermostat.minTemperature).toBe(10);
	});
});
