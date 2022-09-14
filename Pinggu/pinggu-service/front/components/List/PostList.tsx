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
  updatedAt: string
  title: string
  content: string
  longitude: string
  latitude: string
  user: number
  mypings: number | null
  is_public: boolean
}

interface IProp {
  posts: Array<Post>
  onClickSelect: (post: Post, checked: boolean) => void
}

const PostList = ({ posts, onClickSelect }: IProp) => {

  return (
    <PostListBox>
      {posts.map(post => (
        <PostListItem key={post.id} post={post} onClickSelect={onClickSelect} />
      ))}
    </PostListBox>
  );
};
export default PostList;