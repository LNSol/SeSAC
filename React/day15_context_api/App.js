import { ColorProvider } from './contexts/color';
import ColorBox from './components/ColorBox';
import SelectColors from './components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};
export default App;