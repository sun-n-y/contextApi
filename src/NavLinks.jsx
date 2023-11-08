import UserContainer from './UserContainer';

const NavLinks = ({ user, logout }) => {
  return (
    <>
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </>
  );
};
export default NavLinks;
