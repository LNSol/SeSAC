import React from 'react';
import styled from 'styled-components';
import MypingsPostListItem from './MypingsPostListItem';

const MypingsPostListBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background: rgb(240, 240, 240);
  margin: 20px;
  overflow-y: scroll;
  height: 600px;
  border-radius: 3px;
`;

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
type PostsProps = {
  posts: UserPost[]
}

const MypingsPostList = ({ posts }: PostsProps) => {
  console.log('MypingsPostList >>> ', posts);
  return (
    <MypingsPostListBox>
      {posts.map(post => {
        post.created_at = post.created_at.slice(0, 10);
        return (<li key={post.id}><MypingsPostListItem post={post} /></li>);
      })}
    </MypingsPostListBox>
  )
};
export default MypingsPostList;