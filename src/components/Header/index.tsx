import React from 'react';

import styles from './styles.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.svg'

const Header: React.FC = () => {
  return(
    <header className={styles.headerContainer}>
        <Image alt='Objective logo' src={Logo} className='logo' width={96} height={24}/>

        <div className={styles.profile}>
          <div className={styles.info}>
              <p className='sans-caption-bold'>Yuri Lombardi Androulis</p>
              <p className='sans-caption'>Teste de Front-end</p>
          </div>

          <div className={styles.avatar}>
              <p className='sans-caption-bold'>YA</p>
          </div>
        </div>
    </header>
  );
}

export default Header;