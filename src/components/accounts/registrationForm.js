import React from 'react'

export default function RegistrationForm(props) {
  const { onChangeFirstName, onChangeLastName, onChangeEmail, onChangePassword, onChangeConfirmPassword, onChangePhoneNumber } = props;
  return (
    <div className='row' style={{marginTop: "-100px"}} >
      <form className='col s12'>
        <div className='input-field col s12'>
          <input id='first_name' type='text' className='validate' onChange={(e) => onChangeFirstName(e.target.value)} />
          <label htmlFor='first_name'>First Name</label>
        </div>
        <div className='input-field col s12'>
          <input id='last_name' type='text' className='validate' onClick={e => onChangeLastName(e.target.value)} />
          <label htmlFor='last_name'>Last Name</label>
        </div>
        <div className='input-field col s12'>
          <input id='email' type='email' className='validate' onClick={e => onChangeEmail(e.target.value)} />
          <label htmlFor='email'>Email</label>
        </div>
        <div className='input-field col s12'>
          <input id='password' type='password' className='validate' onClick={e => onChangePassword(e.target.value)} />
          <label htmlFor='password'>Password</label>
        </div>
        <div className='input-field col s12'>
          <input id='confirm_password' type='password' className='validate' onClick={e => onChangeConfirmPassword(e.target.value)} />
          <label htmlFor='confirm_password'>Confirm Password</label>
        </div>
        <div className='input-field col s12'>
          <input id='phone_number' type='tel' className='validate' onClick={e => onChangePhoneNumber(e.target.value)} />
          <label htmlFor='phone_number'>Phone Number</label>
        </div>
      </form>
      <button className='btn waves-effect waves-light' type='submit' name='action'>Register</button>
    </div>
  )
}
