import { Navbar } from "../../components/NavBar/NavBar";
import s from "./HomeView.module.css";
export const HomeView = ({ setIsRegistered, currentUser }) => {
  return (
    <div className={s.homeView}>
      <div className={s.info}>
        <h1>Interview Helper!</h1>
        <p>
          The first web, that help you with recruitment process. Add your
          candidate to the base and chose what questions will you ask him.
        </p>

        {!currentUser && <p>So, you can just login below and check it.</p>}
      </div>
      <Navbar setIsRegistered={setIsRegistered} currentUser={currentUser} />
    </div>
  );
};
