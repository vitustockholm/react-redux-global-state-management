import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrememnt, decrement } from '../redux/actions/counterActions';

const Counter = () => {
  // Hooks

  // - - - state
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>
        Counter:
        {count}
      </h4>
      <button onClick={() => dispatch(incrememnt())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
};
export default Counter;
