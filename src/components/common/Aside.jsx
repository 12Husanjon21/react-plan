import LogoutButton from "../logout-button/LogoutButton";
import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const Aside = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <div className={`aside ${isLoginPage ? "hidden" : ""}`}>
        <div className="menu">
          <h2>Menu</h2>
          <IoMdMenu className="icon"/>
        </div>
        <div className="search">
          <IoSearch className="icon2"/>
          <input type="search" placeholder="Search..." />
        </div>
      <h3>Navs</h3>
        <nav>
          <ul>
            <li>
              <NavLink to='/' className='link'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/today' className='link'>Today</NavLink>
            </li>
          </ul>

        <h3>Lists</h3>
          <ul>
            <li className="linked">Work</li>
            <li className="linked">Personal</li>
            <li className="linked">Study</li>
            <li className="linked">About</li>
          </ul>

          <button style={{marginBottom: "3rem"}} className="flexBtn">
            <IoMdSettings />
            <h4>Settings</h4>
          </button>
          <LogoutButton>Log out</LogoutButton>
        </nav>

      </div>
  )
}

export default Aside;