import {useReducer} from 'react';

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value
  };
};

const Info_useReducer = () => {
  const [state, dispatch] = useReducer(reducer, {name: '', nick: ''});
  const {name, nick} = state;

  const onChange = e => {
    dispatch(e.target);
  }

  return (
    <>
      <input type="text" name="name" onChange={onChange} />
      <input type="text" name="nick" onChange={onChange} />
      <p><b>이름:</b> {name}</p>
      <p><b>닉네임:</b> {nick}</p>
    </>
  );
};

export default Info_useReducer;