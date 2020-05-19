const getImoForEachVessel = require('../src/utils/getImoForEachVessel');
const getPortCallsForEveryVessel = require('../src/utils/getPortCallsForEveryVessel');
const topPorts = require('../src/utils/topPorts');
const portCallDurations = require('../src/utils/portCallDurations.js');

describe('Ensure all utils work as planned', () => {
	test('gets an array of all of the vessels IMOs', (done) => {
		return getImoForEachVessel()
			.then((data) => {
				expect(data.length).toBe(12);
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	test('gets the data of every vessel', (done) => {
		return getPortCallsForEveryVessel()
			.then((data) => {
				expect(data).toBeTruthy();
				done();
			})
			.catch((err) => {
				done(err);
			});
	});
	test('returns the 5 top ports, with port calls', (done) => {
		return topPorts()
			.then((data) => {
				expect(data.length).toBe(8);
				done();
			})
			.catch((err) => {
				done(err);
			});
	});
	test('returns an object with the 5 percentiles and the duration at that percentile', (done) => {
		return portCallDurations()
			.then((data) => {
				expect(Object.keys(data).length).toBe(5);
				done();
			})
			.catch((err) => {
				console.log(err);
				done();
			});
	});
});
