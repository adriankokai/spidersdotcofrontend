import React, { use } from 'react'
import Navbar from '../components/accounts/navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompanyList } from '../store/slice/fetchCompanyListSlice';
import AddCompanyModalForm from '../components/accounts/addCompanyModalForm';

/*
This is the CompanyList page component. It will display a list of companies that 
the user owns or works for. The user will be able to 
click on a company to manage it. The company list will be fetched from the backend 
when the component mounts. The company list will be stored in the component's state 
and rendered as a list of company cards. Each company card will display the company's 
name, logo, and a button to manage the company. When the user clicks on the manage 
button, they will be taken to the company's dashboaerd page.
*/

export default function CompanyList() {
  const companies = useSelector((state) => state.fetchCompanyList?.companies);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCompanyList());
  }, [dispatch]);

  const handleAddCompany = () => {
    // Logic to add a new company goes here
    console.log("Add Company button clicked");
  };

  return (
    <div>
      <Navbar page={'companyList'} />
      <div style={{paddingTop: '150px'}}>
        <div className='row container'>
          <div className='col s12 m8 l6 offset-m2 offset-l3'>
            <div className='card center-align'>
              <span className='card-title'>Your Companies</span>
            <div className='card-content'>
              <div className='row'>
                {
                  companies && companies.map((company) => (
                    <a key={company.id} className=' waves-effect waves-light col s12' href={`/dashboard/${company.id}`}>
                      <div className='card-panel  teal '>
                        
                          <span className='white-text'>{company.name}</span>
                        
                      </div>
                    </a>
                  ))
                }
              </div>
              <div className='card-action'>
                <a href="#modalAddCompany" className=' col s12 modal-trigger' >Add Company</a>
                <AddCompanyModalForm />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
