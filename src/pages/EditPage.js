import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import BookService from '../service/BookService';

const EditPage = () => {

    let navigate = useNavigate();

    const {bookId} = useParams();

    const [book, setBook] = useState({
        bookName:"",
        bookAuthor:"",
        bookDepartment:"",
        bookprice:"",
        customer:{
            customerId:0,
            customerName:"",
            customerAddress:"",
            customerPhNo:""
        }
    })

    const updateChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value, })
    };

    useEffect(()=>{
        loadDelivery();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await BookService.updateBook(book);
        alert("Book Details Updated Successfully");
        navigate("/back");
    };


    const loadDelivery = async () => {
        const result = await BookService.getBookById(bookId)
        setBook(result.data);
    };


  return (
    <div className='container' id="con2">
            <div className='row '>
                <div className='col-md-6 offset-md-3 bBook rounded  p-4 mt-2 shadow '>
                    <h2 className='text-center m-4 '>Edit Form</h2>
                    <form onSubmit={(e)=> onSubmit(e)}>
                    <div className='mb-3 '>
                            <label className='form-label '>Book ID : </label>
                            <input type='text' 
                                readOnly="readOnly" 
                                className='form-control ' 
                                placeholder="Enter the Book ID" 
                                name="bookId" 
                                value={book.bookId} ></input>
                        </div>
                        <div className='mb-3 '>
                            <label className='form-label '>Book Name : </label>
                            <input type='text' 
                                className='form-control ' 
                                placeholder="Enter the Book Name" 
                                name="bookName" 
                                value={book.bookName}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label  className='form-label '>Book Date : </label>
                            <input type='text' 
                                className='form-control ' 
                                placeholder="Enter the Book Author" 
                                name="bookAuthor" 
                                value={book.bookAuthor}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label  className='form-label '>Book Date : </label>
                            <input type='text' 
                                className='form-control ' 
                                placeholder="Enter the Book Department" 
                                name="bookDepartment" 
                                value={book.bookDepartment}
                                onChange={(e) => updateChange(e)}></input>
                        </div><div className='mb-3 '>
                            <label  className='form-label '>Book Price : </label>
                            <input type='text' 
                                className='form-control ' 
                                placeholder="Enter the Book Date" 
                                name="bookPrice" 
                                value={book.bookPrice}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor='Salary' className='form-label '>Customer ID : </label>
                            <input type='number' 
                                className='form-control ' 
                                placeholder="Enter the Customer Id" 
                                name="customerId" value={book.customer.customerId}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor='Salary' className='form-label '>Customer Name : </label>
                            <input type='text' 
                                className='form-control ' 
                                placeholder="Enter the Customer Name" 
                                name="customerName" 
                                value={book.customer.customerName}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor='Salary' className='form-label '>Customer Address : </label>
                            <input type='text' 
                                className='form-control ' 
                                placeholder="Enter the Customer Address" 
                                name="customerAddress" 
                                value={book.customer.customerAddress}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor='Salary' className='form-label '>Customer Phone Number : </label>
                            <input type='number' 
                                className='form-control ' 
                                placeholder="Enter the Customer Phone Number" 
                                name="customerPhNo" value={book.customer.customerPhNo}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <button type='submit' className='btn btn-outline-primary' id="btn">Submit</button>
                        <Link to="/back" className='btn btn-outline-danger mx-2' id="btn">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default EditPage
