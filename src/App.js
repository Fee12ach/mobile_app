import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage  from './components/HomePage';
import LoginPage  from './components/LoginPage';
import RegisterPage  from './components/RegisterPage';
import IndexPage  from './components/IndexPage';
import ForgotPassword  from './components/ForgotPassword';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/"  element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/home"  element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes> 
    </div>
  );
}

export default App;
