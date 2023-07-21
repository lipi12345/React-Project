import React from 'react'

function Nav() {
  return (
    <div>
      <nav className='container'>
        <div className='logo'>
    <img src="/images/brandlogo.png" alt="logo" />
        </div>
        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>

    </div>
  )
}

export default Nav