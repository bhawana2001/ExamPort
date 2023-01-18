import React from 'react'
import LoginService from '../Services/LoginService'
import { Navigate } from 'react-router-dom';
import AdminDashboard from './Admin/AdminDashboard';

const ProtectedRoute = () => {

    //     const [auth, setauth] = useState(false)
    //     if(LoginService.isLoggedIn()==='true'){
    //         setauth(true);
    //     }
    //     else if(LoginService.isLoggedIn()==='false'){
    //         setauth(false);
    //     }
    //   return (

    //     auth?<Outlet /> : <Navigate to="/login"/>

    //     )

    return LoginService.isLoggedIn() ? <AdminDashboard /> : <Navigate to={"/login"} />

}

export default ProtectedRoute