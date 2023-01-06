import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HeaderComponent() {
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
            <button type="button" class="btn btn-primary ml-5" onClick={handleHome}>Homepage</button>

            <button type="button" class="btn btn-success ml-5" onClick={handleSignup}>SignUp</button>
            <button type="button" class="btn btn-info ml-5" onClick={handleLogin}>Login</button>
          </span>
        </div>
      </nav>
  )
}
