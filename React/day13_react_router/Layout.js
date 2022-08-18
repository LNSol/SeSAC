import { Outlet, useNavigate } from 'react-router-dom';

const header = {
  backgroundColor: 'gray',
  width: '100%',
  height: '100px',
  fontSize: '40px',
  fontWeight: 'bold'
}

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goArticles = () => {
    navigate('/articles', {replace: true});
  };
  const goMyPage = () => {
    navigate('/mypage', {replace: true});
  };

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goArticles}>게시물 목록</button>
      <button onClick={goMyPage}>마이페이지</button>
      <header style={header}>HEADER</header>
      <main><Outlet /></main>
    </div>
  );
};
export default Layout;