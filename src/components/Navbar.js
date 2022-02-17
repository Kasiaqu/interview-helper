import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/db";
import s from "./NavBar.module.css";

export const Navbar = ({ setIsRegistered, currentUser }) => {
  const navigate = useNavigate();
  const registerOrLogin = (a) => {
    setIsRegistered(a);
    navigate("/login");
  };
  return (
    <div className={s.navBar}>
      {currentUser ? (
        <button onClick={() => logoutUser()}>Wyloguj</button>
      ) : (
        <div>
          <button onClick={() => registerOrLogin(false)}>Register</button>
          <button onClick={() => registerOrLogin(true)}>Login</button>
        </div>
      )}
    </div>
  );
};
