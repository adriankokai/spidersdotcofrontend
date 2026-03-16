import React, { use } from 'react'
import Navbar from '../components/accounts/navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrganisationList } from '../store/slice/fetchOrganisationListSlice';
import AddOrganisationModalForm from '../components/accounts/addOrganisationModalForm';

/*
This is the OrganisationList page component. It will display a list of companies that 
the user owns or works for. The user will be able to 
click on a organisation to manage it. The organisation list will be fetched from the backend 
when the component mounts. The organisation list will be stored in the component's state 
and rendered as a list of organisation cards. Each organisation card will display the organisation's 
name, logo, and a button to manage the organisation. When the user clicks on the manage 
button, they will be taken to the organisation's dashboaerd page.
*/

export default function OrganisationList() {
  const companies = useSelector((state) => state.fetchOrganisationList?.companies);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchOrganisationList());
  }, [dispatch]);

  const handleAddOrganisation = () => {
    // Logic to add a new organisation goes here
    console.log("Add Organisation button clicked");
  };

  return (
    <div>
      <Navbar page={'organisationList'} />
      <div style={{paddingTop: '150px'}}>
        <div className='row container'>
          <div className='col s12 m8 l6 offset-m2 offset-l3'>
            <div className='card center-align'>
              <span className='card-title'>Your Companies</span>
            <div className='card-content'>
              <div className='row'>
                {
                  companies && companies.map((organisation) => (
                    <a key={organisation.id} className=' waves-effect waves-light col s12' href={`/dashboard/${organisation.id}`}>
                      <div className='card-panel  teal '>
                        
                          <span className='white-text'>{organisation.name}</span>
                        
                      </div>
                    </a>
                  ))
                }
              </div>
              <div className='card-action'>
                <a href="#modalAddOrganisation" className=' col s12 modal-trigger' >Add Organisation</a>
                <AddOrganisationModalForm />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
