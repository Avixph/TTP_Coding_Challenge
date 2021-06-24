import { NavLink } from "react-router-dom";
import logo from "../../images/icons+logos/pinterest-icon.svg";
import bell from "../../images/icons+logos/bell-icon.svg";
import SearchBar from "../searchbar/SearchBar";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="" style={{ width: 24, color: "#d22d2f" }} />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to={"/today/"}>
              Today
            </NavLink>
          </li>
          <li>
            <SearchBar />
          </li>
          <li>bell</li>
          <li>messages</li>
          <li>user</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
