import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';
import MypingsPostList from '../../components/List/MypingsPostList';
import MypingsInput from '../../components/Input/MypingsInput';
import axios from 'axios';
import './mypingsPage.css';

interface User {
  id: number
  nickname: string
  profile_image_url: string
}
interface Media {
  src: string
}
interface UserPost {
  id: number
  created_at: string
  title: string
  hits: number
  is_private: number
  User: User
  Media: Media[]
}

const CreateMypings = () => {
  const history = useHistory();
  const [posts, setPosts] = useState<UserPost[]>();
  const [selected, setSelected] = useState<UserPost[]>();

  useEffect(() => {
    const getPosts = async () => {
      const { data: {id: userId} } = await axios.get('http://localhost:4000/me');
      const { data: posts } = await axios.get(`http://localhost:4000/users/${userId}/posts`);
      setPosts(prev => posts);
    };
    getPosts();
  }, []);

  const onClickGoBack = useCallback(() => {
    history.goBack();
  }, []);

  return (
    <div className='mypings-page'>
      <div className='mypings-top'>
        <div className='back-btn' onClick={onClickGoBack}><AiOutlineRollback /></div>
        <h1 className='top-title'>Mypings 생성하기</h1>
      </div>
      <div className='mypings-input'>
        <MypingsInput />
      </div>
      <div className='mypings-post-list'>
        {posts ? <MypingsPostList posts={posts} /> : <></>}
      </div>
      <div className='mypings-bottom'>
        <div className='mypings-btn-cancel' onClick={onClickGoBack}>취소</div>
        <div className='mypings-btn-create'>생성</div>
      </div>
    </div>
  );
};
export default CreateMypings;