import { createContext, useState, useContext } from 'react';
import Level1 from './Level1';

export const ColorContext = createContext();

export const useCustomHook = () => useContext(ColorContext);

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
