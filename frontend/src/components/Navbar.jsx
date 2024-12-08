import React from 'react'
import {Link} from "react-router-dom"
import '../App.css';

const  Navbar = () => {
  return (
    // <div class="div1">
    //     <nav>
    //       <Link to='/'>Home </Link>
    //       <Link to='/register' className="mx-5 fs-5">Register </Link>
    //       <Link to='/login' className="mx-5 fs-5">Login </Link>
    //     </nav>
    // </div>

    <Navbar
      expand="lg"
      className="d-flex justify-content-center align-items-center background"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav d-flex justify-content-center align-items-center" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="d-flex justify-content-center align-items-center "
      >
        <Nav className="mr-auto">
          <Nav.Link href="/" className="mx-5 fs-5">
            Home
          </Nav.Link>
          <Nav.Link href="/allPosts" className="mx-5 fs-5">
            Posts
          </Nav.Link>
          <Nav.Link href="/web" className="mx-5 fs-5">
            Web Binars
          </Nav.Link>
          <Nav.Link href="/economic" className="mx-5 fs-5">
            Economic Ai
          </Nav.Link>
          <Nav.Link href="/general" className="mx-5 fs-5">
            General AI
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbar;
