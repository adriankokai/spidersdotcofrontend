import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addExpenseAccount } from '../../../store/slice/addExpenseAccountSlice';
import { fetchExpenseAccounts } from '../../../store/slice/fetchExpenseAccountsSlice';

export default function AddExpenseAccountModalForm() {
  const [accountName, setAccountName] = React.useState('');
  const [balance, setBalance] = React.useState('');
  const [date, setDate] = React.useState('');

  const addExpenseAccountStatus = useSelector((state) => state.addExpenseAccount?.status);
  const organisationId = useSelector(state => state.fetchOrganisation?.organisation.id);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // Initialize the modal
    const modalElems = document.querySelectorAll('.modal');
    M.Modal.init(modalElems);
  }, []);

  const onChangeAccountName = (e) => {
    setAccountName(e.target.value);
  };

  const onChangeBalance = (e) => {
    setBalance(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

   const handleAddAccount = () => {
      // Logic to add the new account goes here
      console.log("Adding account:", { accountName, balance, date });
      dispatch(addExpenseAccount({ organisation: organisationId, name: accountName, balance, date }));
  }

   React.useEffect(() => {
      if (addExpenseAccountStatus === 'succeeded') {
          // Close the modal after successful addition
          const modalElem = document.getElementById('modalAddExpenseAccount');
          const modalInstance = M.Modal.getInstance(modalElem);
          modalInstance.close();

          //alert user
          alert("Account " + accountName + " added successfully!");

          // Optionally, you can also dispatch an action to refresh the list of accounts in the parent component
          dispatch(fetchExpenseAccounts(organisationId));

          // Optionally, reset the form fields
          setAccountName('');
          setBalance('');
          setDate('');
      };
  }, [addExpenseAccountStatus]);

  return (
    <div className="modal" id="modalAddExpenseAccount" >
      <div className='modal-content'>
        AddExpenseAccountModalForm
        <div className='input-field'>
          <input id="accountName" type="text" className="validate" value={accountName} onChange={e => onChangeAccountName(e)} />
          <label htmlFor="accountName">Account Name</label>
        </div>
        <div className='input-field'>
          <input id="balance" type="number" className="validate" value={balance} onChange={e => onChangeBalance(e)} />
          <label htmlFor="balance">Opening Balance</label>
        </div>
        <div className='input-field'>
          <input id="date" type="date" className="validate" value={date} onChange={e => onChangeDate(e)} />
          <label htmlFor="date">Date</label>
        </div>
      </div>
      <div className='modal-footer'>
        <a href='#' className='modal-close btn'>Cancel</a>
        <a href='#' className='btn' onClick={handleAddAccount}>Add Account</a>
      </div>
    </div>
  )
}
