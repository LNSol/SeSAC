// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react';
// import Counter from './Counter';
// import Info from './Info';
// import Counter_useReducer from './Counter_useReducer';
// import Info_useReducer from './Info_useReducer';
// import Average from './Average';
// import Info_custom from './Info_custom';
// import CounterCustom from './CounterCustom';
import {createContext} from 'react';
import ContextTest from './ContextTest';

export const AppContext = createContext();

function App() {
  // const [visible, setVisible] = useState(false);
  const user = {name: 'Lim', job: 'Developer'};


  return (
    // <>
    // <Counter />
    // </>
    // <Info />
    // <div>
    //   <button 
    //     onClick={() => { setVisible(!visible) }}
    //   >{visible? '숨기기': '보이기'}</button>
    //   <hr />
    //   {visible && <Info />}
    // </div>

    // <>
      // <Counter_useReducer />
    // </>

    // <Info_useReducer />

    // <Average />
    // <Info_custom />
    // <CounterCustom />

    <AppContext.Provider value={user}>
      <ContextTest />
    </AppContext.Provider>

  );

}

export default App;
