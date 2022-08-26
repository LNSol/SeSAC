import { useState } from 'react';

const Counter = () => {
  // 제네릭을 안 써도 유추함. 그럼 언제 씀?
  // null일 수도 있고 아닐 수도 있을 때
  // useState<Informataion | null>(null)
  const [number, setNumber] = useState<number>(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }
  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
export default Counter;