import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import { BiChevronLeft } from 'react-icons/bi';
import MypingsPostList from '../../components/List/MypingsPostList';

interface Params {
  userId: string
  mypingsId: string
}
interface User {
  id: number
  nickname: string
  profile_image_url: string
}
interface Media {
  src: string
}
interface Mypings {
  id: number
  title: string
  category: number
  user: number
  is_private: number
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

const ViewMypings = () => {
  const history = useHistory();
  const match = useRouteMatch<Params>();
  const { userId, mypingsId } = match.params;
  const [ mypings, setMypings ] = useState<Mypings>();
  const [ posts, setPosts ] = useState<UserPost[]>();

  useEffect(() => {
    const getPosts = async () => {
      const { data: mypings } = await axios.get(`http://localhost:4000/users/${userId}/mypings/${mypingsId}`); /* 이건 굳이 요청 필요? props으로 mypings 정보 넘겨주면 될듯 */
      const { data: posts } = await axios.get(`http://localhost:4000/users/${userId}/mypings/${mypingsId}/posts`);
      console.log(posts);
      console.log(mypings);
      setMypings(prev => mypings);
      setPosts(prev => posts);
    };
    getPosts();
  }, []);

  const onClickGoBack = useCallback(() => {
    history.goBack();
  }, []);

  return (
    <div className='mypings-page'>
      <div className='view-mypings-top'>
        <button className='back' onClick={onClickGoBack}><BiChevronLeft /></button>
        <h1 className='top-title'>{mypings?.title}</h1>
      </div>
      <div className='mypings-post-list'>
        {posts ? <MypingsPostList posts={posts} /> : <div></div> }
      </div>
    </div>
  );
};

export default ViewMypings;