/* eslint-disable @next/next/no-img-element */
import { MouseEventHandler } from 'react';
import Image from 'next/image';
import { IPopularRecipe } from 'types';
import styles from './popularRecipeCard.module.scss';
import timeIcon from '../../../../public/icons/time_icon.svg';

export default function PopularRecipeCard({ recipe, onClick }
: { recipe : IPopularRecipe, onClick: MouseEventHandler }) {
  return (
    <article className={styles.container} onClick={onClick} aria-hidden="true">
      <img src={recipe.picture} alt={recipe.name} />
      <h5>{recipe.name}</h5>
      <div className={styles.time}>
        <Image src={timeIcon} alt="icône horloge noir" />
        <p>
          {recipe.duration}
          {' '}
          min
        </p>
      </div>
    </article>
  );
}
