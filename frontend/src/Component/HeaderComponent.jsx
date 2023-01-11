import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import { GiNotebook } from 'react-icons/gi'
import { FaHome } from 'react-icons/fa'

export const HeaderComponent = () => {
  let navigate = useNavigate();

  function handleSignup() {
    navigate("/signup")
  }
  function handleLogin() {
    navigate("/login")
  }
  function handleHome() {
    navigate("/")
  }
  return (
    <nav class="navbar bg-primary" >
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 text-white">ExamPort
          <a className="ml1100 link-nav" onClick={handleHome}>Homepage <span>< FaHome /></span></a>
          <a className="ml-5 link-nav" onClick={handleSignup}>SignUp <span><GiNotebook /></span></a>
          <a className=" ml-5 link-nav" onClick={handleLogin}>Login <span className=''><FiLogIn /></span></a>
        </span>
      </div>
    </nav>


  )
}

export default HeaderComponent;
