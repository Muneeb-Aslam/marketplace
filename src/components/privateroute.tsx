import { Outlet, Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useauthstatus";

const PrivateRoutes = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus)
    return (
      <div className="loadingSpinnerContainer">
        <div className="loadingSpinner"></div>
      </div>
    );
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
