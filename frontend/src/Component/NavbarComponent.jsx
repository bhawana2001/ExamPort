/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { FaHome } from 'react-icons/fa';
// import { GiNotebook } from 'react-icons/gi';
// import { FiLogIn } from 'react-icons/fi';
import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import LoginService from "../Services/LoginService";
import swal from 'sweetalert';
import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip } from '@mui/material';

const NavbarComponent = () => {

    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [user, setuser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        setisLoggedIn(LoginService.isLoggedIn());
        setuser(LoginService.getUser());

    }, [isLoggedIn]);



    const handleUser = (e) => {
        if (LoginService.getUserRole() === "ADMIN") {
            navigate("/admin/profile");
        }
        else if (LoginService.getUserRole() === "NORMAL") {
            navigate("/user-dashboard");
        }
    }


    const handleHome = (e) => {
        navigate("/");
    }

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/login");

    }

    const handleLogout = () => {
        setisLoggedIn(LoginService.logout());
        localStorage.clear();
        console.log("Logout succesfully");
        navigate("/login");
        swal("Successfully Logout !!", "", "success");
    }

    const handleRegister = (e) => {
        e.preventDefault();
        navigate("/signup");
    }
    if (isLoggedIn === "true") {
        Window.location.reload(true);
    }



    return (

        <>
            {isLoggedIn && (
                <nav>
                    <a>
                        <svg id="logo-14" width="73" height="46" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z" class="ccustom" fill="#68DBFF"></path>
                            <path d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z" class="ccompli1" fill="#FF7917"></path>
                            <path d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z" class="ccompli2" fill="#5D2C02"></path>
                        </svg>
                        <h6 className='text-white'>ExamPort</h6>
                    </a>
                    <div>
                        <ul id="navbar">
                            <li><a onClick={handleUser}>{`${user.firstname} ${user.lastname}`} </a></li>
                            <li><a onClick={handleLogout}><Tooltip title="Logout"><LogoutIcon /></Tooltip></a></li>
                        </ul>
                    </div>
                </nav>
            )

            }

            {
                !isLoggedIn && (

                    <nav>
                        <a>
                            <svg id="logo-14" width="73" height="46" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z" class="ccustom" fill="#68DBFF"></path>
                                <path d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z" class="ccompli1" fill="#FF7917"></path>
                                <path d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z" class="ccompli2" fill="#5D2C02"></path>
                            </svg>
                            <h6 className='text-white'>ExamPort</h6>
                        </a>
                        <div>
                            <ul id="navbar">
                                <li> <a onClick={handleHome}><Tooltip title="Home"><HomeIcon /></Tooltip> </a></li>
                                <li><a onClick={handleRegister}> <Tooltip title="Register"><AppRegistrationIcon /></Tooltip></a></li>
                                <li><a onClick={handleLogin}><Tooltip title="Login"><LoginSharpIcon /></Tooltip></a></li>
                            </ul>
                        </div>
                    </nav>
                )
            }




        </>



    )




}

export default NavbarComponent