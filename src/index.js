const topPorts = require('../src/utils/topPorts');

topPorts()
	.then((data) => {
		console.log();
	})
	.catch((err) => {
		console.log(err);
	});

console.log('Hello World');
