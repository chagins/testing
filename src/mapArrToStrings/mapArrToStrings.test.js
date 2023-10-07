const mapArrToStrings = require('./mapArrToStrings');

describe('Validate mapArrToStrings tests', () => {
    test('Correct value', () => {
        expect(mapArrToStrings([1, 2, 3])).toStrictEqual(['1', '2', '3']);
    });
    test('Mix value types', () => {
        expect(mapArrToStrings([1, '2', 3.1, null, 2, 3])).toStrictEqual(['1', '2', '3']);
    });
    test('Empty array', () => {
        expect(mapArrToStrings([])).toStrictEqual([]);
    });
    test('Negation', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toStrictEqual([1, 2, 3]);
    });
})