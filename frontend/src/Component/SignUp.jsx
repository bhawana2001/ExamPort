import { useState } from 'react';
import React from 'react'
import UserRegistration from '../Services/UserRegistration';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export const SignUp = () => {

  const navigate = useNavigate();

  const initialState = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: ""
  }
  const [user, setuser] = useState(initialState);


  const handleUsername = (e) => {
    setuser({ ...user, username: e.target.value })
  }

  const handlePassword = (e) => {
    setuser({ ...user, password: e.target.value })
  }
  const handleFirstname = (e) => {
    setuser({ ...user, firstname: e.target.value })


  }
  const handleLastname = (e) => {
    setuser({ ...user, lastname: e.target.value })

  }
  const handleEmail = (e) => {
    setuser({ ...user, email: e.target.value })

  }
  const handlePhone = (e) => {
    setuser({ ...user, phone: e.target.value })

  }

  const handleCancel = (e) => {
    navigate('/')
  }

  const handleLoginBtn = (e) => {
    navigate("/login");
  }


  const handleFormSubmit = (event) => {
    event.preventDefault();
    let user1 = {
      username: user.username,
      password: user.password,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone
    };
    UserRegistration.createUser(user1).then(res => {
      if (res.data === null || res.data.username === null) {
        swal("Something went wrong !!", "User details should not be empty", "warning");
      }
      swal("Successfully Done !!", "User registration is completed", "success");
      navigate("/")

    }).catch(err => {
      swal("Something went wrong !!", "User is already present with this username.", "error");
      navigate("/signup")
      event.preventDefault();
    })

  }

  return (
    <div className='bg-class'>
      <div className='container p-4'>

        {/* Image tag starts here */}
        <div className="reg-img-div">
          <img className="reg-img" src="Images/registration.png" alt="" />
        </div>
        {/* Image tag end here */}

        <h1 className="reg-heading">Register Here !!</h1>

        <div className='reg-form-div'>
          <form className='reg-form' >

            <div className="form-group">
              <input type="text" name="username" value={user.username} onChange={handleUsername} className="form-control input-style" id="usernameInput" aria-describedby="username" placeholder="Username*" required />
            </div>

            <div className="form-group">
              <input type="password" name="password" value={user.password} onChange={handlePassword} className="form-control input-style" id="passwordInput" placeholder="Password*" required />
            </div>

            <div className="form-group">
              <input type="text" name="firsname" value={user.firstname} onChange={handleFirstname} className="form-control input-style" id="firstnameInput" placeholder="First Name*" required />
            </div>

            <div className="form-group">
              <input type="text" name="lastname" value={user.lastname} onChange={handleLastname} className="form-control input-style" id="lastnameInput" placeholder="Last Name*" required />
            </div>

            <div className="form-group">
              <input type="email" name="email" value={user.email} onChange={handleEmail} className="form-control input-style" id="emailInput" placeholder="Email Address*" required />
            </div>

            <div className="form-group">
              <input type="number" name="phone" value={user.phone} onChange={handlePhone} className="form-control input-style" id="phoneInput" placeholder="Phone Number*" required />
            </div>

            <div className='reg-btn'>
              <button type="submit" className="btn bg-primary text-white" onClick={handleFormSubmit}>Submit</button>
              <button type="reset" className="btn btn-danger text-black ml-3" onClick={handleCancel}>Cancel</button>

            </div>


            <hr className="rounded"></hr>
            <div className="mt-2">
              <div className="d-flex justify-content-center links reg-login-div">
                Already have an account?
                <button className="btn btn-light ml-3 reg-login-btn" onClick={handleLoginBtn}>Login</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>



  )
}

export default SignUp;