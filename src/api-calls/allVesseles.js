const axios = require('axios');

// retrieves all vessels
const allVessels = async () => {
	const data = await axios.get(
		'https://import-coding-challenge-api.portchain.com/api/v2/vessels'
	);
	return data;
};

module.exports = allVessels;
