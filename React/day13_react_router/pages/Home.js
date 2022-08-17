import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>여긴 홈 페이지</p>
      <ul>
        <li>
          <Link to='/about'>소개 페이지 바로가기</Link>
        </li>
        <li>
          <Link to='/profile/jolgang'>졸갱 프로필 바로가기</Link>
        </li>
        <li>
          <Link to='/profile/gukja'>국자 프로필 바로가기</Link>
        </li>
        <li>
          <Link to='/profile/none'>없는 프로필 바로가기</Link>
        </li>
        <li>
          <Link to='/articles'>게시물 목록 보기</Link>
        </li>
      </ul>
    </div>
  )
};
export default Home;