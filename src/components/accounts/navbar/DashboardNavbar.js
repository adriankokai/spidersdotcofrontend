import React, { use } from 'react';
import Logo from '../../../images/spidersdotcoLogo.jpg';
import './dashboardnavbar.css';
import { useSelector, useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  const organisation = useSelector((state) => state.fetchOrganisation?.organisation);
  const user = useSelector((state) => state.fetchUser?.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    // Initialize the dropdown
    const dropdownElems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdownElems, { constrainWidth: false });
  }, []);

  const switchOrganisation = () => {
    // Logic to switch organisation goes here
    console.log("Switching organisation...");
    navigate('/organisationList');
  }

  return (
    <div className='navbar-fixed blue dashboard-navbar' >
    <nav className="grey lighten-1 z-depth-0">
        <div className="nav-wrapper transparent row">
            <img src={Logo}  className='col  spiderlogo' />
            
            <h6 href="#" className="brand teal-text col  hide-on-small-and-down"  >
                Spider Accounts
            </h6>
            <h6 className='col center-align' >
              <ul id="dropdown1nav" className="dropdown-content">
                <li><a href="#" onClick={() => switchOrganisation()} >switch organisation</a></li>
              </ul>
              <a href="#" data-target="dropdown1nav" className='dropdown-trigger'>{organisation?.name || "Organisation Name"}</a>
            </h6>
            <ul id="nav-mobile" className="right col ">
                <li className=' hide-on-med-and-down'  >
                  <a href="#" className=' no-padding' >
                    <i class="material-icons grey-text text-darken-2 col no-padding">account_circle</i>
                     <span href="#" className='col  no-padding' >{user?.username || "Username"}</span>
                  </a>
                 
                </li>
                
                 <li><a href="#" className='' ><i class="material-icons hide-on-small-and-down grey-text text-darken-2 ">settings</i></a></li>
                 <li><a href="#" data-target="dashboard-mobile-sidenav" className=" sidenav-trigger hide-on-med-and-up "><i class="material-icons">menu</i></a></li>
            </ul>
        </div>
    </nav>
    </div>
  )
}
