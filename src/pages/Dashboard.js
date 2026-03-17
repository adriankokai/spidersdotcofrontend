import React from 'react'
import DashboardNavbar from '../components/accounts/navbar/DashboardNavbar';
import DashboardSidenav from '../components/accounts/navbar/DashboardSidenav';
import { fetchOrganisation } from '../store/slice/fetchOrganisationSlice';
import { fetchUser } from '../store/slice/fetchUserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


/*
This is the Dashboard page component. It will display the dashboard for a 
specific organisation. The dashboard will have a navbar, a sidebar, and a main 
content area. The navbar will have the organisation name and a logout button. 
The sidebar will have links to different sections of the dashboard such as 
"Receipts", "Invoices", "Chart of Accounts", etc. The main content area 
will display the content for the selected section of the dashboard. 
The organisation data will be fetched from the backend when the component 
mounts. The dashboard data will be stored in the component's state and 
rendered in the main content area.
*/
export default function Dashboard() {
  const dispatch = useDispatch();
  const {id} = useParams(); // Get the company ID from the URL parameters

  React.useEffect(() => {
    dispatch(fetchOrganisation(id)); // Fetch organisation data using the organisation ID
    dispatch(fetchUser());
  }, []);

  return (
    <div>
        <DashboardNavbar />
        <div className='row'>
          <div className='col m3'>
            <DashboardSidenav />
          </div>
          <div className='col s12 m9'>

          </div>
        </div>
    </div>
  )
}
