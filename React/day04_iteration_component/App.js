import {Component} from 'react';
// import MyComponent from "./MyComponent";
// import Counter from './Counter';
// import Say from "./Say";
// import EventPracticeClass from "./EventPracticeClass";
// import EventPracticeFn from "./EventPracticeFn";
// import EventPracticeFn2 from "./EventPracticeFn2";
// import EventPracticeClass2 from "./EventPracticeClass2";
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

class App extends Component {
  // return <MyComponent name="리액트" favoriteNumber={3}>Content는 바로 이것</MyComponent>
  // return <Counter />
  // return <Say />
  // return <EventPracticeClass />
  // return <EventPracticeFn />
  // return <EventPracticeFn2 />
  // return <EventPracticeClass2 />

  // render() {
  //   // return <ValidationSample />
  //   return (
  //     <>
  //       <ScrollBox ref={(ref) => this.box=ref}/>
  //       <button onClick={()=>this.box.handleScroll()}>맨 아래로</button>
  //     </>
  //   )
  // }

  render() {
    return <IterationSample />
  }
  
};

export default App;