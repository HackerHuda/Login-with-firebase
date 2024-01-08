import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({type}) {
  
  const logout =()=>{
    localStorage.clear()
  }
  return (
    <div className='navbar'>
      <span className='logo'><Link className="link" to="/">Huda's App</Link></span>
        <ul className="list">
          <li className="listItem">
              <Link className='link' to="/login" onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/login" className='link'>Login</Link>
          </li>
        </ul>
    </div>
  )
}
