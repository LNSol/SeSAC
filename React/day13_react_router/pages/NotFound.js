const NotFound = () => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    fontSize: 64,
    fontWeight: 'bold'
  };

  return (
    <div style={style}>404</div>
  );
};
export default NotFound;