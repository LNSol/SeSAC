import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {

  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex'}}>
            {colors.map(color => (
              <div
                key={color}
                style={{width: '50px', height: '50px', background: color, cursor: 'pointer'}}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              ></div>
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};
export default SelectColors;