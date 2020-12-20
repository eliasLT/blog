import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headr">
        <Link to="/">
          <h1>Sup De Vinci</h1>
        </Link>

        <nav>
          <ul>
            <li>
              <Link style={{ color: "#EC008C" }} to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link style={{ color: "#EC008C" }} to="/authors">
                Our Author
              </Link>
            </li>
            <li>
              <Link style={{ color: "#EC008C" }} to="/contactus">
                Contact us
              </Link>
            </li>
            <li>
              <Link style={{ color: "#EC008C" }} to="/mypost">
                My Post
              </Link>
            </li>
            <li>
              <Link style={{ color: "#EC008C" }} to="/newpost">
                New Post
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
