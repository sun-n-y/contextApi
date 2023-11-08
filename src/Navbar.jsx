import { createContext, useState, useContext } from 'react';
import NavLinks from './NavLinks';

export const NavbarContext = createContext();

export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: 'sunny' });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav>
        <h1>context api</h1>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
