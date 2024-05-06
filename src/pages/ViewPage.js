import React, { useEffect, useState } from 'react'
import {Link, useParams} from  "react-router-dom";
import BookService from '../service/BookService';

const ViewPage = () => {

    const [book, setBook] = useState({
        bookName:"",
        BookAuthor:"",
        bookDepartment:"",
        bookPrice:"",
        customer:{
            customerId:"",
            customerName:"",
            customerAddress:"",
            customerPhNo:""
        }
    });

    // const {orderName, orderDate, customer} = book;

    const {bookId} = useParams();

    useEffect(() => {
        getBookDetails();
    })
    
    const getBookDetails= async () => {
        const result = await BookService.getBookById(bookId);
        setBook(result.data);
    }

    return (
        <div className='container text-center align-content-center'>
            <div className='row '>
                <div className='col-md-6 offset-md-3 border rounded  p-4 mt-2 shadow '>
                    <h2 className='text-center m-4 '>View Book Details</h2>
                    <div className='card'>
                        <table>

                            <div className='card-card-header text-center bg-primary text-white '>
                                Details of Book ID : {book.bookId}

                                <ul className='list-group list-group-flush'>
                                    <tr>
                                        <li className='list-group-item'>
                                            <td><b>Name : </b></td>
                                            <td>{book.bookName}</td>
                                        </li>
                                    </tr>
                                    <tr>
                                        <li className='list-group-item'>
                                            <td><b>Author : </b></td>
                                            <td>{book.BookAuthor}</td>
                                        </li>
                                    </tr>
                                    <tr>
                                        <li className='list-group-item'>
                                            <td><b>Department : </b></td>
                                            <td>{book.bookDepartment}</td>
                                        </li>
                                    </tr>
                                    <tr>
                                        <li className='list-group-item'>
                                            <td><b>Price : </b></td>
                                            <td>{book.bookPrice}</td>
                                        </li>
                                    </tr>
                                    <tr>
                                        <li className='list-group-item'>
                                            <td><b>Customer ID : </b></td>
                                            <td>{book.customer.customerId}</td>
                                        </li>
                                    </tr>
                                    <tr>
                                        <li className='list-group-item'>
                                            <td><b>Customer Name : </b></td>
                                            <td>{book.customer.customerName}</td>
                                        </li>
                                    </tr><tr>
                                        <li className='list-group-item'>
                                            <td><b>Customer Address : </b></td>
                                            <td>{book.customer.customerAddress}</td>
                                        </li>
                                    </tr><tr>
                                        <li className='list-group-item'>
                                            <td><b>Csutomer Phone Number : </b></td>
                                            <td>{book.customer.customerPhNo}</td>
                                        </li>
                                    </tr>
                                </ul>

                            </div>
                        </table>

                    </div>
                    <Link className='btn btn-primary my-2 ' to={"/back"}>Back</Link>
                </div>
            </div>
        </div>
    )
}

export default ViewPage
