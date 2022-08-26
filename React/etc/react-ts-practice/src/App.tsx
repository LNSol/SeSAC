/* Context API */
import React from 'react';
import Box from './components/Box';

const App: React.FC = () => {
  return (
    <Box />
  );;
};
export default App;





// import Greetings from './Greetings';
// import Counter from './Counter';
// import MyForm from './MyForm';
// import CounterRe from './CounterRe';
// import ReducerSample from './ReducerSample';

// const App = () => {
//   const onClick = (name: string) => {
//     console.log(`${name}! you clicked me!`)
//   }

//   const onSubmit = (form: {name: string, description: string}) => {
//     console.log(form);
//   }

//   return (
//     <>
//       <Greetings
//         name={'EunhaLim'}
//         age={25}
//         onClick={onClick}
//       ><div>Hi</div></Greetings>
//       <Counter />
//       <MyForm onSubmit={onSubmit} />
//       <CounterRe />
//       <ReducerSample />
//     </>
//   );
// }
// export default App;