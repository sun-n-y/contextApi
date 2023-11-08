const Level1 = ({ color, showColor }) => {
  return (
    <div>
      <h1 style={{ color: color }}>{color}</h1>
      <button type="button" onClick={showColor}>
        click for blue
      </button>
    </div>
  );
};
export default Level1;
