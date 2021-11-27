import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";

import Customer from './Customer';
import Header from './Header LogOut';

function VisitCustomer(){
    const[customers, setCustomers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3002/customer')
        .then(response=>{
            console.log('promise fulfilled');
            console.log(response);
            setCustomers(response.data);
        })
    }, []);

    return(

        <div>
            <Header/>
            <Nav.Link style={{float:'right'}}><Link to="/" style={{ textDecoration: "none", fontSize:18, float:'right'}} ><Button style={{float:'right'}} variant="primary">LogOut</Button></Link></Nav.Link>
            <h2 style={{textAlign:'center'}}>Customer Lists</h2>
            <ul>
                {customers.map(customer=>
                    <li key={customer.id}>
                        <Customer details = {customer}/>
                        </li>
                    )}
            </ul>
        </div>
    )
}

export default VisitCustomer;