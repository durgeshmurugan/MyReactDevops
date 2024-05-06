import React, { useEffect, useState } from 'react'
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import BookService from '../service/BookService';

const BookHome = () => {

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
        alert("book Deleted Successfully");
        window.location.reload();
        loadBook();
    }

    return (
        <div>
            <Link className='btn btn-outline-secondary mt-5 mb-3 ' to={'/addbook'}>Add Book</Link>
            <table className="table table-striped table-info table-hover shadow" id="table3">
                <thead className='text-center'>
                    <tr className='text-center'>
                        <th scope='col'>S.NO</th>
                        <th scope="col">Book ID</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Book Author</th>
                        <th scope="col">Book Department</th>
                        <th scope="col">Book Price</th>
                        <th colSpan={3}>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        book
                            .map((book, index) => (
                                <tr>
                                    <th scope='row' key={index}>{index + 1}</th>
                                    <td>{book.bookId} </td>
                                    <td>{book.bookName} </td>
                                    <td>{book.bookAuthor} </td>
                                    <td>{book.bookDepartment} </td>
                                    <td>{book.bookPrice} </td>
                                    <td className='mx-2'>
                                        <Link className='btn btn-info ' to={`/viewbook/${book.bookId}`} ><FaEye/></Link>
                                    </td>
                                    <td className='mx-2'>
                                        <Link className='btn btn-warning ' to={`/editbook/${book.bookId}`} ><FaEdit/> </Link>

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

export default BookHome
