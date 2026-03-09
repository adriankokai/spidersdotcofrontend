import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  
    submitRegistrationForm 
        } from '../store/slice/submitRegistrationFormSlice';
import GetStartedButton from '../components/accounts/getStartedButton';
import RegistrationForm from '../components/accounts/registrationForm';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/accounts/navbar/Navbar';
import { render } from '@testing-library/react';
import Login from '../components/accounts/Login';

/*
this is the Accounts page component. Landing page for spider accounts. 
It will have a background image, a call to action, and a registration 
form that will be shown when the user clicks on the "Get Started" button. 
The registration form will have fields for first name, last name, email, 
password, confirm password, and phone number. The registration form will 
also have a submit button that will handle the registration logic when 
clicked.
*/

const Accounts = () => {
    const [showRegister, setShowRegister] = useState('showGetStartedButton');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumberCountryCode, setPhoneNumberCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();

    const registrationStatus = useSelector((state) => state.submitRegistrationForm?.status);

    const navigate = useNavigate();

    React.useEffect(() => {
        console.log("Registration status changed:", registrationStatus);
        if (registrationStatus === 'succeeded') {
            console.log("Registration successful! Navigating to company list...");
            navigate('/companyList');
        }}, [registrationStatus, navigate] );

    const handleSubmitRegistrationForm = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        // Logic to submit the registration form goes here

        //validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.log("Invalid email format");
            alert("Please enter a valid email address e.g name@example.com.");
            return;
        }

        //validate phone number format (simple validation for 7 to 15 digits)
        const phoneRegex = /^\d{7,15}$/;
        if (!phoneRegex.test(phoneNumber)) {
            console.log("Invalid phone number format");
            alert("Please enter a valid phone number (7-15 digits).");
            return;
        }

        console.log("Submit registration form");
        if (firstName && lastName && email && password && 
            confirmPassword === password && phoneNumber) {
            console.log("Registration data to submit:", { 
                firstName, lastName, email, password, confirmPassword, 
                phoneNumberCountryCode, phoneNumber });
            dispatch(submitRegistrationForm({ 
                first_name: firstName, last_name: lastName, 
                email, password, username: email,
                phone_number_country_code: phoneNumberCountryCode, 
                phone_number: phoneNumber }));
        } else {
            console.log("Please fill in all fields correctly.");
            alert("Please fill in all fields correctly.");
        }
    }

    const showRegistrationForm = (registrationForm) => {
        // Logic to show the registration form or show alternative 
        // related components goes here
        console.log("Current showRegister state:", showRegister);
        setShowRegister(registrationForm);
        console.log("changed showRegister state to:", showRegister);
    }

    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const changeLastName = (e) => {
        setLastName(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }
    const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
    const changePhoneNumberCountryCode = (e) => {
        setPhoneNumberCountryCode(e.target.value);
    }
    const changePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    return (
        <div>
        <div style={{}}>
            <div style={accountingBackground}
            >
                <div style=
                {{ background: 
                "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(30,136,229,0.5))" 
                }}>
                    <Navbar showRegister={showRegister} onChangeShowRegister={showRegistrationForm} />
                    <div 
                    className='row container' 
                    style=
                    {{ 
                        paddingTop: "150px", paddingBottom: "150px" 
                    }}>
                        
                        <div className="col s12 m6 l6"  >
                            <h3 
                            className='center-align white-text'
                            >
                                EMPOWER YOUR SMALL BUSINESS WITH SMART ACCOUNTING
                            </h3>
                            <p className='center-align white-text' >
                                We know the financial hurdles of starting up. Get
                                the tools you need with our affordable easy-to-use
                                platform designed for your growth.
                            </p>
                        </div>

                        <div className="col s12 m6 l6 center" style={{ marginTop: "80px" }}>
                            {
                               showRegister === "showRegistrationForm" ?

                                            <RegistrationForm
                                        onChangeFirstName={changeFirstName}
                                        onChangeLastName={changeLastName}
                                        onChangeEmail={changeEmail}
                                        onChangePassword={changePassword}
                                        onChangeConfirmPassword={changeConfirmPassword}
                                        onChangePhoneNumberCountryCode={changePhoneNumberCountryCode}
                                        onChangePhoneNumber={changePhoneNumber}
                                        onSubmitRegistrationForm={handleSubmitRegistrationForm}
                                        phoneNumberCountryCode={phoneNumberCountryCode}
                                        /> 
                                        :
                                showRegister === "showGetStartedButton" ?
                                
                                        <GetStartedButton 
                                        onChangeShowRegister={showRegistrationForm}
                                        />
                                        :
                                showRegister === "showLogin" ?
                                    <Login
                                    showRegister
                                    onChangeShowRegister={showRegistrationForm} 
                                    />
                                    :
                                    <GetStartedButton 
                                    onChangeShowRegister={showRegistrationForm}
                                        />
                                        
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export const accountingBackground = {
                backgroundImage: 
                "url('https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }

export default Accounts