import React, { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../features/exampleSlice';
import { RootState } from '../store/store';

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.example.value);

  const incrementHandler = useCallback(() => dispatch(increment()), [dispatch]);
  const decrementHandler = useCallback(() => dispatch(decrement()), [dispatch]);

  const calculatedValue = useMemo(() => value * 2, [value]);

  return (
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <p>Value: {value}</p>
      <p>Calculated Value (memoized): {calculatedValue}</p>
    </div>
  );
};

export default Counter;
