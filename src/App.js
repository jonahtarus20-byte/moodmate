import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";

function App() {
  const isGitHub = window.location.hostname.includes("github.io");
  const Router = isGitHub ? HashRouter : BrowserRouter;

  return (
    <Router basename={isGitHub ? "/moodmate" : "/"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
