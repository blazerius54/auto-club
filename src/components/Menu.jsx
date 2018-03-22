import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <Link to='/'>home</Link>
            <Link to='/about'>about</Link>
        </div>
    )
  };
  export default Menu;