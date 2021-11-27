import { Link } from "react-router-dom";

function Customer(props) {
  console.log(props);
  return (
    <div>
      <h4>{props.details.cust_name}</h4>

      <div>
        <button style={{ width: "200px" }}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={`/customerdetails/${props.details.id}`}
          >
            View Details
          </Link>
        </button>
      </div>
      <br></br>
    </div>
  );
}

export default Customer;
