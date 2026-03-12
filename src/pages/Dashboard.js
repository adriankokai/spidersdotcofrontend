import React from 'react'
import DashboardNavbar from '../components/accounts/navbar/DashboardNavbar';

/*
This is the Dashboard page component. It will display the dashboard for a 
specific company. The dashboard will have a navbar, a sidebar, and a main 
content area. The navbar will have the company name and a logout button. 
The sidebar will have links to different sections of the dashboard such as 
"Receipts", "Invoices", "Chart of Accounts", etc. The main content area 
will display the content for the selected section of the dashboard. 
The organisation data will be fetched from the backend when the component 
mounts. The dashboard data will be stored in the component's state and 
rendered in the main content area.
*/
export default function Dashboard() {
  return (
    <div>
        <DashboardNavbar />
    </div>
  )
}
