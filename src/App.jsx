import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Post from './pages/Post'
import Login from './pages/Login'
import Phone from './pages/Phone'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/post/:id' element={<Post/>}/>
          <Route path='/phone' element={<Phone/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App
