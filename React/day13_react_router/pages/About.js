// import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const About = () => {
  // const querystring = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail= () => {
    setSearchParams({mode, detail: detail === 'true' ? false : true});
  };
  const onIncreaseMode = () => {
    setSearchParams({mode: mode === null ? 1 : parseInt(mode) + 1, detail});
  };

  return (
    <div>
      <h1>소개</h1>
      <p>여긴 소개 페이지</p>
      {/* <p>쿼리스트링: {querystring.search}</p> */}
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>toggle detail</button>
      <button onClick={onIncreaseMode}>increase mode</button>
    </div>
  );
};
export default About;