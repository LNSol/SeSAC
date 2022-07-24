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
// import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

// 랜덤 색상을 생성한다 (LifeCycleSample 예제)
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

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

  // render() {
  //   return <IterationSample />
  // }

  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    )
  }
  
};

export default App;