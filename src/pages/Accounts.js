import React from 'react'

// this is the Accounts page component.

const showLoginForm = () => {
    // Logic to show the login form goes here
    console.log("Show login form");
}

const showRegistrationForm = () => {
    // Logic to show the registration form goes here
    console.log("Show registration form");
}

const Accounts = () => {
    return (
        <div style={{}}>
            <div style={{
                backgroundImage: "url('https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            >
                <div style=
                {{ background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(30,136,229,0.5))" }}>
                    <div className='row container' style={{ paddingTop: "150px", paddingBottom: "150px" }}>
                        <div className="col s12 m6 l6"  >
                            <h3 className='center-align white-text'>EMPOWER YOUR SMALL BUSINESS WITH SMART ACCOUNTING</h3>
                            <p className='center-align white-text' >We know the financial hurdles of starting up. Get
                                the tools you need with our affordable easy-to-use
                                platform designed for your growth.
                            </p>
                        </div>

                        <div className="col s12 m6 l6 center" style={{ marginTop: "80px" }}>
                            <button className="btn-large waves-effect waves-light" type="submit" name="action">
                                Get Started
                            </button>
                            <p className='white-text flow-text' >Join other small businesses today!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accounts