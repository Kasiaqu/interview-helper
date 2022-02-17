import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { HomeView } from "./views/HomeView";
import { LoginView } from "./views/LoginView";
import { RecruiterPanelView } from "./views/RecruiterPanelView";
import { auth, logoutUser } from "./utils/db";

function App() {
  const [isRegistered, setIsRegistered] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged(setCurrentUser);
  }, []);
  console.log(currentUser);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              currentUser ? (
                <button onClick={() => logoutUser()}>Wyloguj</button>
              ) : (
                <HomeView setIsRegistered={setIsRegistered} />
              )
            }
          />
          <Route
            path="login"
            element={<LoginView isRegistered={isRegistered} />}
          />
          <Route path="panel" element={<RecruiterPanelView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
