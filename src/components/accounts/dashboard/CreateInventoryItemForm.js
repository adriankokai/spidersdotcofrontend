import React from 'react'
import { useSelector } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import AddItemCategoryModalForm from './AddItemCategoryModalForm';
import { fetchIncomeAccounts } from '../../../store/slice/fetchIncomeAccountsSlice';
import { fetchExpenseAccounts } from '../../../store/slice/fetchExpenseAccountsSlice';
import { fetchItemCategories } from '../../../store/slice/fetchItemCategoriesSlice';
import { addInventoryItem } from '../../../store/slice/addInventoryItemSlice';
import { useDispatch } from 'react-redux';
import AddIncomeAccountModalForm from './AddIncomeAccountModalForm';
import AddExpenseAccountModalForm from './AddExpenseAccountModalForm';
import { useParams } from 'react-router-dom';

export default function CreateInventoryItemForm(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [sku, setSku] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [salesPrice, setSalesPrice] = React.useState('');
    const [incomeAccount, setIncomeAccount] = React.useState('');
    const [expenseAccount, setExpenseAccount] = React.useState('');
    const [cost, setCost] = React.useState('');
    const [quantityOnHand, setQuantityOnHand] = React.useState('');
    const [selectedProductService, setSelectedProductService] = React.useState('inventory');
    const [taxRate, setTaxRate] = React.useState('');

    const addInventoryItemStatus = useSelector((state) => state.addInventoryItem.status);
    const addInventoryItemError = useSelector((state) => state.addInventoryItem.error);

    const itemCategories = useSelector((state) => state.fetchItemCategories?.itemCategories);
    const incomeAccounts = useSelector((state) => state.fetchIncomeAccounts?.incomeAccounts);
    const expenseAccounts = useSelector((state) => state.fetchExpenseAccounts?.expenseAccounts);

    const organisationId = useParams().id;

    const dispatch = useDispatch();

    const onChangeCategory = (e) => {
        console.log("Selected category ID:", e.target.value);
        setCategory(e.target.value);
    }

    React.useEffect(() => {
        dispatch(fetchIncomeAccounts(organisationId));
        dispatch(fetchExpenseAccounts(organisationId));
        dispatch(fetchItemCategories(organisationId));
    }, [organisationId, dispatch]);

    React.useEffect(() => {
        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});
    }, [incomeAccounts, expenseAccounts, itemCategories]);

    const onChangeSelectedProductService = (e) => {
        setSelectedProductService(e.target.value);
    }

    const handleAddInventoryItem = () => {
        // Implement the logic to add inventory item here
        console.log("Adding inventory item with details:");
        console.log("Name:", name);
        console.log("Description:", description);
        console.log("SKU:", sku);
        console.log("Category ID:", category);
        console.log("Sales Price:", salesPrice);
        console.log("Income Account ID:", incomeAccount);
        console.log("Expense Account ID:", expenseAccount);
        console.log("Purchase Price:", cost);
        console.log("Quantity on Hand:", quantityOnHand);

        dispatch(addInventoryItem({
            selectedProductService,
            organisation: organisationId,
            name,
            description,
            sku,
            category: category,
            sales_price: parseFloat(salesPrice),
            income_account: incomeAccount,
            expense_account: expenseAccount,
            cost: parseFloat(cost),
            quantity_on_hand: parseInt(quantityOnHand, 10),
            tax_rate: parseFloat(taxRate)
        }));
    }

    React.useEffect(() => {
        if (addInventoryItemStatus === 'succeeded') {
            alert("Inventory item added successfully!");
            // Reset form fields
            setName('');
            setDescription('');
            setSku('');
            setCategory('');
            setSalesPrice('');
            setIncomeAccount('');
            setExpenseAccount('');
            setCost('');
            setQuantityOnHand('');
            setTaxRate('');
            // return to dashboard or inventory list page
            props.changeMainAreaContent('displayDashboardHome');
        } else if (addInventoryItemStatus === 'failed') {
            alert("Failed to add inventory item: " + addInventoryItemError);
        }
    }, [addInventoryItemStatus, addInventoryItemError]);

  return (
    <div>
        { /*breadcrumbs */ }
        <span><a href='#'>dashboard</a> {">"} <a href="#">create</a> {">"} <a href="#">create inventory item</a> </span>
        
        <h6>CreateInventoryItemForm</h6>
        { /*sub-section */ }
        <p>
            <label>
                <input name="product-service" type="radio" value={'inventory'} checked={selectedProductService === 'inventory'} onChange={onChangeSelectedProductService} />
                <span>Inventory</span>
            </label>
            <span style={{ marginLeft: '25px' }}></span>
            <label>
                <input name="product-service" type="radio" value={'service'} checked={selectedProductService === 'service'} onChange={onChangeSelectedProductService} />
                <span>Service</span>
            </label>
        </p>


        { /*section A */ }
        <div className='row'>
            <p className='s12 center'>section A</p>
            <div className='input-field col s12 m6'>
                <input id="item_name" type="text" className="validate" onChange={e => setName(e.target.value)} />
                <label htmlFor="item_name">Item Name</label>
            </div>
            <div className='input-field col s12 m6'>
                <input id="description" type="text" className="validate" onChange={e => setDescription(e.target.value)} />
                <label htmlFor="description">Description</label>
            </div>
            <div className='input-field col s12 m6'>
                <input id="sku" type="text" className="validate" onChange={e => setSku(e.target.value)} />
                <label htmlFor="sku">SKU</label>
            </div>
            <AddItemCategoryModalForm />
            <div className='input-field col s10 m4'>
                <select id="category"
                value={category}
                onChange={(e) => onChangeCategory(e)}
                >
                    <option value="" disabled defaultValue={''}>Select Categoryy</option>
                    {itemCategories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <label htmlFor="category">Category</label>
                
            </div>
            <div className='col s2 m2'>
                <a href='#' className='btn modal-trigger' data-target='modalAddItemCategory'> <i className='material-icons'>add</i> </a>
            </div>
        </div>

        { /*section B */ }
        <div className='row'>
            <p className='s12 center'>section B</p>
            <div className='input-field col s12 m6'>
                <input id="sales_price" type="text" className="validate" onChange={e => setSalesPrice(e.target.value)} />
                <label htmlFor="sales_price">Sales Price</label>
            </div>
            <AddIncomeAccountModalForm selectedProductService={selectedProductService} />
            <div className='input-field col s10 m4'>
                <select id="income_account"
                value={incomeAccount}
                type="text"
                className='validate'
                onChange={(e) => setIncomeAccount(e.target.value)}
                >
                    <option value="" disabled defaultValue={''}>Select Income A/c</option>
                    {incomeAccounts.map((account) => (
                        <option key={account.id} value={account.id}>{account.name}</option>
                    ))}
                </select>
                <label htmlFor="income_account">Income Account</label>
            </div>
            <div className='col s2 m2'>
            <a href='#' className='btn modal-trigger' data-target='modalAddIncomeAccount'> <i className='material-icons'>add</i> </a>
            </div>
        </div>

        { /*section C */ }
        <div className='row'>
            <p className='s12 center'>section C</p>
            <div className='input-field col s12 m6'>
                <input id="cost" type="text" className="validate" onChange={e => setCost(e.target.value)} />
                <label htmlFor="cost">Cost</label>
            </div>
            <AddExpenseAccountModalForm selectedProductService={selectedProductService} />
            <div className='input-field col s10 m4'>
                <select id="expense_account"
                value={expenseAccount}
                onChange={(e) => setExpenseAccount(e.target.value)}
                >
                    <option value="" disabled defaultValue={''}>Select Expense A/c</option>
                    {expenseAccounts.map((account) => (
                        <option key={account.id} value={account.id}>{account.name}</option>
                    ))}
                </select>
                <label htmlFor="expense_account">Expense Account</label>
            </div>
            <div className='col s2 m2'>
            <a href='#' className='btn modal-trigger ' data-target='modalAddExpenseAccount'> <i className='material-icons'>add</i> </a>
            </div>
                 
            <div className='input-field col s12 m6'>
                <input id="quantity_on_hand" type="number" className="validate" onChange={e => setQuantityOnHand(e.target.value)} />
                <label htmlFor="quantity_on_hand">Quantity on Hand</label>
            </div>
            <div className='input-field col s12 m6'>
                <input id="tax_rate" type="number" className="validate" onChange={e => setTaxRate(e.target.value)} />
                <label htmlFor="tax_rate">Tax Rate</label>
            </div>
        </div>
        { /*footer */ }
        <div className='row'>
            <div className='col s12 center'>
                <button className='btn' onClick={handleAddInventoryItem}>Save</button>
                <button className='btn grey'>Cancel</button>
            </div>
        </div>
    </div>
  )
}
