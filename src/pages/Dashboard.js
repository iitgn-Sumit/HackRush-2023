import React from 'react';
import pizzaImg from "../assets/pizza.jpg"
import { Link } from 'react-router-dom';
import background from "../assets/background.jpg"
import burger from "../assets/burger.jpg"
import chef from "../assets/chef-4497749__340.webp"
import Sreenath from './Sreenath';


const Dashboard = () => {
  return (
    <div className='background relative bg-red-400 w-full h-full' >

      <div className='flex justify-cente text-white text-bold text-3xl absolute'>
        Welcome to IITGN Food Outlets
      </div>
      
      <div className='flex flex-col mx-auto mt-[50px] w-[500px] h-[500px] items-center text-center border border-gray-500'>
        <div className='flex flex-col ml-5'>
          <h1 className='text-bold text-3xl mb-2'>Outlets</h1>

        <img ></img>
       
          <div>
            <button className='text-white bg-pink-800 rounded-md text-[20px] p-3 mt-4 mb-4'>Sainath Fast-Food</button>
          </div>
      
        </div>

        <div className='flex'>
         
        <img ></img>
        <a href=''>

        <button className='text-white bg-pink-800 rounded-md p-3 mb-4 text-[20px]'>2 Degree Cafe</button>
        </a>
        </div>

        <div className='flex'>
         
        <img  ></img>
        <p className='text-white bg-pink-800 rounded-md p-3 mb-4 text-[20px]'>Aadhya Food</p>
      </div>
      </div>
    </div>
    
  )
}

export default Dashboard
