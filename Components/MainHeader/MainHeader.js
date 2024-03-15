// import library components
import Link from 'next/link';
import Image from 'next/image';

// import local styles and assets
import styles from './MainHeader.module.css';
import logeImg from '@/assets/logo.png';

// import local components
import MainHeaderBackground from './MainHeaderBackground';
import NavLink from './NavLink';

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href='/' className={styles.logo}>
          <Image src={logeImg} alt='A plate with food on it' priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
