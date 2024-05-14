import { useNavigate, useLocation } from "react-router-dom";
import OfferIcon from "../../assets/svg/localOfferIcon.svg";
import ExploreIcon from "../../assets/svg/exploreIcon.svg";
import PersonOutlineIcon from "../../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <img src={ExploreIcon} alt="" width="36px" height="36px" />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <img src={OfferIcon} alt="" width="36px" height="36px" />
            <p
              className={
                pathMatchRoute("/offer")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <img src={PersonOutlineIcon} alt="" width="36px" height="36px" />
            <p
              className={
                pathMatchRoute("/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
