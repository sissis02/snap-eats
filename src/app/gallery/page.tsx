/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import styles from './gallery.module.scss';

export const dynamic = 'force-dynamic';

// Next.js will invalidate the cache when a
// request comes in, at most once every 60s.
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Galerie - photos des recettes de cuisine Snapeats',
  description: 'Galerie : images et photos de recettes de cuisine gourmandes',
};

export default async function Gallery() {
  // if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
  //   return null;
  // }
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recipes`);
  // if (res.ok) {
  //   throw new Error('Error while getting lists of recipes');
  // }
  // const data = await res.json();
  let data = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/recipes`);
    if (!res.ok) throw new Error('Failed to fetch data');
    data = await res.json();
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
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
