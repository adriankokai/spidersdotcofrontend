import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setFirstName, setLastName, setEmail, setPassword, 
        setConfirmPassword, setPhoneNumber, submitRegistrationForm 
        } from '../../store/slice/submitRegistrationFormSlice';
       
export default function RegistrationForm(props) {
  const { 
    onChangeFirstName, 
    onChangeLastName, 
    onChangeEmail, 
    onChangePassword, 
    onChangeConfirmPassword, 
    onChangePhoneNumber } = props;
  const dispatch = useDispatch();

  return (
    <div className='row' style={{marginTop: "-100px"}} >
      <form 
      className='col s12' 
      >
        <div className='input-field col s12'>
          <input 
          id='first_name' type='text' className='validate' 
          onChange={(e) => onChangeFirstName(e)} 
          />
          <label htmlFor='first_name'>First Name</label>
        </div>
        <div className='input-field col s12'>
          <input 
          id='last_name' type='text' className='validate' 
          onChange={(e) => onChangeLastName(e)} 
          />
          <label htmlFor='last_name'>Last Name</label>
        </div>
        <div className='input-field col s12'>
          <input 
          id='email' type='email' className='validate' 
          onChange={(e) => onChangeEmail(e)} 
          />
          <label htmlFor='email'>Email</label>
        </div>
        <div className='input-field col s12'>
          <input 
          id='password' type='password' className='validate' 
          onChange={(e) => onChangePassword(e)} />
          <label htmlFor='password'>Password</label>
        </div>
        <div className='input-field col s12'>
          <input 
          id='confirm_password' type='password' className='validate' 
          onChange={(e) => onChangeConfirmPassword(e)} />
          <label htmlFor='confirm_password'>Confirm Password</label>
        </div>
        <div className='input-field col s12'>
          <input 
          id='phone_number' type='tel' className='validate' 
          onChange={(e) => onChangePhoneNumber(e)} />
          <label htmlFor='phone_number'>Phone Number</label>
        </div>
      </form>
      <button
      className='btn waves-effect waves-light' 
      type='submit' name='action'
      onClick={props.onSubmitRegistrationForm} 
      > Register 
      </button>
    </div>
  )
}
