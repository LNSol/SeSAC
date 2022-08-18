import axios from 'axios';
import { useState } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import NewsItem from './components/NewsItem';

const App = () => {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=5d48af7a98ca41429d92ac161ab77464');
      const { title, description, urlToImage, url } = response.data.articles[4];
      console.log(response.data);
      setData({
        title,
        description,
        urlToImage,
        url
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <>
      <Categories />
      <NewsList />
    </>
  );
};
export default App;