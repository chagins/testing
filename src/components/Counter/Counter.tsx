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
      <h1>value = {value}</h1>
      <button type="button" onClick={onIncrement}>
        increment
      </button>
      <button type="button" onClick={onDecrement}>
        decrement
      </button>
    </div>
  );
};
