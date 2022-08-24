import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

const App = () => {
  return (
    <div>
      <ColorContext.Provider value={{ color: 'red' }}>
        <ColorBox />
      </ColorContext.Provider>
    </div>
  );
}
export default App;