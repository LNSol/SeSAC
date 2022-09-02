import styled from 'styled-components';

const PostItemBlock = styled.div`
  border: 1px solid black;
  display: flex;
  width: 90%;
  height: 140px;
  margin: 10px auto;

  .postImage {
    width: 130px;
    height: 130px;
    margin: auto;
    background: gray;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .postContents {
    margin-left: 30px;
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    .head {
      margin-top: 8px;
      h2 {
        margin: 0;
        cursor: pointer;
      }
      p {
        margin: 0;
        font-size: small;
        margin-left: 2px;
      }
    }
    .content {
      display: flex;
      flex: 1;
      align-items: center;
    }

  }
`;

const PostListItem = ({ post, onOpenModal }) => {
  const postImgPathToken = post.Media[0].src.split('/');
  const postImgName = postImgPathToken[postImgPathToken.length - 1];
  return (
    <PostItemBlock>
      <div className='postImage'>
        <img src={`http://localhost:4000/posts/upload/upload/${postImgName}`} />
      </div>
      <div className='postContents'>
        <div className='head'>
          <h2 onClick={() => onOpenModal(post)}>{post.title}</h2>
          <p>{post.User.nickname}</p>
        </div>
        <div className='content'>
          <p>{post.content}</p>
        </div>
      </div>
    </PostItemBlock>
  );
};
export default PostListItem;