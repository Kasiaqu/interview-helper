import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LabelField } from "../../components/LabelField/LabelField";
import { loginUserWithEmail, registerUserWithEmail } from "../../utils/db";
import s from "./RegisterOrLoginView.module.css";

export const RegisterOrLoginView = ({
  isRegistered,
  currentUser,
  setCurrentUser,
}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageLogin, setMessageLogin] = useState("");
  const navigate = useNavigate();

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    registerUserWithEmail(name, lastName, email, password);
    currentUser
      ? navigate("/panel")
      : (name, lastName, email, password).length < 5
      ? setMessageLogin("Email or password is to short")
      : setMessageLogin("Login invalid. Email or password is wrong");
    if (currentUser) {
      setName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    loginUserWithEmail(email, password);
    currentUser
      ? navigate("/panel")
      : (email.length, password.length) < 3
      ? setMessageLogin("Email or password is to short")
      : setMessageLogin("Login invalid. Email or password is wrong");
    if (currentUser) {
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className={s.registerOrLogin}>
      {isRegistered ? (
        <form className={s.form} onSubmit={handleSubmitLogin}>
          <h2>Sign in to your account</h2>
          <LabelField
            type="email"
            title="email"
            state={email}
            setState={setEmail}
          />
          <LabelField
            type="password"
            title="password"
            state={password}
            setState={setPassword}
          />
          <p className={s.errorMessage}>{messageLogin}</p>
          <button type="submit">Login</button>
        </form>
      ) : (
        <form className={s.form} onSubmit={handleSubmitRegister}>
          <h2>Complete the form below to sign up for our service</h2>
          <LabelField
            type="text"
            title="name"
            state={name}
            setState={setName}
          />
          <LabelField
            type="text"
            title="last name"
            state={lastName}
            setState={setLastName}
          />
          <LabelField
            type="email"
            title="email"
            state={email}
            setState={setEmail}
          />
          <LabelField
            type="password"
            title="password"
            state={password}
            setState={setPassword}
          />
          <p className={s.errorMessage}>{messageLogin}</p>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};
