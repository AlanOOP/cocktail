import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createRecipeSlice, RecipeSliceType } from "./recipeSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

export type FavoriteSliceType = {
    favorites: Recipe[],
    addFavorite: (recipe: Recipe) => void
    isFavorite: (id: Recipe['idDrink']) => boolean,
    loadFromStorage: () => void
}


export const createFavoriteSlice: StateCreator<FavoriteSliceType & RecipeSliceType & NotificationSliceType, [], [], FavoriteSliceType> = (set, get, api) => ({
    favorites: [],
    addFavorite: (recipe) => {

        if (get().isFavorite(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: 'Se elimino de favoritos',
                error: false
            })
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: 'Se agrego a favoritos',
                error: false
            })
        }

        createRecipeSlice(set, get, api).closeModal();
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    isFavorite: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})


