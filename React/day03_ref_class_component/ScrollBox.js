import {Component} from 'react';

class ScrollBox extends Component {
  handleScroll = () => {
    const {scrollHeight, clientHeight} = this.outerBox;
    this.outerBox.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    const style = {
      width: '300px',
      height: '300px',
      border: '1px solid black',
      overflow: 'auto'
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    };
    
    return (
      <div style={style} ref={(ref) => this.outerBox=ref}>
          <div style={innerStyle} />
      </div>
    )
  }
}

export default ScrollBox;