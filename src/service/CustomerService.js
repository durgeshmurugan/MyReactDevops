import React from "react";
import axios from "axios";

const GetAllCustomer = "http://localhost:0705/getAllCustomer";
const GetCustomerById = "http://localhost:0705/getCustomer/";
const AddNewCustomer = "http://localhost:0705/insertCustomer";
const UpdateCustomer = "http://localhost:0705/updateCustomer/";
const DeleteCustomer = "http://localhost:0705/deleteCustomer/";

class  CustomerService extends React.Component {

    getAllCustomer(){
        return axios.get(GetAllCustomer);
    }

    getCustomerById(customerId){
        return axios.get(GetCustomerById + customerId);
    }

    insertCustomer(customer){
        return axios.post(AddNewCustomer, customer);
    }

    updateCustomer(customer){
        return axios.put(UpdateCustomer+ customer.customerId, customer)
    }

    deleteCustomer(customerId){
        return axios.delete(DeleteCustomer + customerId)
    }

    

}
export default new CustomerService();