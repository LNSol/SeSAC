import { CharacterProvider } from '../contexts/Character';
import Info from './Info';
import Input from './Input';


const Box = () => {
  return (
    <CharacterProvider>
      <Info />
      <Input />
    </CharacterProvider>
  );
};
export default Box;