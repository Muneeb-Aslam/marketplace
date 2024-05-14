import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SigUpForm from "../components/common/auth/registerform";

const RegisterPage:React.FC = () => {
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <SigUpForm />
        <Link to="/login" className="registerLink">
          Sign In Instead
        </Link>
        <ToastContainer />
      </div>
    </>
  );
};

export default RegisterPage;
