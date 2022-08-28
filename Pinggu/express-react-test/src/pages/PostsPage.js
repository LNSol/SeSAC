import axios from 'axios';
import { useState, useEffect } from 'react';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:4000/posts');
      setPosts(prev => {return data});
    }
    getData();
  }, []);

  return (
    <div>
      {posts.length === 0 ? <p>결과 없음</p> :
      posts.map(({id, title, content, User}) => (
        <p key={id}>nickname: {User.nickname}, title: {title}, content: {content}</p>
      ))
      }
    </div>
  );
};
export default PostsPage;