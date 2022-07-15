// Import React Dep.
import React from 'react';

// Import Style
import styles from './Logo.module.scss';

import Icon from '../../utils/image/LogoImage.svg';


const Logo = () => {
  return (
    <div className={styles.container}>
      <img className={styles.container__icon} src={Icon}  alt='logo' />
    </div>
  )
}
export default Logo;