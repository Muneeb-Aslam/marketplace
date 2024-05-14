import { useState, } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import {
  updateDoc,
  doc,
} from 'firebase/firestore'
import db from '../config/firebase'
import { toast } from 'react-toastify'


const ProfileDetails: React.FC = () => {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // Update display name in fb
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // Update in firestore
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Could not update profile details");
    }
  };

  return (
    <main>
      <div className="profileDetailsHeader">
        <p className="profileDetailsText">Personal Details</p>
        <p
          className="changePersonalDetails"
          onClick={() => {
            changeDetails && onSubmit();
            setChangeDetails((prevState) => !prevState);
          }}
        >
          {changeDetails ? "done" : "change"}
        </p>
      </div>

      <div className="profileCard">
        <form>
          <input
            type="text"
            id="name"
            className={!changeDetails ? "profileName" : "profileNameActive"}
            disabled={!changeDetails}
            value={name}
            onChange={onChange}
          />
          <input
            type="email"
            id="email"
            className={!changeDetails ? "profileEmail" : "profileEmailActive"}
            disabled={!changeDetails}
            value={email}
            onChange={onChange}
          />
        </form>
      </div>
    </main>
  );
};

export default ProfileDetails;
