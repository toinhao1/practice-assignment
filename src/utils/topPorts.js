const getPortCallsForEveryVessel = require('./getPortCallsForEveryVessel');

const topPorts = async () => {
	const allVessellPortCalls = await getPortCallsForEveryVessel();

	let topFivePorts = {};

	allVessellPortCalls.forEach((thePort) =>
		thePort.forEach((anotherLevel) => {
			if (anotherLevel.port.name in topFivePorts) {
				topFivePorts[anotherLevel.port.name] =
					topFivePorts[anotherLevel.port.name] + 1;
			} else {
				topFivePorts[anotherLevel.port.name] = 1;
			}
		})
	);

	let topSortedPorts = Object.entries(topFivePorts)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 5);

	let lowSortedPorts = Object.entries(topFivePorts)
		.sort((a, b) => a[1] - b[1])
		.slice(0, 5);

	console.log('The Top', topSortedPorts);
	console.log('The Low', lowSortedPorts);
	return lowSortedPorts;
};

module.exports = topPorts;
