import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
  <header className={styles.header}>
    <div className="headd">
      <h1>Math Magicians</h1>
      <nav>
        <ul className="ullinks">
          <Link to="/">Home </Link>
          <Link to="/calculator"> Calculator </Link>
          <Link to="/quote">Quote</Link>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
