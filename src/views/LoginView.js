import { RegisterOrLogin } from "../components/RegisterOrLogin";

export const LoginView = ({ isRegistered }) => {
  return (
    <div>
      <RegisterOrLogin isRegistered={isRegistered} />
    </div>
  );
};
