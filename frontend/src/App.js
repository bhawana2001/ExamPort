import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import Login from './Component/Login'
import Homepage from './Component/Homepage'
import { SignUp } from './Component/SignUp';
import AdminDashboard from './Component/Admin/AdminDashboard'
import UserDashboard from './Component/User/UserDashboard';


function App() {
  return (
    <div >
      <Router>
        <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<Homepage />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />

        </Routes>


      </Router>
    </div>
  );
}

export default App;
