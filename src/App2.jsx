import { useState } from 'react';
import Level1 from './Level1';

const App2 = () => {
  const [color, setColor] = useState('red');
  const showColor = () => {
    setColor('blue');
  };

  return (
    <>
      <Level1 color={color} showColor={showColor} />
    </>
  );
};
export default App2;
