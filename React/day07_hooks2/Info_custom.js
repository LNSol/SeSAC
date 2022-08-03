import useInputs from './useInputs';

const Info_custom = () => {
  const [state, onChange] = useInputs({name: '', nick: ''});
  const {name, nick} = state;

  return (
    <>
      <input type="text" name="name" value={name} onChange={onChange} />
      <input type="text" name="nick" value={nick} onChange={onChange} />
      <p>이름: {name}</p>
      <p>닉네임: {nick}</p>
    </>
  );
};

export default Info_custom;