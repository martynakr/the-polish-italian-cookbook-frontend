import React from 'react';
import styles from './NavButton.css'

const NavButton = ({children}) => {
  return (
  <div className='nav-button'>
      <a>{children}</a>
  </div>
  )
};

export default NavButton;
