import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import BookService from '../service/BookService';

const Editbook = () => {

    let navigate = useNavigate();

    const {bookId} = useParams();

    const [book, setBook] = useState({
            bookId:0,
            bookName:"",
            bookAuthor:"",
            bookDepartment:"",
            bookPrice:"",
            customer:{
                customerId:0
            }

    })

    const updateChange = (e) => {
        if (e.target.name === "customerId") {
            setBook({ ...book, customer: { customerId: e.target.value } });
          } else {
            setBook({ ...book, [e.target.name]: e.target.value, })
        }
    };

    useEffect(()=>{
        loadBook();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await BookService.updateBook(book);
        alert("Book Details Updated Successfully");
        navigate("/book");
    };


    const loadBook = async () => {
        const result = await BookService.getBookById(bookId)
        setBook(result.data);
    };

    const [show, setShow] = useState([]);

    useEffect(() =>{
        loadId();
    })

    const loadId = async () => {
        const id = await BookService.getIdList()
        setShow(id.data);
    }

  return (
    <div className='container' id="con2">
            <div className='row '>
                <div className='col-md-6 offset-md-3 bBook rounded  p-4 mt-2 shadow '>
                    <h2 className='text-center m-4 '>Edit Form</h2>
                    <form onSubmit={(e)=> onSubmit(e)}>
                        <div className='mb-3 '>
                            <label htmlFor='Salary' className='form-label '>Book ID : </label>
                            <input type='number' 
                                readOnly="readOnly"
                                className='form-control ' 
                                placeholder="Enter the Book Id" 
                                name="bookId" value={book.bookId}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label className='form-label '>Book Name : </label>
                            <input type='text' 
                                className='form-control ' 
                                placeholder="Enter the book Name" 
                                name="bookName" 
                                value={book.bookName}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label className='form-label '>Book Author : </label>
                            <input type='text' 
                                className='form-control ' 
                                placeholder="Enter the Book Author" 
                                name="bookAddress" 
                                value={book.bookAuthor}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label className='form-label '>Book Department : </label>
                            <input type='text' 
                                className='form-control ' 
                                placeholder="Enter the Book Department" 
                                name="bookPhNo" value={book.bookDepartment}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label className='form-label '>Book Price : </label>
                            <input type='number' 
                                className='form-control ' 
                                placeholder="Enter the Book Price" 
                                name="bookPhNo" value={book.bookPrice}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label className='form-label '>Customer ID : </label>
                            <select type='number' 
                                className='form-control ' 
                                placeholder="Enter the Customer ID" 
                                name="customerId" value={book.customer.customerId}
                                onChange={(e) => updateChange(e)}>
                                    {show.map((customerId)=>(
                                        <option key={customerId}>{customerId}</option>
                                    ))}
                                </select>
                        </div>
                        <button type='submit' className='btn btn-outline-primary' id="btn">Submit</button>
                        <Link to="/book" className='btn btn-outline-danger mx-2' id="btn">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Editbook
