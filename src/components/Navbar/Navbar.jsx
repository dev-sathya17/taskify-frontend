import "./Navbar.css";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const Navbar = ({ role }) => {
  const [view, setView] = useState(false);

  const handleToggle = () => setView(!view);
  return (
    <>
      <nav className="navbar">
        <Header />
        {!view && (
          <RxHamburgerMenu className="hamburger-icon" onClick={handleToggle} />
        )}
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink
              to={`/${role}/dashboard`}
              // exact
              className="nav-link"
              // activeClassName="active-link"
            >
              Home
            </NavLink>
          </li>
          {role === "admin" ? (
            <li className="nav-item">
              <NavLink
                to={`/admin/users`}
                // exact
                className="nav-link"
                // activeClassName="active-link"
              >
                Users
              </NavLink>
            </li>
          ) : (
            <></>
          )}
          <li className="nav-item">
            <NavLink
              to={`/${role}/tasks`}
              // exact
              className="nav-link"
              // activeClassName="active-link"
            >
              Tasks
            </NavLink>
          </li>
        </ul>
        <div className="nav-footer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png"
            alt="profile picture"
            className="nav-profile"
          />
          <button className="nav-logout-btn">Logout</button>
        </div>
      </nav>
      {view && (
        <div className="nav-mob">
          <div className="nav-mob-header">
            <Header />
            <RxCross2 className="hamburger-icon" onClick={handleToggle} />
          </div>
          <ul className="nav-body-mob">
            <li className="nav-item">
              <NavLink className="nav-link" to={`/${role}/dashboard`}>
                Home
              </NavLink>
            </li>
            {role === "admin" ? (
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/users">
                  Users
                </NavLink>
              </li>
            ) : (
              <></>
            )}
            <li className="nav-item">
              <NavLink className="nav-link" to={`/${role}/tasks`}>
                Tasks
              </NavLink>
            </li>
          </ul>
          <div className="nav-footer-mob">
            <button className="nav-logout-btn">LOGOUT</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
