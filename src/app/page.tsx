import type { Metadata } from 'next';
import LastRecipeContainer from '@/components/home/LastRecipeContainer';
import PopularRecipesContainer from '@/components/home/PopularRecipeContainer';
import TypeCardsContainer from '@/components/home/TypeCardsContainer';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Accueil - Présentation du site de recettes de cuisine Snapeats',
  description: 'Site de recettes de cuisine : la nouvelle recette, les dernières recettes les plus populaires du moment et les types de plats à découvrir, apprendre et déguster',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h2>Des recettes délicieusement simples pour libérer le chef qui est en vous&nbsp;!</h2>
        <p>
          Rapides, savoureuses et abordables - Découvrez vos nouvelles
          recettes de tous les jours avec SnapEats.
        </p>
      </header>
      <LastRecipeContainer />
      <PopularRecipesContainer />
      <TypeCardsContainer />
    </main>
  );
}
