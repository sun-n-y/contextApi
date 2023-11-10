import { createContext, useContext, useState } from 'react';

const GlobalContext10 = createContext();

export const useCustomHook10 = () => useContext(GlobalContext10);

const AppContext10 = ({ children }) => {
  const [name, setName] = useState('pianoforte');
  const [name2, setName2] = useState('pianoforte2');
  const [name3, setName3] = useState('pianoforte3');
  return (
    <GlobalContext10.Provider
      value={{ name, name2, name3, setName, setName2, setName3 }}
    >
      {children}
    </GlobalContext10.Provider>
  );
};
export default AppContext10;
