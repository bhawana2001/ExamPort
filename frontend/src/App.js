import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import Login from './Component/Login'
import Homepage from './Component/Homepage'
import { SignUp } from './Component/SignUp';

function App() {
  return (
    <div >
      <Router>
          <HeaderComponent />
        <Routes>
        <Route exact path="/" element={<Homepage />} />

          <Route  path="/signup" element={<SignUp />} />
          <Route  path="/login" element={<Login />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
