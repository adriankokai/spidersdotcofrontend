import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addAssetAccount } from '../../../store/slice/addAssetAccountSlice';
import { fetchAssetAccounts } from '../../../store/slice/fetchAssetAccountsSlice';

export default function () {
    const [accountName, setAccountName] = React.useState('');
    const [balance, setBalance] = React.useState('');
    const [date, setDate] = React.useState('');

    const addAssetAccountStatus = useSelector((state) => state.addAssetAccount?.status);
    const organisationId = useSelector(state => state.fetchOrganisation?.organisation.id);
    const dispatch = useDispatch();

    React.useEffect(() => {
        // Initialize the modal
        const modalElem = document.getElementById('modalAddAssetAccount');
        M.Modal.init(modalElem);
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
        // check if all fields are filled
        if (!accountName) {
            alert("Please fill in the name atleast");
            return;
        }
        console.log("Adding account:", { accountName, balance, date });
        // remove empty fields from the object
        const asset = { organisation: organisationId, name: accountName };
        if (balance) asset.balance = balance;
        if (date) asset.date = date;
        dispatch(addAssetAccount(asset));
        // close the modal after dispatching the action        
        const modalElem = document.getElementById('modalAddAssetAccount');
        const modalInstance = M.Modal.getInstance(modalElem);
        modalInstance.close();
    }

     React.useEffect(() => {
        if (addAssetAccountStatus === 'succeeded') {
            // Close the modal after successful addition
            const modalElem = document.getElementById('modalAddAssetAccount');
            const modalInstance = M.Modal.getInstance(modalElem);
            modalInstance.close();

            //alert user
            alert("Account " + accountName + " added successfully!");

            // Optionally, you can also dispatch an action to refresh the list of accounts in the parent component
            dispatch(fetchAssetAccounts(organisationId));

            // Optionally, reset the form fields
            setAccountName('');
            setBalance('');
            setDate('');
        };
    }, [addAssetAccountStatus]);

  return (
    <div className="modal" id="modalAddAssetAccount" >
        <div className="modal-content">
            AddAssetAccountModalForm
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
                <label htmlFor="as of date">Date</label>
            </div>
        </div>
        <div className='modal-footer'>
            <a href='#' className='modal-close btn'>Cancel</a>
            <a href='#' className='btn' onClick={handleAddAccount}>Add Account</a>
        </div>
    </div>
  )
}
