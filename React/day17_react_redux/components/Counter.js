const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h2>{number}</h2>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}
export default Counter;