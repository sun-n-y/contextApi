import { createContext, useContext, useState } from 'react';

const GlobalContext2 = createContext();

export const useCustomHook2 = () => useContext(GlobalContext2);

const AppContext2 = ({ children }) => {
  const [name, setName] = useState('peter');

  return (
    <GlobalContext2.Provider value={{ name }}>
      {children}
    </GlobalContext2.Provider>
  );
};
export default AppContext2;
