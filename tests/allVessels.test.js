const allVessels = require('../src/api-calls/allVesseles');

describe('tests for all vessels', () => {
	test('should retrieve all vessels with a 200 response', (done) => {
		allVessels()
			.then((data) => {
				expect(data.data.length).toBe(12);
				expect(data.status).toBe(200);
				done();
			})
			.catch((err) => {
				console.log(err);
				done(err);
			});
	});
});
