const allPortCalls = require('../src/api-calls/allPortCalls');

describe('testing to get all port calls', () => {
	test('should return a signle vessels port call and status 200', (done) => {
		allPortCalls(9303807)
			.then((data) => {
				expect(data.status).toBe(200);
				done();
			})
			.catch((err) => {
				done(err);
			});
	});
	test('should return an error when no imo is used', (done) => {
		allPortCalls()
			.then((data) => {
				done();
			})
			.catch((err) => {
				expect(err).toBeTruthy();
				expect(err.response.status).toBe(404);
				done();
			});
	});
	test('should return an error when an invalid imo is used', (done) => {
		allPortCalls(546544465)
			.then((data) => {
				done();
			})
			.catch((err) => {
				expect(err).toBeTruthy();
				expect(err.response.status).toBe(404);
				done();
			});
	});
});
