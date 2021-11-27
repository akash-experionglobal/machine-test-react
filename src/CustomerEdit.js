import { useState ,useEffect} from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

import Header from './Header LogOut'

function CustomerEdit() {
    const {id} =useParams()
    return (<div>
        <Header/>
        <MyForm id={id}/>

    </div>);
}
function MyForm(props) {
    const[inputs,setInputs] = useState({})

    useEffect(()=>{
        axios
        .get(`http://localhost:3002/customer/${props.id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setInputs(response.data)
        })
        
    },[])

    function handleChange(event){
        const name = event.target.name ;
        const value = event.target.value;

        setInputs(values =>({...values, [name]:value}))

    }
    function handleSubmit(event){
        event.preventDefault();

        console.log(inputs);

        axios
        .put(`http://localhost:3002/customer/${props.id}`,inputs)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            alert("The user details were updated");
        })
    }
    return (<div>
        <h1 style={{textAlign:'center'}}>Edit Resource</h1>
        <form onSubmit={handleSubmit}>
        <div>
                <label style={{ marginLeft: 500, fontSize: 18 }}>Customer Name :</label>
                <input style={{marginLeft:14, marginBottom:5}} type="text" name="cust_name" value={inputs.cust_name || ""} onChange={handleChange} required />
            </div>
            <div>
                <label style={{ marginLeft: 500, fontSize: 18 }}>Contact Person :</label>
                <input style={{marginLeft:22, marginBottom:5}}  type="text" name="contact_person"  value={inputs.contact_person || ""} onChange={handleChange} required />
            </div>
            <div>
                <label style={{ marginLeft: 500, fontSize: 18 }}>Contact Number :</label>
                <input style={{marginLeft:10, marginBottom:5}} type="text" name="contact_number"  value={inputs.contact_number || ""} onChange={handleChange} required />
            </div>
            <div>
                <label style={{ marginLeft: 500, fontSize: 18 }}>InterestProduct :</label>
                <input style={{marginLeft:20, marginBottom:5}}  type="text" name="interest_product"  value={inputs.interest_product || ""} onChange={handleChange} required />
            </div>
            <div>
                <label style={{ marginLeft: 500, fontSize: 18 }}>VisitSubject :</label>
                <input style={{marginLeft:50, marginBottom:5}}  type="text" name="visit_subject"  value={inputs.visit_subject || ""} onChange={handleChange} required />
            </div>
            <div>
                <label style={{ marginLeft: 500, fontSize: 18 }}>Description :</label>
                <input style={{marginLeft:52, marginBottom:5}}  type='text' name="description"  value={inputs.description  || ""} onChange={handleChange}  required />
            </div>
            <div>
                <label style={{ marginLeft: 500, fontSize: 18 }}>VisitDatetime   :</label>
                <input style={{marginLeft:36, marginBottom:5}}  type="text" name="visit_datetime"  value={inputs.visit_datetime || ""} onChange={handleChange} required />
            </div>
            <div>
                <label style={{ marginLeft: 500, fontSize: 18 }}>Is-Disabled  :</label>
                <input style={{marginLeft:54, marginBottom:5}}  type="text" name="is_disabled"  value={inputs.is_disabled || ""} onChange={handleChange} required />
            </div>
            <div>
                <label style={{ marginLeft: 500, fontSize: 18 }}>Is-Deleted  :</label>
                <input style={{marginLeft:60, marginBottom:5}}  type="text" name="is_deleted"  value={inputs.is_deleted || ""} onChange={handleChange} required />
            </div>
            <div>
                <label style={{ marginLeft: 500, fontSize: 18 }}>EmpId  :</label>
                <input style={{marginLeft:92, marginBottom:5}}  type="text" name="emp_id"  value={inputs.emp_id || ""} onChange={handleChange} required />
            </div >
            <Button type="submit" style={{ marginLeft: 500, fontSize: 18, width:340}} >Update</Button>
        </form>
    </div>);
}

export default CustomerEdit;