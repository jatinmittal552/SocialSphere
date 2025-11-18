import Home from "./pages/home/Home";
import TopBar from "./components/topBar/TopBar";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
