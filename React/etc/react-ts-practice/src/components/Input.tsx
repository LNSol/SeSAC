import { CharacterConsumer } from '../contexts/Character';
import React, { useState } from 'react';

type Action = {
  setName: (name: string) => void
  setNickname: (nickname: string) => void
}

const Input = () => {
  const [form, setForm] = useState({name: '', nickname: ''});
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({...prevForm, [name]: value}));
  }
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>, actions: Action) => {
    e.preventDefault();
    
    const { setName, setNickname } = actions;
    setName(form.name);
    setNickname(form.nickname);
    
    setForm(prevForm => ({name: '', nickname: ''}));
  }
  return (
    <CharacterConsumer>
      {({ actions }) => (
        <form onSubmit={(e) => onSubmitHandler(e, actions)}>
          <input name='name' value={form.name} onChange={onChange} />
          <input name='nickname' value={form.nickname} onChange={onChange} />
          <button type='submit'>등록</button>
        </form>
      )}
    </CharacterConsumer>
  );
};
export default Input;