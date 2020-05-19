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
});
