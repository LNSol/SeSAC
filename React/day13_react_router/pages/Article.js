import { useParams } from 'react-router-dom';

const Article = () => {
  const { num } = useParams();

  return (
    <div>
      <h2>게시글 {num}</h2>
    </div>
  );
};
export default Article;