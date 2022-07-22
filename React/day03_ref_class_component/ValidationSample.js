import {Component} from 'react';
import './ValidationSample.css';


class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }
  handleClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });
    this.passInput.focus();
  }

  render() {
    return(
      <div>
        <input 
          type="password"
          value={this.state.password}
          className={this.state.clicked? (this.state.validated? 'success': 'failure'): ''}
          onChange={this.handleChange}
          ref={(ref) => this.passInput = ref}
        />
        <button type="button" onClick={this.handleClick}>검증</button>
      </div>
    )
  }

}


export default ValidationSample;