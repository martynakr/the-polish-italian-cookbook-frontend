import React from 'react';
import NavButton from '../../Components/NavButton';
import styles from './Nav.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
  <div className='nav'>
    {/* <Header/> */}
    <NavLink to="/recipes">
      <NavButton className="navButton">See Recipes</NavButton>
    </NavLink>
    <NavLink to="/add-recipe">
      <NavButton className="navButton">Add Recipe</NavButton>
    </NavLink>
  </div>);
};

export default Nav;
