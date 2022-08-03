import {AppContext} from './App';
import {useContext} from 'react';

const ContextTest = () => {
  const user = useContext(AppContext);

  return (
    // <AppContext.Consumer>
    //   { (user) => (
    //     <>
    //       <h2>이름: {user.name}</h2>
    //       <h2>직업: {user.job}</h2>
    //     </>
    //   )}
    // </AppContext.Consumer>

    <>
      <h2>이름: {user.name}</h2>
      <h2>직업: {user.job}</h2>
    </>
  );
};
export default ContextTest;