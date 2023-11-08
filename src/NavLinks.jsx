import UserContainer from './UserContainer';

const NavLinks = () => {
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
      <UserContainer />
    </>
  );
};
export default NavLinks;
