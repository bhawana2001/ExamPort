import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import swal from 'sweetalert';
import LoginService from '../Services/LoginService';

export const Login = () => {
  const navigate = useNavigate();

  const loginData = {
    username: "",
    password: ""
  }

  const [login, setlogin] = useState(loginData);




  const handleUsername = (e) => {
    setlogin({ ...login, username: e.target.value });
  }

  const handlePassword = (e) => {
    setlogin({ ...login, password: e.target.value });

  }

  //reset input fields
  const handleReset = (e) => {
    e.preventDefault();
    setlogin({ ...login, username: "", password: "" });
  }


  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    let login1 = {
      username: login.username,
      password: login.password
    }

    if (login.username.trim() === '' || login.username === null) {
      swal("Something went wrong !!", "Username is required ", "error")
      return;
    }
    if (login.password.trim() === '' || login.password === null) {
      swal("Something went wrong !!", "Password is required ", "error")
      return;
    }

    //request to server to generate token
    LoginService.generateToken(login1)
      .then((res => {
        console.log("Success ", res.data);

        //Login the user with token and set token into local storage
        LoginService.loginUser(res.data.token);

        // get the logged in user details
        LoginService.getCurrentUser().then((res => {

          //set logged in user into local storage
          LoginService.setUser(res.data);
          console.log(res.data);

          //redirect ... ADMIN : admin dashboard
          //redirect ... NORMAL : normal deashboard

          if (LoginService.getUserRole() === "ADMIN") {
            //admin dashboard
            navigate("/admin");
            swal("Successfully Logged in !!", `Welcome ${login1.username} to the ADMIN Dashboard`, "success");
          }
          else if (LoginService.getUserRole() === "NORMAL") {
            //normal user dashboard
            navigate("/user-dashboard");
            swal("Successfully Logged in !!", `Welcome ${login1.username} to the USER Dashboard`, "success");

          }
          else {
            // logout
            LoginService.logout();
            window.location.reload(false);
          }


        }))
          .catch((err) => {

          })


      }))
      .catch((err) => {
        console.log("error");
        console.log(err);
        swal("Something went wrong !!", "Invalid Details , Try again", "error");
      });




  }

  const handleSignupBtn = (e) => {
    navigate("/signup")
  }


  return (
    <div className="bootstrap-wrapper bg-class">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 login-div">
            <div className="container text-center login-img-div">
              <img className="login-img" src="Images/login.jpg" alt="Login logo" />
            </div>
            <h2 className="text-center login-heading">Login Here !!</h2>
            <form className='reg-form'>

              <div className="form-group">
                <input type="text" name="username" value={login.username} onChange={handleUsername} className="form-control input-style" id="usernameInput" aria-describedby="username" placeholder="Username*" required />
              </div>
              

              <div className="form-group">
                <input type="password" name="password" value={login.password} onChange={handlePassword} className="form-control input-style" id="passwordInput" placeholder="Password*" required />
              </div>


              <div className='reg-btn'>
                <button type="submit" onClick={handleLogin} className="btn bg-primary text-white" >Login</button>
                <button type="reset" onClick={handleReset} className="btn btn-danger text-black ml-3" >Reset</button>

              </div>

              <hr className="rounded"></hr>

              <div className="mt-2">
                <div className="d-flex justify-content-center links reg-login-div">
                  Don't have an account ?
                  <button className="btn btn-light ml-3 reg-login-btn" onClick={handleSignupBtn}>Signup</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login;