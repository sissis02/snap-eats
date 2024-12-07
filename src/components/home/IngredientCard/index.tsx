import styles from './ingredientCard.module.scss';
import { IIngredient } from 'types/recipe.types';

export default function IngredientCard({ingredient}: {ingredient: IIngredient}) {
  return (
    <article className={styles.container}>
      <div>
        <img src={ingredient.img} alt="icône de l'ingrédient" />
      </div>
      <p>{ingredient.name}</p>
    </article>
  );
}
