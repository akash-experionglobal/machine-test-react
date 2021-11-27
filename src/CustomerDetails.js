import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

import Header from "./Header LogOut";

function CustomerDetails() {
  const [customer, setcustomer] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("use effect hook executed");

    axios.get(`http://localhost:3002/customer/${id}`).then((response) => {
      console.log("promise fulfilled");
      console.log(response);
      setcustomer(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1 style={{ textAlign: "center" }}>Customer Details</h1>

        <p style={{ marginLeft: 550, fontSize: 18 }}>
          Customer Name: {customer.cust_name}
        </p>
        <p style={{ marginLeft: 550, fontSize: 18 }}>
          Contact Person: {customer.contact_person}
        </p>
        <p style={{ marginLeft: 550, fontSize: 18 }}>
          Contact Number : {customer.contact_number}
        </p>
        <p style={{ marginLeft: 550, fontSize: 18 }}>
          InterestProduct : {customer.interest_product}
        </p>
        <p style={{ marginLeft: 550, fontSize: 18 }}>
          VisitSubject : {customer.visit_subject}
        </p>
        <p style={{ marginLeft: 550, fontSize: 18 }}>
          Description : {customer.description}
        </p>
        <p style={{ marginLeft: 550, fontSize: 18 }}>
          VisitDatetime : {customer.visit_datetime}
        </p>
        <p style={{ marginLeft: 550, fontSize: 18 }}>
          Is-Disabled : {customer.is_disabled}
        </p>
        <p style={{ marginLeft: 550, fontSize: 18 }}>
          Is-Deleted : {customer.is_deleted}
        </p>
        <p style={{ marginLeft: 550, fontSize: 18 }}>
          EmpId : {customer.emp_id}
        </p>
      </div>
      <Button variant="primary" style={{ marginLeft: 550 }}>
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="/visitcustomerdetails"
        >
          Go back
        </a>
      </Button>

      <Button 
        variant="warning"
        style={{ marginLeft: 5 }}
        type="button"
        onClick={() => navigate(`/customeredit/${customer.id}`)}
      >
        Edit
      </Button>
      <Button
        variant="danger"
        style={{ marginLeft: 5 }}
        type="button"
        onClick={() => Deletecustomer(customer.id)}
      >
        Delete
      </Button>
    </>
  );
}

function Deletecustomer(id) {
  axios.delete(`http://localhost:3002/customer/${id}`).then((response) => {
    console.log("promise fulfilled");
    console.log(response);
  });
  window.location = "/visitcustomerdetails";
}
export default CustomerDetails;
