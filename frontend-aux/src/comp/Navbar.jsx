import React from 'react'
import {Link} from "react-router-dom"
import '../App.css';

const  Navbar = () => {
  return (
    <header className="bg-gradient-to-b  from-orange-950/30 to-transparent  
    flex justify-between shadow-md max-w-full ">
        <Link to='/'>
        <img src="/img/logo.png" alt="" className='h-20 mx-2 justify-self-start'/>
        </Link>
        <nav className='flex items-center  p-5 font-medium'>
          <Link to='/' className='mx-5 hover:text-amber-600'>Home </Link>
          <Link to='/recepies' className='mx-5 hover:text-amber-600'>Recepies </Link>
          <Link to='/About' className='mx-5 hover:text-amber-600'>About </Link>
          <button className='mx-5 hover:text-amber-600'>Contact</button>
          
        </nav>
        <nav className='flex items-center mx-2 font-medium'>
          <Link to='/register' className="mx-5 hover:text-amber-600 ">Register </Link>
          <Link to='/login' className="mx-5 hover:text-amber-600">Login </Link>

        </nav>
    </header>

    
  )
}

export default Navbar;
