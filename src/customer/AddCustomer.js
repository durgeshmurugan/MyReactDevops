import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {TextField,Grid} from '@mui/material'
import CustomerService from '../service/CustomerService';

const AddCustomer = () => {

    
    let navigate = useNavigate();

    const[customer, setCustomer] = useState({
        customerName:"",
        customerAddress:"",
        customerPhNo:""
    })

    const {customerName, customerAddress, customerPhNo} = customer;

    const inputChange = (e) =>{
        setCustomer({...customer, [e.target.name]: e.target.value})
    }

    const onSubmit = async(e) =>{
        e.preventDefault();
        await CustomerService.insertCustomer(customer);
        alert("Customer Added Successfully");
        navigate("/customer");
    }

  return (
    <div className='container' id="con2">
            <div className='row '>
                <div className='col-md-6 offset-md-3 border rounded-5 unded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4 '>Add Customer Form</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3' id="tf">
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullwidth
                                    id="outlined-textarea"
                                    label="Name"
                                    placeholder="Enter the Name"
                                    onChange={(e) => inputChange(e)}
                                    required="required"
                                    name="customerName"
                                    value={customerName}
                                /></Grid>
                        </div>
                        <div className='mb-3' id="tf">
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullwidth
                                    id="outlined-textarea"
                                    label="Address"
                                    placeholder="Enter the Address"
                                    onChange={(e) => inputChange(e)}
                                    required="required"
                                    name="customerAddress"
                                    value={customerAddress}
                                /></Grid>
                        </div>
                        <div className='mb-3 ' id="tf">
                            <Grid item xs={12} sm={6}>

                                <TextField
                                    fullwidth
                                    id="outlined-textarea"
                                    label="Phone Number"
                                    placeholder="Enter the phone Number"
                                    onChange={(e) => inputChange(e)}
                                    required="required"
                                    type="number"
                                    name="customerPhNo"
                                    value={customerPhNo}
                                /></Grid>
                        </div>
                        <button type='submit' className='btn btn-outline-primary' id="btn">Submit</button>
                        <Link to="/customer" className='btn btn-outline-danger mx-2' id="btn">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default AddCustomer
