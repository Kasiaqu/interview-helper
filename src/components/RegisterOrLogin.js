import { useState } from "react";
import { registerUserWithEmail } from "../utils/db";
import s from "./RegisterOrLogin.module.css";
export const RegisterOrLogin = ({ isRegistered }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUserWithEmail(name, lastName, email, password);
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      {isRegistered ? (
        <div>
          Login
          <form className={s.form}>
            <label>
              Email
              <input type="email"></input>
            </label>
            <label>
              Password
              <input type="password"></input>
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          Register
          <form className={s.form} onSubmit={handleSubmit}>
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
