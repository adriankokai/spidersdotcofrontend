import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addIncomeAccount } from '../../../store/slice/addIncomeAccountSlice';
import { fetchIncomeAccounts } from '../../../store/slice/fetchIncomeAccountsSlice';

export default function  AddIncomeAccountModalForm(props) {
    const [accountName, setAccountName] = React.useState('');
    const [balance, setBalance] = React.useState('');
    const [date, setDate] = React.useState('');

    const addIncomeAccountStatus = useSelector((state) => state.addIncomeAccount.status);
    const dispatch = useDispatch();

    const organisationId = useSelector(state => state.fetchOrganisation.organisation.id);

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
        dispatch(addIncomeAccount({ organisation: organisationId, name: accountName, balance, date }));
    }

     React.useEffect(() => {
        if (addIncomeAccountStatus === 'succeeded') {
            // Close the modal after successful addition
            const modalElem = document.getElementById('modalAddIncomeAccount');
            const modalInstance = M.Modal.getInstance(modalElem);
            modalInstance.close();

            //alert user
            alert("Account " + accountName + " added successfully!");

            // Optionally, you can also dispatch an action to refresh the list of accounts in the parent component
            dispatch(fetchIncomeAccounts(organisationId));

            // Optionally, reset the form fields
            setAccountName('');
            setBalance('');
            setDate('');
        };
    }, [addIncomeAccountStatus]);

  return (
    <div className="modal" id="modalAddIncomeAccount" >
        <div className='modal-content'>
            AddIncomeAccountModalForm
            <div className='input-field'>
                <input id="accountName" type="text" className="validate" value={accountName} onChange={onChangeAccountName} />
                <label htmlFor="accountName">Account Name</label>
            </div>
            <div className='input-field'>
                <input id="balance" type="number" className="validate" value={balance} onChange={onChangeBalance} />
                <label htmlFor="balance">Opening Balance</label>
            </div>
            <div className='input-field'>
                <input id="date" type="date" className="validate" value={date} onChange={onChangeDate} />
                <label htmlFor="date">As of Date</label>
            </div>
        </div>
        <div className='modal-footer'>
            <a href='#' className='modal-close btn'>Cancel</a>
            <a href='#' className='btn' onClick={handleAddAccount}>Add Account</a>
        </div>
    </div>
  )
}
