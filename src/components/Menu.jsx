import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <Link to={process.env.PUBLIC_URL + '/'}>home</Link>
            <Link to={process.env.PUBLIC_URL +'/about'}>about</Link>
        </div>
    )
  };
  export default Menu;