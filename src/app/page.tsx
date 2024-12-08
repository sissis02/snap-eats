/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import LastRecipeContainer from '@/components/home/LastRecipeContainer';
import PopularRecipesContainer from '@/components/home/PopularRecipeContainer';
import TypeCardsContainer from '@/components/home/TypeCardsContainer';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Snapeats - Site de recettes de cuisine',
  description: 'Une cuisine simple, rapide et économiques.',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h2>Des recettes délicieusement simples pour libérer le chef qui est en vous&nbsp;!</h2>
        <p>
          Bienvenue sur Snapeats 😊
        </p>
        <br />
        <p>
          À la recherche de préparations culinaires rapides, savoureuses et abordables ?
        </p>
        <br />
        <p>
          La cuisine accessible, maligne et saine c'est par ici 🙃
        </p>
        <br />
        <p>
          Le concept : vous aider à trouver des plats et cuisiner en un rien de temps grâce
          à des recettes faciles à préparer et avec des produits du quotidien.
        </p>
      </header>
      <LastRecipeContainer />
      <PopularRecipesContainer />
      <TypeCardsContainer />
    </main>
  );
}
