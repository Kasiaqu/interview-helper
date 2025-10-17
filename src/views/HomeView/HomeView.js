import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/NavBar/NavBar";
import s from "./HomeView.module.css";
export const HomeView = ({ setIsRegistered, currentUser }) => {
  const navigate = useNavigate();
  return (
    <div className={s.homeView}>
      <div className={s.info}>
        <h1>Interview Helper!</h1>
        <p>
          The first website to help you with your recruitment process. Add your
          candidate to the database and choose the questions you ask him.
        </p>

        {currentUser ? (
          <button onClick={() => navigate("/panel")}>
            Go to the candidate list...
          </button>
        ) : (
          <p>So, you can just login below and check it.</p>
        )}
      </div>
      <Navbar setIsRegistered={setIsRegistered} currentUser={currentUser} />
    </div>
  );
};
