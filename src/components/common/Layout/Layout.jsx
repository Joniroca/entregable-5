import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserNameContext } from "../../../context/UserNameContext";

const Layout = () => {
  const { removeUserName } = useContext(UserNameContext);
  const navigate = useNavigate();

  const logout = () => {
    removeUserName();
    navigate("/");
  };

  return (
    <>
      <div className="layout__main-container">
        <header>
          <h1>POKEDEX</h1>
          <button onClick={logout}>Log Out</button>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
