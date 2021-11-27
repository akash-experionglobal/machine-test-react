import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginForm from './Login';
import RegistrationForm from './Registration';
import VisitCustomer from './CustomerList';
import CustomerDetails from './CustomerDetails';
import CustomerDelete from './CustomerDelete';
import CustomerEdit from './CustomerEdit';



function App() {
  return <MyRouter />;
}

function MyRouter() {
  return (
    <Router>
      <Link to="/"></Link>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/visitcustomerdetails" element={<VisitCustomer />} />
        <Route path="/customerdetails/:id" element={<CustomerDetails/>}/>
        <Route path="/customerdelete/:id" element={<CustomerDelete/>}/>
        <Route path="/customeredit/:id" element={<CustomerEdit/>}/>
      </Routes>
    </Router>
  );
}

export default App;
