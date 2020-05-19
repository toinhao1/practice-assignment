const getImoForEachVessel = require('../src/utils/getImoForEachVessel');
const getPortCallsForEveryVessel = require('../src/utils/getPortCallsForEveryVessel');
const topPorts = require('../src/utils/topPorts');

describe('Ensure all utils work as planned', () => {
	test('gets an array of all of the vessels IMOs', (done) => {
		getImoForEachVessel()
			.then((data) => {
				expect(data.length).toBe(12);
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	test('gets the data of every vessel', (done) => {
		getPortCallsForEveryVessel()
			.then((data) => {
				expect(data).toBeTruthy();
				done();
			})
			.catch((err) => {
				done(err);
			});
	});
	test('returns the 5 top ports, with port calls', (done) => {
		topPorts()
			.then((data) => {
				expect(data.length).toBe(5);
				done();
			})
			.catch((err) => {
				console.log(err);
				done(err);
			});
	});
});
