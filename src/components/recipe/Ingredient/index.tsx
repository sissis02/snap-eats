/* eslint-disable @next/next/no-img-element */
import { IIngredient } from 'types/recipe.types';
import styles from './ingredient.module.scss';

export default function Ingredient({ ingredient } : { ingredient: IIngredient }) {
  return (
    <article className={styles.container}>
      <div>
        <img src={ingredient.img} alt={ingredient.name} />
      </div>
      <p>{ingredient.name}</p>
    </article>
  );
}
