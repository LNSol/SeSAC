import {Fragment} from "react";
import {Component} from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

function App() {
  return (
    <Fragment>
      <MyComponent name="배가아몬드" favoriteNumber={10}>React</MyComponent>
      <Counter />
      <Say />
    </Fragment>
  );
}

export default App;