import styles from './styles.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseO } from 'react-icons/cg';

export default function Navbar() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(() => {
      setActive(!active);
    });
  };
  return (
    <div className={styles.navContainer}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a>
            <h2>The KY Journal</h2>
          </a>
        </Link>
        {!active ? (
          <button onClick={handleClick} className={styles.mobileMenuBtn}>
            <GiHamburgerMenu />
          </button>
        ) : (
          <button onClick={handleClick} className={styles.mobileMenuBtn}>
            <CgCloseO />
          </button>
        )}
        <div
          className={
            active
              ? styles.mobileNavbarOptions + ' ' + styles.active
              : styles.navbarOptions
          }
        >
          <div className={styles.navMenu}>
            <Link href='/about'>
              <a>
                <li>About</li>
              </a>
            </Link>

            <Link href='/login'>
              <a>
                <li>Login</li>
              </a>
            </Link>
            <Link href='/signin'>
              <a>
                <li>Sign In</li>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
