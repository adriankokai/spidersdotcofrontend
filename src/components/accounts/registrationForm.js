import { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
       
export default function RegistrationForm(props) {
  const { 
    onChangeFirstName, 
    onChangeLastName, 
    onChangeEmail, 
    onChangePassword, 
    onChangeConfirmPassword,
    onChangePhoneNumberCountryCode, 
    onChangePhoneNumber } = props;

  useEffect(() => {
    // Initialize the select element with Materialize CSS
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }, []);

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
        <div className='input-field col s4'>
          <select id='phone_number_country_code'
          value={props.phoneNumberCountryCode} 
          onChange={(e) => onChangePhoneNumberCountryCode(e)} 
          className='icons'
          >
            <option value="+1" data-icon="https://flagcdn.com/w80/us.png">+1 (USA)</option>
            <option value="+1" data-icon="https://flagcdn.com/w80/ca.png">+1 (CA)</option>
            <option value="+44" data-icon="https://flagcdn.com/w80/gb.png">+44 (UK)</option>
            <option value="+263" data-icon="https://flagcdn.com/w80/zw.png">+263 (ZW)</option>
          </select>
          <label htmlFor='phone_number_country_code'>Code</label>
        </div>  
        <div className='input-field col s8'>
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
