import { IRecipe, IIngredient } from "./recipe.types"

export interface INavProps {
  mobileMenu: boolean,
  handleDisplayMobileMenu: () => void,
}

export interface IPagination {
  items: number,
  currentPage: number,
  pageSize: number,
  onPageChange: (page: number) => void,
}

export interface ILastRecipe {
  id: number,
  name: string,
  picture: string,
  duration: number,
  ingredients: IIngredient[],
}

export interface IPopularRecipe {
  id: number,
  name: string,
  picture: string,
  duration: number,
}
