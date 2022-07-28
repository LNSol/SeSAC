// import logo from './logo.svg';
// import './App.css';
import {useState} from 'react';
// import Counter from './Counter';
// import Info from './Info';
// import Counter_useReducer from './Counter_useReducer';
import Info_useReducer from './Info_useReducer';

function App() {
  const [visible, setVisible] = useState(false);

  const handleChangeVisible = () => {
    setVisible(!visible);
  };

  return (
    // <>
    //   {/* <Counter /> <br /> */}
    //   <button 
    //     type="button"
    //     onClick={handleChangeVisible}
    //   >{visible? '숨기기': '보이기'}</button>
    //   <hr />
    //   { visible && <Info />}
    // </>

    // <>
    //   <Counter_useReducer />
    // </>

    <Info_useReducer />
  );
}

export default App;
