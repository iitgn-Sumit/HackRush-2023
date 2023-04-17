import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/iitgn_logo.png";
import background from "./background.jpg"

const Login = ({setIsLoggedIn}) => {
  return (
    <div className='w-full h-full bg-slate-400' >

    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
    </div>
  )
}

export default Login
