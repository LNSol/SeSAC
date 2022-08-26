import React, { useState } from 'react';

type SubmitForm = {
  onSubmit: (form: {name: string, description: string}) => void
}

const MyForm = ({ onSubmit }: SubmitForm) => {
  const [form, setForm] = useState({name: '', description: ''});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm(prevForm => ({...prevForm, [name]: value}));
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm(prevForm => ({name: '', description: ''}));
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input name='name' value={form.name} onChange={onChange} />
      <input name='description' value={form.description} onChange={onChange} />
      <button type='submit'>submit</button>
    </form>
  );
}
export default MyForm;