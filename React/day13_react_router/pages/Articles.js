import { Link, Outlet, NavLink } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ArticleItem num={1} />
        <ArticleItem num={2} />
        <ArticleItem num={3} />
      </ul>
    </div>
  );
};

const ArticleItem = ({ num }) => {
  const selected = {
    color: 'green',
    fontSize: '20px'
  };
  return (
    <li>
      <NavLink to={`/articles/${num}`}
        style={({ isActive }) => (isActive ? selected : undefined)}
      >게시글 {num}</NavLink>
    </li>
  );
};
export default Articles;