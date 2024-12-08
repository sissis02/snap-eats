/* eslint-disable @next/next/no-img-element */

'use client';

// import type { Metadata } from 'next';
import { useEffect, useState } from 'react';
import styles from './gallery.module.scss';

export const dynamic = 'force-dynamic';

// export const metadata: Metadata = {
//   title: 'Galerie - photos des recettes de cuisine Snapeats',
//   description: 'Galerie : images et photos de recettes de cuisine gourmandes',
// };

export default function Gallery() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/recipes');
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <h5 className={styles.food}>Food</h5>
      {data && data.map((recipe: any) => (
        <img key={recipe.id} src={recipe.picture} alt={recipe.name} />
      ))}
      <h5 className={styles.tasty}>Tasty</h5>
    </main>
  );
}
