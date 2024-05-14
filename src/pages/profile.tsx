/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, } from 'react-toastify'
import ProfileDetails from '../components/profileDetails';

export default function ProfilePage() {
  const auth = getAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type="button" className="logOut" onClick={onLogout}>
          Logout
        </button>
      </header>
      <ProfileDetails />
      <ToastContainer />
    </div>
  );
}
