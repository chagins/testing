import { counterSliceReducer, decrement, increment } from './counter.slice';

describe('getCounterValue', () => {
  test('increment', () => {
    expect(counterSliceReducer({ value: 0 }, increment())).toStrictEqual({ value: 1 });
  });

  test('decrement', () => {
    expect(counterSliceReducer({ value: 0 }, decrement())).toStrictEqual({ value: -1 });
  });

  test('with empty state', () => {
    expect(counterSliceReducer(undefined, increment())).toStrictEqual({ value: 1 });
    expect(counterSliceReducer(undefined, decrement())).toStrictEqual({ value: -1 });
  });
});
