import React from 'react'
import Logo from '../../../images/spidersdotcoLogo.jpg';

export default function Navbar() {
  return (
    <div className='navbar-fixed'>
    <nav className="transparent z-depth-0">
        <div className="nav-wrapper transparent row">
            <img src={Logo} style={{height: "65px", width: "auto", padding: "10px"}} className='col' />
            <a href="/accounts" className="brand-logo teal-text col hide-on-small-and-down"  >
                Spider Accounts
            </a>
            <ul id="nav-mobile" className="right col">
                <li><a href="/login" className='whitetext btn darken-1' >LOGIN</a></li>
            </ul>
        </div>
    </nav>
    </div>
  )
}
