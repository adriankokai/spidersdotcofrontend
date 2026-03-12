import React, { use } from 'react';
import Logo from '../../../images/spidersdotcoLogo.jpg';
import './dashboardnavbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompany } from '../../../store/slice/fetchCompanySlice';
import { fetchUser } from '../../../store/slice/fetchUserSlice';
import { useParams } from 'react-router-dom';


export default function Navbar(props) {
  const company = useSelector((state) => state.fetchCompany?.company);
  const user = useSelector((state) => state.fetchUser?.user);
  const dispatch = useDispatch();
  const {id} = useParams(); // Get the company ID from the URL parameters

  React.useEffect(() => {
    dispatch(fetchCompany(id)); // Fetch company data using the company ID
    dispatch(fetchUser());
  }, []);

  return (
    <div className='navbar-fixed'>
    <nav className="grey lighten-2 z-depth-0">
        <div className="nav-wrapper transparent row">
            <img src={Logo}  className='col spiderlogo' />
            <h6 href="#" className="brand teal-text col hide-on-small-and-down"  >
                Spider Accounts
            </h6>
            <h6 className=' offset-s3 offset-m1 offset-l3 col' >{company?.name || "Company Name"}</h6>
            <ul id="nav-mobile" className="right col">
                <li className='row hide-on-small-and-down'  >
                  <a href="#" className='row ' >
                    <i class="material-icons grey-text text-darken-2 col no-padding">account_circle</i>
                     <span href="#" className='col no-padding' >{user?.username || "Username"}</span>
                  </a>
                 
                </li>
                 <li><a href="#"><i class="material-icons grey-text text-darken-2">settings</i></a></li>
            </ul>
        </div>
    </nav>
    </div>
  )
}
