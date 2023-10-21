import { getCounterValue } from 'store/selectors';

describe('getCounterValue', () => {
  test('initial state', () => {
    const state: RootState = {
      counter: {
        value: 0,
      },
    };

    expect(getCounterValue(state)).toBe(0);
  });
});
