import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';

const TitlePostsPage = () => {
  const { title } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`http://localhost:4000/posts/title/${title}`);
      setPosts(prev => data);
    };
    getData();
  }, [title]);

  return (
    <PostList posts={posts} />
  );
};
export default TitlePostsPage;