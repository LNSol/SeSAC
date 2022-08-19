import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
 box-sizing: border-box;
 padding-bottom: 3rem;
 width: 768px;
 margin: 0 auto;
 margin-top: 2rem;
 @media screen and (max-width: 768px) {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
 }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=5d48af7a98ca41429d92ac161ab77464`);
        setArticles(response.data.articles);
      } catch(error) {
        console.error(error);
      }
      setLoading(false);
    }
    fetchData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>로딩중...</NewsListBlock>
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};
export default NewsList;