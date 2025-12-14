import React from "react";
import { NavLink } from "react-router-dom";
import "../style/components/_header.scss";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/userlist">Userlist</NavLink>
          </li>
        </ul>
      </nav>
      <h1>React Movie</h1>
    </div>
  );
};

export default Header;
