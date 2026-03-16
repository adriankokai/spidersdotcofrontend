import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountryList } from '../../store/slice/fetchCountryListSlice';
import { fetchCurrencyList } from '../../store/slice/fetchCurrencyListSlice';
import { addOrganisation } from '../../store/slice/addOrganisationSlice';
import { fetchOrganisationList } from '../../store/slice/fetchOrganisationListSlice';

export default function AddOrganisationModalForm() {
    const [organisationName, setOrganisationName] = useState('');
    const [legalName, setLegalName] = useState('');
    const [employerIdentificationNumber, setEmployerIdentificationNumber] = useState('');
    const [organisationEmail, setOrganisationEmail] = useState('');
    const [organisationPhone, setOrganisationPhone] = useState('');
    const [fiscalYearStartDay, setFiscalYearStartDay] = useState('');
    const [fiscalYearStartMonth, setFiscalYearStartMonth] = useState('');
    const [country, setCountry] = useState('');
    const [baseCurrency, setBaseCurrency] = useState('');

    const countryList = useSelector((state) => state.fetchCountryList?.countries);
    const baseCurrencyList = useSelector((state) => state.fetchCurrencyList?.currencies);
    const addOrganisationStatus = useSelector((state) => state.addOrganisation?.status);
    const dispatch = useDispatch();

    React.useEffect(() => {
        // Initialize the modal
        const modalElems = document.querySelectorAll('.modal');
        M.Modal.init(modalElems);

        // Initialize the select element with Materialize CSS
        const selectElems = document.querySelectorAll('select');
        M.FormSelect.init(selectElems, {});

        // fetch country list from backend
        dispatch(fetchCountryList());
        dispatch(fetchCurrencyList());

    }, []);

    React.useEffect(() => {
        // Re-initialize the select element whenever the country or currency list changes
        const selectElems = document.querySelectorAll('select');
        M.FormSelect.init(selectElems, {});
    }, [countryList, baseCurrencyList]);

    React.useEffect(() => {
         // Close the modal and refresh organisation list after successfully adding an organisation
        console.log("Add Organisation Status:", addOrganisationStatus);
        if (addOrganisationStatus === 'succeeded') {
            M.Modal.getInstance(document.getElementById('modalAddOrganisation')).close();
            dispatch(fetchOrganisationList());
            setOrganisationName('');
            setLegalName('');
            setEmployerIdentificationNumber('');
            setOrganisationEmail('');
            setOrganisationPhone('');
            setFiscalYearStartDay('');
            setFiscalYearStartMonth('');
            setCountry('');
            setBaseCurrency('');
        }
    }, [addOrganisationStatus, dispatch]);

    const handleAddOrganisation = () => {
        // Logic to add a new organisation goes here
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(organisationEmail)) {
            console.log("Invalid email format");
            alert("Please enter a valid email address e.g., user@organisation.com");
            return;
        }

        const phoneRegex = /^\d{7,15}$/;
        if (!phoneRegex.test(organisationPhone.replace('+', ''))) {
            console.log("Invalid phone number format");
            alert("Please enter a valid phone number (7-15 digits).");
            return;
        }

        if (!organisationName || !legalName || !employerIdentificationNumber || !organisationEmail || !organisationPhone || !fiscalYearStartDay || 
            !fiscalYearStartMonth || !country || !baseCurrency) {
            console.log("Please fill in all fields.");
            alert("Please fill in all fields.");
            return;
        }

        dispatch(addOrganisation({
            name: organisationName,
            legal_name: legalName,
            employer_id: employerIdentificationNumber,
            email: organisationEmail,
            phone: organisationPhone,
            fiscal_year_start_day: fiscalYearStartDay,
            fiscal_year_start_month: fiscalYearStartMonth,
            country,
            base_currency: baseCurrency
        }));
    }

  return (
    <div id="modalAddOrganisation" class="modal">
        <div class="modal-content">
        <h4>Add Organisation</h4>
        <form>
            <div class="input-field">
                <input value={organisationName} onChange={(e) => setOrganisationName(e.target.value)} id="organisationName" type="text" class="validate"/>
                <label for="organisationName">Organisation Name</label>
            </div>
            <div class="input-field">
                <input value={legalName} onChange={(e) => setLegalName(e.target.value)} id="legalName" type="text" class="validate"/>
                <label for="legalName">Legal Name</label>
            </div>
            <div class="input-field">
                <input value={employerIdentificationNumber} onChange={(e) => setEmployerIdentificationNumber(e.target.value)} id="employerIdentificationNumber" type="text" class="validate"/>
                <label for="employerIdentificationNumber">Employer Identification Number</label>
            </div>
            <div class="input-field">
                <input value={organisationEmail} onChange={(e) => setOrganisationEmail(e.target.value)} id="organisationEmail" type="email" class="validate"/>
                <label for="organisationEmail">Organisation Email</label>
            </div>
            <div class="input-field">
                <input value={organisationPhone} onChange={(e) => setOrganisationPhone(e.target.value)} id="organisationPhone" type="tel" class="validate"/>
                <label for="organisationPhone">Organisation Phone</label>
            </div>
            <div class="input-field">
                <select 
                value={fiscalYearStartDay} 
                onChange={(e) => setFiscalYearStartDay(e.target.value)} 
                id="fiscalYearStart" type="date" class="validate">
                    <option value="" disabled defaultValue={''}>Select Fiscal Year Start Day</option>
                    {[...Array(31)].map((_, index) => (
                        <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                 </select>
                <label for="fiscalYearStart">Fiscal Year Start Day</label>
            </div>
            <div class="input-field">
                <select 
                value={fiscalYearStartMonth} 
                onChange={(e) => setFiscalYearStartMonth(e.target.value)} 
                id="fiscalYearStartMonth" type="date" class="validate">
                    <option value="" disabled defaultValue={''}>Select Fiscal Year Start Month</option>
                    {[...Array(12)].map((_, index) => {
                        const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(2000, index));
                        return (
                        <option key={index + 1} value={index + 1}>{monthName}</option>
                    )
        })}
                 </select>
                <label for="fiscalYearStartMonth">Fiscal Year Start Month</label>
            </div>
            <div class="input-field">
                <select value={country} onChange={(e) => setCountry(e.target.value)} id="country" type="text" class="validate">
                    <option value="" disabled defaultValue={''}>Select Country</option>
                    {countryList.map((country) => (
                        <option key={country.id} value={country.id}>{country.name}</option>
                    ))}
                 </select>   
                <label for ="country">Country</label>
            </div>
            <div class="input-field">
                <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)} id="baseCurrency" type="text" class="validate">
                    <option value="" disabled defaultValue={''}>Select Base Currency</option>
                    {baseCurrencyList.map((currency) => (
                        <option key={currency.id} value={currency.id}>{currency.name} ({currency.symbol})</option>
                    ))}
                </select>
                <label for="baseCurrency">Base Currency</label>
            </div>
        </form>
        </div>
       
        <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
        {addOrganisationStatus === 'loading' ?
            <div class="preloader-wrapper small active">
                <div class="spinner-layer spinner-teal-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div><div class="gap-patch">
                    <div class="circle"></div>
                </div><div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
                </div>
            </div>
            :
            <a href="#!" class="waves-effect waves-green btn-flat" onClick={() => handleAddOrganisation()}>Create Organisation</a>
        }
        </div>
    </div>
)}
