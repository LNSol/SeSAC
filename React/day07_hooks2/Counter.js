import {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>현재 카운터 값은 {count} 입니다.</h2>
      <button type="button" onClick={() => setCount(count + 1)}>+1</button>
      <button type="button" onClick={() => setCount(count - 1)}>-1</button>
    </>
  )
};

export default Counter;