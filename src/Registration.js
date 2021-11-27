import { useState } from "react";
import axios from "axios";

import Header from "./Header";

function RegistrationForm() {
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);

    axios
      .post("http://localhost:3002/customer", inputs) //post data to api
      .then((response) => {
        console.log("Promise fullfilled");
        console.log(response);
        window.location = "/customerlist";
        //On posting the user is redirected to StaffList
      });
  }

  return (
    <>
      <Header />
      <h1 style={{textAlign:'center', marginLeft:20, marginTop:15}}>Register</h1>
      <center>
        <form onSubmit={handleSubmit} style={{marginTop:20}}>
          <table>
            <tbody>
            <tr>
                <td>
                  <label>Emp_id :</label>
                </td>
                <td>
                  <input
                    type="number"
                    name="id"
                    value={inputs.id || ""}
                    onChange={handleChange}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email :</label>
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                    required
                  ></input>
                </td>
              </tr>

              <tr>
                <td>
                  <lable>Password :</lable>
                </td>
                <td>
                  <input
                    type="password"
                    name="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                    required
                  ></input>
                </td>
              </tr>

              <tr>
                <td>
                  <lable>First Name :</lable>
                </td>
                <td>
                  <input
                    type="text"
                    name="first_name"
                    value={inputs.first_name || ""}
                    onChange={handleChange}
                    required
                  ></input>
                </td>
              </tr>

              <tr>
                <td>
                  <lable>Last Name :</lable>
                </td>
                <td>
                  <input
                    type="text"
                    name="last_name"
                    value={inputs.last_name || ""}
                    onChange={handleChange}
                    required
                  ></input>
                </td>
              </tr>

              <tr>
                <td>
                  <lable>Mobile :</lable>
                </td>
                <td>
                  <input
                    type="tel"
                    name="mobile_no"
                    value={inputs.mobile_no || ""}
                    onChange={handleChange}
                    required
                  ></input>
                </td>
              </tr>

              <tr>
                <td>
                  <lable>Age :</lable>
                </td>
                <td>
                  <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>

              <tr>
                <td>
                  <lable>Gender :</lable>
                </td>
                <td>
                  <input
                    type="text"
                    name="gender"
                    value={inputs.gender || ""}
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <lable>Address :</lable>
                </td>
                <td>
                  <textarea
                    name="address"
                    style={{width:190, resize:'none'}}
                    value={inputs.address || ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <input type="submit" id="edit"></input> &nbsp;
                  <input type="button" id="delete" value="Cancel" style={{marginLeft:50}}></input>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </center>
    </>
  );
}

export default RegistrationForm;
