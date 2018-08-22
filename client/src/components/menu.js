import React from 'react';
import { Link } from 'react-router-dom';

const styles = {margin: '5px'}

const Menu = () =>
  <div className="text-xs-right">
    <Link className="btn btn-primary" style={styles} to="/">
      Home
    </Link>
    <Link className="btn btn-primary" style={styles} to="/reviews/new">
      Add a Review
    </Link>
    <Link className="btn btn-primary" style={styles} to="/about">
      About
    </Link>
  </div>

export default Menu;
