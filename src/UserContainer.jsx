const UserContainer = ({ user, logout }) => {
  return (
    <>
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
    </>
  );
};
export default UserContainer;
