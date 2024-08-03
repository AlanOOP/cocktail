import { z } from "zod";
import { CategoryResponseSchema, CategorySchema, DrinkAPIResponseSchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema, SearchFilterSchema } from "../schemas/recipe-schema";

export type Category = z.infer<typeof CategorySchema>
export type CategoryResponse = z.infer<typeof CategoryResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type DrinkAPIResponse = z.infer<typeof DrinkAPIResponseSchema>
export type DrinksAPIResponse = z.infer<typeof DrinksAPIResponseSchema>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>