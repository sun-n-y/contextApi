import { useContext } from 'react';
import { NavbarContext } from './Navbar';

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext);
  return (
    <div>
      {user ? (
        <>
          <h3>Hi, {user?.name?.toUpperCase()}</h3>
          <button type="button" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>please login</p>
      )}
    </div>
  );
};
export default UserContainer;
