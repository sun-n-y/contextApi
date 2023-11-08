import { useState } from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'sunny' });
  const logout = () => {
    setUser(null);
  };
  return (
    <nav>
      <h1>context api</h1>
      <NavLinks />
    </nav>
  );
};
export default Navbar;
