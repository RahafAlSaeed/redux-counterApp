import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { RootState } from '../../store';
import { decrement, increment, reset } from './counterSlice';

import "../App.css";

const Counter = () => {

  const count = useSelector((state: RootState) => state.counterR.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleReset = () => {
    dispatch(reset());
  };
  
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>0</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
