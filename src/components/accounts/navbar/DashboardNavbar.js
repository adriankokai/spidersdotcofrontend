import React, { use } from 'react';
import Logo from '../../../images/spidersdotcoLogo.jpg';
import './dashboardnavbar.css';
import { useSelector, useDispatch } from 'react-redux';


export default function Navbar(props) {
  const organisation = useSelector((state) => state.fetchOrganisation?.organisation);
  const user = useSelector((state) => state.fetchUser?.user);

  return (
    <div className='navbar-fixed blue dashboard-navbar' >
    <nav className="grey lighten-2 z-depth-0">
        <div className="nav-wrapper transparent row">
            <img src={Logo}  className='col  spiderlogo' />
            
            <h6 href="#" className="brand teal-text col  hide-on-small-and-down"  >
                Spider Accounts
            </h6>
            <h6 className='col center-align' >{organisation?.name || "Organisation Name"}</h6>
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
