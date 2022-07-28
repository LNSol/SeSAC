import {useReducer} from 'react';

const reducer = (state, action) => {
  const {value} = state;

  switch(action.type) {
    case 'INCREMENT':
      return {value: value + 1};
    case 'DECREMENT':
      return {value: value - 1};
    default:
      return {value};
  }
};

const Counter_useRreducer = () => {
  const [state, dispatch] = useReducer(reducer, {value: 0});

  return (
    <>
      <h2>현재 값은 {state.value}입니다.</h2>
      <button type="button" onClick={() => { dispatch({type: 'INCREMENT'}); }}>+1</button>
      <button type="button" onClick={() => { dispatch({type: 'DECREMENT'}); }}>-1</button>
    </>
  );
};

export default Counter_useRreducer;