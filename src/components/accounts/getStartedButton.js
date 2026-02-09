import React from 'react'

export default function GetStartedButton({ onShowRegistrationForm }) {
  return (
    <div>
        <button 
        className="btn-large waves-effect waves-light" 
        type="submit" 
        name="action"
        onClick={() => onShowRegistrationForm(true)}
        >
            Get Started
        </button>
        <p className='white-text flow-text' >Join other small businesses today!</p></div>
  )
}
