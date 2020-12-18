import React from "react";
import { Link } from 'react-router-dom';
import styles from './Header.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headr}>
          <Link to="/">
               <h1>Sup De Vinci</h1>
          </Link>
        <nav>
          <ul>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/authors">Our Author</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
            <li>
              <Link to="/mypost">My Post</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
