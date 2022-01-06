import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ForgotPassword from "./components/ForgotPassword";
import EditProfile from "./components/EditProfile";
import ProfilePage from "./components/ProfilePage";
import BottomBar from "./components/BottomBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/sidebar" element={<SideBar />} />
      </Routes>
      {false && <BottomBar />}
    </div>
  );
}

export default App;
