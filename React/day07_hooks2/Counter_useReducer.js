import {useReducer} from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {value: state.value + 1};
    case 'DECREMENT':
      return {value: state.value - 1};
    default: 
    return state;
  }
};

const Counter_useReducer = () => {
  const [state, dispatch] = useReducer(reducer, {value: 0});

  return (
    <>
      <h2>현재 카운터 값은 {state.value} 입니다.</h2>
      <button type="button" onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
      <button type="button" onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
    </>
  );
};

export default Counter_useReducer;