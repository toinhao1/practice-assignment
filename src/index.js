const topPorts = require('../src/utils/topPorts');
const portCallDurations = require('../src/utils/portCallDurations');

topPorts()
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});

portCallDurations()
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});
