import { Navbar } from "../components/Navbar";
import img from "../images/hero.jpg";
import s from "./HomeView.module.css";
export const HomeView = ({ setIsRegistered, currentUser }) => {
  return (
    <div className={s.homeView}>
      Home View M
      <Navbar setIsRegistered={setIsRegistered} currentUser={currentUser} />
    </div>
  );
};
