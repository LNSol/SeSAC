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

export default function useCounter(initalForm) {
  const [state, dispatch] = useReducer(reducer, initalForm);

  const onClick = (type) => {
    dispatch({type: type});
  }

  return [state, onClick];
};