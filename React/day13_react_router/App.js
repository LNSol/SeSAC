import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile/:username' element={<Profile />} />
      <Route path='/articles' element={<Articles />}>
        <Route path=':num' element={<Article />} />
      </Route>
    </Routes>
  );
};
export default App;