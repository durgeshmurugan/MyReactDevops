import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import CustomerHome from './customer/CustomerHome';
import BookHome from './book/BookHome';
import EditPage from './pages/EditPage';
import AddCustomer from './customer/AddCustomer';
import AddBook from './book/AddBook';
import ViewPage from './pages/ViewPage';
import ViewCustomer from './customer/ViewCustomer';
import ViewBook from './book/ViewBook';
import EditCustomer from './customer/EditCustomer';
import Editbook from './book/EditBook';


function App() {
  return (
    <div className="container ">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/back' element={<Home/>}>Home</Route>
          <Route exact path='/customer' element={<CustomerHome/>}>Customer Home</Route>
          <Route exact path='/book' element={<BookHome/>}>Customer Home</Route>
          <Route exact path='/editpage/:bookId' element={<EditPage/>}>Edit Page</Route>
          <Route exact path='/viewpage/:bookId' element={<ViewPage/>}>View Page</Route>
          <Route exact path='/addcustomer' element={<AddCustomer/>}>Add Customer</Route>
          <Route exact path='/addbook' element={<AddBook/>}>Add Book</Route>
          <Route exact path='/viewcustomer/:customerId' element={<ViewCustomer/>}></Route>
          <Route exact path='/viewbook/:bookId' element={<ViewBook/>}></Route>
          <Route exact path='/editcustomer/:customerId' element={<EditCustomer/>}></Route>
          <Route exact path='/editbook/:bookId' element={<Editbook/>}></Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
