import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CustomerService from '../service/CustomerService';

const EditCustomer = () => {

    let navigate = useNavigate();

    const {customerId} = useParams();

    const [customer, setCustomer] = useState({
            customerId:0,
            customerName:"",
            customerAddress:"",
            customerPhNo:""

    })

    const updateChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value, })
    };

    useEffect(()=>{
        loadCustomer();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await CustomerService.updateCustomer(customer);
        alert("Customer Details Updated Successfully");
        navigate("/customer");
    };


    const loadCustomer = async () => {
        const result = await CustomerService.getCustomerById(customerId)
        setCustomer(result.data);
    };


  return (
    <div className='container' id="con2">
            <div className='row '>
                <div className='col-md-6 offset-md-3 bBook rounded  p-4 mt-2 shadow '>
                    <h2 className='text-center m-4 '>Edit Form</h2>
                    <form onSubmit={(e)=> onSubmit(e)}>
                        <div className='mb-3 '>
                            <label htmlFor='Salary' className='form-label '>Customer ID : </label>
                            <input type='number' 
                                readOnly="readOnly"
                                className='form-control ' 
                                placeholder="Enter the Customer Id" 
                                name="customerId" value={customer.customerId}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor='Salary' className='form-label '>Customer Name : </label>
                            <input type='text' 
                                className='form-control ' 
                                placeholder="Enter the Customer Name" 
                                name="customerName" 
                                value={customer.customerName}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor='Salary' className='form-label '>Customer Address : </label>
                            <input type='text' 
                                className='form-control ' 
                                placeholder="Enter the Customer Address" 
                                name="customerAddress" 
                                value={customer.customerAddress}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor='Salary' className='form-label '>Customer Phone Number : </label>
                            <input type='number' 
                                className='form-control ' 
                                placeholder="Enter the Customer Phone Number" 
                                name="customerPhNo" value={customer.customerPhNo}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <button type='submit' className='btn btn-outline-primary' id="btn">Submit</button>
                        <Link to="/customer" className='btn btn-outline-danger mx-2' id="btn">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default EditCustomer
