import React from "react";
import axios from 'axios';

const GetAllBook = "http://localhost:0705/getAllBooks";
const GetBookById = "http://localhost:0705/getBook/";
const  AddNewBook = "http://localhost:0705/insertBook";
const  UpdateBook = "http://localhost:0705/updateBook/";
const  DeleteBook ="http://localhost:0705/deleteBook/" ;
const GetAllId = "http://localhost:0705/getIdList";


class BookService extends React.Component {

    getAllBook(){
        return axios.get(GetAllBook);
    }

    getBookById(bookId){
        return axios.get(GetBookById + bookId);
    }

    insertBook(book){
        return axios.post(AddNewBook, book);
    }

    updateBook(book){
        return axios.put(UpdateBook+book.bookId, book)
    }

    deleteBook(bookId){
       return   axios.delete(DeleteBook + bookId )
    }

    getIdList(){
        return axios.get(GetAllId);
    }

}
export default new BookService();
