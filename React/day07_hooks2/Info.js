import {useState, useEffect} from 'react';

const Info = () => {
  const style = {
    fontWeight: 'bold'
  };

  const [name, setName] = useState('');
  const [nick, setNick] = useState('');

  useEffect(() => {
    console.log("이건 name이 렌더링될 때 >>> ", name);

    return () => {
      console.log("이건 name 언마운트나 업데이트되기 직전 >>> ", name);
    }
  }, []);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNick = (e) => {
    setNick(e.target.value);
  };

  return (
    <>
      <input type="text" name="name" onChange={handleChangeName}/>
      <input type="text" name="nick" onChange={handleChangeNick}/>
      <p><span style={style}>이름: </span>{name}</p>
      <p><span style={style}>닉네임: </span>{nick}</p>
    </>
  );
};

export default Info;