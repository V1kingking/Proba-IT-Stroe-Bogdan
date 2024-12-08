// import { useState } from 'react'
// import './App.css'
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Profile from './pages/Profile';
// import axios from 'axios';
// import { UserContextProvider } from '../context/userContext';

// axios.defaults.baseURL = 'http://localhost:3001';
// axios.defaults.withCredentials = true;


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//    <UserContextProvider>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/profile' element={<Profile />} />
//       </Routes>    
//     </UserContextProvider>
//     </>
      
//   );
// }

// export default App



import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Login from './pages/Login';
import axios from 'axios';
import { UserContextProvider } from '../context/userContext';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;


function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>    
    </UserContextProvider>
      
  );
}

export default App
