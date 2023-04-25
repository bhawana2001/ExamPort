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
import ViewCategories from './Component/Admin/ViewCategories';
import AddCategory from './Component/Admin/AddCategory';
import  ViewQuizzes  from './Component/Admin/ViewQuizzes';
import AddQuiz from './Component/Admin/AddQuiz';


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
            <Route path="categories" element={<ViewCategories />} />
            <Route path="add-category" element={<AddCategory />} />
            <Route path="quizzes" element={<ViewQuizzes />} />
            <Route path="add-quiz" element={<AddQuiz />} />

          </Route>

          {/* Routes for normal user */}

          <Route path="/user-dashboard" element={<UserDashboard />} />

        </Routes>


      </Router>
    </div>
  );
}

export default App;
