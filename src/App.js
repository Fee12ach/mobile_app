import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ForgotPassword from "./components/ForgotPassword";
import EditProfile from "./components/EditProfile";
import ProfilePage from "./components/ProfilePage";
import FooterBar from "./components/FooterBar";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      {true && <NavBar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/navbar" element={<NavBar/>} />
      </Routes>
      {true && <FooterBar />}
    </div>
  );
}

export default App;
