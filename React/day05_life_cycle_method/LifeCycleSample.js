import {Component} from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // 다음 props 값과 이전 state 값이 다르면 props 값을 state에 반영
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if(nextProps.color !== prevState.color) {
      return {color: nextProps.color};
    }
    return null;  // 반영할게 없으면 null
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  // 업데이트 해 말아 true or false
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shoudComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 렌더링하지 않는다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }


  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  // 이 메서드의 반환 값은 componentDidUpdate메서드의 snapshot으로
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    console.log(">>", this.myRef.style.color);
    console.log(">>>", prevProps, this.props.color);
    if(prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if(snapshot) {
      console.log("업데이트되기 직전 색상: ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color
    };

    return (
      <div>
        {/* 강제 에러 발생 */}
        {/* {this.props.missing.value} */} 
        <h1 style={style} ref={(ref) => this.myRef=ref}>{this.state.number}</h1>
        <p>color: {this.state.color}</p>
        <button type="button" onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;