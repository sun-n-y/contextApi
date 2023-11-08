import { useState } from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'sunny' });
  const logout = () => {
    setUser(null);
  };
  return (
    <>
      <h1>context api</h1>
      <NavLinks user={user} logout={logout} />
    </>
  );
};
export default Navbar;
