import React from 'react';
import styles from './NavButton.module.scss'

const NavButton = ({children}) => {
  return (
  <div className={styles.navButton}>
      <p className={styles.navButton__text}>{children}</p>
  </div>
  )
};

export default NavButton;
