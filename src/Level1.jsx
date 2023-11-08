import { useContext } from 'react';
import { ColorContext } from './App2';
import Level2 from './Level2';

const Level1 = () => {
  const { color, showColor } = useContext(ColorContext);
  return (
    <div>
      <h1 style={{ color: color }}>{color}</h1>
      <button type="button" onClick={showColor}>
        click for blue
      </button>
      <Level2 />
    </div>
  );
};
export default Level1;
