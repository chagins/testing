const validateValue = require('./validateValue');


describe('Validate value tests', () => {
    test('Correct value', () => {
        expect(validateValue(50)).toBe(true);
    });

    test('Min correct value', () => {
        expect(validateValue(0)).toBe(true);
    });

    test('Max correct value', () => {
        expect(validateValue(100)).toBe(true);
    });

    test('Less incorrect value', () => {
        expect(validateValue(-1)).toBe(false);
    });

    test('Greater incorrect value', () => {
        expect(validateValue(101)).toBe(false);
    });
})