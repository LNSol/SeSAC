import { createContext } from 'react';
import axios from 'axios';

const getData = async () => {
  const posts = await axios.get('http://localhost:4000/posts');
  return posts;
};

const postContext = createContext({
  posts: getData(),
  actions: {
    setPosts: () => {}
  }
});

export default postContext;