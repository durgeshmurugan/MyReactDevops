import React, { useEffect, useState } from 'react'
import {Link, useParams} from  "react-router-dom";
import CustomerService from '../service/CustomerService';

const ViewCustomer = () => {

    const [customer, setCustomer] = useState({

            customerId:"",
            customerName:"",
            customerAddress:"",
            customerPhNo:""

    });

    // const {orderName, orderDate, customer} = customer;

    const {customerId} = useParams();

    useEffect(() => {
        getCustomerDetails();
    })
    
    const getCustomerDetails= async () => {
        const result = await CustomerService.getCustomerById(customerId);
        setCustomer(result.data);
    }

    return (
        <div className='container text-center align-content-center'>
            <div className='row '>
                <div className='col-md-6 offset-md-3 border rounded  p-4 mt-2 shadow '>
                    <h2 className='text-center m-4 '>View Customer Details</h2>
                    <div className='card'>
                        <table>

                            <div className='card-card-header text-center bg-primary text-white '>
                                Details of Customer ID : {customer.customerId}

                                <ul className='list-group list-group-flush'>
                                    <tr>
                                        <li className='list-group-item'>
                                            <td><b>Customer ID : </b></td>
                                            <td>{customer.customerId}</td>
                                        </li>
                                    </tr>
                                    <tr>
                                        <li className='list-group-item'>
                                            <td><b>Customer Name : </b></td>
                                            <td>{customer.customerName}</td>
                                        </li>
                                    </tr><tr>
                                        <li className='list-group-item'>
                                            <td><b>Customer Address : </b></td>
                                            <td>{customer.customerAddress}</td>
                                        </li>
                                    </tr><tr>
                                        <li className='list-group-item'>
                                            <td><b>Csutomer Phone Number : </b></td>
                                            <td>{customer.customerPhNo}</td>
                                        </li>
                                    </tr>
                                </ul>

                            </div>
                        </table>

                    </div>
                    <Link className='btn btn-primary my-2 ' to={"/customer"}>Back</Link>
                </div>
            </div>
        </div>
    )
}

export default ViewCustomer
