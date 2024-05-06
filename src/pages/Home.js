import React, { useEffect, useState } from 'react'
import BookService from '../service/BookService';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Home = () => {

    const [book, setBook] = useState([]);

    useEffect(() => {
        loadBook();
    }, []);

    const loadBook = async () => {
        const result = await BookService.getAllBook();
        setBook(result.data);
    }

    const doDelete = async (bookId) => {
        await BookService.deleteBook(bookId);
        alert("Book Deleted Successfully");
        window.location.reload();
        loadBook();
    }

    return (
        <div>
            <table className="table table-striped table-info table-hover shadow" id="table1">
                <thead className='text-center'>
                    <tr className='text-center'>
                        <th scope='col'>S.No</th>
                        <th scope="col">Book ID</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Book Author</th>
                        <th scope="col">Book Department</th>
                        <th scope="col">Book Price</th>
                        <th scope="col">Customer ID</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Customer Address</th>
                        <th scope="col">Customer Phone Number</th>
                        <th colSpan={3}>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        book
                            .map((book, index) => (
                                <tr>
                                    <th scope='row' key={index}>{index + 1}</th>
                                    <td>{book.bookId}</td>
                                    <td>{book.bookName} </td>
                                    <td>{book.bookAuthor} </td>
                                    <td>{book.bookDepartment} </td>
                                    <td>{book.bookPrice} </td>
                                    <td>{book.customer.customerId} </td>
                                    <td>{book.customer.customerName} </td>
                                    <td>{book.customer.customerAddress} </td>
                                    <td>{book.customer.customerPhNo} </td>
                                    <td className='mx-2'>
                                        <Link className='btn btn-info ' to={`/viewpage/${book.bookId}`} ><FaEye/></Link>
                                    </td>
                                    <td className='mx-2'>
                                        <Link className='btn btn-warning ' to={`/editpage/${book.bookId}`} ><FaEdit/> </Link>

                                    </td>
                                    <td className='mx-2'>
                                        <button className='btn btn-danger' onClick={() => doDelete(book.bookId)} ><FaTrashAlt/></button>

                                    </td>
                                </tr>
                            ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Home
