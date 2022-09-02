import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';

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
    <PostList posts={posts} />
  );
};
export default ContentPostsPage;