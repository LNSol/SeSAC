import CharacterContext, { CharacterConsumer } from '../contexts/Character';
import { useContext } from 'react';


const Info = () => {
  return (
    <CharacterConsumer>
      {({ character }) => (
        <div>
          <p>Name: {character.name}</p>
          <p>NickName: {character.nickname}</p>
        </div>
      )}
    </CharacterConsumer>
  );
};
export default Info;