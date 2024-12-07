/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { MouseEventHandler } from 'react';
import { IRecipe } from 'types/recipe.types';
import styles from './card.module.scss';
import timeIcon from '../../../../public/icons/time_icon.svg';

export default function Card({ recipe, onClick }:
{ recipe : IRecipe, onClick: MouseEventHandler }) {
  return (
    <article
      className={styles.container}
      onClick={onClick}
      aria-hidden="true"
    >
      <img src={recipe.picture} alt={recipe.name} />
      <div className={styles.texts}>
        <h6>{recipe.name}</h6>
        <hr />
        <div className={styles.time}>
          <Image src={timeIcon} alt="icône horloge noir" />
          <p>
            {recipe.duration}
            min
          </p>
          <img src={recipe.cooking_method} alt={recipe.name} />
        </div>
      </div>
    </article>
  );
}
