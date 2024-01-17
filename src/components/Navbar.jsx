import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [user,setUser]=useState(true)
  const logout =()=>{
    user=false
    localStorage.clear()
  }
  return (
    <div className='navbar'>
      <span className='logo'><Link className="link" to="/">Huda's App</Link></span>
        <ul className="list">
          {user?<li className="listItem">
              <Link className='link' to="/login" onClick={logout}>Logout</Link>
          </li>:
          <li className="listItem">
            <Link className='link' to="/login">Login</Link>
        </li>}
          
        </ul>
    </div>
  )
}
