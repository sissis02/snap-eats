/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import styles from './gallery.module.scss';

// Next.js will invalidate the cache when a
// request comes in, at most once every 60s.
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Galerie - photos des recettes de cuisine Snapeats',
  description: 'Galerie : images et photos de recettes de cuisine gourmandes',
};

export default async function Gallery() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/recipes`);
  const data = await res.json();

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
