// import { ColorConsumer } from '../contexts/color';
import { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  /* use useContext Hook */
  const { state } = useContext(ColorContext);

  return (
    /* use Consumer */
    // <ColorConsumer>
    //   {({ state }) => (
    //     <>
    //       <div style={{
    //         width: '80px',
    //         height: '80px',
    //         background: state.color
    //       }}></div>
    //       <div style={{
    //         width: '50px',
    //         height: '50px',
    //         background: state.subcolor
    //       }}></div>
    //     </>
    //   )}
    // </ColorConsumer>

    /* use useContext Hook */
    <>
      <div style={{
        width: '80px',
        height: '80px',
        background: state.color
      }}
      ></div>
      <div style={{
        width: '50px',
        height: '50px',
        background: state.subcolor
      }}
      ></div>
    </>
  );
};
export default ColorBox;