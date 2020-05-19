const getPortCallsForEveryVessel = require('./getPortCallsForEveryVessel');
const moment = require('moment');

const portCallDurations = async () => {
	const allVessellPortCalls = await getPortCallsForEveryVessel();

	let allTheDurations = [];
	allVessellPortCalls.forEach((portCall) => {
		portCall.forEach((singleCall) => {
			const momentDeparture = moment(singleCall.departure).utc().format('X');
			const momentArrival = moment(singleCall.arrival).utc().format('X');

			allTheDurations.push(
				Math.ceil((momentDeparture - momentArrival) / 60 / 60)
			);
		});
	});

	let sortedValues = allTheDurations.sort((a, b) => a - b);

	const percentileMap = {
		'90th': 0,
		'75th': 0,
		'50th': 0,
		'20th': 0,
		'5th': 0,
	};

	percentileMap['90th'] = sortedValues.slice(
		Math.floor(0.1 * sortedValues.length),
		Math.floor(0.1 * sortedValues.length) + 1
	);
	percentileMap['75th'] = sortedValues.slice(
		Math.floor(0.25 * sortedValues.length),
		Math.floor(0.25 * sortedValues.length) + 1
	);
	percentileMap['50th'] = sortedValues.slice(
		Math.floor(0.5 * sortedValues.length),
		Math.floor(0.5 * sortedValues.length) + 1
	);
	percentileMap['20th'] = sortedValues.slice(
		Math.floor(0.8 * sortedValues.length),
		Math.floor(0.8 * sortedValues.length) + 1
	);
	percentileMap['5th'] = sortedValues.slice(
		Math.floor(0.95 * sortedValues.length),
		Math.floor(0.95 * sortedValues.length) + 1
	);

	// console.log(topPercentile);
	return percentileMap;
};

module.exports = portCallDurations;
