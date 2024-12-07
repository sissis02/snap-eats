import Link from 'next/link';
import Image from 'next/image';
import { INavProps } from 'types';
import styles from './navbar.module.scss';
import menuIcon from '../../../public/icons/menu_icon.svg';
import closeIcon from '../../../public/icons/close_icon.svg';

export default function Navbar({ mobileMenu, handleDisplayMobileMenu } : INavProps) {
  return (
    <>
      <header className={styles.container}>
        <Link href="/">
          <h1>
            Snap
            <em>Eats</em>
            .
          </h1>
          <small>Made with 🦥</small>
        </Link>
        <Image src={menuIcon} alt="icône de menu" onClick={handleDisplayMobileMenu} />
        <nav className={styles.laptopNav}>
          <Link href="/"><p>Accueil</p></Link>
          <Link href="/concept"><p>Concept</p></Link>
          <Link href="/recipes"><p>Recettes</p></Link>
          <Link href="/gallery"><p>Galerie</p></Link>
        </nav>
      </header>
      {mobileMenu
      && (
      <nav className={mobileMenu ? `${styles.mobileNav}` : `${styles.invisible}`}>
        <Image src={closeIcon} alt="icône croix" onClick={handleDisplayMobileMenu} />
        <Link href="/" onClick={handleDisplayMobileMenu}><p>Accueil</p></Link>
        <Link href="/concept" onClick={handleDisplayMobileMenu}><p>Concept</p></Link>
        <Link href="/recipes" onClick={handleDisplayMobileMenu}><p>Recettes</p></Link>
        <Link href="/gallery" onClick={handleDisplayMobileMenu}><p>Galerie</p></Link>
      </nav>
      )}
    </>
  );
}
