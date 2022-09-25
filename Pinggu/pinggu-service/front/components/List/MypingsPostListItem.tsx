import React from 'react';
import styled from 'styled-components';
import { AiOutlineEye } from 'react-icons/ai';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';

const MypingsPostListItemBox = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  padding: 0 15px 0 10px;
  border-bottom: 0.5px solid #c1bfbf;
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
  }
  .representative-image {
    width: 80px;
    height: 80px;
    background: gray;
  }
  .post-info {
    position: relative;
    flex: 1;
    height: 80%;
    margin-left: 20px;
    .post-title {
      font-size: 1.3em;
    }
    .post-user-created-at {
      display: flex;
      width: 100%;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .user {
        display: flex;
        align-items: center;
        .user-profile-image {
          width: 30px;
          height: 30px;
          background: gray;
          border-radius: 50%;
        }
        .user-nickname {
          margin-left: 2px;
          letter-spacing: 0.5px;
        }
      }
      .private-hits-created-at {
        display: flex;
        font-size: 0.9em;
        align-items: center;
        color: rgb(104, 104, 104);
        .hits{
          display: flex;
          align-items: center;
          margin-left: 8px;
          .hits-count {
            margin-left: 2px;
          }
        }
        .created-at {
          margin-left: 8px;
        }
      }
      
    }
  }
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
  post: UserPost
}

const MypingsPostListItem = ({ post }: PostsProps) => {
  return (
    <MypingsPostListItemBox className='post-list-box'>
      <div className='representative-image'>
        <img className='post-image' src='' />
      </div>
      <div className='post-info'>
        <h3 className='post-title'>
          {post.title}
        </h3>
        <div className='post-user-created-at'>
          <div className='user'>
            <img className='user-profile-image' src='' />
            <span className='user-nickname'>{post.User.nickname}</span>
          </div>
          <div className='private-hits-created-at'>
            {post.is_private ? <span className='private'><RiGitRepositoryPrivateLine /></span> : <></>}
            <div className='hits'>
              <span className='hits-icon'><AiOutlineEye /></span>
              <span className='hits-count'>{post.hits}</span>
            </div>
            <span className='created-at'>{post.created_at}</span>
          </div>
        </div>
      </div>
    </MypingsPostListItemBox>
  );
};
export default MypingsPostListItem;