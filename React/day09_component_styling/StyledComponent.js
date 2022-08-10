import styled, { css } from 'styled-components';

const Box = styled.div`
  background: ${props => props.color || 'blue'};
  display: flex;
  padding: 1rem;
`;

const Button = styled.button`
  display: flex;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: white;
  color: black;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* inverted 값이 true이면 */
  ${props =>
    props.inverted &&
    css`
      background: black;
      color: white;
      border: 2px solid white;
      &:hover {
        color: black;
      }
    `
  }

  & + button {
    margin-left: 2rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>하이이이</Button>
      <Button inverted={true}>이으으응</Button>
    </Box>
  )
};
export default StyledComponent;