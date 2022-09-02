import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './Layout';
import PostsPage from './pages/PostsPage';
import UserPostsPage from './pages/UserPostsPage';
import TitlePostsPage from './pages/TitlePostsPage';
import ContentPostsPage from './pages/ContentPostsPage';

const App = () => {
  return (
    <Routes>
      <Route path='/posts' element={<Layout />}>
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/posts/nickname/:nickname' element={<UserPostsPage />} />
        <Route path='/posts/title/:title' element={<TitlePostsPage />} />
        <Route path='/posts/content/:content' element={<ContentPostsPage />} />
      </Route>
    </Routes>
  );
};
export default App;