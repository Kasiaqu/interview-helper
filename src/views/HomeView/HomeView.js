import { Navbar } from "../../components/NavBar/NavBar";
import s from "./HomeView.module.css";
export const HomeView = ({ setIsRegistered, currentUser }) => {
  return (
    <div className={s.homeView}>
      Home View M
      <Navbar setIsRegistered={setIsRegistered} currentUser={currentUser} />
    </div>
  );
};
