import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import Home from './Home/Home'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
   // Jo ham custom hook banaye hain AuthProvider.jsx me ye waha se aa raha hai
   const [authUser, setAuthUser] = useAuth();
   console.log(authUser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element= {authUser ? <Courses/> :<Navigate to="/signup"/>}/>
        <Route path='/signup' element= {<Signup/>}/>
      </Routes>
      <Toaster/>
    </div>
    </>
  )
}

export default App