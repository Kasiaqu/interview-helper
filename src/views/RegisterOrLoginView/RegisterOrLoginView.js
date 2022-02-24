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

  const labelField = (title, state, setState) => {
    return (
      <label>
        {title.charAt(0).toUpperCase() + title.slice(1)}
        <input
          type={title}
          value={state}
          onChange={(e) => setState(e.target.value)}
        ></input>
      </label>
    );
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    registerUserWithEmail(name, lastName, email, password);
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    navigate("/panel");
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    loginUserWithEmail(email, password);
    setEmail("");
    setPassword("");
    navigate("/panel");
  };
  return (
    <div className={s.RegisterOrLogin}>
      {isRegistered ? (
        <div>
          <form className={s.form} onSubmit={handleSubmitLogin}>
            {labelField("email", email, setEmail)}
            {labelField("password", password, setPassword)}
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <form className={s.form} onSubmit={handleSubmitRegister}>
            {labelField("name", name, setName)}
            {labelField("last name", lastName, setLastName)}
            {labelField("email", email, setEmail)}
            {labelField("password", password, setPassword)}
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};
