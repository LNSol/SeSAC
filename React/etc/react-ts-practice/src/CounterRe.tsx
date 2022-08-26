import React, { useReducer } from 'react';

type State = {
  number: number
}
type Action = {
  type: 'INCREASE' | 'DECREASE'
}

const reducer = (state: State, action: Action): State => {
  switch(action.type) {
    case 'INCREASE':
      return {number: state.number + 1};
    case 'DECREASE':
      return {number: state.number - 1};
    default:
      throw new Error('Unhandled action');
  }
};

const CounterRe = () => {
  const [state, dispatch] = useReducer(reducer, {number: 0})

  const onIncrease = () => {
    dispatch({type: 'INCREASE'});
  };
  const onDecrease = () => {
    dispatch({type: 'DECREASE'});
  };

  return (
    <div>
      <h1>{state.number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
export default CounterRe;