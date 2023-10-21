import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getCounterValue } from 'store/selectors';
import { decrement, increment } from 'store/reducers';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <button type="button" onClick={onIncrement} data-testid="increment-btn">
        increment
      </button>
      <button type="button" onClick={onDecrement} data-testid="decrement-btn">
        decrement
      </button>
    </div>
  );
};
