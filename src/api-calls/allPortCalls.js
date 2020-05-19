const axios = require('axios');

const allPortCalls = async (imo) => {
	const data = await axios.get(
		`https://import-coding-challenge-api.portchain.com/api/v2/schedule/${imo}`
	);

	return data;
};

module.exports = allPortCalls;
