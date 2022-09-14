import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const PostListItemBox = styled.div`
  padding: 5px 10px;
  display: flex;
  cursor: pointer;
  & + & {
    border-top: 0.5px solid gray;
  }
  &:hover {
    background: rgba(240, 240, 240, 0.8);
  }
  &.checked {
    background: #292929;
    color: rgb(230, 230, 230);
  }

  .image {
    .main-image {
      width: 100px;
      height: 100px;
      background: gray;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 20px;
    .title-time {
      display: flex;
      justify-content: space-between;
      .post-created-at {
        font-size: 0.8em;
        color: gray;
      }
    }
    .post-text {
      display: flex;
      align-items: center;
      flex: 1;
      margin-top: 3px;
    }
  }
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
  post: Post,
  onClickSelect: (post: Post, checked: boolean) => void
}

const PostListItem = ({ post, onClickSelect }: IProp) => {
  const [checked, setChecked] = useState(false);

  const onClickCheck = useCallback(() => {
    setChecked(prev => !prev);
    onClickSelect(post, checked);
  }, [checked]);

  return (
    <PostListItemBox  className={cn('post-list-item', { checked })} onClick={onClickCheck}>
      <div className='image'>
        <div className='main-image'></div>
      </div>
      <div className='content'>
        <div className='title-time'>
          <h3 className='post-title'>{post.title}</h3>
          <span className='post-created-at'>{post.createdAt.slice(0, 10)}</span>
        </div>
        <p className='post-text'>{post.content}</p>
      </div>
    </PostListItemBox>
  );
};
export default PostListItem;