import React from 'react';
import background from "../assets/background.jpg"

const Home = ({isLoggedIn}) => {
  return (
    <div className='bg-richblack-100 h-full w-full bg-no-repeat' style={{backgroundImage: `url(${background})` }}>
      <div className='flex justify-center text-yellow-100 text-3xl h-full ' >
      <h1 className=' text-yellow-50 mt-5 fon'>INDIAN INSTITUTE OF TECHNOLOGY GANDHINAGAR</h1>
    </div>



    </div>
  )
}

export default Home
