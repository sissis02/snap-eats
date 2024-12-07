export interface IRecipe {
  id: number,
  name: string,
  picture: string,
  duration: number,
  cooking_method: string,
  ingredients: IIngredient[],
  steps: Array<any>,
  categories?: string[],
}

export interface IIngredient {
  img: string,
  name: string,
}
