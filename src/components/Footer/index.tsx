import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <p>Copyright © 2024 Snapeats - Tous droits réservés.</p>
      <p><a href="mailto:sissis1993@gmail.com">Contact</a></p>
      <Link href="/legalNotices"><p>Mentions légales</p></Link>
    </footer>
  );
}
