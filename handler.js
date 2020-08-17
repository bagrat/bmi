'use strict';

/**
 * Parses  the `weight` and `height` parameters from the
 * given object.
 *
 * If the expected parameters are not present or are invalid, an error
 * is thrown.
 */
function parseParams(params) {
	const allParamsGiven = params && params.weight && params.height;

	if (!allParamsGiven) {
		throw "missing input parameters";
	}

	const weight = Number(params.weight);
	const height = Number(params.height);

	if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
		throw "input parameter values must be positive numbers";
	}

	return {weight: weight, height: height};
}

module.exports.bmi = async event => {
	const params = event.queryStringParameters;

	try {
		const {weight, height} = parseParams(params);

		const bmi = weight / Math.pow(height, 2);

		return {
			statusCode: 200,
			body: JSON.stringify(bmi)
		};
	}
	catch (error) {
		return {
			statusCode: 400,
			body: JSON.stringify({
				message: error,
			})
		};
	}
};
