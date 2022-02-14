import s from "./RegisterOrLogin.module.css";
export const RegisterOrLogin = ({ isRegistered }) => {
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
          <form className={s.form}>
            <label>
              Name
              <input type="text"></input>
            </label>
            <label>
              Last name
              <input type="text"></input>
            </label>
            <label>
              Email
              <input type="email"></input>
            </label>
            <label>
              Password
              <input type="password"></input>
            </label>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};
