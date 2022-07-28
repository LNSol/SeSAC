import {useReducer} from 'react';

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value
  }
};

const Info_useReducer = () => {
  const style = {
    fontWeight: 'bold'
  };
 
  const [info, dispatch] = useReducer(reducer, {
    name: '',
    nick: ''
  });

  const handleChange = (e) => {
    dispatch(e.target);
  };
  
  return (
    <>
      <input type="text" name="name" onChange={handleChange} />
      <input type="text" name="nick" onChange={handleChange} />
      <p><span style={style}>이름 : </span>{info.name}</p>
      <p><span style={style}>닉네임 : </span>{info.nick}</p>
    </>
  )
};

export default Info_useReducer;