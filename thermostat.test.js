const Thermostat = require("./thermostat.js");

describe("thermostat", () => {
	it("starts/ sets the initial temperature to 20 degrees", () => {
		const thermostat = new Thermostat();
		console.log(thermostat);

		expect(thermostat.initialTemperature).toBe(20);
	});
	it("returns the current temperature", () => {
		const thermostat = new Thermostat();
		expect(thermostat.getTemperature()).toBe(20);
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
	it("does not decreases the temperature below 10", () => {
		const thermostat = new Thermostat();
		thermostat.down();
		thermostat.down();
		thermostat.down();
		thermostat.down();
		thermostat.down();
		thermostat.down();
		thermostat.down();
		thermostat.down();
		thermostat.down();
		thermostat.down();
		thermostat.down();
		thermostat.down();
		thermostat.down();

		expect(thermostat.initialTemperature).toBe(10);
	});
	it("has a power saving mode that is by default on", () => {
		const thermostat = new Thermostat();
		expect(thermostat.powerSavingMode).toBe(true);
	});
	it("can turn off power saving mode", () => {
		const thermostat = new Thermostat();
		expect(thermostat.powerSavingMode).toBe(true);
		thermostat.turnOffPsm();
		expect(thermostat.powerSavingMode).toBe(false);
	});
	it("has a maximum temperature of 25 degrees, if the power saving mode is on", () => {
		const thermostat = new Thermostat();
		expect(thermostat.powerSavingMode).toBe(true);
		thermostat.up();
		thermostat.up();
		thermostat.up();
		thermostat.up();
		thermostat.up();
		thermostat.up();
		expect(thermostat.initialTemperature).toBe(25);
	});
	it("has a maximum temperature is 32 degrees, if power saving mode is off", () => {
		const thermostat = new Thermostat();
		expect(thermostat.powerSavingMode).toBe(true);
		thermostat.turnOffPsm();
		expect(thermostat.powerSavingMode).toBe(false);
		thermostat.up();
		thermostat.up();
		thermostat.up();
		thermostat.up();
		thermostat.up();
		thermostat.up();
		thermostat.up();
		thermostat.up();
		thermostat.up();
		thermostat.up();
		thermostat.up();
		thermostat.up();
		thermostat.up();
		expect(thermostat.initialTemperature).toBe(32);
	});
	it("reset the temperature to 20", () => {
		const thermostat = new Thermostat();
		thermostat.up();
		thermostat.up();
		thermostat.down();
		thermostat.up();
		thermostat.reset();
		expect(thermostat.getTemperature()).toBe(20);
	});
});
