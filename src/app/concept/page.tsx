'use client';

// import type { Metadata } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '@/components/concept/Card';
import { IConcept } from 'types/concept.types';
import styles from './concept.module.scss';

// export const metadata: Metadata = {
//   title: 'Concept - cuisine facile, rapide et abordable pour tous',
//   description: 'Une cuisine simple, rapide et économiques. Des recettes faciles
// à préparer, avec des produits du quotidien, pour des repas accessibles.
// Cuisine maligne et saine',
// };

export default function Concept() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/concepts');
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

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
