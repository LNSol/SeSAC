import useCounter from './useCounter';

const CounterCustom = () => {
  const [state, onClick] = useCounter({value: 0});

  return (
    <>
      <h2>현재 카운터 값은 {state.value}입니다.</h2>
      <button type="button" onClick={() => onClick('INCREMENT')}>+1</button>
      <button type="button" onClick={() => onClick('DECREMENT')}>-1</button>
    </>
  );
};
export default CounterCustom;