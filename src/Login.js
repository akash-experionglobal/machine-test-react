import {useState} from 'react';
import axios from 'axios';

import Header from './Header';

function LoginForm(){
    localStorage.clear(); //Clears the local storage to store the accesstoken
    return (
        <>
        <Header/>
        <h1 style={{textAlign:'center', marginTop:15}}>Login</h1>
        <MyForm/>
        </>
    );
}

function MyForm(props){
    //initialize useState with empty{}
    const [inputs, setInputs] = useState({});

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}))
    };

    function handleSubmit(event){
        event.preventDefault();
        console.log(inputs);
        //Add the api URL for login
        axios.post(`http://localhost:4000/login`, inputs)
            .then(response => {
                //Store the accessToken in localStorage as 'myToken'
                localStorage.setItem('mytoken', response.data.accessToken)
                //Then automatically redirect to stafflist after login
                window.location = '/details'             
            })
            .catch(error =>{
                //If any error occured, clear localStorage
                localStorage.clear();
                if(error.response){
                    alert(error.response.data)  //=> response payload
                }
            })
    };

    return(
        <>
        <center>
        <form onSubmit = {handleSubmit} style={{marginTop:150}}>
            <table>
                <tbody>
                <tr>
                    <td>
                    <label>User Id :</label>
                    </td>
                    <td>
                    <input type = "text" name = "text"
                    value = {inputs.text || ''} onChange = {handleChange} 
                    required></input>
                    </td>
                </tr>

                <tr>
                    <td>
                    <lable>Password :</lable>
                    </td>
                    <td>
                    <input type = "password" name = "password"
                    value = {inputs.password || ''} onChange = {handleChange}
                    required></input>
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                    <input type = 'submit' id = 'edit'></input> &nbsp;
                    <input type = 'button' id = 'delete' value = 'Cancel' style={{marginLeft:50}}></input>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
        </center>
        </>
    );

};

export default LoginForm;