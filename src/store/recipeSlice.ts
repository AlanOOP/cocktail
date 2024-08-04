import { StateCreator } from "zustand"
import { fetchCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import { Category, DrinkAPIResponse, Recipe, SearchFilter } from "../types";
import { FavoriteSliceType } from "./favoriteSlice";

export type RecipeSliceType = {
    categories: Category[],
    drinks: DrinkAPIResponse[],
    recipe: Recipe,
    favorites?: Recipe[],
    modal: boolean,
    fetchCategories: () => Promise<Category | void>
    searchRecipes: (searchFilter: SearchFilter) => Promise<void>,
    selectRecipe: (id: DrinkAPIResponse['idDrink']) => Promise<void>,
    closeModal: () => void
}

export const createRecipeSlice: StateCreator<RecipeSliceType & FavoriteSliceType, [], [], RecipeSliceType> = (set) => ({
    categories: [],
    drinks: [],
    recipe: {} as Recipe,
    modal: false,
    fetchCategories: async () => {
        const categories = await fetchCategories()
        set(() => ({
            categories: categories
        }))
    },
    searchRecipes: async (searchFilter) => {
        const drinks = await getRecipes(searchFilter);
        set(() => ({
            drinks: drinks
        }))
    },
    selectRecipe: async (id) => {
        const recipe = await getRecipeById(id)
        set(() => ({
            recipe,
            modal: true
        }))
    },
    closeModal: () => {
        set({
            modal: false,
            recipe: {} as Recipe
        })
    }
})