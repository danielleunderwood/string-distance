const getDictionary = (
	outputDictionary: Map<string, number>,
	inputString: string,
	increment: number,
) => {
	for (const char of inputString) {
		let currentValue = outputDictionary.get(char);
		if (!currentValue) {
			currentValue = 0;
			outputDictionary.set(char, 0);
		}

		outputDictionary.set(char, currentValue + increment);
	}
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const getQGramDistance = (stringA: string, stringB: string) => {
	const outputDictionary = new Map<string, number>();

	getDictionary(outputDictionary, stringA, 1);

	getDictionary(outputDictionary, stringB, -1);

	let distance = 0;

	for (const [, count] of outputDictionary) {
		distance += Math.abs(count);
	}

	return distance;
};

export default getQGramDistance;
