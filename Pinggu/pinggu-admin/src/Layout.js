import { Outlet } from 'react-router-dom';
import SearchPosts from './components/SearchPosts';

const Layout = () => {
  return (
    <div>
      <header>
        <SearchPosts />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;