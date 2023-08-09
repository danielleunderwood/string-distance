import getQGramDistance from '../src';

describe('getQGramDistance', () => {
	const test = (stringA: string, stringB: string, expected: number) => {
		const result = getQGramDistance(stringA, stringB);

		expect(result).toBe(expected);
	};

	for (const {
		input: {strA, strB},
		expected,
	} of [
		{input: {strA: 'Hello', strB: 'Hello'}, expected: 0},
		{input: {strA: 'Hello', strB: 'olleH'}, expected: 0},
		{input: {strA: 'Hello', strB: 'Hey'}, expected: 4},
		{input: {strA: 'Dog', strB: 'Hey'}, expected: 6},
	]) {
		it('calculates the expected string distance', () => {
			test(strA, strB, expected);
		});
	}
});
