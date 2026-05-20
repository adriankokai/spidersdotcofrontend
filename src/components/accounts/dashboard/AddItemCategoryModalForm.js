import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addItemCategory } from '../../../store/slice/addItemCategorySlice';
import { fetchItemCategories } from '../../../store/slice/fetchItemCategoriesSlice';

export default function AddItemCategoryModalForm() {
    const [categoryName, setCategoryName] = React.useState('');
    const [categoryDescription, setCategoryDescription] = React.useState('');
    const dispatch = useDispatch();

    const addItemCategoryStatus = useSelector((state) => state.addItemCategory.status);
    const organisationId = useSelector(state => state.fetchOrganisation.organisation.id);
    
    React.useEffect(() => {
        // Initialize the modal
        const modalElems = document.querySelectorAll('.modal');
        M.Modal.init(modalElems);
    }, []);

    const onChangeCategoryName = (e) => {
        setCategoryName(e.target.value);
    };

    const onChangeCategoryDescription = (e) => {
        setCategoryDescription(e.target.value);
    }; 

     const handleAddCategory = () => {
        // Logic to add the new category goes here
        console.log("Adding category:", { categoryName, categoryDescription });

        dispatch(addItemCategory({ organisation: organisationId, name: categoryName, description: categoryDescription }));
    }

    React.useEffect(() => {
        if (addItemCategoryStatus === 'succeeded') {
            // Close the modal after successful addition
            const modalElem = document.getElementById('modalAddItemCategory');
            const modalInstance = M.Modal.getInstance(modalElem);
            modalInstance.close();

            //alert user
            alert("Category" + categoryName + " added successfully!");

            // Optionally, you can also dispatch an action to refresh the list of categories in the parent component
            dispatch(fetchItemCategories(organisationId));

            // Optionally, reset the form fields
            setCategoryName('');
            setCategoryDescription('');
        };
    }, [addItemCategoryStatus]);

  return (
    <div id="modalAddItemCategory" className="modal">
        <div className="modal-content">
            <h6>Add Item Category</h6>
            <form>
                <div class="input-field">
                    <input id="categoryName" type="text" class="validate" onChange={e => onChangeCategoryName(e)} />
                    <label for="categoryName">Category Name</label>
                </div>
                <div class="input-field">
                    <input id="categoryDescription" type="text" class="validate" onChange={e => onChangeCategoryDescription(e)} />
                    <label for="categoryDescription">Category Description</label>
                </div>
            </form>
        </div>

        <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
            <a href="#!" className=" waves-effect waves-green btn-flat" onClick={() => handleAddCategory()}>
                {addItemCategoryStatus === 'loading' ? 'Adding...' : 'Add Category'}
            </a>
        </div>
    </div>
  )
}
