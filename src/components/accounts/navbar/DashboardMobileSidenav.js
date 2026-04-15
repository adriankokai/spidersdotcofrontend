import React from 'react'
import { useSelector } from 'react-redux';

export default function DashboardMobileSidenav() {
    const user = useSelector((state) => state.fetchUser?.user);
    const [showSubMenu, setShowSubMenu] = React.useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    }

    const subMenu = <ul className='sub-menu scale-transition'>
        <li><a href="#" className='white-text'>New Receipt</a></li>
        <li><a href="#" className='white-text'>New Invoice</a></li>
        <li><a href="#" className='white-text'>New Bill</a></li>
        <li><a href="#" className='white-text'>New Product/Service</a></li>
        <div class="divider"></div>
      </ul>

  return (
    <ul id="dashboard-mobile-sidenav" className="sidenav black ">
    <li><div class="user-view">
      <div class="background">
    
      </div>
      <a href="#user"><i class="material-icons medium teal-text text-lighten-2">person</i></a>
      <a href="#name"><span class="white-text name">{user?.first_name || 'John Doe'}</span></a>
      <a href="#email"><span class="white-text email">{user?.email || 'jdandturk@gmail.com'}</span></a>
    </div></li>
    <li>
      <a href="#!" className='white-text scale-transition' onClick={() => toggleSubMenu()} ><i class="material-icons white-text">add</i>Create</a>
      {
        showSubMenu ? subMenu : null
      }
    </li>
    <li><a href="#!" className='white-text' ><i class="material-icons white-text">receipt</i>Receipts</a></li>
    <li><a href="#!" className='white-text' ><i class="material-icons white-text">description</i>Invoices</a></li>
    <li><a href="#!" className='white-text' ><i class="material-icons white-text">receipt</i>Bills</a></li>
    <li><a href="#!" className='white-text' ><i class="material-icons white-text">inventory</i>Inventory</a></li>
    <li><a href="#!" className='white-text' ><i class="material-icons white-text">account_balance</i>Chart of Accounts</a></li>
    <li><div class="divider"></div></li>
    <p style={{position: 'fixed', bottom: '5vh', left: '10px'}} class="subheader grey-text text-darken-2">Copyright © 2026 Spider Accounts.</p>
  </ul>
  )
}
