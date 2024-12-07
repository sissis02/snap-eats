'use client';

import { useRouter } from 'next/navigation';
import { IPopularRecipe } from 'types';
import PopularRecipeCard from '../PopularRecipeCard';
import styles from './popularRecipesContainer.module.scss';

const popularRecipes = [
  {
    id: 27,
    name: 'Hamburger au jambon de pays',
    picture: '/pictures/hamburger-boeuf-jambonpays.jpg',
    duration: 20,
  },
  {
    id: 45,
    name: 'Tartines oeufs pochés tomate',
    picture: '/pictures/tartines-oeufpoche-tomate.jpg',
    duration: 10,
  },
  {
    id: 12,
    name: 'Tagliatelles au parmesan',
    picture: '/pictures/pates-parmesan.jpg',
    duration: 20,
  },
];

export default function PopularRecipesContainer() {
  const router = useRouter();

  return (
    <section className={styles.container}>
      <h3>Les 3 recettes les plus populaires</h3>
      <div className={styles.cardsContainer}>
        {popularRecipes.map((recipe: IPopularRecipe) => (
          <PopularRecipeCard
            key={recipe.id}
            recipe={recipe}
            onClick={() => router.push(`/recipes/${recipe.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
