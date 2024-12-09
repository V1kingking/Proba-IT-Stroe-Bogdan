

import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './comp/Navbar';
import Home from './page/Home';
import Register from './page/Register';
import Profile from './page/Profile';
import Login from './page/Login';
import About from './page/About';
import axios from 'axios';
import { UserContextProvider } from '../context/userContext';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg'>
   <UserContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/About' element={<About />} />
      </Routes>    
    </UserContextProvider>
      
  </div>
  );
}

export default App
