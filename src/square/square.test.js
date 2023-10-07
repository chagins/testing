const square = require('./square');

describe('Validate square tests', (object, method) => {
    let mockValue;
    beforeEach(() => {
    })
    beforeAll(() => {
    })

    test('Math.pow to be called one time', () => {
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5);
        // expect(square(2)).toBeGreaterThan(3);
        // expect(square(2)).not.toBeUndefined();
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    });

    test('Math.pow not have been called', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).not.toBeCalledTimes(0);
    });

    afterEach(() => {
        jest.clearAllMocks()
    })
    afterAll(() => {
    })

})