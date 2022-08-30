import PostListItem from './PostListItem';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import ShowPostModal from '../modals/ShowPostModal';

const PostListBlock = styled.div`
  width: 95%;
  margin: 0 auto;
  
  h3 {
    text-align: center;
  }
`;

const PostList = ({ posts }) => {
  const [enable, setEnable] = useState(false);
  const [post, setPost] = useState({});
  
  const onOpenModal = (post) => {
    setEnable(true);
    setPost(prev => {return post});
  };
  const onCloseModal = () => {
    setEnable(false);
  }

  return (
    <div>
      <PostListBlock>
        {posts.length === 0 ? <h3>검색 결과 없음</h3> :
        posts.map(post => (
          <PostListItem 
            key={post.id} 
            post={post} 
            onOpenModal={onOpenModal}
          />
        ))}
      </PostListBlock>
      {enable && <ShowPostModal post={post} close={onCloseModal} />}
    </div>
  );
};
export default PostList;