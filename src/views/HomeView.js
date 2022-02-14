import { useNavigate } from "react-router-dom";
export const HomeView = ({ setIsRegistered }) => {
  const navigate = useNavigate();
  const registerOrLogin = (a) => {
    setIsRegistered(a);
    navigate("/login");
  };
  return (
    <div>
      Home View
      <button onClick={() => registerOrLogin(false)}>Register</button>
      <button onClick={() => registerOrLogin(true)}>Login</button>
    </div>
  );
};
