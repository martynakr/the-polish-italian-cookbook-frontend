import React from 'react';
import NavButton from '../../Components/NavButton';
import Header from '../../Components/Header';
import styles from './Nav.css'

const Nav = () => {
  return (
  <div className='nav'>
    {/* <Header/> */}
    <NavButton className="navButton" >See Recipes</NavButton>
    <NavButton className="navButton" >Add Recipes</NavButton>
  </div>);
};

export default Nav;
