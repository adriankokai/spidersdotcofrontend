import React from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

export default function CreateDropdown(props) {
    const createDropdownRef = React.useRef(null);

     React.useEffect(() => {
        if (createDropdownRef.current) {
            M.Dropdown.init(createDropdownRef.current, {coverTrigger: false, constrainWidth: false, hover: true, inDuration: 250, outDuration: 200});
        }
    }, [createDropdownRef]);
    
  return (
    <>
    <a href="#" ref={createDropdownRef} data-target="create-dropdown" className='btn dropdown-trigger white-text  center-block' style={{fontSize: '1.6rem', marginTop: ''}} >
        Create
        <i class="material-icons white-text text-darken-2 ">add</i>
    </a>
  <ul id="create-dropdown" className="dropdown-content">
    <li onClick={() => props.changeMainAreaContent("displayCreateReceipt") } ><a href="#!" className='teal-text' ><i class="material-icons teal-text">receipt</i>Create Receipt</a></li>
    <li onClick={() => props.changeMainAreaContent("displayCreateInvoice") } ><a href="#!" className='teal-text' ><i class="material-icons teal-text">description</i>Create Invoice</a></li>
    <li onClick={() => props.changeMainAreaContent("displayCreateBill") } ><a href="#!" className='teal-text' ><i class="material-icons teal-text">receipt</i>Create Bill</a></li>
    <li onClick={() => props.changeMainAreaContent("displayCreateProductService") } ><a href="#!" className='teal-text' ><i class="material-icons teal-text">inventory</i>Create Inventory Item</a></li>
    <li onClick={() => props.changeMainAreaContent("displayCreateChartOfAccounts") } ><a href="#!" className='teal-text' ><i class="material-icons teal-text">account_balance</i>Create Chart of Account</a></li>
  </ul>
  </>
  )
}
