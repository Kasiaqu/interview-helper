import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { LoginView } from "./views/LoginView";
import { RecruiterPanelView } from "./views/RecruiterPanelView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/panel" element={<RecruiterPanelView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
