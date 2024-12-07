import { IRecipe } from "@/types/recipe.types";

export default function paginate (items: IRecipe[], pageNumber: number, pageSize : number) {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
 };