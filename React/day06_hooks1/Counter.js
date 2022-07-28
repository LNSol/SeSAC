import {useState} from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const handleAddOne = () => {
    setNumber(number+1);
  };
  const handleMinusOne = () => {
    setNumber(number-1);
  };

  return (
    <>
      <h2>현재 카운터 값은 {number}입니다.</h2>
      <button type="button" onClick={handleAddOne}>+1</button>
      <button type="button" onClick={handleMinusOne}>-1</button>
    </>
  )
};

export default Counter;