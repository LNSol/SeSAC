import {useState} from 'react';

const IterationSample = () => {

  const [names, setNames] = useState([
    {id: 1, text: '배가아몬드'},
    {id: 2, text: '대면슬레이어'},
    {id: 3, text: '림리스타'},
    {id: 4, text: '오버읂아'}
  ]);
  const [nextId, setNextId] = useState(5);
  const [inputText, setInputText] = useState('');

  const handleChangeInput = (e) => {
    setInputText(e.target.value);
  };
  const handleEnterInput = (e) => {
    if(e.key === 'Enter' && inputText !== '') {
      handleClickButton();
    }
  };
  const handleClickButton = () => {
    const newName = {id: nextId, text: inputText};
    setNames(names.concat(newName));
    setNextId(nextId + 1);

    setInputText('');
  };
  const handleRemoveName = (id) => {
    const newList = names.filter(name => {
      return name.id !== id;
    });
    setNames(newList);
  };

  const nameList = names.map(name => {
    return <li key={name.id} onDoubleClick={() => handleRemoveName(name.id)}>{name.text}</li>;
  });

  return (
    <>
      <input type="text" value={inputText} onChange= {handleChangeInput} onKeyPress= {handleEnterInput} />
      <button type="button" onClick={handleClickButton}>추가</button>
      <ul>{nameList}</ul>
    </>
  )
};

export default IterationSample;