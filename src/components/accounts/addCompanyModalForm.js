import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountryList } from '../../store/slice/fetchCountryListSlice';
import { fetchCurrencyList } from '../../store/slice/fetchCurrencyListSlice';
import { addCompany } from '../../store/slice/addCompanySlice';
import { fetchCompanyList } from '../../store/slice/fetchCompanyListSlice';

export default function AddCompanyModalForm() {
    const [companyName, setCompanyName] = useState('');
    const [legalName, setLegalName] = useState('');
    const [employerIdentificationNumber, setEmployerIdentificationNumber] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyPhone, setCompanyPhone] = useState('');
    const [fiscalYearStartDay, setFiscalYearStartDay] = useState('');
    const [fiscalYearStartMonth, setFiscalYearStartMonth] = useState('');
    const [country, setCountry] = useState('');
    const [baseCurrency, setBaseCurrency] = useState('');

    const countryList = useSelector((state) => state.fetchCountryList?.countries);
    const baseCurrencyList = useSelector((state) => state.fetchCurrencyList?.currencies);
    const addCompanyStatus = useSelector((state) => state.addCompany?.status);
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
         // Close the modal and refresh company list after successfully adding a company
        console.log("Add Company Status:", addCompanyStatus);
        if (addCompanyStatus === 'succeeded') {
            M.Modal.getInstance(document.getElementById('modalAddCompany')).close();
            dispatch(fetchCompanyList());
            setCompanyName('');
            setLegalName('');
            setEmployerIdentificationNumber('');
            setCompanyEmail('');
            setCompanyPhone('');
            setFiscalYearStartDay('');
            setFiscalYearStartMonth('');
            setCountry('');
            setBaseCurrency('');
        }
    }, [addCompanyStatus, dispatch]);

    const handleAddCompany = () => {
        // Logic to add a new company goes here
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(companyEmail)) {
            console.log("Invalid email format");
            alert("Please enter a valid email address e.g., user@company.com");
            return;
        }

        const phoneRegex = /^\d{7,15}$/;
        if (!phoneRegex.test(companyPhone.replace('+', ''))) {
            console.log("Invalid phone number format");
            alert("Please enter a valid phone number (7-15 digits).");
            return;
        }

        if (!companyName || !legalName || !employerIdentificationNumber || !companyEmail || !companyPhone || !fiscalYearStartDay || 
            !fiscalYearStartMonth || !country || !baseCurrency) {
            console.log("Please fill in all fields.");
            alert("Please fill in all fields.");
            return;
        }

        dispatch(addCompany({
            name: companyName,
            legal_name: legalName,
            employer_id: employerIdentificationNumber,
            email: companyEmail,
            phone: companyPhone,
            fiscal_year_start_day: fiscalYearStartDay,
            fiscal_year_start_month: fiscalYearStartMonth,
            country,
            base_currency: baseCurrency
        }));
    }

  return (
    <div id="modalAddCompany" class="modal">
        <div class="modal-content">
        <h4>Add Company</h4>
        <form>
            <div class="input-field">
                <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} id="companyName" type="text" class="validate"/>
                <label for="companyName">Company Name</label>
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
                <input value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} id="companyEmail" type="email" class="validate"/>
                <label for="companyEmail">Company Email</label>
            </div>
            <div class="input-field">
                <input value={companyPhone} onChange={(e) => setCompanyPhone(e.target.value)} id="companyPhone" type="tel" class="validate"/>
                <label for="companyPhone">Company Phone</label>
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
        <a href="#!" class="waves-effect waves-green btn-flat" onClick={() => handleAddCompany()}>Create Company</a>
        </div>
    </div>
)}
