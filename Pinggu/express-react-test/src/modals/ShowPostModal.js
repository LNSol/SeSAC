import './modal.css';
import PostImageSlider from '../components/PostImageSlider';
import axios from 'axios';

const ShowPostModal = ({ post, close }) => {
  const userProfileImageUrlToken = post.User.profile_image_url.split('/');
  const userProfileImage = userProfileImageUrlToken[userProfileImageUrlToken.length - 1];

  const postImages = post.Media.map(img => {
    const postImgPathToken = img.src.split('/');
    return postImgPathToken[postImgPathToken.length - 1];
  });
  console.log(post.id);

  const onClickDelete = async () => {
    if (window.confirm('삭제?')) {
      const result = await axios.delete(`http://localhost:4000/posts/post/${post.id}`);
      window.alert('삭제 완료', result);
      close();
    }
  };

  return (
    <div className='modal active'>
        <div className='modalBox'>
          <div className='title'>
            {post.title}
          </div>
          <div className='main'>
            <div className='main-user'>
              <div className='main-user-img'>
                <img src={`http://localhost:4000/posts/upload/profile/${userProfileImage}`} />
              </div>
              <p>{post.User.nickname}</p>
            </div>
            <div className='main-content'>
              {post.content}
            </div>
          </div>
          <div className='post-image-slider'>
            <PostImageSlider postImages={postImages} />
          </div>
          <div className='footer'>
            <button className='close-btn' onClick={close}>닫기</button>
            <button className='delete-btn' onClick={onClickDelete}>이 게시물 삭제</button>
          </div>
        </div>
    </div>
  );
};
export default ShowPostModal;