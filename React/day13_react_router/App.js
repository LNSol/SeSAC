import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import Layout from './Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path='/articles' element={<Articles />}>
          <Route path=':num' element={<Article />} />
        </Route>
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/login' element={<Login />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
export default App;