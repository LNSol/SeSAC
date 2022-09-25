import React from 'react';
import styled from 'styled-components';

const categories = [
  { value: 1, text: 'default'},
  { value: 2, text: '핫플레이스'},
  { value: 3, text: '포토존'},
  { value: 4, text: '힐링'},
  { value: 5, text: '액티비티'},
  { value: 6, text: '기타'},
]

const MypingsInputBox = styled.div`
  margin: 10px 20px 10px 20px;
  .mypings-title {
    input {
      width: 100%;
      height: 45px;
      outline: none;
      font-size: 20px;
      padding-left: 10px;
      letter-spacing: 1.5px;
      border: none;
      border-radius: 3px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }
    input::placeholder {
      font-size: 20px;
    }
  }
  .category-private {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .category {
      padding-left: 10px;
      width: 200px;
      height: 30px;
      outline: none;
      border: none;
      letter-spacing: 1px;
      border-radius: 3px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }
    .private {
      display: flex;
      align-items: center;
      label {
        margin-left: 7px;
        letter-spacing: 1.2px;
      }
    }
  }
`;

const MypingsInput = () => {
  return (
    <MypingsInputBox>
      <div className='mypings-title'>
        <input type='text' placeholder='Mypings 이름을 입력하세요.' />
      </div>
      <div className='category-private'>
        <select className='category'>
          {categories.map(({ value, text }) => (
            <option key={value} value={value}>{text}</option>
          ))}
        </select>
        <div className='private'>
          <input id='private-chk' type='checkbox' />
          <label htmlFor='private-chk'>Private</label>
        </div>
      </div>
    </MypingsInputBox>
  );
};
export default MypingsInput;