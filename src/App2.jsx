import { createContext, useState } from 'react';
import Level1 from './Level1';
import Level2 from './Level2';

export const ColorContext = createContext();

const App2 = () => {
  const [color, setColor] = useState('red');
  const showColor = () => {
    setColor('blue');
  };

  return (
    <ColorContext.Provider value={{ color, showColor }}>
      <Level1 />
    </ColorContext.Provider>
  );
};
export default App2;
