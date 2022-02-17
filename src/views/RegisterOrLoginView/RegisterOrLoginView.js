import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserWithEmail, registerUserWithEmail } from "../../utils/db";
import s from "./RegisterOrLoginView.module.css";

export const RegisterOrLoginView = ({ isRegistered }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    registerUserWithEmail(name, lastName, email, password);
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    loginUserWithEmail(email, password);
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    navigate("/panel");
  };
  return (
    <div className={s.RegisterOrLogin}>
      <button onClick={() => navigate("/")}>Come back to home page</button>
      {isRegistered ? (
        <div>
          Login
          <form className={s.form} onSubmit={handleSubmitLogin}>
            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          Register
          <form className={s.form} onSubmit={handleSubmitRegister}>
            <label>
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </label>
            <label>
              Last name
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </label>
            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};
