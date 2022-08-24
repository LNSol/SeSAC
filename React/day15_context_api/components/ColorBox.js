import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({ state }) => (
        <div>
          <div style={{
            width: '80px',
            height: '80px',
            background: state.color
          }}></div>
          <div style={{
            width: '50px',
            height: '50px',
            background: state.subcolor
          }}></div>
        </div>
      )}
    </ColorConsumer>
  );
};
export default ColorBox;