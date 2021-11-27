import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";


function CustomerDelete(){
    const [customer,setCustomer] = useState([])
    const {id} = useParams()


    useEffect(()=>{
        console.log("use effect hook executed");
        
        axios
        .delete(`http://localhost:3002/customer/${id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setCustomer(response.data)
            window.location='/visitcustomerdetails';
        })
        
    },[])

    return(<>
    </>
    );
}
export default CustomerDelete;