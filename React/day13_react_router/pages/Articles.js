import { Link, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <Link to='/articles/1'>게시물 1 보기</Link>
        </li>
        <li>
          <Link to='/articles/2'>게시물 2 보기</Link>
        </li>
        <li>
          <Link to='/articles/3'>게시물 3 보기</Link>
        </li>
      </ul>
    </div>
  );
};
export default Articles;