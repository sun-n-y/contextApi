import { createContext, useState } from 'react';

const GlobalContext = createContext();

const AppContext = () => {
  const [name, setName] = useState('peter');
  return (
    <GlobalContext.Provider value={{ name, setName }}></GlobalContext.Provider>
  );
};

export default AppContext;
