import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LabelField } from "../../components/LabelField/LabelField";
import { loginUserWithEmail, registerUserWithEmail } from "../../utils/db";
import s from "./RegisterOrLoginView.module.css";

export const RegisterOrLoginView = ({ isRegistered, currentUser }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageLogin, setMessageLogin] = useState("");
  const navigate = useNavigate();

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    await registerUserWithEmail(name, lastName, email, password);
    navigate("/panel");
    if (currentUser) {
      setName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
    !currentUser && (name, lastName, email, password).length < 5
      ? setMessageLogin("Email or password is to short")
      : setMessageLogin("Login invalid. Email or password is wrong");
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    await loginUserWithEmail(email, password);
    navigate("/panel");
    if (currentUser) {
      setEmail("");
      setPassword("");
    }
    !currentUser && (email.length, password.length) < 3
      ? setMessageLogin("Email or password is to short")
      : setMessageLogin("Login invalid. Email or password is wrong");
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
