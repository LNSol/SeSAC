import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreateMyPings.css';
import PostList from '../List/PostList';

const options = [
  {value: 1, text: 'default'},
  {value: 2, text: '핫 플레이스'},
  {value: 3, text: '포토존'},
  {value: 4, text: '힐링'},
  {value: 5, text: '액티비티'},
  {value: 6, text: '기타'}
];

type Post = {
  id: number
  createdAt: string
  updatedAt: string
  title: string
  content: string
  longitude: string
  latitude: string
  user: number
  mypings: number | null
  is_public: boolean
}

interface IProps {
  header: string,
  open: boolean,
  close: () => void,
  children: string,
}

const CreateMyPings = ({ open, close, header, children }: IProps) => {
  const [ posts, setPosts ] = useState([]);
  const [ selected, setSelected ] = useState([]);

  const onClickSelect = (post: Post, checked: boolean) => {
    console.log(post);
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:4000/post/nullmypings', { withCredentials: true });
      setPosts(prev => { return data });
    };
    getData();
  }, []);

  return (
    <div className='mypings-modal-content'>
      <div className='mypings-modal-box'>
        <header className='mypings-modal-header'>
          <h1 className='mypings-modal-title'>{children}</h1>
          <form className='mypings-setting-form'>
            <input className='mypings-title' placeholder='MyPings 이름' /><br />
            <div className='mypings-category-public'>
              <select>
                {options.map(option => (
                  <option value={option.value}>{option.text}</option>
                ))}
              </select>
              <div className='ispublic'>
                <input id='private-chk' type='checkbox' />
                <label htmlFor='private-chk'>비공개</label>
              </div>
            </div>
          </form>
        </header>
        <main className='mypings-modal-main'>
          <PostList posts={posts} onClickSelect={onClickSelect} />
        </main>
        <footer className='mypings-modal-footer'>
          <button type='button' onClick={close}>취소</button>
          <button type='button'>생성</button>
        </footer>
      </div>
    </div>
  );
};
export default CreateMyPings;