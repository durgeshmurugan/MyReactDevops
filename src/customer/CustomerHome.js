import React, { useEffect, useState } from 'react'
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import CustomerService from '../service/CustomerService';

const CustomerHome = () => {

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        loadCustomer();
    }, []);

    const loadCustomer = async () => {
        const result = await CustomerService.getAllCustomer();
        setCustomer(result.data);
    }

    const doDelete = async (customerId) => {
        await CustomerService.deleteCustomer(customerId);
        alert("Customer Deleted Successfully");
        window.location.reload();
        loadCustomer();
    }

    return (
        <div>
            <Link className='btn btn-outline-secondary mt-5 mb-3' to={'/addcustomer'}>Add Customer</Link>
            <table className="table table-striped table-info table-hover shadow" id="table2">
                <thead className='text-center'>
                    <tr className='text-center'>
                        <th scope='col'>S.NO</th>
                        <th scope="col">Customer ID</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Customer Address</th>
                        <th scope="col">Customer Phone Number</th>
                        <th colSpan={3}>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        customer
                            .map((customer, index) => (
                                <tr>
                                    <th scope='row' key={index}>{index + 1}</th>
                                    <td>{customer.customerId} </td>
                                    <td>{customer.customerName} </td>
                                    <td>{customer.customerAddress} </td>
                                    <td>{customer.customerPhNo} </td>
                                    <td className='mx-2'>
                                        <Link className='btn btn-info ' to={`/viewcustomer/${customer.customerId}`} ><FaEye/></Link>
                                    </td>
                                    <td className='mx-2'>
                                        <Link className='btn btn-warning ' to={`/editcustomer/${customer.customerId}`} ><FaEdit/> </Link>

                                    </td>
                                    <td className='mx-2'>
                                        <button className='btn btn-danger' onClick={() => doDelete(customer.customerId)} ><FaTrashAlt/></button>

                                    </td>
                                </tr>
                            ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default CustomerHome
