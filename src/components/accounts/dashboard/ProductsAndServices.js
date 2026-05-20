import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAndServices } from '../../../store/slice/fetchProductsAndServicesSlice';

export default function ProductsAndServices() {
  const productsAndServices = useSelector(state => state.fetchProductsAndServices.productsAndServices);
  const dispatch = useDispatch();
  const organisationId = useSelector(state => state.fetchOrganisation.organisation.id); // Assuming you have the organisation ID in your state



    React.useEffect(() => {
        // Fetch products and services when the component mounts
        dispatch(fetchProductsAndServices(organisationId)); // You need to pass the organisation ID here
    }, [dispatch, organisationId]);

  return (
    <div>
        { /*breadcrumbs */ }
        <span><a href='#'>dashboard</a> {">"} <a href="#">Products And Services</a> </span>  
        <h6>Products And Services</h6>

        {/* Inventory table */}
        <table className='striped'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Sales Price</th>
                    <th>Cost Price</th>
                    <th>Quantity</th>
                    
                </tr>
            </thead>
            <tbody>
                {/* Inventory items will be mapped here */}
                {productsAndServices.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.sku}</td>
                        <td>{item.type}</td>
                        <td>{item.description}</td>
                        <td>{item.sales_price}</td>
                        <td>{item.cost}</td>
                        <td>{item.quantity_on_hand}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
