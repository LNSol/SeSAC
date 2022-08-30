import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';

const UserPostsPage = () => {
  const { nickname: inputNickname} = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`http://localhost:4000/posts/nickname/${inputNickname}`);
      setPosts(prev => {return data});
    };
    getData();
  }, [inputNickname]);

  return (
    <PostList posts={posts} />
  );
};
export default UserPostsPage;