import React from 'react';
import styles from './Header.module.scss'
import italian from '../../images/italian.png'
import polish from '../../images/polish.png'
import Nav from '../../Containers/Nav';

const Header = () => {
  return ( 
    <div className={styles.headerComp}>
      <div className={styles.header}>
          <div className={styles.polishBg}>
            <img src={polish} height={300}></img>
          </div>
          <div className={styles.italianBg}>
            <img src={italian} height={300}></img>
          </div>
        </div>
        <div className={styles.headerBg}>
          <h1>The Polish-Italian Cookbook</h1>
          <p>After many years of trying to convince our grandmothers to share their secret recipes, we finally succeeded. </p>
          <Nav/>
        </div>
    </div>
  );
};

export default Header;
