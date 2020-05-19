const allVessels = require('../api-calls/allVesseles');

const getImoForEachVessel = async () => {
	const vessels = await allVessels();

	const arrayOfImos = vessels.data.map((vessel) => vessel.imo);

	return arrayOfImos;
};

module.exports = getImoForEachVessel;
