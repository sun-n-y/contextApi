import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useCustomHook = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [name, setName] = useState('peter');
  const [bike, setBike] = useState('trek');
  return (
    <GlobalContext.Provider value={{ name, setName, bike, setBike }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
