import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {TextField,Grid} from '@mui/material'
import BookService from '../service/BookService';

const AddBook = () => {

    let navigate = useNavigate();

    const[book, setBook] = useState({
        bookName:"",
        bookAuthor:"",
        bookDepartment:"",
        bookPrice:"",
        customer:{
            customerId:""
        }
    })

    const inputChange = (e) =>{
        if (e.target.name === "customerId") {
            setBook({ ...book, customer: { customerId: e.target.value } });
          } else {
            setBook({...book, [e.target.name]: e.target.value})
        }
    }

    const onSubmit = async(e) =>{
        e.preventDefault();
        await BookService.insertBook(book);
        alert("Book Added Successfully");
        navigate("/book");
    }

    const [show, setShow] = useState([]);
 
  const loadDetails = async () => {
  //e.preventDefault();
    await BookService.getIdList()
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err));
  };
 
  useEffect(() => {
    loadDetails();
  }, []);

  return (
    <div className='container' id="con2">
            <div className='row '>
                <div className='col-md-4 offset-md-3 border rounded-5 unded p-4 mt-2 shadow' style={{display: 'flex', justifyContent: 'center', flexDirection: 'row',  }}>
                    
                    <form onSubmit={(e) => onSubmit(e)}>
                    <h2 className='text-center m-4 '>Add Book Form</h2>
                        <div className='mb-6' id="tf">
                            
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullwidth
                                    id="outlined-textarea"
                                    label="Name"
                                    placeholder="Enter the Book Name"
                                    onChange={(e) => inputChange(e)}
                                    required="required"
                                    name="bookName"
                                    value={book.bookName}
                                /></Grid>
                        </div>
                        <div className='mb-3' id="tf">
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullwidth
                                    id="outlined-textarea"
                                    label=" Book Author"
                                    placeholder="Enter the Book Author"
                                    onChange={(e) => inputChange(e)}
                                    required="required"
                                    name="bookAuthor"
                                    value={book.bookAuthor}
                                /></Grid>
                        </div>
                        <div className='mb-3 ' id="tf">
                            <Grid item xs={12} sm={6}>

                                <TextField
                                    fullwidth
                                    id="outlined-textarea"
                                    label="Department"
                                    placeholder="Enter the Book Department"
                                    onChange={(e) => inputChange(e)}
                                    required="required"
                                    type="text"
                                    name="bookDepartment"
                                    value={book.bookDepartment}
                                /></Grid>
                        </div>
                        <div className='mb-3 ' id="tf">
                            <Grid item xs={12} sm={6}>

                                <TextField
                                    fullwidth
                                    id="outlined-textarea"
                                    label="Book Price"
                                    placeholder="Enter the price"
                                    onChange={(e) => inputChange(e)}
                                    required="required"
                                    type="number"
                                    name="bookPrice"
                                    value={book.bookPrice}
                                /></Grid>
                        </div>
                        {/* <div className='mb-3 ' id="tf">
                            <Grid item xs={12} sm={6}>
                                    <select
                                    className='col-4 pt-2 pb-2 rounded-2'
                                    label="Customer borrowed"
                                    placeholder="Enter the Customer ID"
                                    onChange={(e) => inputChange(e)}
                                    required="required"
                                    type="number"
                                    name="customerId"
                                    value={book.customer.customerId}>
                                     {show.map((customerId)=>(
                                        <option key={customerId}>{customerId}</option>
                                    ))}
                                        
                                    </select>
                                </Grid>
                        </div> */}
                        <button type='submit' className='btn btn-outline-primary' id="btn">Submit</button>
                        <Link to="/book" className='btn btn-outline-danger mx-2' id="btn">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default AddBook
