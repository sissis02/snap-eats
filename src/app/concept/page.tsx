import type { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/concept/Card';
import { IConcept } from 'types/concept.types';
import styles from './concept.module.scss';

// Next.js will invalidate the cache when a
// request comes in, at most once every 60s.
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Concept - cuisine facile, rapide et abordable pour tous',
  description: 'Une cuisine simple, rapide et économiques. Des recettes faciles à préparer, avec des produits du quotidien, pour des repas accessibles. Cuisine maligne et saine',
};

export default async function Concept() {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    return null;
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/concepts`);
  const data = await res.json();
  return (
    <main className={styles.main}>
      <section className={styles.cardsContainer}>
        {data && data.map((concept: IConcept) => (
          <Card key={concept.id} concept={concept} />
        ))}
      </section>
      <aside>
        <Link href="/recipes"><button type="button">Testez les recettes</button></Link>
      </aside>
    </main>
  );
}
