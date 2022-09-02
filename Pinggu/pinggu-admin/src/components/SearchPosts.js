import styled, { css } from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm=styled.form`
  display: flex;
  margin: 20px 8%;
`;

const SearchSelect=styled.select`
  width: 20%;
`;

const SearchInput=styled.input`
  width: 70%;
`;

const SearchButton=styled.button`
  width: 10%;
`;

const options = [
  {key: 'nickname', text: '작성자'},
  {key: 'title', text: '제목'},
  {key: 'content', text: '내용'},
];

const SearchPosts = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState('nickname');
  const [input, setInput] = useState('');

  const onSelectChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex].value;
    setSelect(selectedOption);
  };
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    input === '' ? 
      navigate('/posts') :
      navigate(`/posts/${select}/${input}`);
  }

  return (
    <SearchForm onSubmit={onSubmitForm}>
      <SearchSelect onChange={onSelectChange}>
        {options.map(({key, text}) => (
          <option key={key} value={key}>{text}</option>
        ))}
      </SearchSelect>
      <SearchInput value={input} onChange={onInputChange} />
      <SearchButton type='submit'>검색</SearchButton>
    </SearchForm>
  );
};
export default SearchPosts;