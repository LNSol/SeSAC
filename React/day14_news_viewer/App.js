import axios from 'axios';
import { useState, useCallback } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import NewsItem from './components/NewsItem';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => {
    setCategory(category);
  }, []);
  
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};
export default App;