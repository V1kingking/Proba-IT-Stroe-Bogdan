import React from 'react'
import {Link} from "react-router-dom"
import '../App.css';

const  Navbar = () => {
  return (
    <div class="div1">
        <nav>
          <Link to='/'>Home </Link>
          <Link to='/register' className="mx-5 fs-5">Register </Link>
          <Link to='/login' className="mx-5 fs-5">Login </Link>
        </nav>
    </div>
  )
}

export default Navbar;
