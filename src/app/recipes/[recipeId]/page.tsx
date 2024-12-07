/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Ingredient from '@/components/recipe/Ingredient';
import Step from '@/components/recipe/Step';
import { IIngredient, IRecipe } from 'types/recipe.types';
import styles from './recipe.module.scss';

export default function Recipe() {
  const [data, setData] = useState([]);
  const params = useParams();
  const [recipe, setRecipe] = useState<undefined | IRecipe>(undefined);

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const fetchData = async () => {
      const res = await fetch(`${baseUrl}/api/recipes`);
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setRecipe(data.find((element: any) => element.id === Number(params.recipeId)));
  }, [data, params.recipeId, recipe]);

  const [ingredientsDisplay, setIngredientsDisplay] = useState<boolean>(false);
  const [stepsDisplay, setStepsDisplay] = useState<boolean>(false);

  const handleIngredientsDisplay = () => {
    setIngredientsDisplay((current) => !current);
  };

  const handleStepsDisplay = () => {
    setStepsDisplay((current) => !current);
  };

  return (
    <main className={styles.main}>
      <header>
        <h2>{recipe?.name}</h2>
      </header>
      <section className={styles.content}>
        <article className={styles.ingredientsLaptop}>
          {recipe && recipe.ingredients?.map((ingredient : IIngredient) => (
            <Ingredient key={ingredient.name} ingredient={ingredient} />
          ))}
        </article>
        <article className={styles.presentation}>
          <img src={recipe?.picture} alt={recipe?.name} />
        </article>
        <article className={styles.stepsLaptop}>
          {recipe && recipe.steps && recipe.steps.map((step : Array<number | string>) => (
            <Step key={step[0]} step={step} />
          ))}
        </article>
      </section>
      <section className={styles.dropedContent}>
        {!ingredientsDisplay && <button type="button" onClick={handleIngredientsDisplay}>+ ingrédients</button>}
        {ingredientsDisplay
        && (
        <div className={styles.ingredients} onClick={handleIngredientsDisplay} aria-hidden="true">
          <h3>Ingrédients</h3>
          <div>
            {recipe && recipe.ingredients && recipe.ingredients.map((ingredient : IIngredient) => (
              <Ingredient key={ingredient.name} ingredient={ingredient} />
            ))}
          </div>
        </div>
        )}
        {!stepsDisplay && <button type="button" onClick={handleStepsDisplay}>+ Étapes de la recette</button>}
        {stepsDisplay
        && (
        <div className={styles.steps} onClick={handleStepsDisplay} aria-hidden="true">
          <h3>Étapes de la recette</h3>
          <div>
            {recipe && recipe.steps && recipe.steps.map((step : Array<number | string>) => (
              <Step key={step[0]} step={step} />
            ))}
          </div>
        </div>
        )}
      </section>
      <aside className={styles.returnBtn}>
        <Link href="/recipes"><button type="button">Retour aux recettes</button></Link>
      </aside>
    </main>
  );
}
