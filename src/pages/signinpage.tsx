import { Link } from "react-router-dom";
import SiginForm from "../components/common/auth/siginform";
import { ToastContainer } from "react-toastify";
import OAuth from "../components/common/auth/OAuth";


const SigninPage:React.FC = () => {
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <SiginForm />
        <OAuth />
        <Link to="/register" className="registerLink">
          Sign Up Instead
        </Link>
        <ToastContainer />
      </div>
    </>
  );
};

export default SigninPage;
