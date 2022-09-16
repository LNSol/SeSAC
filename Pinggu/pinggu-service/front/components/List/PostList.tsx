import React from 'react';
import PostListItem from './PostListItem';
import styled from 'styled-components';

const PostListBox = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 1px;
  background: rgb(252, 252, 252);
  border-radius: 2px;
  overflow-y: scroll;
`;

type Post = {
  id: number
  createdAt: string
  updated_at: string
  title: string
  content: string
  longitude: string
  latitude: string
  user: number
  mypings: number | null
  is_private: boolean
  Myping?: Mypings
}

type Mypings = {
  id: number
  createdAt: string
  updated_at: string
  user: number
  title: string
  category: number,
  is_private: boolean
}

interface IProps {
  posts: Post[]
  onClickSelect: (post: Post) => void
}

const PostList = ({ posts, onClickSelect }: IProps) => {
  return (
    <PostListBox>
      {posts.map(post => (
        <PostListItem key={post.id} post={post} onClickSelect={onClickSelect} />
      ))}
    </PostListBox>
  );
};
export default PostList;