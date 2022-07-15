// Import React Dep.
import React from 'react';

// Import Style
import styles from './Header.module.scss';




const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__text}>Google Books</h1>
    </div>
  )
}
export default Header;