'use client';
import { usePathname } from 'next/navigation';

// import library components
import Link from 'next/link';

// import styles and assets
import styles from './NavLink.module.css';

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
