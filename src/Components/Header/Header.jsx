import React from 'react';
import styles from './Header.css'
import italian from '../../images/italian.png'
import polish from '../../images/polish.png'


const Header = () => {
  return (
  <div className='header-comp'>
    <h1>The Polish-Italian Cookbook</h1>
    <p>After many years of trying to convince our grandmothers to share their secret recipes, we finally succeeded. </p>
    {/* <h1>The Polish-Italian Cookbook</h1>

    <img scr={polish} height={400} width={400}></img> */}
  </div>
  );
};

export default Header;
