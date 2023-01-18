import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Component/Login'
import Homepage from './Component/Homepage'
import { SignUp } from './Component/SignUp';
import UserDashboard from './Component/User/UserDashboard';
import NavbarComponent from './Component/NavbarComponent';
import ProfileComponent from './Component/ProfileComponent';
import WelcomeComponent from './Component/Admin/WelcomeComponent';
import ProtectedRoute from './Component/ProtectedRoute';


function App() {



  return (
    <div >
      <Router>
        <NavbarComponent />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/homepage" element={<Homepage />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Routes for admin  */}

            <Route path="/admin" element={<ProtectedRoute />} >
              <Route path="" element={<WelcomeComponent />} />
              <Route path="profile" element={<ProfileComponent />} />
            </Route>

          {/* Routes for normal user */}

          <Route path="/user-dashboard" element={<UserDashboard />} />

        </Routes>


      </Router>
    </div>
  );
}

export default App;
