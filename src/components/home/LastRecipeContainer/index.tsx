/* eslint-disable @next/next/no-img-element */

'use client';

import { useRouter } from 'next/navigation';
import { IIngredient } from 'types/recipe.types';
import IngredientCard from '../IngredientCard';
import styles from './lastRecipe.module.scss';

const lastRecipe = {
  id: 41,
  name: 'Salade de crevettes et poivron',
  picture: '/pictures/salade-crevettes-poivron.jpg',
  duration: 15,
  ingredients: [
    {
      img: '/ingredients/salade.svg',
      name: 'Salade',
    },
    {
      img: '/ingredients/crevette.svg',
      name: 'Crevettes',
    },
    {
      img: '/ingredients/poivron.svg',
      name: '1 poivron',
    },
    {
      img: '/ingredients/menthe.png',
      name: 'Menthe',
    },
  ],
};

export default function LastRecipeContainer() {
  const router = useRouter();
  return (
    <section className={styles.container}>
      <article className={styles.imgContainer}>
        <img src={lastRecipe.picture} alt={lastRecipe.name} />
        <img src="/sticker.png" alt="cookie" />
      </article>
      <article className={styles.ingredientsContainer}>
        <div className={styles.top}>
          <h4>{lastRecipe.name}</h4>
          <div className={styles.time}>
            <img src="/icons/time_icon.svg" alt="icône horloge noir" />
            <p>
              {lastRecipe.duration}
              {' '}
              min
            </p>
          </div>
        </div>
        <div className={styles.ingredients}>
          {lastRecipe.ingredients.map((Ingredient: IIngredient) => (
            <IngredientCard key={Ingredient.name} ingredient={Ingredient} />
          ))}
        </div>
        <button type="button" onClick={() => router.push(`/recipes/${lastRecipe.id}`)}>Découvrez la recette</button>
      </article>
    </section>
  );
}
