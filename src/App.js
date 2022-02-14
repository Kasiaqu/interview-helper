import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { HomeView } from "./views/HomeView";
import { LoginView } from "./views/LoginView";
import { RecruiterPanelView } from "./views/RecruiterPanelView";

function App() {
  const [isRegistered, setIsRegistered] = useState("");
  console.log(isRegistered);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomeView setIsRegistered={setIsRegistered} />}
          />
          <Route
            path="/login"
            element={<LoginView isRegistered={isRegistered} />}
          />
          <Route path="/panel" element={<RecruiterPanelView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
