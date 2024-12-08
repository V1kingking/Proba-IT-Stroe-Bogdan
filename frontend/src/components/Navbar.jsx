import React from 'react'
import {Link} from "react-router-dom"
import '../App.css';
imp
const Navbar = () => {
  return (
    <header>
      <div>
        <span className>NUme</span>
        <nav className="navbar navbar-expand-lg navbar-light caret-cyan-800">
          <Link to='/'>Home </Link>
          <Link to='/register'>Register </Link>
          <Link to='/login'>Login </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
