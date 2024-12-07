import Link from 'next/link';
import styles from './notFound.module.scss';
 
export default function NotFound() {
  return (
    <main className={styles.main}>
      <section>
        <h5>404</h5>
      </section>
      <hr />
      <section>
        <h2>Oups, il y a eu un problème !</h2>
        <h3>La page demandée n'a pas été trouvée.</h3>
        <Link href="/"><button>Page d'accueil</button></Link>
      </section>
    </main>
  )
}