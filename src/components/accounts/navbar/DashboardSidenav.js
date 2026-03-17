import React from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import DashboardMobileSidenav from './DashboardMobileSidenav';

/*
This is the DashboardSidenav component. It will display the sidebar for the 
dashboard. The sidebar will have links to different sections of the dashboard 
such as "Receipts", "Invoices", "Chart of Accounts", etc. The sidebar will be 
implemented using Materialize CSS framework. The sidebar will be responsive 
and will collapse into a hamburger menu on smaller screens. The sidebar will 
be initialized using the Materialize CSS JavaScript library when the 
component mounts.
*/

export default function DashboardSidenav() {

    //Initilize the sidenav when the component mounts
    React.useEffect(() => {
        const sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav, {edge: 'left', inDuration: 250, outDuration: 200});
    }, []);

  return (
    <div>
        <DashboardMobileSidenav />
    <div className='grey darken-4 hide-on-small-and-down' 
    style={{marginTop: '-15px', marginLeft: '-11px', padding: '15px', 
    minHeight: '100vh', position: 'fixed'}} >
        
        <div className=' valign-wrapper' style={{height: '12vh'}} >
            <a href="#" className='teal-text  center-block' style={{fontSize: '1.8rem', marginTop: '2vh'}} >
                Create
                <i class="material-icons white-text text-darken-2 ">add</i>
            </a>
        </div>
        <div className='divider' style={{marginLeft: '-15px', marginRight: '-15px'}} ></div>
        <div className=' valign-wrapper' style={{height: '12vh'}} >
            <a href="#" className='teal-text  center-block' style={{fontSize: '1.6rem'}} >
                Receipts
            </a>
            
        </div>
        <div className='divider' style={{marginLeft: '-15px', marginRight: '-15px'}} ></div>
        <div className=' valign-wrapper' style={{height: '12vh'}} >
            <a href="#" className='teal-text  center-block' style={{fontSize: '1.6rem'}} >
                Invoices
            </a>
            
        </div>
        <div className='divider' style={{marginLeft: '-15px', marginRight: '-15px'}} ></div>
        <div className=' valign-wrapper' style={{height: '12vh'}} >
            <a href="#" className='teal-text  center-block' style={{fontSize: '1.6rem'}} >
                Bills
            </a>
            
        </div>
        <div className='divider' style={{marginLeft: '-15px', marginRight: '-15px'}} ></div>
        <div className=' valign-wrapper' style={{height: '12vh'}} >
            <a href="#" className='teal-text  center-block' style={{fontSize: '1.6rem'}} >
                Inventory
            </a>
            
        </div>
        <div className='divider' style={{marginLeft: '-15px', marginRight: '-15px'}} ></div>
        <div className=' valign-wrapper' style={{height: '12vh'}} >
            <a href="#" className='teal-text  center-block' style={{fontSize: '1.58rem'}} >
               
                Chart of Accounts
            </a>
            
        </div>
        <div className='divider' style={{marginLeft: '-15px', marginRight: '-15px'}} ></div>
        <p className='footer-copyright' style={{position: 'fixed', bottom: '0'}}>
            © 2026 Spider Accounts. <br/>
            All rights reserved.
        </p>
    </div>
    </div>
  )
}
