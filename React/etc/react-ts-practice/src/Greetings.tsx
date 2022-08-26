import React from 'react';

type GreetingsProps = {
  name: string,
  age: number,
  phone?: string,
  onClick: (name: string) => void
  children?: React.ReactNode
}

const Greetings = ({name, age, phone, onClick, children}: GreetingsProps) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {phone && <p>Phone: {phone}</p>}
      <button onClick={() => onClick(name)}>click me</button>
      {children}
    </div>
  );
}
export default Greetings;