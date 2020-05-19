const getImoForEachVessel = require('./getImoForEachVessel');
const axios = require('axios');

const getPortCallsForEveryVessel = async () => {
	const arrayOfImos = await getImoForEachVessel();

	const allThePortData = arrayOfImos.map((imo) =>
		axios.get(
			`https://import-coding-challenge-api.portchain.com/api/v2/schedule/${imo}`
		)
	);

	const awaitedPortData = await Promise.all(allThePortData);

	let arrayOfPortCalls = awaitedPortData.map((ship) => ship.data.portCalls);

	return arrayOfPortCalls;
};

module.exports = getPortCallsForEveryVessel;
