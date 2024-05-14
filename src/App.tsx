import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import { ROUTES } from "./constants/routes";
import SigninPage from "./pages/signinpage";
import RegisterPage from "./pages/registerpage";
import "react-toastify/dist/ReactToastify.css";
import ProfilePage from "./pages/profile";
import PrivateRoutes from "./components/privateroute";
import ForgotPassword from "./pages/forget";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.login} element={<SigninPage />} />
        <Route path={ROUTES.register} element={<RegisterPage />} />
        <Route path={ROUTES.forget} element={<ForgotPassword />} />
        <Route element={<PrivateRoutes />}>
          <Route path={ROUTES.profile} element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
