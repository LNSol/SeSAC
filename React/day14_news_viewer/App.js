import axios from 'axios';
import { useState, useCallback } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import NewsItem from './components/NewsItem';
import NewsPage from './pages/NewsPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  // const [category, setCategory] = useState('general');
  // const onSelect = useCallback(category => {
  //   setCategory(category);
  // }, []);
  
  // return (
  //   <>
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category} />
  //   </>
  // );

  /* use Route Component */
  return (
    <Routes>
      <Route path='/' element={<NewsPage />} />
      <Route path='/:category' element={<NewsPage />} />
    </Routes>
  )
};
export default App;