import React from 'react'
import signupImg from "../assets/iitgn_logo.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <div className='bg-slate-400'>

    <Template
      title="Good Food, Good Life"
      desc1="Life Is A Combination Of Magic And Pasta"
      desc2="FOOD MAY BE ESSENTIAL AS FUEL FOR THE BODY, BUT GOOD FOOD IS FUEL FOR THE SOUL"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
      
    />
    </div>
  )
}

export default Signup
