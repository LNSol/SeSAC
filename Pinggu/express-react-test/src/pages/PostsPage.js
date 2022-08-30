import { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:4000/posts');
      setPosts(prev => {return data});
    }
    getData();
  }, [])

  return (
    <PostList posts={posts} />
  );
};
export default PostsPage;