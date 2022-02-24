import { useNavigate } from "react-router-dom";
import s from "./NavBar.module.css";

export const Navbar = ({ setIsRegistered, currentUser }) => {
  const navigate = useNavigate();
  const registerOrLogin = (a) => {
    setIsRegistered(a);
    navigate("/login");
  };
  return (
    <>
      {!currentUser && (
        <div className={s.navBar}>
          <button onClick={() => registerOrLogin(false)}>Register</button>
          <button onClick={() => registerOrLogin(true)}>Login</button>
        </div>
      )}
    </>
  );
};
