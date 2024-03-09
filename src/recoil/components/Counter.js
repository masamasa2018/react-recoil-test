import React from 'react';
import { useRecoilState } from 'recoil';
import { countState } from '../atoms';

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
