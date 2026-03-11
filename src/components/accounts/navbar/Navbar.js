import React from 'react';
import Logo from '../../../images/spidersdotcoLogo.jpg';
import {useNavigate} from 'react-router-dom';

export default function Navbar(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/accounts');
  }


  return (
    <div className='navbar-fixed'>
    <nav className="transparent z-depth-0">
        <div className="nav-wrapper transparent row">
            <img src={Logo} style={{height: "65px", width: "auto", padding: "10px"}} className='col' />
            <a href="#" className="brand-logo teal-text col hide-on-small-and-down"  >
                Spider Accounts
            </a>
            <ul id="nav-mobile" className="right col">
                <li>
                  {
                    props.page === "accounts" ?

                    <button 
                    className='whitetext btn darken-1' 
                    onClick={() => props.onChangeShowRegister(props.showRegister === "showLogin" ? "showRegistrationForm" : "showLogin")}
                    >{
                      props.showRegister === "showLogin" ? "Register" : "Login"
                    }
                    </button>

                    :

                    props.page === 'companyList' ?

                    <button className='whitetext btn darken-1' onClick={() => handleLogout()} >Logout</button>

                    :

                    ''
                  }
                    
                  </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}
