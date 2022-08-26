import React, { createContext, useState } from 'react';

type Character = {
  name: string
  nickname: string
}
type CharacterContext = {
  character: Character,
  actions: {
    setName: (name: string) => void
    setNickname: (nickname: string) => void
  }
}

const character: CharacterContext = {
  character: {name: 'LimEunHa', nickname: 'VegaAmond'},
  actions: {
    setName: () => {},
    setNickname: () => {}
  }
};

const CharacterContext = createContext<CharacterContext>(character);

const CharacterProvider = ({ children }: {children: React.ReactNode}) => {
  const [name, setName] = useState('LimEunHa');
  const [nickname, setNickname] = useState('VegaAmond');

  const value: CharacterContext = {
    character: {name, nickname},
    actions: {setName, setNickname}
  }

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  )
}

const {Consumer: CharacterConsumer} = CharacterContext;

export {CharacterConsumer, CharacterProvider};
export default CharacterContext;