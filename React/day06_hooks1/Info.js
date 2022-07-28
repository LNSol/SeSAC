import {useState, useEffect} from 'react';

const Info = () => {
  const style = {
    fontWeight: 'bold'
  };
  const [name, setName] = useState('');
  const [nick, setNick] = useState('');
  useEffect(() => {
    // 마운트 및 업데이트 -> 렌더링될 때마다 실행
    // console.log("렌더링이 완료되었습니다!");
    // console.log({
    //   name,
    //   nick
    // });

    // 처음 마운트될 때만 실행 - 두 번째 인수로 빈 배열 넘겨줌
    // console.log('마운트될 때만 실행됩니다.');

    // 특정 값이 업데이트될 때만 실행 - 두 번째 인수로 배열 안에 검사하고 싶은 값을 넣어줌
    //console.log(name);

    // 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행해야한다면 useEffect에서 뒷정리 함수를 반환한다.
    // return () => {
    //   console.log('cleanup');
    //   console.log(name);
    // };

    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, []);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNick = (e) => {
    setNick(e.target.value);
  };

  

  return (
    <>
      <input type="text" onChange={handleChangeName}/>
      <input type="text" onChange={handleChangeNick}/>
      <p><span style={style}>이름: </span>{name}</p>
      <p><span style={style}>닉네임: </span>{nick}</p>
    </>
  )
};

export default Info;