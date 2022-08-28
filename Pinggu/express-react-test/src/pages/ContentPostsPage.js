import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ContentPostsPage = () => {
  const { content } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`http://localhost:4000/posts/content/${content}`);
      setPosts(prev => {return data});
    };
    getData();
  }, [content]);

  return (
    <div>
      {posts.length === 0 ? <p>검색 결과 없음</p> :
      posts.map(({ id, title, content, User}) => (
        <p key={id}>nickname: {User.nickname}, title: {title}, content: {content}</p>
      ))}
    </div>
  );
};
export default ContentPostsPage;