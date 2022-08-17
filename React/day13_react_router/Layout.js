import { Outlet } from 'react-router-dom';

const header = {
  backgroundColor: 'gray',
  width: '100%',
  height: '100px',
  fontSize: '40px',
  fontWeight: 'bold'
}

const Layout = () => {
  return (
    <div>
      <header style={header}>HEADER</header>
      <main><Outlet /></main>
    </div>
  );
};
export default Layout;